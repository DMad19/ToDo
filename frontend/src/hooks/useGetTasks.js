import axios from "axios";
import { transformToFrontendFormat } from "../utils/transform";

function UseGetTasks() {
	async function fetchData() {
		try {
			let res = await axios.get("http://localhost:8080/api/tasks");
			let response = await res.data;
			console.log(
				"Response Fetched successfully. Response Data:: ",
				response
			);
			let responseMW = await transformToFrontendFormat(response);
			console.log("Response Modified to Frontend Format::", responseMW);
			return responseMW;
		} catch (error) {
			console.log(error.message);
		}
	}
	return fetchData();
}

export default UseGetTasks;
