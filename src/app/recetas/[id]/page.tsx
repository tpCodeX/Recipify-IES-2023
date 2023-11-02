"use client"
import React, { useState } from "react";
import CopyToClipboardButton from "@/app/api/copyClipboard/page";
import { useEffect } from "react";
import axios from "axios";
import './page.css';
import { useSession } from "next-auth/react";

const Recipe = ({ params }: { params: { id: string } }) => {
    const [idRecipe, setIdRecipe] = useState(0)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        if (
            params.id
        ) {
            axios
                .get(`http://localhost:3000/api/userback/recetas/${params.id}`)
                .then((res) => {
                    setIdRecipe(
                        res.data.id
                    )
                    setTitle(res.data.title);
                    setPhoto(res.data.photo);
                    setDescription(res.data.description)
                    setCategoria(
                        res.data.categoria.name
                    );
                    setAuthor(
                        res.data.author.name
                    );
                });
        }
    }, []);
    return (
        <div className="sm:w-[1000px] bg-red-500 m-auto h-screen flex flex-col items-center text-left">
            <div className="rounded-full h-[300px] w-[300px] overflow-hidden">
            <img src={photo} alt="recipe photo" className="object-contain" />
            </div>
            <p>Titulo: {title}</p>
            <p>Descripcion: {description}</p>
            <p>Categoria : {categoria}</p>
            <p>Author: {author}</p>
            <CopyToClipboardButton url={`https://www.localhost:3000/recetas/${
params.id
}`} />

      <br></br>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.localhost:3000/recetas/${
params.id
}`} target="_blank">
        Facebook
      </a>
      
      <br></br>
      <a href={`https://twitter.com/intent/tweet?url=http://localhost:3000/recetas${
params.id
}`} target="_blank">
        Twitter
      </a>
      <br></br>
      <a href={`https://wa.me/?text=https://www.localhost:3000/recetas${
params.id
}`} target="_blank">
        WhatsApp
      </a> 
        </div>
    );
};

export default Recipe; 