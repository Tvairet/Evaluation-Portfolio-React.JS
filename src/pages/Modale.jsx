import React from "react";
import { useEffect, useState } from "react"

function Modale () {

    const [user,setUser] = useState([]);
    const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe")
    const json = await res.json();
    setUser(json);
}
    useEffect (() => {
  getUser();  
  })


return (
    <main>
    <article key={user.id}>
        <h2>{user.login}</h2>
        <img src={user.avatar_url} alt="user.login"/>
        <a href="{user.html_url}" target="_blank">
                {user.html_url}
        </a>
    </article>
    </main>
)
}

export default Modale;
