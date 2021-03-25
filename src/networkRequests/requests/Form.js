import AxiosBase from "./../axios/AxiosBase";
import qs from 'qs';


const Form = (name, email, phoneNumber, aboutapp) => {

   
  
   console.log("data",name)
   return new Promise((resolve, reject) => {
      let data = {
         'name': name,
         'email': email,
         'phoneNumber': phoneNumber,
         'aboutUs': aboutapp
      }
     

      
      AxiosBase.post("/user/test", qs.stringify(data), { crossDomain: true })
         .then((res) => {
            console.log("response------", res);
            resolve(res.data);
         })
         .catch((err) => {
            console.log("error--------", err);
            reject("err")
         });
   });
}
export default Form