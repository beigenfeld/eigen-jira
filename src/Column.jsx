import React from "react";

const Column = (props) => {
    return (
        <div class="column">
            <div class="column-header">{props.columnName}</div>
            {props.children}
        </div>
    );
};


// class Column extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div class="column">
//                 <div>To Do</div>
//                 {this.props.children[0]}
//             </div>       
//         );
//     }
// }

export default Column;