import {
	BarChart,
	Bar,
	XAxis,
	Legend,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";
import Model from "../models/Model";

/**
 * Bar chart component for daily activity.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.activityData - Daily activity data.
 * @returns {JSX.Element} JSX element representing the bar chart.
 */

const Barchart = ({ activityData }) => {
	// Calculate the user's maximum weight
	const maxKilogram = Math.max(
		...activityData.sessions.map((session) => session.kilogram)
	);
	// Initialize the data model
	let model = new Model();
	const updateData = model.formatdate(activityData);

	/**
	 * Custom component for displaying tooltip information.
	 *
	 * @param {Object} props - Component properties.
	 * @param {boolean} props.active - Indicates whether the tooltip is active.
	 * @param {Object[]} props.payload - Tooltip data.
	 * @returns {JSX.Element|null} JSX element representing the custom tooltip.
	 */

	const CustomTooltip = ({ active, payload }) => {
		if (active) {
			const data = payload[0].payload; // Retrieve data from the hovered data point
			return (
				<div className="custom-tooltip-barchart">
					<p>{data.kilogram} kg</p>
					<p>{data.calories} Kcal</p>
				</div>
			);
		}
		return null;
	};

	// Component rendering
	return (
		<BarChart
			className="barchart"
			width={680}
			height={250}
			data={updateData.sessions}
			barSize={10}
			barGap={15}
		>
			<XAxis
				dataKey="day"
				dy={16}
				tickLine={false}
				// tickFormatter={} // Use the custom formatting function for dates
			/>
			<YAxis
				dataKey="kilogram"
				tickCount={3}
				orientation="right"
				tickLine={false}
				axisLine={false}
				domain={[0, maxKilogram + 5]} // Use calculated minimum and maximum values with margins
			/>
			<CartesianGrid vertical={false} strokeDasharray="4 2" />
			<Tooltip content={<CustomTooltip />} />
			<Bar
				name="Poids (kg)"
				dataKey="kilogram"
				fill="black"
				radius={[20, 20, 0, 0]}
			/>
			<Bar
				name="Calories brûlées (kCal)"
				dataKey={(data) => data.calories / 10} // Divisez la valeur de kilogramme par 10
				fill="red"
				radius={[20, 20, 0, 0]}
			/>
			<Legend
				align="right"
				verticalAlign="top"
				height={80}
				wrapperStyle={{
					top: 15,
					right: 20,
					fontSize: 11,
				}}
				iconSize={12}
				iconType="circle"
				formatter={(value) => {
					if (value === "Calories brûlées (kCal)") {
						return `Calories brûlées (kCal)`;
					}
					return `Poids (kg)`;
				}}
			/>
			<text x={20} y={20} textAnchor="start" dominantBaseline="hanging">
				Activité quotidienne
			</text>
		</BarChart>
	);
};

export default Barchart;
