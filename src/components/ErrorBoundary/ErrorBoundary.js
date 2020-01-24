import React from 'react';
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h1 className={classes.error}>Что-то пошло не так!</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;