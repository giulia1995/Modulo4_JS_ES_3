const url= "https://api.pexels.com/v1/search?query=fashion"
const token= "MqPq6wxr08MuaFvmjjHHHrax8KHsYSWqa8hOSUVEj6gwRuTque48ds4T"

fetch(url, 
    headers: {
      Authorization: "Bearer  token",
     "Content-Type: "application/json"
    
  })
    .then(res => res.json())
      console.log(data);
    .catch((error) {
      console.log(error);
    });
  