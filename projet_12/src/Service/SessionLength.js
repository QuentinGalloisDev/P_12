import { useState, useEffect } from 'react'

const SessionLength = () => {
    const [sessions, setSessions] = useState([])
    const getSessions = () => fetch(`http://localhost:3000/user/12/average-sessions`)
        .then(response => response.json())
        .then(session => {
            setSessions(session.data.sessions)
        })
    useEffect(() => {
        getSessions()
    }, [])
    console.log(sessions)
    return sessions
}
export default SessionLength