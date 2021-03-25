import React, { Component } from 'react';
import "./style.css";

export default class Services extends Component {
    

    render() {
        return (
            <section className="secService">
            <div className="divService" >
                <br/>
                <h2 style={{textAlign:"center",marginTop:"10px",textShadow:"1px 1px 1px rgba(0,0,0,.1)"}} >Session Types</h2>
                <hr style={{maxWidth:"50px",borderColor:"#069390",borderWidth:"3px",marginTop:"20px",marginBottom:"20px",fontSize:"85%"}} />
                <div className="divServiceContent container">
                    <div className="row text-center" >
                        <div className="col-md-4 col-sm-6 col-centered " >                            
                            <span className="Speech img-circle fa-4x fa-stack" />
                            <h5>Speeches</h5>                            
                        </div>
                        <div className="col-md-4 col-sm-6 col-centered" >
                          <span className="GroupDiscussion img-circle fa-4x fa-stack" />
                            <h5>Group Discussions</h5>
                        </div>
                        <div className="col-md-4 col-sm-6 col-centered" >
                            <span className="PersonalInterview img-circle fa-4x fa-stack" />
                            <h5>Personal Interviews</h5>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}