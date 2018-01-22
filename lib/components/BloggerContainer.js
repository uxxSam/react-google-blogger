import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import PostListItem from './PostListItem';

class ListExampleMessages extends Component {

  render() {
    return(
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
