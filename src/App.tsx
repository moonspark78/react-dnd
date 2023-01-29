import React, { useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import "./App.css"

const listItems = [
	{
		id: "1",
		name: "Apprendre L'Espagnol"
	},
	{
		id: "2",
		name: "Sport"
	},
	{
		id: "3",
		name: "Netflix & Chill"
	},
	{
		id: "4",
		name: "Repos"
	}
]

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 10,
	margin: `0 50px 15px 50px`,
	background: isDragging ? "#4a2975" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,

	...draggableStyle
})

function App() {
	
	return (
		<div className="App">
			<h1>Drag and Drop</h1>
			<DragDropContext onDragEnd={onDragEnd}>
				
			</DragDropContext>
		</div>
	)
}

export default App
