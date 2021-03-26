import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {AddUser} from '../data/Handleuser'
import Toastr from 'toastr'

class Signup extends React.Component {

    constructor(){
        super();
        this.state = {
            username:"",
            mobno:"",
            email:"",
            password:"",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e){
        if(e.target.id == "username"){
            this.setState({username:e.target.value})
        }else if(e.target.id == "mobno"){
            this.setState({mobno:e.target.value})
        }else if(e.target.id == "email"){
            this.setState({email:e.target.value})
        }else if(e.target.id == "password"){
            this.setState({password:e.target.value})
        }
    }

    handleSubmit(){
        let username = this.state.username
        let mobno = this.state.mobno
        let email = this.state.email
        let password = this.state.password

        let data = {
            "username" : this.state.username,
            "mobno" : this.state.mobno,
            "email" : this.state.email,
            "password" : this.state.password,
        }

        console.log(data);
        
    }

    render() {
        return (
            <div className="signup">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5" style={{margin:"auto",marginTop:40}}>

                        <TextField
                            fullWidth = "true"
                            label="Username"
                            id="username"
                            defaultValue={this.state.username}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            onChange={this.handleClick}
                        />
                        <TextField
                            fullWidth = "true"
                            label="Contact Number"
                            id="mobno"
                            defaultValue={this.state.mobno}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            onChange={this.handleClick}
                        />
                        <TextField
                            fullWidth = "true"
                            label="Email"
                            id="email"
                            defaultValue={this.state.email}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            onChange={this.handleClick}
                        />
                        <TextField
                            fullWidth = "true"
                            label="Password"
                            id="password"
                            defaultValue={this.state.password}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            onChange={this.handleClick}
                            type="password"
                        />
                        <Button id="submit" variant="outlined" color="primary" fullWidth="true" style={{marginTop:10}} onClick={this.handleSubmit}>
                            Submit
                        </Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Signup.propTypes = {

};

export default Signup;