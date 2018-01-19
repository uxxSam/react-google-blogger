import React from 'react';
import ReactDOM from 'react-dom';
import ReactGoogleBlogger from '../../lib/index';

class App extends React.Component {
  render() {
    return (
      <div className="example">
        <h1>react-google-blogger</h1>
        <ReactGoogleBlogger/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
