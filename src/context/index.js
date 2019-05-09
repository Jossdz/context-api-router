import React, { createContext, Component } from 'react'

export const Mycontext = createContext()

export default class MyProvider extends Component{
  state = {
    // user: null
    user: {
      username: 'jossdz',
      hobbies: ['Codear', 'Torturar a los pooobrecitos Alumnos', 'Tocar guitarra'],
      role: 'DABEST',
      img: 'https://pbs.twimg.com/profile_images/1038130866352992256/cbs5l9Ce_400x400.jpg'
    }
  }

  loggout = () => {
    this.setState({
      user: null
    })
  }

  render(){
    return (
      <Mycontext.Provider value={{
        user: this.state.user,
        loggout: this.loggout
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}