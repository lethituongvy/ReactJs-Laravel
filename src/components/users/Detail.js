import React, { Component } from 'react';
import './Deatil.css';
import { withRouter } from 'react-router-dom';
import {
    Link
} from "react-router-dom";
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loves: []
        }
        let id = this.props.match.params.id;
        this.getData(id);
        this.updateUI = this.updateUI.bind(this);

    }
    getData(id) {
        fetch("http://127.0.0.1:8000/api/love/" + id)
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
            loves: data
        })
    }
    render() {
        console.log(this.state.loves);
        return (
            
            <div>
                <div className="containers">
                    {this.state.loves.map((item) =>
                        <div className="thumbnail">
                            <div className="img">
                                <img src={'http://127.0.0.1:8000' + item.image} alt="" width="400px" height="400px" />
                            </div>
                            <div className="caption">
                                <center><h1>{item.name}</h1>
                                <h3>{item.ages}</h3>
                                <h3>{item.price} 1 ngày</h3>
                                <h3>{item.description}</h3>
                                <p>
                                <button><Link to={"/lienhe/" + item.id}>LIÊN HỆ NGAY</Link></button>                                 
                                </p>
                                </center>
                            </div>
                        </div>
                    )}
                </div >
            </div>
        )
    }
}
export default withRouter(Detail);





