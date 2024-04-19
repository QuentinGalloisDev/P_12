import React from 'react'

// importer les données de keydata dans USER_MAIN_DATA 
// et faire un map pour créer une div avec l'icone associé sur chaque donnée du tableau.
// Mettre en param un mot pour l'adresse du chemin src de l'icone 
export default function UserKeyData({ children, goalData, goalDataName }) {

    return (
        <div className='goal_data'>
            <img src={`${children}`} alt={`icone de ${children}`} ></img>
            <p>{goalData} <span>{goalDataName}</span></p>
        </div>
    )
}
