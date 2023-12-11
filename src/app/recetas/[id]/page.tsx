"use client"
import React, { useState } from "react";
import CopyToClipboardButton from "@/app/api/copyClipboard/page";
import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Recipe = ({ params }: { params: { id: string } }) => {
    const [idRecipe, setIdRecipe] = useState(0)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [photo, setPhoto] = useState("");
    const [rating, setRating] = useState(0);
    const [habilitar, setHabilitar] = useState(false)
    const { data: session } = useSession()
    const [reviewAuthor, SetReviewAuthor] = useState<string | false>();

    const [valoracion,setValoracion]=useState(0)

    const handleClick = (value: number) => {
        setHabilitar(true)
        setValoracion(value)

        axios.get(`http://192.168.1.40:3000/api/userback/recetas/${params.id}`)
        .then((res) => {
            setRating(res.data.rating)
        })


        axios.post("http://192.168.1.40:3000/api/review", {
            valoracion: value,
            idUsuario: session?.user.id,
            idRecipe: idRecipe

        })
    };






    useEffect(() => {
        if (
            params.id
        ) {
            axios
                .get(`http://192.168.1.40:3000/api/userback/recetas/${params.id}`)
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
                    setRating(res.data.rating)
                    SetReviewAuthor(res.data.hasRating.rating)
                });
        }
    }, [valoracion,rating]);



    const stars = [1, 2, 3, 4, 5]



    return (
        <>
            <p>{rating}</p>
            <img style={{ width: '100px' }} src="https://acapulcocuatro.com/wp-content/uploads/2016/02/5-estrellas.jpg" alt="imagen" />
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
            {habilitar && valoracion>0 && (
                <div>
                    <p>¡Gracias por tu valoración!</p>
                    <p>¡Otorgaste {valoracion} puntos!</p>
                </div>
            )}

            <div className="sm:w-[1000px] bg-red-500 m-auto h-screen flex flex-col items-center text-left">
                <div className="rounded-full h-[300px] w-[300px] overflow-hidden">
                    <img src={photo} alt="recipe photo" className="object-contain" />
                </div>
                <p>Titulo: {title}</p>
                <p>Descripcion: {description}</p>
                <p>Categoria : {categoria}</p>
                <p>Author: {author}</p>
                <CopyToClipboardButton url={`https://localhost:3000/recetas/${params.id
                    }`} />
                <p>{reviewAuthor ? "Tu valoracion " + reviewAuthor : "No has valorado esta receta"}</p>

                <br></br>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.192.168.1.40:3000/recetas/${params.id
                    }`} target="_blank">
                    Facebook
                </a>

                <br></br>
                <a href={`https://twitter.com/intent/tweet?url=http://192.168.1.40:3000/recetas${params.id
                    }`} target="_blank">
                    Twitter
                </a>
                <br></br>
                <a href={`https://wa.me/?text=https://www.192.168.1.40:3000/recetas${params.id
                    }`} target="_blank">
                    WhatsApp
                </a>
            </div>
        </>
    );
};

export default Recipe; 