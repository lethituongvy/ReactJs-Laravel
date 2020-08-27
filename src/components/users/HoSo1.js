import React, { Component } from 'react';
import './HoSo1.css';
import { withRouter } from 'react-router-dom';


class HoSo1 extends Component {
    constructor() {
        super();
        this.onRegisterUser = this.onRegisterUser.bind(this);

    }
    onRegisterUser(event) {
        event.preventDefault();
        let name = event.target['name'].value;
        let username = event.target['username'].value;
        let password = event.target['password'].value;
        let birth = event.target['birth'].value;
        let height = event.target['height'].value;
        let weight = event.target['weight'].value;
        let addres = event.target['addres'].value;
        let phone = event.target['phone'].value;
        let image = event.target['image'].files[0];
        let description = event.target['description'].value;

        let users = new FormData();
        users.append('name', name);
        users.append('username', username);
        users.append('password', password);
        users.append('birth', birth);
        users.append('height', height); 
        users.append('weight', weight);
        users.append('addres', addres);
        users.append('phone', phone);
        users.append('image', image);
        users.append('description', description);

        fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            body: users
        })
        .then(response=>response.json())
        .then((response) => {
            console.log(response);
            this.props.history.push("/login");
            alert("thanh cong");

        });
    }
    render() {
        return (
            <div className="register">
                {/* <h3>Thông tin cá nhân</h3> */}
                <div id='form'>
                    <form onSubmit={this.onRegisterUser}>
                        <div class="input-group form-group">
                            <input type="text" name="name" class="form-control" placeholder="Nhập name" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="username" class="form-control" placeholder="user name" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="password" name="password" class="form-control" placeholder="password" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="birth" class="form-control" placeholder="Nhập ngày sinh" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="height" class="form-control" placeholder="Nhập chiều cao" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="weight" class="form-control" placeholder="Nhập cân nặng" />
                        </div><br />
                        {/* <div class="input-group form-group">
                            <select id="catec" name="cate">
                                <option value="hcm">TP HỒ CHÍ MINH</option>
                                <option value="dn">ĐÀ NẲNG</option>
                                <option value="hn">HÀ NỘI</option>
                                <option value="qb">QUẢNG BÌNH</option>
                                <option value="bd">BÌNH ĐỊNH</option>
                                <option value="qt">QUẢNG TRỊ</option>
                                <option value="qn">QUẢNG NGÃI</option>
                            </select>
                        </div><br /> */}
                        <div class="input-group form-group">
                            <input type="text" name="addres" class="form-control" placeholder="Nhập địa chỉ" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="phone" class="form-control" placeholder="Nhập số điện thoại" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="file" id='file' name="image" class="form-control" />
                        </div><br />
                        <div class="input-group form-group">
                            <input type="text" name="description" class="form-control" placeholder="Câu châm ngôn của bạn" />
                        </div><br />
                        <div class="form-group">
                            <input type="submit" value="Register" class="btn float-right login_btn" />
                        </div><br />
                    </form>
                </div>
                <div id='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ENdPSVG5hYs" title="Hướng dẫn đăng nhập" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}
export default withRouter(HoSo1);