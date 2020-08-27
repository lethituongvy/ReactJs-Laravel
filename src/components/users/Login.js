import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    onLoginSubmit(event) {
        event.preventDefault();

        let username = event.target['username'].value;
        let password = event.target['password'].value;
        let user = {
            username: username,
            password: password
        }
        let userInJson = JSON.stringify(user);
        console.log(userInJson);
        fetch("http://127.0.0.1:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: userInJson
        })
            .then(response => response.json())
            .then((response) => {
                if (response.user_id != null) {
                    console.log(response);
                    localStorage.setItem("user_id", response.user_id);
                    this.props.history.push("/profile");
                    // window.location.reload();
                }
                else {
                    
                    alert("username or password is wrong");
                    // window.location.reload();
                }
                window.location.reload();
            }
            
            );
    }

    render() {
        return (
            <div className="form-login">
                <h2 className="login">LOGIN</h2>
                <form onSubmit={this.onLoginSubmit} >
                    <label for="fname">Username</label> &ensp;
                        <input type="text" id="fname" name="username" className="input-login" placeholder="username.." /> <br /><br />

                    <label for="password">Password</label>&ensp;&ensp;
                        <input type="password" id="password" name="password" className="input-login" placeholder="password.." /><br /><br />
                    <a href="#">Forgot your password?</a><br /><br />
                    <div class="form-group">
                            <input type="submit" value="Login"  />
                        </div><br />
                </form>
            </div>
        )
    }
}
export default withRouter(Login);