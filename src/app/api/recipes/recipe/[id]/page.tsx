"use client"
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Recipe = ({ params }: { params: { id: string } }) => {
  const [idRecipe,setIdRecipe]=useState(0)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [rating, setRating] = useState(0);
  const [habilitar,setHabilitar]=useState(false)
  const {data: session}= useSession()
  const [reviewAuthor, SetReviewAuthor] = useState<string | false>();

  const handleClick = (value: number) => {
    setHabilitar(true)
    axios.post("http://localhost:3000/api/review",{
      valoracion: value,
      idUsuario:session?.user.id,
      idRecipe:idRecipe
    })
  };

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/api/userback/recipe/${params.id}`, {
          headers: { idUsuario: session?.user.id },
        })
        .then((res) => {
          setIdRecipe(res.data.id)
          setTitle(res.data.title);
          setDescription(res.data.description)
          setCategoria(res.data.categoria.name);
          setAuthor(res.data.author.name);
          setRating(res.data.rating)
          SetReviewAuthor(res.data.hasRating.rating)
        });
    }
  }, []);
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
          <p>{rating}</p>
          <p></p>
          <img style={{width:'100px'}} src="https://acapulcocuatro.com/wp-content/uploads/2016/02/5-estrellas.jpg" alt="imagen" />
          <br />
          {!habilitar && (
        <div>
               {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "active" : ""}`}
          onClick={() => handleClick(star)}
        >{star}</span>
      ))}
        </div>
)}
 {habilitar && (
        <div>
          <p>¡Gracias por tu valoración!</p>
        </div>
      )}
      <h1>Titulo: {title}</h1>
      <h2>Descripcion: {description}</h2>
      <h2>Categoria : {categoria}</h2>
      <br />
      <h3>Author: {author}</h3>
      <h1>{reviewAuthor ? "Tu valoracion "+ reviewAuthor : "No has valorado esta receta"}</h1>
    </>
  );
};

export default Recipe;
