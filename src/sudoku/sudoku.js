import Cell9 from "../components/9cell";
import $ from 'jquery'
import React from 'react';
import './sudoku.css';

class Sudoku extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            solution: [
                [8, 3, 5, 4, 1, 6, 9, 2, 7],
                [2, 9, 6, 8, 5, 7, 4, 3, 1],
                [4, 1, 7, 2, 9, 3, 6, 5, 8],
                [5, 6, 9, 1, 3, 4, 7, 8, 2],
                [1, 2, 3, 6, 7, 8, 5, 4, 9],
                [7, 4, 8, 5, 2, 9, 1, 6, 3],
                [6, 5, 2, 7, 8, 1, 3, 9, 4],
                [9, 8, 1, 3, 4, 5, 2, 7, 6],
                [3, 7, 4, 9, 6, 2, 8, 1, 5]
            ],
            current: [
                [8, 0, 5, 4, 1, 6, 0, 2, 7],
                [2, 9, 0, 0, 5, 0, 4, 3, 1],
                [4, 0, 0, 2, 0, 3, 0, 5, 0],
                [0, 6, 9, 1, 3, 0, 0, 8, 2],
                [1, 0, 0, 6, 7, 8, 0, 4, 0],
                [7, 4, 8, 5, 2, 0, 1, 6, 3],
                [6, 0, 0, 7, 8, 0, 0, 9, 4],
                [0, 8, 1, 3, 0, 5, 2, 0, 6],
                [3, 7, 4, 0, 6, 2, 8, 0, 5]
            ],
            selectedCell1: null,
            selectedCell9: null,
        };
    }


    handleClick(e, c9, c1) {
        console.log('fff', e.target);
        $('.cell1').css('background', 'rgb(255, 247, 238)');
        e.target.style.background = 'rgb(205, 157, 238)';
        this.setState({
            selectedCell1: c1,
            selectedCell9: c9,
        });
        console.log(c1, c9)

    }


    render9Cell(i) {
        return (< Cell9 solution9={this.state.solution[i]}
            current9={this.state.current[i]}
            currentCell1={this.state.currentCell1}
            currentCell9={this.state.currentCell9}
            c9={i}
            onClick={this.handleClick}
        />
        );
    }

    updateSudoku(i) {
        const curr = this.state.current.slice();
        // curr[this.state.selectedCell9][this.state.selectedCell1] = i;
        console.log(this.state.current[this.state.selectedCell9][this.state.selectedCell1] );
        console.log(this.state.solution[this.state.selectedCell9][this.state.selectedCell1] );
        
        if (this.state.current[this.state.selectedCell9][this.state.selectedCell1] != this.state.solution[this.state.selectedCell9][this.state.selectedCell1]) {
            this.setState({
                current: curr,
            })
        }

    }

    render() {

        return (
            <div>
                <div className='options'>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 1 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 2 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 3 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 4 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 5 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 6 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 7 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 8 </button>
                    <button onClick={(e) => this.updateSudoku(e.target.innerText)}> 9 </button>
                </div>
                <div className='sudoku' >
                    <div className="sudoku-row" >
                        {this.render9Cell(0)}
                        {this.render9Cell(1)}
                        {this.render9Cell(2)}
                    </div>
                    <div className="sudoku-row" >
                        {this.render9Cell(3)}
                        {this.render9Cell(4)}
                        {this.render9Cell(5)}
                    </div>
                    <div className="sudoku-row" >
                        {this.render9Cell(6)}
                        {this.render9Cell(7)}
                        {this.render9Cell(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sudoku;