import React, { Component } from 'react';
import "./style.css";

export default class AboutUs extends Component {
   
    render() {
        return (
        <div data-aos="fade-up" className="divAbout">
            <h2 style={{textAlign:"center",marginTop:"10px",textShadow:"1px 1px 1px rgba(0,0,0,.1)"}} >About Us</h2>
            <hr style={{maxWidth:"50px",borderColor:"#069390",borderWidth:"3px",marginTop:"20px",marginBottom:"20px",fontSize:"85%"}} />
             <div className="container">
                <div className="dvAbUsContent row" >            
                    <div className="col-xs-6 col-md-6">
                        <div style={{marginLeft:"auto",marginRight:"auto",textAlign:"justify",width:"400px",paddingLeft:"25px",paddingRight:"25px"}} >
                            <p>
                                We are small highly energetic group of people, which work on soft skills development and networking resulting in personal growth and personality grooming.
                                <br />
                                <br/>
                                Each meeting is a learn-by-doing workshop in which participants hone their speaking and leadership skills in a no-pressure atmosphere.
                                <br/>
                                <br/>
                                You will have the opportunity to meet entrepreneurs, and professionals such as accountants and lawyers to network, share resources and exchange ideas.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6 justify-content-center divImg">
                        <img  id="imgAboutUs" src="https://cdn-cms.f-static.net/uploads/4124456/800_5b32113d016a3.jpg"  ></img>
                    </div>
                </div>
             </div>
        </div>)
    }
}