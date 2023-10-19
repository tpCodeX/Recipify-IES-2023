"use client"

import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CopyToClipboardButton from "@/app/api/copyClipboard/page";

const Recipe = ({ params }: { params: { id: string } }) => {

  const [idRecipe, setIdRecipe] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [rating, setRating] = useState(0);
  const [habilitar, setHabilitar] = useState(false);
  const { data: session } = useSession();
  const [url, setUrl] = useState("");

  //useEffect(() => {
  //  setUrl(router.pathname);
  //}, [router.pathname]);

  const handleClick = (value: number) => {
    setRating(value);
    setHabilitar(true);
    axios
      .post("http://localhost:3000/api/review", {
        valoracion: value,
        idUsuario: session?.user.id,
        idRecipe: idRecipe,
      })
      .then((res) => {
        setRating(5);
      });
  };

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/api/userback/recipe/${params.id}`)
        .then((res) => {
          setIdRecipe(res.data.id);
          setTitle(res.data.title);
          setDescription(res.data.description);
          setCategoria(res.data.categoria.name);
          setAuthor(res.data.author.name);
        });
    }
  }, []);

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <p>{rating}</p>
      <p></p>
      <img
        style={{ width: "100px" }}
        src="https://acapulcocuatro.com/wp-content/uploads/2016/02/5-estrellas.jpg"
        alt="imagen"
      />
      <br />
      {!habilitar && (
        <div>
          {stars.map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "active" : ""}`}
              onClick={() => handleClick(star)}
            >
              {star}
            </span>
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
      <CopyToClipboardButton url={`http://localhost:3000/api/recipes/recipe/${params.id}`} />

      <br></br>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.localhost:3000/api/recipes/recipe/${params.id}`} target="_blank">
        Facebook
      </a>
      
      <br></br>
      <a href={`https://twitter.com/intent/tweet?url=http://localhost:3000/api/recipes/recipe/${params.id}`} target="_blank">
        Twitter
      </a>
      <br></br>
      <a href={`https://wa.me/?text=https://www.localhost:3000/api/recipes/recipe/${params.id}`} target="_blank">
        WhatsApp
      </a>
      </>
  );
};

export default Recipe;
