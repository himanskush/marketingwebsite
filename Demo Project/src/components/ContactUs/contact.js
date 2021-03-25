import React, { Component } from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function Contact() {
    
    
        const classes = useStyles();
        return (
            <section className="divContact">
                <br/>
                <h2 style={{textAlign:"center",marginTop:"10px",textShadow:"1px 1px 1px rgba(0,0,0,.1)"}} >Contact Us</h2>
                <hr style={{maxWidth:"50px",borderColor:"#069390",borderWidth:"3px",marginTop:"20px",marginBottom:"20px",fontSize:"85%"}} />
                <div className="container" >
                    <div className="row" >
                        <div className="col-sm-6 col-md-6 justify-content-center" >
                            <h5 className="Info" >Delhi, National Capital Territory of Delhi, India</h5> <br/>
                            <h5 className="Info" ><span style={{color:"#069390"}} > Arpit Mathur <br/>
                             +91-9953206114</span></h5>
                        </div>
                        <div className="divServiceForm col-sm-6 col-md-6" >
                            <form  className={classes.root}  noValidate autoComplete="off">
                            <TextField className="txtField"  label="Name"  variant="outlined" />
                            <TextField className="txtField"  label="Phone" variant="outlined" />  <br/>
                            <TextField className="txtFieldEmail"  label="Email" variant="outlined" size="medium" />   <br/>
                            <TextField className="txtFieldEmail"  label="Message" variant="outlined" size="medium" />
                            </form>
                        </div>             
                    </div>
                </div>
            </section>
        )
    
}