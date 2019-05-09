import React from 'react'
import { Mycontext } from '../context'
import { Redirect } from 'react-router-dom'
export default function UserProfile() {
  return (
    <Mycontext.Consumer>
      {({user})=>
        user ? <div>
        <h1>{user.username}</h1> - <img width='200' src={user.img} alt={user.username}/>
        <hr/>
        {user.hobbies.map(hobbie => <p>{hobbie}</p>)}
      </div> : <Redirect to='/'/>
      }
    </Mycontext.Consumer>
  )
}
