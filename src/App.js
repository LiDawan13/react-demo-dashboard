import React,  { Component } from "react"
import { Button } from '@material-ui/core';

export default class App extends Component{
    handleClick = () => {
        alert('Love you')
    }
    render(){
        return <Button variant="contained" color="primary" onClick={this.handleClick}>Hello World</Button>;
    }

}