import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList.js';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>

      {
        animals.map((animal) =>

          <AnimalList
            key={animal.name}
            {...animal}/>

        )
      }


    </main>
  );

}
