import { useState, useEffect } from 'react'
const DailyActivity = () => {
    fetch(`http://localhost:3000/user/12/activity  `)
        .then(response => response.json())
        .then(activity => {
            console.log(activity.data.sessions)


        })
}
export default DailyActivity