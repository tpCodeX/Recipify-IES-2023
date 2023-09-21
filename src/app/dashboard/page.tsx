"use client"
import React, { useEffect, useState } from 'react'
import prisma from '@/libs/prisma'
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface User {
  id: number;
  name: string;
}

const UserPostPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const {data: session}= useSession()
  const token = session?.user?.accessToken
  console.log("en dashboard")
  console.log(session?.user);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await axios.get('/api/userback/dashboard', {
  //       headers: {
  //         Authorization: `Bearer ${session?.user?.accessToken}`,
  //       },
  //     });
  //     const users= await response.data()
  //     setUsers(users);
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <h1>dashboard</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default UserPostPage
