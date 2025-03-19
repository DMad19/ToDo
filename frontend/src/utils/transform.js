function transformToFrontendFormat(response) {
	let responseMW = response.map((task) => {
		let subTasksMW = task?.subTasks?.map((subtask) =>
			subtask.status == "COMPLETED"
				? { ...subtask, status: true }
				: { ...subtask, status: false }
		);
		return { ...task, subtasks: subTasksMW ? subTasksMW : [] };
	});
	return responseMW;
}

function transformSubtasksToBackendFormat(subtasks) {
	let subtasksReqFormat = subtasks?.map((subtask) =>
		subtask.status
			? { ...subtask, status: "COMPLETED" }
			: { ...subtask, status: "NOT_COMPLETED" }
	);
	return subtasksReqFormat;
}

export { transformToFrontendFormat, transformSubtasksToBackendFormat };
