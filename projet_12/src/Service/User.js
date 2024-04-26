import { useState, useEffect } from 'react'

export default function User() {
    const [user, setUser] = useState([])
    // test 12 ,18 et
    const getUser = () => fetch(`http://localhost:3000/user/12`)
        .then(response => response.json())
        .then(user => {

            setUser(user.data.userInfos.firstName)

        })
    useEffect(() => {
        getUser()
    }, [])
    return user
}