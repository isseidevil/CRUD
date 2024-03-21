import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>setData(res.data))
    },[])

    function handledel(id){
        axios.delete('http://localhost:3000/users/'+id)
        .then(res=>console.log(res))
        navigate('/')
    }
  return (
    <div className="Home">
        <section className="sec">
            <h1>CRUD</h1>
            <button onClick={()=>navigate('/create')}>Add</button>
        </section>
        <hr />
        <center>
        <table border={1} rules="all" style={{textAlign:'center'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {
                data.length>0 && data.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={`/edit/${item.id}`}><button>Edit</button></Link>
                                <button onClick={()=>handledel(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        </center>
      
    </div>
  )
}

export default Home
