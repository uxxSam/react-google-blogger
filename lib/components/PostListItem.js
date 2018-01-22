import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';




const PostListItem = ({ post }) => {

  const imageUrl = `https:${post.author.image.url}`;

  const cleanBlogContent = post.content.replace(/(?:&nbsp;|<.+?>)/g, '');

  return (
    <div>
      <ListItem
        leftAvatar={<Avatar src={imageUrl} />}
        primaryText={post.title}
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>{post.author.displayName}</span> --
            {'\u00A0'}{cleanBlogContent}
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
    </div>
  );
};

export default PostListItem;
