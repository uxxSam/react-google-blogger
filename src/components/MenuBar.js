import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const styleLeft = {
  margin: 'auto',
  float: 'left',
};

const styleRight = {
  margin: 'auto',
  float: 'right',
};

const styleMiddle = {
  margin: 'auto',
};

const divStyle = {
  textAlign: 'center',
  padding: 20,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const MenuBar = ({
  fetchPosts,
  fetchNextPagePosts,
  fetchPrevPagePosts,
  pageTokenStoreArray,
  currentPage,
  loading,
  apiKey,
  blogId,
  postPerPage,
}) => (
  <div style={divStyle}>
    <RaisedButton
      onClick={() => {
        if (currentPage === 1) {
          fetchPosts({ apiKey, blogId, postPerPage });
        } else {
          fetchPrevPagePosts({
            apiKey,
            blogId,
            token: pageTokenStoreArray[currentPage - 2],
            postPerPage,
          });
        }
      }}
      label="Previous"
      style={styleLeft}
      disabled={pageTokenStoreArray.length === 0 || currentPage <= 0 || loading}
    />
    <RaisedButton
      onClick={() => fetchPosts({ apiKey, blogId, postPerPage })}
      icon={<HomeIcon />}
      style={styleMiddle}
    />
    <RaisedButton
      onClick={() =>
        fetchNextPagePosts({
          apiKey,
          blogId,
          token: pageTokenStoreArray[currentPage],
          postPerPage,
        })
      }
      label="Next"
      style={styleRight}
      disabled={currentPage >= pageTokenStoreArray.length || loading}
    />
  </div>
);

export default MenuBar;
