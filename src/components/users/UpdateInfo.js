import React, { Component } from 'react';
import './UpdateInfo.css';
import { withRouter } from 'react-router';

class UpdateInfo extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            user: []
        }
        this.getUser(user_id);
        this.changeValue = this.changeValue.bind(this);
        this.Update = this.Update.bind(this);
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
    changeValue(event) {
        this.setState({
            user: event.target.value
        })
    }
    Update(event) {
        // event.preventDefault();
        let name = event.target["name"].value;
        let addres = event.target["addres"].value;
        let birth = event.target["birth"].value;
        let description = event.target["description"].value;
        let height = event.target['height'].value;
        let weight = event.target["weight"].value;

        let info = new FormData();
        info.append('name', name);
        info.append('addres', addres);
        info.append('birth', birth);
        info.append('description', description);
        info.append('height', height);
        info.append('weight', weight);

        let idLove = this.props.match.params.id;
        fetch("http://127.0.0.1:8000/api/update/" + idLove, {
            method: "post",
            body: info
        })
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                
                // 
            });
            alert("Update thành công");
            // this.props.history.push("/profile");
        

    }
    render() {
        let user = this.state.user;
        return (
            <div className="Update">
                <form onSubmit={this.Update}>
                    <p>Tên người dùng</p>
                    <input type="text" name="name" onChange={this.changeValue} value={user.name} />
                    <p>Địa chỉ</p>
                    <input type="text" name="addres" onChange={this.changeValue} value={user.addres} />
                    <p>Ngày sinh</p>
                    <input type="text" name="birth" onChange={this.changeValue} value={user.birth} />
                    <p>Câu châm ngôn của bạn</p>
                    <input type="text" name='description' onChange={this.changeValue} value={user.description} />
                    <p>Chiều cao của bạn</p>
                    <input type="text" name='height' onChange={this.changeValue} value={user.height} />
                    <p>Cân nặng của bạn</p>
                    <input type="text" name='weight' onChange={this.changeValue} value={user.weight} /><br/><br/>
                    <input type="submit" name="" value="Thay đổi" />
                </form>
            </div>
        )
    }
}
export default withRouter(UpdateInfo);