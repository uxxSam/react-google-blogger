import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const divStyle = {
  textAlign: 'center',
  verticalAlign: 'middle'
 };

const spinnerStyle = {
  margin: 'auto',
  verticalAlign: 'middle'
};

const LoadingSpinner = () => {
  return (
  <div style={divStyle}>
    <CircularProgress style={spinnerStyle} size={100} thickness={5} />
  </div>
);
};

export default LoadingSpinner;
