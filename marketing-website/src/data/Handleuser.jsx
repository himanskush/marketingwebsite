import React, { PureComponent } from 'react';
import UserData from '../data/User.json'

function AddUser(data){
    
    if(UserData.hasOwnProperty(data.email)){

        let returnData = {
            "status" : 200,
            "message" : "User already Exists"
        }
        return returnData;
    }else{
        
        //Write UserData

        let returnData = {
            "status" : 200,
            "message" : "User Registered Successfully"
        }
        return returnData;
    }
}

function AuthenticateUser(){

}

export {AddUser,AuthenticateUser};