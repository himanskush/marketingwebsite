import axios from 'axios'

async function handler(req,res){
    //console.log(`req`, req.body);
    const { name, email, contactno, message } = req.body;
    const response= await axios.post(`http://localhost:8002/contactqueries/?`,{
      name:name,
      email:email,
      contactno:contactno,
      message: message,
      success: 'Success'
    });
    const oldresponse= await axios.get(`http://localhost:8002/contactqueries/?`,{
      params: {
        email: email
      }
    });
    //res.json(JSON.stringify(response.data));
    res.json(JSON.stringify(oldresponse.data));
}

export default handler;
 