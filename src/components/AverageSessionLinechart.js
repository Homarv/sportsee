import React, { useState } from "react";
import {
	LineChart,
	XAxis,
	Line,
	Tooltip,
	ReferenceArea,
	YAxis,
} from "recharts";
import Model from "../models/Model";

/**
 * Online graphics component
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.averageSessionsData - The component properties.
 * @returns {JSX.Element} JSX element representing a line chart depicting average session durations.
 */

const AverageSessionLinechart = ({ averageSessionsData }) => {
	const [clickX, setClickX] = useState(null);
	const [showRightBackground, setShowRightBackground] = useState(false);
	const weekDays = ["S", "M", "T", "W", "T", "F", "S", "S"];

	// Initializes the data model
	let model = new Model();
	let updateData = model.addDayZero(averageSessionsData);

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
			return (
				<div className="custom-tooltip-linechart">
					<p className="label">{payload[0].value} min</p>
				</div>
			);
		}
		return null;
	};

	/**
	 * Handles click on the chart.
	 *
	 * @param {Object} event - Click event.
	 */
	const handleClick = (event) => {
		const x = event.activeLabel;
		if (x) {
			setClickX(x);
			setShowRightBackground(true);
		}
	};

	// Component rendering
	return (
		<div style={{ backgroundColor: "red", borderRadius: "10px" }}>
			<LineChart
				data={updateData.sessions}
				margin={{ top: 0, right: 0, left: -65, bottom: -30 }}
				onClick={handleClick}
				width={220}
				height={220}
			>
				<Tooltip content={<CustomTooltip />} position={{ y: 100 }} />
				<XAxis
					dataKey="day"
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: "15px", fill: "white" }}
					dy={-30}
					dx={-10}
					tickFormatter={(value) => weekDays[value]}
				/>
				{showRightBackground && (
					<ReferenceArea
						x1={clickX}
						x2={updateData.sessions.length - 1}
						fill="black"
						fillOpacity={0.1}
						radius={[0, 10, 10, 0]} // Sets the rounded right border
					/>
				)}
				<YAxis
					domain={[-20, 100]}
					axisLine={false}
					tickLine={false}
					tick={true}
					dx={-50}
				/>
				<Line
					type="monotone"
					dataKey="sessionLength"
					name="Session Length"
					stroke="#fff"
					strokeWidth={2}
					dot={{ r: 0, fill: "#8884d8" }}
				/>
				<text
					x="20"
					y="20"
					textAnchor="start"
					dominantBaseline="hanging"
					fill="white"
				>
					Durée moyenne des
				</text>
				<text
					x="20"
					y="40"
					textAnchor="start"
					dominantBaseline="hanging"
					fill="white"
				>
					sessions
				</text>
			</LineChart>
		</div>
	);
};

export default AverageSessionLinechart;
