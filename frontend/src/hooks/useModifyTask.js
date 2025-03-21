import axios from "axios";
async function UseModifyTask(task) {
	try {
		console.log(task);
		const response = await axios.put(
			"http://localhost:8080/api/tasks/task",
			{ ...task, status: "NOT_COMPLETED" },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export default UseModifyTask;
