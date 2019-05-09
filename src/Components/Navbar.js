import React from 'react'
import {Link} from 'react-router-dom'
import { Mycontext } from '../context'

export default function Navbar() {
  return (
    <Mycontext.Consumer>
      {({user, loggout})=>{
        console.log(user)
        return (
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            {user ? user.username : ''}
            {user && <button onClick={loggout}>logout</button>}
          </ul>
        </div>
      )}}
    </Mycontext.Consumer>
  )
}
