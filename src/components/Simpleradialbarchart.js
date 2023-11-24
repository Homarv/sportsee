import { RadialBarChart, RadialBar, Legend } from "recharts";
import Model from "../models/Model";

/**
 * Component displaying a simple radial bar chart.
 *
 * @component
 * @param {Object} informationData - Information data.
 * @returns {JSX.Element} JSX element representing the simple radial bar chart.
 */

const SimpleRadialBarchart = ({ informationData }) => {
	let model = new Model();
	const updateData = model.calculScore(informationData);

	return (
		<RadialBarChart
			width={220}
			height={220}
			cx={110}
			cy={115}
			innerRadius={20}
			outerRadius={140}
			barSize={10}
			data={updateData}
			style={{ backgroundColor: "#FBFBFB", borderRadius: "10px" }}
		>
			<RadialBar dataKey="score" cornerRadius={10} />
			<Legend
				iconSize={0}
				width={120}
				height={140}
				layout="vertical"
				verticalAlign="top"
				align="left"
			/>
			<text
				x="90"
				y="90"
				textAnchor="start"
				dominantBaseline="hanging"
				fill="grey"
			>
				{updateData[1].score} %
			</text>
			<text
				x="80"
				y="110"
				textAnchor="start"
				dominantBaseline="hanging"
				fill="grey"
			>
				de votre
			</text>
			<text
				x="82"
				y="130"
				textAnchor="start"
				dominantBaseline="hanging"
				fill="grey"
			>
				objectif
			</text>
		</RadialBarChart>
	);
};

export default SimpleRadialBarchart;
