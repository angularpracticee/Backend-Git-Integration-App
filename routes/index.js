var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET home page. */

router.post('/access_token', async function(req, res, next) {
  var api_response = await getAccessToken(req);
  res.send(api_response);
});

async function getAccessToken(req) {
    const url = `https://github.com/login/oauth/access_token`
    try{
      const response = await axios.post(url,req.body,{
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'  
        }
      });
      if(response.data){
        return response.data;
      }else{
        return "Error"
      }
      
    }catch (error){
      return error;
    }
    
}

module.exports = router;
