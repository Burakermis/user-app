import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider, Consumer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state, // spread operator 
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state, // spread operator 
        users: [...state.users,action.payload]
      }
    default:
      return state
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: "unique-1",
        name: "Hüseyin Ermiş",
        salary: "12000",
        department: "Finans"
      },
      {
        id: "unique-2",
        name: "Burak Ermiş",
        salary: "10000",
        department: "Bilişim"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
  // this.props.children = app.js -> app component
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;