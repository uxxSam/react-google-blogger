import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleLeft = {
  margin: 'auto',
  float: 'left'
};

const styleRight = {
  margin: 'auto',
  float: 'right'
};

const styleMiddle = {
  margin: 'auto'
};

const divStyle = {
  textAlign: 'center'
 };

class MenuBar extends Component {

  constructor() {
    super();
    this.state = { triggered: false };
  }

  render() {

    const { fetchNextPagePosts, fetchPrevPagePosts, nextPagetoken, prevPageToken, currentPage, loading } = this.props;

    return (
      <div style={divStyle}>
        <RaisedButton
          onClick={() => {
            fetchPrevPagePosts({
              blogId: '5735193246666010261',
              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
              token: prevPageToken[currentPage - 1]
            }
          );
          }}
          label="Previous"
          style={styleLeft}
          disabled={prevPageToken.length <= 1 || currentPage <= 0 || loading}
        />
        <RaisedButton label="Next" style={styleMiddle} />
        <RaisedButton
          onClick={() => {
            fetchNextPagePosts({
              blogId: '5735193246666010261',
              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
              token: nextPagetoken
            }
            );
          }}
          label="Next"
          style={styleRight}
          disabled={!nextPagetoken && currentPage >= prevPageToken.length - 1 || loading}
        />

      </div>
    );
  }
}

export default MenuBar;
