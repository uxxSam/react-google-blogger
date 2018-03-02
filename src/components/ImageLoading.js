import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';
import PropTypes from 'prop-types';

class ImageLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      loadedPreview: false,
      loadedSrc: false,
      srcLoadStarted: false,
      srcLoadingProgress: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const isVisible = this.isComponentInViewport();
    if (!isVisible) {
      window.addEventListener('scroll', this.handleScroll);
    }
    // only listen to the ones not in viewport to avoid load image multiple times
    this.fetchPreview(isVisible);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchPreview(isVisible) {
    const { preview } = this.props;

    axios.get(preview, { responseType: 'arraybuffer' }).then((response) => {
      const base64Preview = btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '',),);
      this.setState({source: `data:;base64,${base64Preview}`, loadedPreview: true});
    }).then(() => {
      if (isVisible) this.fetchSrc();
      // continue to fetch full-size image if in viewport
    });
  }

  fetchSrc() {
    const { src } = this.props;
    const config = {
      responseType: 'arraybuffer',
      onDownloadProgress: (progressEvent) => {
        const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
        this.setState({ srcLoadingProgress: percentCompleted });
      },
    };

    this.setState({ srcLoadStarted: true });

    axios.get(src, config).then((response) => {
      const base64Src = btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '',),);
      this.setState({ source: `data:;base64,${base64Src}`, loadedSrc: true });
    });
  }

  isComponentInViewport() {
    if (this.targetDiv) {
      const rect = this.targetDiv.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return false;
  }

  handleScroll() {
    if (this.isComponentInViewport()) {
      window.removeEventListener('scroll', this.handleScroll);
      // remove listener immediately to avoid repetitive call to handleScroll()
      this.fetchSrc();
    }
  }

  renderProgressBar() {
    const { loadedSrc, srcLoadStarted } = this.state;

    const spinnerStyle = {
      margin: 'auto',
      alignSelf: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    return (loadedSrc || !srcLoadStarted) ? null :
      <MuiThemeProvider>
        <CircularProgress
          mode="determinate"
          value={this.state.srcLoadingProgress}
          size={80}
          thickness={5}
          color={'white'}
          style={spinnerStyle}
        />
      </MuiThemeProvider>;
    // display spinner only during loading process
  }

  renderImage() {
    const { loadedSrc, source, src } = this.state;

    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: loadedSrc ? '' : 'blur(15px)',
      transition: 'all 0.4s ease-in-out',
    };

    const placeHolderStyle = {
      backgroundColor: '#eee',
      display: 'flex',
      height: '100%',
      width: '100%',
    };

    return this.state.loadedPreview ?
      <img src={source} style={imageStyle} alt={src} /> :
      <div style={placeHolderStyle} />; // prevents showing 'broken image icon' in poor connection
  }

  render() {
    const divStyle = {
      height: 300,
      width: 600,
      margin: 32,
      position: 'relative',
    };

    return (
      <div style={divStyle} ref={(targetDiv) => { this.targetDiv = targetDiv; }}>
        {this.renderImage()}
        {this.renderProgressBar()}
      </div>
    );
  }
}

ImageLoading.propTypes = {
  preview: PropTypes.string,
  src: PropTypes.string,
}

export default ImageLoading;
