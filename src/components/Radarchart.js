import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import Model from "../models/Model";

/**
 * Component displaying a radar chart of performances.
 *
 * @component
 * @param {Object} performanceData - Performance data.
 * @param {Array} performanceData - Performance data by category.
 * @param {string} performanceData.kind - The type of performance (e.g., "cardio").
 * @param {number} performanceData.value - The performance value for the category.
 * @returns {JSX.Element} JSX element representing the radar chart of performances.
 */

const Radarchart = ({ performanceData }) => {
	// Initializes the data model
	const model = new Model();
	const updateData = model.transformPerformance(performanceData);

	return (
		<RadarChart
			width={220}
			height={220}
			cx="50%"
			cy="50%"
			outerRadius="60%"
			data={updateData}
			style={{ backgroundColor: "black", borderRadius: "10px" }}
		>
			<PolarGrid />
			<PolarAngleAxis dataKey="kind" tick={{ fontSize: 10, stroke: "white" }} />
			<Radar
				name="performance"
				dataKey="value"
				stroke="red"
				fill="red"
				fillOpacity={0.6}
			/>
		</RadarChart>
	);
};

export default Radarchart;
