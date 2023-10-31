"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import ErrorGeneric from '@/components/errorsPage/errorGeneric';
import 'bootstrap/dist/css/bootstrap.min.css';
interface User {
  id: number;
  name:string;
  email:string
  role:string
}

const UserPostPage =  () => {
  const [users, setUsers] = useState<User[]>([]);
  const {data: session}= useSession()
  const [estado, setEstado] = useState(false);
  const [error,setError]=useState<null | string>(null)

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

  useEffect(() => {
    fetchUsers();
  }, [session]);


  const changeAdmin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id=((event.currentTarget.elements.namedItem("id") as HTMLInputElement).value)
    const res = await fetch("http://localhost:3000/api/userback/change/admin",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          }),
      }
    );
    fetchUsers();
  }

  const changeUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id=((event.currentTarget.elements.namedItem("id") as HTMLInputElement).value)
    const res = await fetch("http://localhost:3000/api/userback/change/user",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          }),
      }
    );
    fetchUsers();
  }

  const changeBlocked = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id=((event.currentTarget.elements.namedItem("id") as HTMLInputElement).value)
    const res = await fetch("http://localhost:3000/api/userback/change/blocked",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          }),
      }
    );
    fetchUsers();
  }

  const changePremium = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id=((event.currentTarget.elements.namedItem("id") as HTMLInputElement).value)
    const res = await fetch("http://localhost:3000/api/userback/change/premium",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          }),
      }
    );
    fetchUsers();
  }


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
      <th scope="col">Role</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {estado && users.map((user) => (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
      
        <form onSubmit={changeAdmin}>
        <input type="text" id="id" value={user.id}
        readOnly hidden/>
      <button type="submit">Cambiar a ADMIN</button>
    </form>

    <form onSubmit={changeUser}>
        <input type="text" id="id" value={user.id}
        readOnly hidden/>
      <button type="submit">Cambiar a USER</button>
    </form>

    <form onSubmit={changeBlocked}>
        <input type="text" id="id" value={user.id}
        readOnly hidden/>
      <button type="submit">Cambiar a BLOQUEADO</button>
    </form>

    <form onSubmit={changePremium}>
        <input type="text" id="id" value={user.id}
        readOnly hidden/>
      <button type="submit">Cambiar a PREMIUM</button>
    </form>

        </td>
      </tr>
    ))}

  </tbody>
</table>
    </div>
  );
}

export default UserPostPage
