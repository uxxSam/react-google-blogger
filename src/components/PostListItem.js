import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const PostListItem = ({ post, renderPostDetail, index }) => {
  const imageUrl = `https:${post.author.image.url}`;
  const cleanBlogContent = post.content.replace(/(?:&nbsp;|<.+?>)/g, '').substring(0, 450);

  const divStyle = {
    textAlign: 'left',
  };

  const pStyle = {
    height: 74,
  };

  const spanStyle = {
    display: 'inline-block',
    paddingTop: 2,
  };

  const primaryTextDivStyle = {
    fontWeight: 'bold',
    fontSize: 'large',
  };

  const iconButtonElement = (
    <IconButton
      touch
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

  return (
    <div style={divStyle}>
      <ListItem
        onClick={() => renderPostDetail({ index })}
        leftAvatar={<Avatar src={imageUrl} />}
        rightIconButton={rightIconMenu}
        primaryText={
          <div style={primaryTextDivStyle}>
            {post.title}
          </div>
        }
        secondaryText={
          <p style={pStyle}>
            <span style={{ color: darkBlack }}>
              By {post.author.displayName}, {post.published.substring(0, 10)}
            </span>
            <br />
            <span style={spanStyle}>
              {cleanBlogContent}
            </span>
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
    </div>
  );
};

export default PostListItem;
