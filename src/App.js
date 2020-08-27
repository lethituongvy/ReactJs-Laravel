import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/users/Home';
import Detail from './components/users/Detail';
import GioiThieu from './components/users/GioiThieu';
import Footer from './components/auth/Footer';
import Chon from './components/users/Chon';
import LienHe from './components/users/LienHe';
import Profile from './components/users/Profile';
import Login from './components/users/Login';
import HoSo1 from './components/users/HoSo1';
import UpdateInfo from './components/users/UpdateInfo';

class App extends Component {
  constructor() {
    super();
    let checkLogin = localStorage.getItem('user_id');
    let check = checkLogin ? "on" : "off";
    this.state = {
      checkLogin: check,
      ages : checkLogin
    }
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    localStorage.removeItem('user_id');
    this.setState({
      checkLogin: "off"
    })
    window.location.reload();
  }
  render() {
    return (
      <div className="app">
        <Router>
          <ul className="chinh">
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/gioithieu" exact>GIỚI THIỆU</Link></li>
            <li><Link to="/chon">CHỌN PG/PB</Link></li>
            <li><Link to="/lienhe">LIÊN HỆ HẸN HÒ</Link></li>
            <li><Link to="/profile">TRANG CÁ NHÂN</Link></li>
            <li><Link to="/login">
              <a className="Login">ĐĂNG NHẬP</a>
            </Link></li>
            <li>{this.state.checkLogin === "on" ?
              <a className="Register" onClick={this.onLogout}>ĐĂNG XUẤT</a> :
              <Link to="/register"><a className="Register">ĐĂNG KÝ</a></Link>}</li>
          </ul>
          <Switch>
            <Route path="/" exact> <Home /></Route>
            <Route path="/gioithieu" exact> <GioiThieu /></Route>
            <Route path={"/love/:id"}>
              <Detail />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path="/chon"> <Chon /></Route>
            <Route path="/myprofile"> <Profile /></Route>
            <Route path="/lienhe" exact> <LienHe /></Route>
            <Route path={"/lienhe/:id"}>
              <LienHe />
            </Route>
            <Route path="/login">
              <Login onLoginClicked={this.onLogin} />
            </Route>
            <Route path="/register">
              <HoSo1 />
            </Route>
            <Route path={"/update/:id"}>
              <UpdateInfo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}
export default App;
