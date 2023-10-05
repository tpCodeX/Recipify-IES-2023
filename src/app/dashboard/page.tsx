"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import ErrorGeneric from '@/components/errorsPage/errorGeneric';
import 'bootstrap/dist/css/bootstrap.min.css'; 
interface User {
  id: number;
  name: string;
  email:string
}

const UserPostPage =  () => {
  const [users, setUsers] = useState<User[]>([]);
  const {data: session}= useSession()
  const [estado, setEstado] = useState(false);
  const [error,setError]=useState<null | string>(null)
  
  useEffect(() => {
    const fetchUsers = async () => {
      setError(null)
      const response = await fetch('http://localhost:3000/api/userback/dashboard',{
        method: "GET",
        headers: {
          authorization: `${session?.user.accessToken}`,
          "Content-Type":"aplication/json"
        }
      });
      if(response.ok){
        setEstado(true)
        const users= await response.json()
        setUsers(users);
      }else{
        setError(response.status.toString())
      }
    };

    fetchUsers();
  }, [session]);


  if (error!=null){
    return(
      <>
      <ErrorGeneric error={error} />
      </>
    )
  }
  return (
    <div className='container'>
      <h1>Dashboard Usuarios</h1>
  <table className="table ">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {estado && users.map((user) => (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        <button className="btn btn-warning" type="submit">Suspender</button>
        <button className="btn btn-danger " type="submit">Eliminar</button>
        </td>
      </tr>
    ))}

  </tbody>
</table>
    </div>
  );
}

export default UserPostPage
