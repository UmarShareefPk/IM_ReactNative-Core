import axios from 'axios';

import { usersUrls } from "../../api/apiURLs";

  export const logIn = (credentials) => {
    return (dispatch, getState) => {   
      console.log("calling axios now  ss", credentials);
      
     
      axios({
            method: 'post',           
            url : usersUrls.authenticateUrl,
            headers: {'Content-type': 'application/json'}, 
            data: {               
                Username: credentials.username,
                Password: credentials.password 
            },
          })
          .then((response)=>{              
              const loginData = {
                  token : response.data.Token,
                  Name :  response.data.user.FirstName + " " +  response.data.user.LastName,
                  User_Id :  response.data.user.Id
              }              
              dispatch({ type: 'LOGIN_PASS', loginData });
          })
          .catch((err)=>{
                   dispatch({ type: 'LOGIN_FAIL'});
                   console.log(err.response);
          });    
    }
  }
  
  
  export const signOut = () => {
    return (dispatch, getState) => {     
      dispatch({ type: 'SIGN_OUT', data:null });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch, getState) => {     
    }
  }

  export const updateHubId = (hubId, userId) => {
    return (dispatch, getState) => {  
     
        axios.defaults.headers = {'Authorization': `Bearer ${getState().userLogin.token + ""}`};
        const url = usersUrls.updateHubIdUrl 
        axios.post(url, {
          HubId : hubId,
          UserId : userId
        })
          .then((response)=>{          
          
             dispatch({ type: 'UPDATE_HUB', hubId });
          })
          .catch((err)=>{                 
                   console.log(err);
          });
    
    }
  }