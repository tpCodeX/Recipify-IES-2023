"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

const Recipe = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);

  const handleMouseEnter = (value: any) => {
    // // Solo se ejecuta si el usuario no ha hecho clic en ninguna estrella
    // if (rating === 0) {
    //   setRating(value);
    // }
  };

  const handleClick = (value: any) => {
    setRating(value);
    
  };

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/api/userback/recipe/${params.id}`)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setAuthor(res.data.author.name);
        });
    }
  }, []);
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Titulo: {title}</h1>
      <h2>Descripcion: {description}</h2>
      <br />
      <h3>Author: {author}</h3>
      <div>
        <br />
      <p>{rating}</p>
          <img style={{width:'100px'}} src="https://acapulcocuatro.com/wp-content/uploads/2016/02/5-estrellas.jpg" alt="imagen" />
          <p>Valoración de la receta</p>
          </div>  
          Eligir valoración   
          <br />
          {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(star)}
          onClick={() => handleClick(star)}
          // onMouseLeave={handleMouseLeave}
        >{star}</span>
      ))}
    </>
  );
};

export default Recipe;
