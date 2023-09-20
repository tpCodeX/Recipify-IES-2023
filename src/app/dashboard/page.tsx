"use client"
import React, { useEffect, useState } from 'react'
import prisma from '@/libs/prisma'

interface User {
  id: number;
  name: string;
}

const UserPostPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/userback/dashboard");
      const users= await response.json()
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPostPage
