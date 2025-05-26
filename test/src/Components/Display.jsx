import React from 'react'
import users from './data.json'
export const Display = () => {
    return(
        <>
        {
            users.map((e)=>{
                return(
                    <>
                    <img src={e.profile_photo} alt="Photo" />
                    <h1>{e.username}</h1>

                    <h3>age {e.age}</h3>
                    </>
                )
            })
        }
        </>
    )
}
