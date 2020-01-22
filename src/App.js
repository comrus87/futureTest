import React from 'react';
import classes from './App.module.css';
import {connect} from 'react-redux';
import {getSmallData, getBigData, setCurrentPage, setCurrentInfo, setUser} from './redux/dataReducer';
import Table from './components/Table/Table';
import Select from './components/Select/Select';
import Preloader from './components/common/Preloader/Preloader';
import UserForm from './components/UserForm/UserForm';

class App extends React.Component {

  state = {
    renderMode: 'small',
    isAddUser: false
  }

  onSelectChange = evt => {
    this.setState({renderMode: evt.target.value});
  }

  onSubmit = formData => {
    this.props.setUser(formData);
  }

  componentDidMount() {
    this.props.getSmallData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.renderMode !== this.state.renderMode && this.state.renderMode === 'big') {
      this.props.getBigData();
      console.log(this.state)
    } else if (prevState.renderMode !== this.state.renderMode && this.state.renderMode === 'small') {
      this.props.getSmallData();
    }
  }

  render () {
    return (
      <div className={classes.container}>
        <Select value={this.state.renderMode} onChange={this.onSelectChange} />
        {!this.state.isAddUser && <button className={classes.btnAdd} onClick={() => {this.setState({isAddUser: true})}}>Добавить</button>}
        {this.state.isAddUser && <button className={classes.btnAdd} onClick={() => {this.setState({isAddUser: false})}}>Свернуть</button>}
        {this.state.isAddUser && <UserForm onSubmit={this.onSubmit} />}
        {this.props.isFetching 
        ? <Preloader />
        : <Table data={this.props.data} 
                 currentPage={this.props.currentPage} 
                 pageSize={this.props.pageSize} 
                 setCurrentPage={this.props.setCurrentPage}
                 dataInfo={this.props.dataInfo}
                 setCurrentInfo={this.props.setCurrentInfo}
                 />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data,
    isFetching: state.data.isFetching,
    currentPage: state.data.currentPage,
    pageSize: state.data.pageSize,
    dataInfo: state.data.dataInfo
  }
};

const mapDispatchToProps = {
  getSmallData,
  getBigData,
  setCurrentPage,
  setCurrentInfo,
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
