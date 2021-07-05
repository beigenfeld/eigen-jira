import React from "react";
import Card from "./Card";
import Column from "./Column"

class MainBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div class="column-container">
                    <Column columnName="To Do">
                    </Column>
                        <Column columnName="In Progress">
                    </Column>
                    <Column columnName="Done">
                        <Card taskDescription = "Make prop so cards can have unique messages"/>
                        <Card taskDescription="Add Headers to the columns "/>
                    </Column>
                </div>
            </div>
        );
    }
}

// TODO:
// - Make Card drag-n-droppable
// - Learn how to make React Tables, refactor columns
// - Add columns dynamically with user-input names

export default MainBoard;