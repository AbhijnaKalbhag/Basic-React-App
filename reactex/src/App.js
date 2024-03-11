import react,{useState} from 'react'
import './App.css';

function App() {
const[isLoggedin,setLogin] =useState(false);
const[logindata,setLogindata]=useState({
  username:'',
  password:''

});

const[userData,setUserdata]=useState({
  name:'',
  usn:'',
  email:'',
  gender:'',
  lang:[],
  sem:''
});
const[isreg,setreg]=useState(false);


const handleRegsubmit=(e)=>{
  const{usn,email}=e.target;

  const isusn=/^01fe[0-9]{2}b(cs|ec|ee)[0-9]{3}$/i.test(usn);
  const isemail=/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email);
  if(!isusn){
    alert('invalid email/usn');
    setUserdata({
      email:''

    });

  }
  else{
  e.preventDefault();
  setreg(false);
  } 
}

const handleUpdate=(e)=>{
  e.preventDefault();
  setreg(true);
  setUserdata({
    lang:[]
  })

}

const handleLogout=(e)=>{
  e.preventDefault();
  setLogin(false);
  setreg(false);
  setUserdata({
  name:'',
  usn:'',
  email:'',
  gender:'',
  lang:[],
  sem:''
  });
  setLogindata({
    username:'',
    password:''
  });
}


const handleLoginOnchange=(e)=>{
  const{name,value}=e.target;
  setLogindata((prevData)=>({
    ...prevData,
    [name]:value
  }));
}

const handleLoginsubmit=(e)=>{
  e.preventDefault();
  alert('sdfg');
  setLogin(true);
}

const handleuserOnchange=(e)=>{
  const{name,value,type}= e.target;
  if(type==="checkbox"){
    setUserdata((prevData)=>({
      ...prevData,
      [name]:[...prevData[name],value]
    }));
  }
  else{
      setUserdata((prevData)=>({
        ...prevData,
        [name]:value
      }));
    }
  
}
  return (
    <div className="App">
      {!isLoggedin ? (
        <div>
          <h1> Login Form</h1>
          <form id='login'>
            <label for="username">Username</label><br/>
            <input
            type="text"
            name="username"
            value={logindata.name}
            onChange={handleLoginOnchange}
            required
            /><br/><br/>

          <label for="password">Password</label><br/>
          <input
          type="password"
          name="password"
          value={logindata.password}
          onChange={handleLoginOnchange}
          required
          /><br/><br/>
        <button type="submit" onClick={handleLoginsubmit}>Login</button>
          </form>
        </div>

      ):(

        <div className="App">
        <form>
          <h1>Student Details</h1>
          <ul>
            <li>Name : {userData.name}</li>
            <li>USN : {userData.usn}</li>
            <li>Email : {userData.email}</li>
            <li>Gender : {userData.gender}</li>
            <li>Semester: {userData.sem}</li>
            <li>Languages Known : {userData.lang.join(',')}</li>
          </ul>

          <button type="submit" onClick={handleUpdate}>Update</button>
          <button type="submit" onClick={handleLogout}>Logout</button>

          </form>

</div>
        
      )
      }
      { isreg ? (

<div className="App">
<form className='student'>
<h1>Student Regestration form</h1>

<label for="name">Name </label><br/>
  <input
  type="text"
  name="name"
  value={userData.name}
  onChange={handleuserOnchange}
  required
  /><br/><br/>

  <label for="email">Email</label><br/>
  <input
  type="text"
  name="email"
  value={userData.email}
  onChange={handleuserOnchange}
  required
  /><br/><br/>
  <label for="usn">USN</label><br/>
  <input
  type="text"
  name="usn"
  value={userData.usn}
  onChange={handleuserOnchange}
  required
  /><br/><br/>

  <label for="sem">Sem</label><br/>
  <select
  name="sem"
  value={userData.sem}
  onChange={handleuserOnchange}>
    <option selected="" value="default">default</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option  value="3">3</option>
    <option  value="4">4</option>
  </select><br/><br/>

  <label for="gender">Gender</label><br/>
  <input 
  type="radio"
  name="gender" 
  value="Rather Not Say" 
  onChange={handleuserOnchange} 
  checked={userData.gender==="Rather Not Say"}
  />Rather Not Say<br/>

  <input 
  type="radio"
  name="gender" 
  value="Male" 
  onChange={handleuserOnchange} 
  checked={userData.gender==="Male"}
  />Male<br/>

  <input 
  type="radio"
  name="gender" 
  value="Female" 
  onChange={handleuserOnchange} 
  checked={userData.gender==="Female"}
  />Female<br/><br/>


  <label for="lang">Languages Known</label><br/>
  <input 
  type="checkbox"
  name="lang"
  value="Konkani"
  onChange={handleuserOnchange}
  />Konakani<br/>
  <input 
  type="checkbox"
  name="lang"
  value="Kannada"
  onChange={handleuserOnchange}
  />Kannada<br/>
  <input 
  type="checkbox"
  name="lang"
  value="Hindi"
  onChange={handleuserOnchange}
  />Hindi<br/>

  <button type="submit" onClick={handleRegsubmit}>Register</button><br/>

</form>

</div>
        


       

      ):(null)
      }
    </div>
  );
}

export default App;
