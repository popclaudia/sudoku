import { Cell1 } from "./1cell";
import React from 'react';
import './9cell.css';

class Cell9 extends React.Component {

    renderCell(i) {
        return (<Cell1 // value={this.props.squares[i]}
            solution1 = {this.props.solution9[i]}
            current1 = {this.props.current9[i]}
            c9 = {this.props.c9}
            c1 = {i}
           onClick={this.props.onClick}
          
        />
        );
    }

    render() {

        return (
            <div className='cell9'>
                <div className="cell9-row">
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div className="cell9-row">
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className="cell9-row">
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div>
            </div>
        );
    }

}


export default Cell9;