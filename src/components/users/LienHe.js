import React, { Component } from 'react';
import './LienHe.css';
import { withRouter } from 'react-router-dom';

class LienHe extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            loves: [],
            user: []
        }
        let id = this.props.match.params.id;
        this.getData(id);
        this.getUser(user_id);
        this.onAddInformation = this.onAddInformation.bind(this);
    }

    getUser(id) {
        fetch('http://127.0.0.1:8000/api/profile/', {
            method: "get",
            headers: {
                "Authorization": id
            },
        })
            .then(response => {
                response.json().then((data) => {
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            user: data.user
        })
    }
    onAddInformation(event) {
        event.preventDefault();
        let name = event.target['name'].value;
        let ages = event.target['ages'].value;
        let phone = event.target['phone'].value;
        let email = event.target['email'].value;
        let date = event.target['date'].value;
        let hours = event.target['hours'].value;

        let info = new FormData();
        info.append('name', name);
        info.append('ages', ages);  
        info.append('phone', phone);
        info.append('email', email);
        info.append('date', date);
        info.append('hours', hours);

        let idL = this.props.match.params.id;
        fetch("http://127.0.0.1:8000/api/loves/" + idL, {
            method: "post",
            body: info
        }).then(response => response.json())
            .then((response) => {
                console.log(response);
                this.props.history.push("/");
                alert("thanh cong");

            });
    }

    getData(id) {
        fetch("http://127.0.0.1:8000/api/love/" + id)
            .then(response => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.setState({
                    loves: data
                })
            }
            );
    }
    render() {
        let user = this.state.user;
        return (

            <form onSubmit={this.onAddInformation} enctype='multipart/form-data' >
                <div className="lienhe">
                    <center>
                        <div>
                            <h3>LIÊN HỆ DỊCH VỤ THUÊ NGƯỜI YÊU</h3>
                            <h4>Holine: <span> 0356021924</span></h4>
                            <h4>Thông tin khách hàng</h4>
                        </div>
                    </center>
                    <div className="information">
                        <div>
                            <div class="form-group">
                                <label for="name">Họ và tên *</label><br />
                                <input type="text" class="form-control" name="name" value={user.name} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="ages">Tuổi *</label><br />
                                <input type="text" class="form-control" name="ages" />
                            </div>

                            {this.state.loves.map((item) =>

                                <div className="lh">
                                    <img src={'http://127.0.0.1:8000' + item.image} name="image" alt="" width="400px" height="400px" />
                                </div>
                            )}
                            <br />
                            <div class="form-group">
                                <label for="phone">Phone *</label><br />
                                <input type="text" class="form-control" name="phone" value={user.phone} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="email">Email *</label><br />
                                <input type="text" class="form-control" name="email" />
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="mucdich">
                        <div class="form-item form-item-appointment-datetime form-type-textfield form-group">
                            <label class="control-label" for="edit-appointment-datetime">Thời gian bắt đầu từ
                            <span class="form-required" title="Trường dữ liệu này là bắt buộc.">*</span><br />
                            </label>
                            <input class="form-control form-text required" type="date" name="date" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="hours">Số giờ *</label><br />
                            <input type="text" class="form-control" name="hours" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="add">Địa điểm gặp *</label><br />
                            <input type="text" class="form-control" name="add"></input>
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="submit" value="Gửi Yêu Cầu" />
                        </div><br />
                    </div>

                </div>
            </form >
        )
    }
}
export default withRouter(LienHe);