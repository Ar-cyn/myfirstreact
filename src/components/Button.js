/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';


class Button extends React.Component{
    constructor () {
        super()
        this.state = {
            count : 0
     
        }
    }

    addCount = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }


    render (){
        return(
            <div>
                <button onClick={this.addCount}>click me</button>
                <p> counting = {this.state.count}</p>
            </div>
        )
    }
    
};

export default Button
        





