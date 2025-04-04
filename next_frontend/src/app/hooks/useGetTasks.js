import axios from "axios";

function UseGetTasks() {
	async function fetchData() {
		try {
			let res = await axios.get("http://localhost:8080/api/tasks");
			let response = res.data;
			console.log(
				"Response Fetched successfully. Response Data:: ",
				response
			);
			return response;
		} catch (error) {
			console.log(error.message);
		}
	}
	return fetchData();
}

export default UseGetTasks;
