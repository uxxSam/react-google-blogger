import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlogApp from './BlogApp';
import reducers from '../reducers/index';

const ReactGoogleBlogger = ({ apiKey, blogId, postPerPage }) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <BlogApp apiKey={apiKey} blogId={blogId} postPerPage={postPerPage} />
      </MuiThemeProvider>
    </Provider>
  );
};

export default ReactGoogleBlogger;
