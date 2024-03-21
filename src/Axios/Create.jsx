import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Create = () => {
    const [value,setValue]=useState({name:"",email:"",username:""})
    const navigate = useNavigate()

    function handle(e){
        e.preventDefault()
        axios.post('http://localhost:3000/users',value)
        .then(res=>console.log(res))
        navigate('/')
    }
  return (
    <div className='Create'>
        <form onSubmit={handle}>
        <h1>Create Users</h1>      
        <input type="text" placeholder="Enter your Name" name="name" value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /><br />
        <input type="text" name="username" placeholder="Enter username" value={value.username} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /> <br />
        <input value={value.email} name="email" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} type="email" placeholder="Enter your Email"/><br />
        <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default Create
