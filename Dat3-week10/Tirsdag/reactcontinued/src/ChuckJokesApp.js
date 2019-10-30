import React, { useEffect, useState } from 'react';

export default function Jokes() {
    const [norrisJoke, setNorrisJoke] = useState("");
    const [dadJoke, setDadJoke] = useEffect("");
    const [getNorris, setGetNorris] = useEffect(false);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(r => r.Json)
            .then(d => setNorrisJoke(d.value))
    }, [getNorris]);


    useEffect(() => {
        const clear = setInterval(() => {
            fetch("https://icanhazdadjoke.com/api", {
                header: {
                    Accept: 'text/plain'
                }
            }).then(r => r.text)
                .then(d => {
                    setDadJoke(d)
                })
        }, 1000);
    }, []);


}