import axios from "axios";
async function UseCreateTask(task) {
	console.log(task);
	const response = await axios.post("http://localhost:8080/api/tasks", task, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("Task created successfully. Response:", response);
	return response.data;
}

export default UseCreateTask;
