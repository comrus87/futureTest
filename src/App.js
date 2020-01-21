import React from 'react';
import classes from './App.module.css';
import {connect} from 'react-redux';
import {getSmallData, getBigData} from './redux/dataReducer';
import Table from './components/Table/Table';
import Select from './components/Select/Select';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  state = {
    renderMode: 'small'
  }

  onSelectChange = evt => {
    this.setState({renderMode: evt.target.value});
  }

  componentDidMount() {
    this.props.getSmallData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.renderMode !== this.state.renderMode && this.state.renderMode === 'big') {
      this.props.getBigData();
    } else if (prevState.renderMode !== this.state.renderMode && this.state.renderMode === 'small') {
      this.props.getSmallData();
    }
  }

  render () {
    return (
      <div className={classes.container}>
        <Select value={this.state.renderMode} onChange={this.onSelectChange} />
        {this.props.isFetching 
        ? <Preloader />
        : <Table data={this.props.data} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data,
    isFetching: state.data.isFetching
  }
};

export default connect(mapStateToProps, {getSmallData, getBigData})(App);
