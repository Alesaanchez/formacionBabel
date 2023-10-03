import {useState} from 'react'

function Objetos() {
    const [user, setUser] = useState ({
        username: "",
        email: "", 
        role: "GUEST",
    })

    function handleLogin(){
        setUser (prevUser   => {
            const newUser = {...prevUser}
            newUser.username ="Jhon Doe"
            newUser.email ="esteeselcorre@gmail.com"
            newUser.role = "ADMIN"

            return newUser
        }
            )

        const newUser2 = {
           username :"Jhon Doe",
           email: "esteeselcorre@gmail.com",
           role: "ADMIN"
        }
        setUser (newUser2)

    }

    function handleLogout () {
        setUser(defaultUser)
    }

    function handleChangeRole () {
        setUser(prevUser => {
            return {
                ...prevUser,
                role: "USER"
            }
        })
    }

    function handleDataChange (prop, val) {
        console.log(user[prop])
        setUser(prevUser =>{
            return {
                ...prevUser, 
                [prop] : val
            }
        })
        }
    



    return (
        <div>
            <h4>{user.role}</h4>
            <p>{user.username} {user.email}</p>
            <button onClick={handleLogin}> log ing</button>
            <button onClick={handleLogout}> log out</button>
            <button onClick={handleChangeRole}> CAMBIAR ROLE</button>
            <button onClick={handleDataChange}> CAMBIAR email</button>
        </div>
    )


}
export default Objetos