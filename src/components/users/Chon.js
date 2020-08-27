import React, { Component } from 'react';
import './Chon.css';
import {
    Link
} from "react-router-dom";

class Chon extends Component {
    constructor() {
        super();
        this.state = {
            love: []
        }
        this.getData();
        this.updateUI = this.updateUI.bind(this);
    }
    getData() {

        fetch("http://127.0.0.1:8000/api/love")
            .then(response => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.updateUI(data);
            }
            );

    }
    updateUI(data) {
        this.setState({
            love: data
        })
    }
    render() {
        return (
            <div className="body">
                <h2>CHỌN PG/ PB CHO BUỔI HẸN CỦA BẠN</h2>
                <div className="form">
                    <div>
                        Tôi là  &emsp; &emsp;<select id="gioitinh" name="gioitinh">
                            <option value="nam">NGƯỜI NAM</option>
                            <option value="nữ">NGƯỜI NỮ</option>
                        </select> &emsp; &emsp;
                        cần tìm &ensp;<select id="gioitinh" name="gioitinh">
                            <option value="nam">NGƯỜI NỮ</option>
                            <option value="nữ">NGƯỜI NAM</option>
                        </select>&emsp;&emsp;
                        Tuổi từ &ensp;<select id="tuoi" name="tuoi">
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="19">20</option>
                            <option value="19">21</option>
                            <option value="19">22</option>
                            <option value="19">23</option>
                            <option value="19">24</option>
                            <option value="19">25</option>
                            <option value="19">26</option>
                            <option value="19">27</option>
                            <option value="19">28</option>
                            <option value="19">29</option>
                            <option value="19">30</option>
                        </select>&emsp;&emsp;
                        tới &ensp;<select id="tuoi" name="tuoi">
                            <option value="19">20</option>
                            <option value="19">21</option>
                            <option value="19">22</option>
                            <option value="19">23</option>
                            <option value="19">24</option>
                            <option value="19">25</option>
                            <option value="19">26</option>
                            <option value="19">27</option>
                            <option value="19">28</option>
                            <option value="19">29</option>
                            <option value="19">30</option>
                        </select>&emsp;&emsp;
                        <br /><br />
                        Để mời &emsp;&ensp;<select id="catem" name="cate">
                            <option value="cf">CÙNG ĐI ĂN/ ĐI CHƠI/ CÀ PHÊ</option>
                            <option value="sn">DỰ SINH NHẬT/ DỰ TIỆC</option>
                            <option value="gd">THAM GIA ĐÌNH/ RA MẮT BỐ MẸ</option>
                            <option value="dl">ĐI DU LỊCH, CHƠI DÃ NGOẠI/PICNIC</option>
                        </select>
                        &emsp;&ensp;&ensp;
                        Tại TP &ensp;&ensp;<select id="catec" name="cate">
                            <option value="hcm">TP HỒ CHÍ MINH</option>
                            <option value="dn">ĐÀ NẲNG</option>
                            <option value="hn">HÀ NỘI</option>
                            <option value="qb">QUẢNG BÌNH</option>
                            <option value="bd">BÌNH ĐỊNH</option>
                            <option value="qt">QUẢNG TRỊ</option>
                            <option value="qn">QUẢNG NGÃI</option>
                        </select>
                    </div>
                    <button>THỰC HIỆN TÌM</button>
                </div>
                <div className="container">
                    {this.state.love.map((item) =>
                        <div className="demo">
                            <div className="thumbnaisl">
                            <h3><img src={'http://127.0.0.1:8000'+item.image} alt="" width="400px" height="400px"/></h3>
                                <div className="captions">
                                    <h1>{item.name}</h1>
                                    <p>
                                        <h3>{item.ages} tuổi</h3>
                                        <button><Link to={"/love/" + item.id}>Detail</Link></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div >
            </div >
        )
    }
}
export default Chon; 