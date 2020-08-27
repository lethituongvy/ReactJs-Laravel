import React, { Component } from 'react';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            love: []
        }
        this.getData();
        this.updateUI = this.updateUI.bind(this);
    }
    getData() {
        fetch("http://127.0.0.1:8000/admin/love/index")
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
            <div>
                {this.state.love.map(item=>
                
                        <table >
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Facebook</th>
                                <th>Job</th>
                              
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Description</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                            @foreach($love as $data)
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.ages}</td>
                                <td>{item.ddress}</td>
                                <td>{item.facebook}</td>
                                <td>{item.job}</td>
                                <td>{item.height}</td>
                                <td>{item.weight}</td>
                                <td>{item.description}</td>
                               
                            </tr>
                            @endforeach
                        </table>
                  
                )}
            
                    
            </div>
        );
    }
}

export default Admin;

