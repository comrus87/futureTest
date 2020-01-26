import React from 'react';
import classes from './App.module.css';
import {connect} from 'react-redux';
import {getSmallData, getBigData, setRenderMode, setCurrentPage, setCurrentInfo, setUser, setData} from './redux/dataReducer';
import Table from './components/Table/Table';
import Select from './components/Select/Select';
import Preloader from './components/common/Preloader/Preloader';
import UserForm from './components/UserForm/UserForm';
import SearchForm from './components/SearchForm/SearchForm';
import {reset} from 'redux-form';

class App extends React.Component {

  state = {
    isAddUser: false,
    hasError: false
  }

  onSelectChange = evt => {
    this.props.setRenderMode(evt.target.value);
    this.props.setCurrentPage(1);
  }

  onSubmitUser = (formData, dispatch) => {
    try {
      this.props.setUser(formData);
      dispatch(reset('user'));
    } catch (error) {
      this.setState({hasError: true});
    }
  }

  onSubmitSearch =(formData, dispatch) => {
    try {
      let value = formData.searchValue.toLowerCase();
      let newData = this.props.data.filter(obj => {
        for (let key in obj) {
          if (key === 'id' || key === 'firstName' || key === 'lastName' || key === 'email' ||  key === 'phone') {
            if (String(obj[key]).toLowerCase().indexOf(value) > -1) {
              return true
            }
          }
        }
        return false
      })
      this.props.setData(newData);
      dispatch(reset('search'));
    } catch (error) {
      this.setState({hasError: true});
    }
  }

  refreshData = () => {
    try {
      if (this.props.renderMode === 'big') {
        this.props.getBigData();
      } else if (this.props.renderMode === 'small') {
        this.props.getSmallData();
      }
    } catch (error) {
      this.setState({hasError: true});
    }
  }

  componentDidMount() {
    this.props.getSmallData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.renderMode !== this.props.renderMode && this.props.renderMode === 'big') {
      this.props.getBigData();
    } else if (prevProps.renderMode !== this.props.renderMode && this.props.renderMode === 'small') {
      this.props.getSmallData();
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1 className={classes.error}>Что-то пошло не так!</h1>
    }

    return (
      <div className={classes.container}>
        <Select value={this.state.renderMode} onChange={this.onSelectChange} refreshData={this.refreshData}/>
        {!this.state.isAddUser && <button className={classes.btnAdd} onClick={() => {this.setState({isAddUser: true})}}>Добавить</button>}
        {this.state.isAddUser && <button className={classes.btnAdd} onClick={() => {this.setState({isAddUser: false})}}>Свернуть</button>}
        {this.state.isAddUser && <UserForm onSubmit={this.onSubmitUser} />}
        <SearchForm onSubmit={this.onSubmitSearch}/>
        {this.props.isFetching 
        ? <Preloader />
        : <Table data={this.props.data} 
                 currentPage={this.props.currentPage} 
                 pageSize={this.props.pageSize} 
                 setCurrentPage={this.props.setCurrentPage}
                 dataInfo={this.props.dataInfo}
                 setCurrentInfo={this.props.setCurrentInfo}
                 setData={this.props.setData}
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
    dataInfo: state.data.dataInfo,
    renderMode: state.data.renderMode
  }
};

const mapDispatchToProps = {
  getSmallData,
  getBigData,
  setCurrentPage,
  setCurrentInfo,
  setUser,
  setData,
  setRenderMode
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
