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
                        <Card taskDescription="Create Add Card button"></Card>
                        <Card taskDescription="Add Card button opens form to enter task description"></Card>
                        <Card taskDescription="Add Card form has Create button that adds card to 'To Do' column"></Card>
                    </Column>

                    <Column columnName="In Progress">
                    <Card taskDescription="Add 'Next' button to Card to change status"></Card>
                    </Column>

                    <Column columnName="Done">
                        <Card taskDescription = "Make prop so cards can have unique messages"/>
                        <Card taskDescription="Add Headers to the columns "/>
                        <Card taskDescription="Merge Practice"></Card>
                    </Column>
                </div>
            </div>
        );
    }
}

// TODO:
// - Create "Add Card" button
// - Create a 'Delete Card' button with warning popup
// - Make Card drag-n-droppable
// - Learn how to make React Tables, refactor columns
// - Add columns dynamically with user-input names

export default MainBoard;