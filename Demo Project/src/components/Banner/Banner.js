import React, { Component } from 'react';
import "./style.css";


export default class Banner extends Component {
   
    render() {
        return (
            
                <div className="divBanner" >
                    <div className="container" >      
                      <br/>  <br/>                
                      <h1 className="txtBanner row" >Communication works for those who
                      </h1>
                      <h1 className="txtBanner row" > <span style={{color:"#069390"}} > work at it</span>.</h1>
                      <br/> <br/> <br/>
                      <p className="txtBannerFooter row" >Group Discussions. Personal Interview Speeches. Networking</p>                        
                    </div>
                </div>
            
        )
    }
}