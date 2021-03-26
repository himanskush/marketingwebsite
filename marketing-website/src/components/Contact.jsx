import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../index.css';

class Contact extends React.Component {

  constructor(){
    super();
    this.state={
      name:"",
      mobno:"",
      email:"",
      message:"",
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e){
    if(e.target.id == "name"){
      this.setState({name:e.target.value})
    }else if(e.target.id == "mobno"){
      this.setState({name:e.target.mobno})
    }else if(e.target.id == "email"){
      this.setState({name:e.target.email})
    }else if(e.target.id == "message"){
      this.setState({name:e.target.message})
    }
  }

  handleSubmit(){
    let name    = this.state.name
    let mobno   = this.state.mobno
    let email   = this.state.email
    let message = this.state.message


  }

  render() {
    return (
      <div className="contact">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://lh3.googleusercontent.com/proxy/PRPDj7lEjjbn1gw6Cdg_8WwOc3Gv4X6lg3mqYS73EnAgjbSGkh5QHeQeobKxMVHHStmguoePMIow3DkOmkZTFm5nKefaHA7fUCnxs3lyn11W4YMTx0k"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Contact Us</h1>
              <p>
                Kindly fill the following form details :
              </p>
              
              <TextField
                fullWidth = "true"
                label="Name"
                id="name"
                defaultValue={this.state.name}
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
                label="Message"
                id="message"
                defaultValue={this.state.message}
                variant="outlined"
                size="small"
                margin="dense"
                onChange={this.handleClick}
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

export default Contact;