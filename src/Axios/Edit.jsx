import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Edit = () => {
    const [value,setValue]=useState({name:"",email:"",username:""})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>setValue(res.data))
    },[])

    function handle(e){
        e.preventDefault()
        axios.put('http://localhost:3000/users/'+id,value)
        .then(res=>console.log(res))
        navigate('/')
    }
  return (
    <div className='Create'>
        <form onSubmit={handle}>
        <h1>Update Users</h1>      
        <input type="text" placeholder="Enter your Name" name="name" value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /><br />
        <input type="text" name="username" placeholder="Enter username" value={value.username} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /> <br />
        <input value={value.email} name="email" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} type="email" placeholder="Enter your Email"/><br />
        <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default Edit
