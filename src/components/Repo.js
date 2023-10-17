import { useState, useEffect } from 'react';

function Repo() {

    const [ repos, setRepos ] = useState([]);

   useEffect (()=> {
        fetch('https://api.github.com/users/rudiukhanna/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
   }, []);

   return <>
   <h2>My GitHub repositories</h2>
   <ul>{repos.map((repo => (
        <li key={repo.id}>
            <a href={repo.html_url}
               target='_blank'
               rel="noopener noreferrer">{repo.name}
            </a>
        </li>
   )))}</ul>
   </>

}

export default Repo;