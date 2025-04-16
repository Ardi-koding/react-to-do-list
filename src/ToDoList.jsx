import React, { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState([
		"Buy groceries",
		"Clean the house",
		"Finish React project",
	]);

	const [smallTask, setSmallTasks] = useState("");

	function addTasks() {
		if (smallTask.trim() != "") {
			setTasks((t) => [...t, smallTask]);
			setSmallTasks("");
		}
	}

	function addSmallTask(event) {
		setSmallTasks(event.target.value);
	}

	function deleteTask(index) {
		const newTask = tasks.filter((_, i) => i != index);
		setTasks(newTask);
	}

	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTask = [...tasks];
			[updatedTask[index], updatedTask[index - 1]] = [
				updatedTask[index - 1],
				updatedTask[index],
			];

			setTasks(updatedTask);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updatedTask = [...tasks];

			[updatedTask[index], updatedTask[index + 1]] = [
				updatedTask[index + 1],
				updatedTask[index],
			];

			setTasks(updatedTask);
		}
	}

	return (
		<div className="to-do-list">
			<h2>To-Do-List </h2>
			<div>
				<input
					type="text"
					name=""
					id=""
					placeholder="Enter a task..."
					value={smallTask}
					onChange={addSmallTask}
				/>
				<button onClick={addTasks} className="add-button">
					Add
				</button>
			</div>

			<ol>
				{/* Task displayed here */}
				{tasks.map((task, index) => (
					<li key={index}>
						<span className="text">{task}</span>
						<button
							className="delete-button"
							onClick={() => deleteTask(index)}
							title="Delete Task"
						>
							🗑️
						</button>
						<button
							className="move-button"
							onClick={() => moveTaskUp(index)}
							title="Move Up"
						>
							🔼
						</button>
						<button
							className="move-button"
							onClick={() => moveTaskDown(index)}
							title="Move Down"
						>
							🔽
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

export default ToDoList;
