import React, {useState} from 'react';
// import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const CharacterContainer = styled.div`
    background-color: rgb(235, 255, 251);
    margin: 0 auto;
    width: 50%;

    section {
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-left: 40%;
        margin-bottom: 10px;

        p {
            margin-left: 5px;
        }
    }
    `


function MainContent(props) {
const { titles, birthYear, mass, gender } = props;
return (
    <CharacterContainer>
        <section>
            <h3>Name: </h3>
            <p>{titles}</p>
       </section>
       <section>
       <h3>Birth Year: </h3>
       <p>{birthYear}</p>
       </section>
       <section>
       <h3>Mass: </h3>
       <p>{mass}kg</p>
       </section>
       <section>
       <h3>Gender: </h3>
       <p>{gender}</p>
       </section>
    </CharacterContainer>
)
}

export default MainContent;