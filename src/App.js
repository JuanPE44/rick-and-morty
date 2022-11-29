

import React, { useEffect, useState} from 'react';
import Personaje from './componentes/Personaje';
import useObserver from './useObserver';

let apiURL = 'https://rickandmortyapi.com/api/character';

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [observer, setElements, entries] = useObserver({
    threshold: 1,
    root: null    
  });   
  
  useEffect(() => {   
    const divObserver = document.querySelectorAll('.observer');
    setElements(divObserver);
  }, [setElements]);

  useEffect(()=> {
    entries.forEach(entry => {      
      if(entry.isIntersecting) {
        fetch(apiURL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          actualizarPersonajes(data.results)
          limpiar(data.info.next);                                        
        })
      }
    });

    const limpiar = (nextpage) => {
      apiURL = nextpage;    
    }

    function actualizarPersonajes(data) {
      setPersonajes(personajes.concat(data));
    }

  }, [entries]);


  return (
    <div className='App'>
      <header className='header'>
        <h1 className='header-titulo'>Rick and Morty</h1>
      </header>
      <div className='contenedor-personajes'>
        {
          personajes.map(personaje => {
            return (
              <Personaje 
                key={personaje.id}
                imagen={personaje.image}
                nombre={personaje.name}
                especie={personaje.species}
                estado={personaje.status}
              />              
            )
          })
        }
      </div>
      <div className='observer'></div>
    </div>
  );
}

export default App;
