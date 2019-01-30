import React, {Component} from 'react';
import Board from "./components/Board";

import {createMatrix, createPiece} from "./Utils";

class App extends Component {

    constructor() {
        super();
        this.matrix = createMatrix(10,20);
        this.piece = createPiece();

        this.timer  = 0;
        this.dropCounter = 0;

        this.state = {
            pos: {x:0, y:0}
        };

        this.move = this.move.bind(this);


    }

    move(dir){
        let _pos = this.state.pos;
        if (dir===-1 && _pos.x>0){
            _pos.x--;
            this.setState({
                pos: _pos
            })
        } else if (dir===1 &&
            _pos.x < this.matrix.length-this.piece.length
        ){
            _pos.x++;
            this.setState({
                pos: _pos
            })
        }
    }


    collide(){

    }

    merge(){

    }

    playerDrop = ()=>{
        this.dropCounter = 0;
        let _pos = this.state.pos;
        if (this.collide()){

        }
        if ( _pos.y+this.piece.length < this.matrix.length){
            _pos.y++;

            this.setState({
                pos: _pos
            });
        }
    }

    update = (time=0) => {
        const deltaTime = time-this.timer;
        this.timer = time;
        this.dropCounter += deltaTime;
        if (this.dropCounter>200){
            this.playerDrop();
        }
        requestAnimationFrame(this.update);
    }

    componentDidMount(){
        this.update();
        const self = this;
        document.addEventListener('keyup',function(e){
            console.log(e.keyCode);
            // left 37
            // right 39
            // up 38
            // down 40

            if (e.keyCode===37){
                self.move(-1);
            } else if (e.keyCode===39){
                self.move(1);
            }
        })
    }

    render() {
        return (
            <div>
                <Board
                    matrix={this.matrix}
                    piece={this.piece}
                    pos ={this.state.pos}
                />
            </div>
        );
    }
}

export default App;
