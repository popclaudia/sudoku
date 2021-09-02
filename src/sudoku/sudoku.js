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
                [8, 3, 5, 2, 9, 6, 4, 1, 7],
                [4, 1, 6, 8, 5, 7, 2, 9, 3],
                [9, 2, 7, 4, 3, 1, 6, 5, 8],
                [5, 6, 9, 1, 2, 3, 7, 4, 8],
                [1, 3, 4, 6, 7, 8, 5, 2, 9],
                [7, 8, 2, 5, 4, 9, 1, 6, 3],
                [6, 5, 2, 9, 8, 1, 3, 7, 4],
                [7, 8, 1, 3, 4, 5, 9, 6, 2],
                [3, 9, 4, 2, 7, 6, 8, 1, 5]
            ],
            current: [
                [8, 0, 5, 2, 9, 6, 0, 1, 7],
                [0, 1, 0, 8, 5, 7, 0, 9, 3],
                [0, 2, 7, 0, 3, 1, 6, 0, 8],
                [5, 6, 9, 0, 2, 0, 7, 4, 8],
                [0, 3, 4, 6, 7, 0, 0, 2, 9],
                [7, 8, 2, 5, 0, 9, 0, 6, 3],
                [0, 5, 2, 9, 8, 0, 0, 7, 4],
                [7, 0, 1, 0, 4, 0, 0, 6, 2],
                [3, 0, 4, 0, 7, 0, 8, 1, 0]
            ],
            selectedCell1: null,
            selectedCell9: null,
            clickedCell: null,
            correctValues: 0,
        };
    }


    handleClick(e, c9, c1) {
        console.log('fff', e.target);
        $('.cell1').css('background', 'rgb(255, 247, 238)');
        e.target.style.background = 'rgb(205, 157, 238)';
        this.setState({
            selectedCell1: c1,
            selectedCell9: c9,
            clickedCell: e.target,
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

        console.log(this.state.current[this.state.selectedCell9][this.state.selectedCell1]);
        console.log(this.state.solution[this.state.selectedCell9][this.state.selectedCell1]);
        if (this.state.current[this.state.selectedCell9][this.state.selectedCell1] != this.state.solution[this.state.selectedCell9][this.state.selectedCell1]) {
            const curr = this.state.current.slice();
            curr[this.state.selectedCell9][this.state.selectedCell1] = i;
            console.log(this.state.current[this.state.selectedCell9][this.state.selectedCell1]);
            console.log(this.state.solution[this.state.selectedCell9][this.state.selectedCell1]);
            this.setState({
                current: curr,
            })
            const styledCell = this.state.clickedCell;
            styledCell.style.color = 'darkred'
            this.setState({
                clickedCell: styledCell
            })
            if (this.state.current[this.state.selectedCell9][this.state.selectedCell1] == this.state.solution[this.state.selectedCell9][this.state.selectedCell1]) {
                const styledCellGood = this.state.clickedCell;
                styledCellGood.style.color = 'darkgreen'
                this.setState({
                    clickedCell: styledCellGood
                })

                let count = 0;
                for (let i = 0; i < 9; i++)
                    for (let j = 0; j < 9; j++) {
                        if (this.state.current[i][j] == this.state.solution[i][j]) {
                            count++;
                        }
                    }
                this.setState({
                    correctValues: count
                })
            }
        }




    }

    render() {

        const isWon = () => {
            if (this.state.correctValues == 81) {
                return <h1>You won!</h1>
            }
        }

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

                <div>
                    {
                        isWon()
                    }
                </div>
            </div>
        );
    }
}

export default Sudoku;