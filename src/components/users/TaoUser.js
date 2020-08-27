import React, { Component } from 'react';
import './TaoUser.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HoSo1 from './HoSo1';
import Login from './Login';

class TaoUser extends Component {
    render() {
        return (
            <div className="a">
                <Router>                  
                    <button><Link to="/create">HỒ SƠ MỚI</Link></button>
                    <button><Link to="/login">ĐĂNG NHẬP</Link></button>
                    <Switch>
                        <Route path="/create" exact><HoSo1 /></Route>
                        <Route path="/login" exact> <Login /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default TaoUser;
