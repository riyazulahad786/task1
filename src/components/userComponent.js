import React, { Component } from 'react'
import './userComponent.css';

export default class userComponent extends Component {
    render() {
        return (
            <div className='responsive-web'>
              Card-{this.props.color}  
            <h1>dubai</h1>
            </div>
        )
    }
}