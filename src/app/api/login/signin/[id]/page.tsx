"use client"
import React from "react";
import UserPerfil from '@/components/perfilUser/userComponent';


// function Profile({params}:{params: {id:string}}) {
const Profile =  ({params}:{params: {id:string}}) => {
  console.log("params:"+params.id)
  return (
    <>
    <UserPerfil id={params.id}/>
    </>
  );
};

export default Profile;
