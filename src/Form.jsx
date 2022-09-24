import React, { useState } from 'react'
const Form = () => {
    const [text, setText] = useState({
        username : "",
        lastname : "",
        email : "",
        password : ""
      })
    const hadleInput =(e)=>{
     const name = e.target.name;
     const value = e.target.value;
     setText({...text, [name] :value})
     localStorage.setItem(text);
    }
    const [records, setRecords] = useState([]);
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newRecord = {...text, id: new Date().getTime().toString()};
      setRecords([...records , newRecord]);
    }
      return (
        <>
        <form action='' onSubmit={handleSubmit}>
          <div>
          <label htmlFor='username' >Firstname</label>
          <input type="text" name='username' id="username" onChange={hadleInput} value={text.username} autoComplete='off'/>
          </div>
          <div>
          <label htmlFor='lastname' >Lastname</label>
          <input type="text" name='lastname' id="lastname" onChange={hadleInput} value={text.lastname} autoComplete='off'/>
          </div>
          <div>
          <label htmlFor='email' >Email</label>
          <input type="email" name='email' id="email" onChange={hadleInput} value={text.email} autoComplete='off'/>
          </div>
          <div>
          <label htmlFor='password' >Password</label>
          <input type="password" name='password' id="password" onChange={hadleInput} value={text.password} autoComplete='off'/>
          </div>
          <div>
          <button type='submit'>Registration</button>
          </div>
          <div>
            {records.map((Element, index)=>{
              return(
              <div className='elements' key={Element.id}>
                <p>{Element.username}</p>
                <p>{Element.lastname}</p>
                <p>{Element.email}</p>
                <p>{Element.password}</p>
                </div>
    )})}
          </div>
        </form>
          
        </>
      )
    }

export default Form