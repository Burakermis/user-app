import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        console.log("constructor");
    }
    componentDidMount = () => {
        // API istekleri
        console.log("componentDidMount");
        this.setState({
            a: 20
        })
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        // update yapıldıktan hemen sonra componentDidUpdate'den önce çalışır
        console.log("shouldComponentUpdate");
    }
    componentDidUpdate = (prevProps, prevState) => {
        // update yapıldıktan hemen sonra çalışır
        console.log("componentDidUpdate");

    }
    componentWillUnmount() {
        // component kaldırmadan hemen önce çalışır.
        console.log("componentDidUpdate");
    }


    render() {
        console.log("render");
        return (
            <div>

            </div>
        )
    }
}
export default Test;
