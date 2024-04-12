import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import axios from 'axios';

// Client ID
// 1000.PW5JO1SJR6SJVFNEBY0CP6IX2NLTXO

// Client Secret
//aa6d696032a823a9fdf087b6347533760fe20baca0


// 1000.3dbcbfa11aaedf9a1e1ff107ab506bd2.7b6ad382384950b60cae06ff62bd1c96


// {
//   "access_token": "1000.aa0d97e0a437a09e5540b0a50a195eaa.8cf91bd2523628a515377f0f26c80355",
//   "refresh_token": "1000.1a62a0c6e6a8176b5cbe5bb9dd5424e1.8a52791e63b413885ed61e968b1d7f06",
//   "scope": "ZohoCRM.modules.all",
//   "api_domain": "https://www.zohoapis.com",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }

// https://www.zohoapis.com/crm/v6/Leads
function App() {

  const [Company, setCompany] = useState('')
  const [Last_Name, setLast_Name] = useState('')

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', width: '25%', margin: 20 }} >
        <input placeholder='Company' onChange={(e) => { setCompany(e.target.value) }} />
        <input placeholder='Last_Name' onChange={(e) => { setLast_Name(e.target.value) }} />
        <button
          onClick={() => { 
            axios.post('https://www.zohoapis.com/crm/v6/Leads',{
              data:[
                {
                  Company: Company,
                  Last_Name: Last_Name
                }
              ]
            },{
              headers: {
                Authorization: "Zoho-oauthtoken 1000.aa0d97e0a437a09e5540b0a50a195eaa.8cf91bd2523628a515377f0f26c80355"
              }
            }).then((e)=>{
              console.log('sucess', e)
            }).catch((e)=>{
              console.log('fail', e)
            })
          }}
        >
          Submit
        </button>
      </div>

    </div>
  );
}

export default App;
