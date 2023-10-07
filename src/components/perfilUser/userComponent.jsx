"use client"
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'; 
function UserPerfil({id}) {
  return (
    <div className="container mt-3 ">
    <div className="card p-3 text-center border border-dark">
      <div className="d-flex flex-row justify-content-center mb-3">
        <div className="image">
          <img src="https://i.imgur.com/hczKIze.jpg" className="rounded-circle" alt="Profile" />
          <span><i className='bx bxs-camera-plus'></i></span>
        </div>
        <div className="d-flex flex-column ms-3 user-details">
          <br />
          <h4 className="mb-0">Zenda Grace</h4>
          {/* <span>Pro Member</span> */}
        </div>
      </div>
      <h4>Editar perfil</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="inputs">
            <label>Nombre</label>
            <input className="form-control" type="text" placeholder="nombre" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputs">
            <label>Email</label>
            <input className="form-control" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputs">
            <label>Password</label>
            <input className="form-control" type="text" placeholder="password" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputs">
            <label>Repetir password</label>
            <input className="form-control" type="text" placeholder="repeat password" />
          </div>
        </div>
      </div>

      <div className="mt-3 gap-2 d-flex justify-content-end">
        <button className="px-3 btn btn-sm btn-outline-danger">Atrás</button>
        <button className="px-3 btn btn-sm btn-primary">Save</button>
      </div>
    </div>
  </div>
  )
}

export default UserPerfil