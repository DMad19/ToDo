import axios from "axios";
async function UseDeleteTask(taskid) {
	try {
		const response = await axios.delete(
			`http://localhost:8080/api/tasks/task?taskId=${taskid}`
		);
		return response.data;
	} catch (e) {
		throw new Error("error occured::", e.message);
	}
}

export default UseDeleteTask;
