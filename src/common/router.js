//引入antd样式
import 'antd/dist/antd.css';

//引入组件
import { Router, Route, hashHistory,IndexRedirect } from 'react-router';
import ReactDOM from 'react-dom'
import React from 'react'
import Home from '../pages/home/index'




class MyRouter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home}/>
      </Route>
    </Router>
    )
  }
}
class App extends React.Component{
  render(){
    return <div>{this.props.children}</div>
  }
}

export default MyRouter
