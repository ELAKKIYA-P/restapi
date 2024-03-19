import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [name,setName]=useState("")
    const [users,setUsers]=useState([])
    
  const PostData=()=>{
    axios.post('https://6585240b022766bcb8c7f1a0.mockapi.io/users',{
      name:name,
      age:27,
      hobbies:["cooking","travelling","coding","gardening"],
    })
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.err(err)
    }
    )
  }

  //get method

  useEffect(()=>{
    axios.get('https://6585240b022766bcb8c7f1a0.mockapi.io/users')
    .then((res)=>{
      setUsers(res.data)
    })
    .catch((err)=>{
      console.err(err)
    }
    )

  },[])

  return (
    <div className="App">
      <input  placeholder='Name' onChange={ (event)=>setName(event.target.value)}/>
<button onClick={PostData}>PostData</button>
{
  users.map((user)=>{
return(<>
    <h2>{user.name}</h2>
</>)
  })
}

          </div>
  );
}

export default App;
