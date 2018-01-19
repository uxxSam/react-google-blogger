import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlogApp from './BlogApp';
import reducers from '../reducers/index';

class ReactGoogleBlogger extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <BlogApp />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default ReactGoogleBlogger;
