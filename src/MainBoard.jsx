import React, {useState} from "react";
import Card from "./Card";
import Column from "./Column";

const initialCardState = {
    // 0: {status:"ToDo", taskDescription: "Create Add Card button"},
    // 1: {status:"ToDo", taskDescription:"Add Card button opens form to enter task description"},
    // 2: {status:"ToDo", taskDescription:"Add Card form has Create button that adds card to 'To Do' column"},
    // 3: {status:"Done", taskDescription: "Make prop so cards can have unique messages"},
    // 4: {status:"Done", taskDescription:"Add Headers to the columns "},
    // 5: {status:"Done", taskDescription:"Merge Practice"},
    // 6: {status:"Done", taskDescription:"Add 'Next' button to Card to change status"},
    // 7: {status:"Done", taskDescription:"Add a 'Back' button to reverse the status"},
    8: {status:"In Progress", taskDescription:"Connect Next/Back buttons status to rendering in that column"}

    // <Card status="ToDo"  taskDescription="Create Add Card button"/>,
    // <Card status="ToDo"  taskDescription="Add Card button opens form to enter task description"/>,
    // <Card status="ToDo"  taskDescription="Add Card form has Create button that adds card to 'To Do' column"/>,
    // <Card status="Done"  taskDescription = "Make prop so cards can have unique messages"/>,
    // <Card status="Done"  taskDescription="Add Headers to the columns "/>,
    // <Card status="Done"  taskDescription="Merge Practice"/>,
    // <Card status="Done"  taskDescription="Add 'Next' button to Card to change status"/>,
    // <Card status="Done"  taskDescription="Add a 'Back' button to reverse the status"/>,
}

function MainBoard () {
    const [allCards, setAllCards] = useState(initialCardState)
    function updateCardById ({key, status}) {
        console.log("updateCardByKey: ", key, status)
        const updatedCard = {...allCards[key], status}
        const updatedCards = {...allCards, [key]: updatedCard}
        setAllCards (updatedCards)
        console.log("updatedCards: ", updatedCard)
    }


    return (
        <div className="App">
            <div class="column-container">
                <Column id="ToDo" columnName="To Do">
                    {Object.keys(allCards)
                        .map (key => ({key, ...allCards[key]}))
                        .filter ((card) => card.status === "ToDo"  )
                        .map ((card) => {
                            const cardId = card.key
                            return <Card 
                                key={cardId}
                                cardId={cardId}
                                updateStatus={updateCardById}
                                status={card.status}
                                taskDescription={card.taskDescription}/>
                            }
                        )
                    }
                </Column>

                <Column id="In Progress" columnName="In Progress">
                    {Object.keys(allCards)
                        .map (key => ({key, ...allCards[key]}))
                        .filter( (card) => card.status === "In Progress"  )
                        .map ((card) => {
                            const cardId = card.key
                            return <Card 
                                key={cardId}
                                cardId={cardId}
                                updateStatus={updateCardById}
                                status={card.status}
                                taskDescription={card.taskDescription}/>
                            }
                        )
                    }
                </Column>

                <Column id="Done" columnName="Done">
                    {Object.keys(allCards)
                        .map (key => ({key, ...allCards[key]}))
                        .filter( (card) => card.status === "Done"  )
                        .map ((card) => {
                            const cardId = card.key
                            return <Card 
                                key={cardId}
                                cardId={cardId}
                                updateStatus={updateCardById}
                                status={card.status}
                                taskDescription={card.taskDescription}/>
                            }
                        )
                    }
                </Column>
            </div>
        </div>
    );
    
}

// TODO:
// - Find a UUID package for generating IDs for the cards
// - Create "Add Card" button
// - Create a 'Delete Card' button with warning popup
// - Make Card drag-n-droppable
// - Learn how to make React Tables, refactor columns
// - Add columns dynamically with user-input names

export default MainBoard;