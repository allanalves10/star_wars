/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from './../../services/api';

import { DetailsColors, DetailsPerson } from './styles';

function Details (){
    const { id } = useParams();

    const [personStarWars, setPersonStarWars] = useState([]);

    useEffect(() => {
        api.get(`/people/${id}`).then(response => {
            setPersonStarWars(response.data);

        })
    }, [])

    return (
        <div>
            <DetailsColors>
                <h3>Lista de Detalhes do Personagem</h3>
            </DetailsColors>
            <DetailsPerson>
                <li key={personStarWars.name}>
                    <h2>Nome: {personStarWars.name}</h2>
                    <h2>Data de Nascimento: {personStarWars.birth_year !== 'unknown'? personStarWars.birth_year : 'Não Informado'}</h2>
                    <h2>Gênero: {personStarWars.gender !== 'n/a' ? personStarWars.gender : 'Não Informado'}</h2>
                    <h2>Altura: {personStarWars.height}cm</h2>
                    <h2>Peso: {personStarWars.mass}Kg</h2>
                    <h2>Cor do Cabelo: {personStarWars.hair_color !== 'n/a' ? personStarWars.hair_color : 'Não Informado'}</h2>
                    <h2>Cor dos Olhos: {personStarWars.eye_color !== 'n/a' ? personStarWars.eye_color : 'Não Informado'}</h2>
                    <h2>Cor da Pele: {personStarWars.skin_color !== 'n/a' ? personStarWars.skin_color : 'Não Informado'}</h2>
                </li>
            </DetailsPerson>
        </div>
    );
}

export default Details;
