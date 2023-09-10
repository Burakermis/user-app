import React, { Component } from 'react'
import posed from 'react-pose'

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: { // Element'i uçurmak için kullandık.
            display: "none"
        }
    }
});
class AddUser extends Component {
    state = {
        visible: true,
        name: "",
        department: "",
        salary: ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    changeName = (e) => {
        this.setState({
            name: !this.state.name
        })
    }
    changeDepartment = (e) => {
        this.setState({
            department: !this.state.department
        })
    }
    changeSalary = (e) => {
        this.setState({
            salary: !this.state.salary
        })
    }
    render() {
        const { visible, name, salary, department } = this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">
                    {visible ? "Hide Form" : "Show Form"}
                </button>
                <Animation pose={visible ? "visible" : "hidden"}>
                    <div className="card">
                        <div className="card-header">
                            <h4>Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="id"
                                        placeholder="Enter Name"
                                        className="form-control"
                                        value={name}
                                        onChange={this.changeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        id="department"
                                        placeholder="Enter Department"
                                        className="form-control"
                                        value={department}
                                        onChange={this.changeDepartment}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input
                                        type="text"
                                        name="salary"
                                        id="salary"
                                        placeholder="Enter Salary"
                                        className="form-control"
                                        value={salary}
                                        onChange={this.changeSalary}
                                    />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                </Animation>
            </div>
        )
    }
}
export default AddUser;
