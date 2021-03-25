import AxiosBase from "../axios/AxiosBase";

export const forms = (name, email,phoneNumber,aboutapp) =>{
  console.log("jgdsjkgfjdfgjkdfkjgdfg")
return  new Promise((resolve, reject) => {
  const data = new FormData()
  data.append("name",name)
  data.append("email",email)
  data.append("phoneNumber",phoneNumber)
  data.append("aboutUs",aboutapp)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
   
    AxiosBase.post("/user/test",data,config,{ crossDomain: true })
      .then((res) => {
        console.log("login response", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("Login error", err);
        reject(err)
      });
  });
}





      

      
     