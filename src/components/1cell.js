import './1cell.css';

export function Cell1(props) {

    return (<button className="cell1"
        onClick={(e) => props.onClick(e, props.c9, props.c1)}
    >
        {props.current1==0 ?  '-': props.current1}
    </button>
    );

}