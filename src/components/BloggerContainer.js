import React from 'react';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import PostListItem from './PostListItem';

const ListExampleMessages = ({ posts, currentPage, totalPages, renderPostDetail }) => (
  <div>
    <Paper>
      <List>
        <Subheader>Page {currentPage} of {totalPages}</Subheader>
        {posts.items.map((postSummary, index) => (
          <div key={postSummary.id}>
            <PostListItem post={postSummary} index={index} renderPostDetail={renderPostDetail} />
          </div>
          ))}
      </List>
    </Paper>
  </div>
);

export default ListExampleMessages;
