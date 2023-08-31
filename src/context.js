import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider, Consumer


export class UserProvider extends Component {
    state = {
        users: [
          {
            id : 1,
            name : "Hüseyin Ermiş",
            salary : "12000",
            department : "Finans"
          },
          {
            id : 2,
            name : "Burak Ermiş",
            salary : "10000",
            department : "Bilişim"
          }
        ]
    }  
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children} 
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;