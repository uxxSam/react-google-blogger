import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class PostBody extends Component {

  componentDidMount() {
    if (window.Prism !== undefined) {
      window.Prism.highlightAll();
    }
  }

  componentDidUpdate() {
    if (window.Prism !== undefined) {
      window.Prism.highlightAll();
    }
  }

  render() {
    const style = {
      textAlign: 'left',
      padding: 25,
    };

    return (
      <div
        style={style}
        dangerouslySetInnerHTML={{__html: this.props.post.content}} />
    );
  }
}

export default PostBody;
