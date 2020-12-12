import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

const board = {
    columns: [
      {
        id: 1,
        title: "Assignmenets",
        cards: [
          {
            id: 1,
            title: "OSSD Assignment",
            description: "Submit by next Monday."
          },
          {
            id: 2,
            title: "ML Assignment",
            description: "Today is the deadline"
          },
          {
            id: 3,
            title: "CNS Assignment",
            description: "Submit by next class."
          }
        ]
      },
      {
        id: 2,
        title: "Tasks",
        cards: [
          {
            id: 9,
            title: "Submit Internship Document",
            description: "Submit to GUIDE."
          }
        ]
      },
      {
        id: 3,
        title: "Done",
        cards: [
          {
            id: 10,
            title: "Web Technologies Assignment",
            description: "Make a HTML webpage"
          },
          {
            id: 11,
            title: "Complete CoCubes Assignment",
            description: "Assignment based on C/C++"
          }
        ]
      }
    ]
  };

  function ControlledBoard() {
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);
  
    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }
  
    return (
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
    );
  }
  
  function UncontrolledBoard() {
    return (
      <Board
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={draftCard => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        onCardNew={console.log}
      />
    );
  }
  
  function Kabana() {
    return (
      <>
        <h4>College Work-</h4>
        <UncontrolledBoard />
      </>
    );
  }

  export default Kabana;