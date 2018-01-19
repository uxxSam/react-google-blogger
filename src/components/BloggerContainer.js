import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import PostListItem from './PostListItem';

class ListExampleMessages extends Component {

  render() {
    return (
      <div>
        <Paper>
          <List>
            <Subheader>Today</Subheader>
            {this.props.posts.items.map(postSummary =>
              <div key={postSummary.id}>
                <PostListItem post={postSummary} />
              </div>)}
          </List>
        </Paper>
      </div>
    );
  }
}

export default ListExampleMessages;
