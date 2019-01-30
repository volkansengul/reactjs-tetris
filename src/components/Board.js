import React from 'react';
import {createMatrix} from '../Utils';

export default class Board extends React.Component{

    constructor(){
        super();
        this.draw = this.draw.bind(this);
    }

    draw(){
        this.ctx.fillStyle = '#000';

        this.props.matrix.forEach((row,y)=>{
            row.forEach((col,x)=>{
               //this.ctx.fillStyle = (col===1)?'#ff0000':'#000';
               this.ctx.fillRect(x,y,1,1);
            });
        });

        this.props.piece.forEach((row,y)=>{
            row.forEach((col,x)=>{
                this.ctx.fillStyle = (col===1)?'#ff0000':'#000';
                this.ctx.fillRect(
                    x+this.props.pos.x,
                    y+this.props.pos.y,1,1);
            });
        });
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        if (this.canvas){
            this.ctx = this.canvas.getContext('2d');
            this.ctx.fillStyle = '#000';
            this.ctx.scale(20,20);
            this.ctx.fillRect(0,0,10,20);
        }
        this.draw();
    }

    componentWillReceiveProps(){
        this.draw();
    }

    render(){
        return(
            <canvas
            style={{marginLeft:20, marginTop:20}}
                ref={'canvas'} width={300} height={600}/>
        )
    }

}