import axios from 'axios'

async function handler(req,res){
    console.log(`req`, req.body);
    var resp_arr=[];
    // console.log(`res`, res);
    const {name, password}=req.body;
    const response= await axios.post(`http://localhost:8002/users/?`,{
        username:name,
        pwd:password,
        id:"7",
        mobile:"9810865153",
        usertype: "user"
    });
    // console.log(`response`, response);
    res.json(JSON.stringify(response.data));
    // if(response){
    //     if(response.data.length>=1){
    //         console.log(`response.data`, response.data);
    //         resp_arr=[{...{...response.data}}];
    //         resp_arr['token']= jwt.sign({
    //                 name: response.data.username,
    //                 admin: response.data.usertype=="admin" ? 1: 0
    //             }, KEY);
    //         res.json(resp_arr);
    //     }
    //     else{
    //         res.json([]);    
    //     }
    // }else{
    //     res.json([]);
    // }     
    // http://localhost:8002/users/?username=saksham&pwd=1234
    // res.json({name: email, pwd:password});
}

export default handler;
 