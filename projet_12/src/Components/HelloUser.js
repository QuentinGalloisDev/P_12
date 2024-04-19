import React from 'react'
import data from '../data'

export default function HelloUser() {
    var day = data.USER_AVERAGE_SESSIONS[0].sessions[0].day
    var date = new Date(2024, 0, day)
    var nomJour = date.toLocaleDateString('fr-FR', { weekday: 'long' });
    return (
        <div className='hello_user'>
            <h1>Bonjour <span className='user_name'>{data.USER_MAIN_DATA[0].userInfos.firstName}</span></h1>
            <p>Félicitation... Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}
