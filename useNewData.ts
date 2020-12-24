/**
 * Updates the updates object when the drill-down query
 * for a given node type (e.g. GET_SYSTEM, GET_USER etc)
 * returns.
 *
 * @param data the data returned by the drill-down query
 * @param setUpdates SetStateAction on the updates object
 */
export const useNewData = (
	data: CVNode,
	setUpdates: React.SetStateAction<CVNode>
) => {
	// TODO need to add __typename field or add other type guards
	// useEffect(
	// 	() =>
	// 		data
	// 			? setUpdates((prevState: CVNode) => ({
	// 					...prevState,
	// 					...(prevState.__typename === `User`
	// 						? data.user
	// 						: prevState.__typename === `Division`
	// 						? data.division
	// 						: prevState.__typename === `System`
	// 						? data.system
	// 						: null),
	// 			  }))
	// 			: undefined,
	// 	[setUpdates, data]
	// )
}
