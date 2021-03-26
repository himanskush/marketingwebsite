import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../index.css';
import { Link } from "react-router-dom";

class Login extends React.Component {

    constructor(){
        super();

        this.state={
            username:"",
            password:"",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e){
        
    }

    handleChange(e){
        if(e.target.id == "username"){
            this.setState({username:e.target.value})
        }else if(e.target.id == "password"){
            this.setState({username:e.target.password})
        }
    }

    render() {
        return (
            <div className="login">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5" style={{margin:"auto",marginTop:40}}>
                            <TextField
                                fullWidth = "true"
                                label="Username"
                                id="username"
                                defaultValue=""
                                variant="outlined"
                                size="small"
                                margin="dense"
                                onChange={this.handleChange}
                            />
                            <TextField
                                fullWidth = "true"
                                label="Password"
                                id="password"
                                defaultValue=""
                                variant="outlined"
                                size="small"
                                margin="dense"
                                onChange={this.handleChange}
                                type="password"
                            />
                            <Button id="login" variant="outlined" color="primary" fullWidth="true" style={{marginTop:10}} onClick={this.handleLogin}>
                                Login
                            </Button>
                            <div style={{textAlign:"center",marginTop:7}}>New User ? <Link to="/signup" style={{textDecoration:"none"}}>SignUp</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;