import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import Modele from "../models/Modele";

/**
 * Composant affichant un graphique radar de performances.
 *
 * @component
 * @param {Object} performanceData - Les données de performance.
 * @param {Array} performanceData - Les données de performance par catégorie.
 * @param {string} performanceData.kind - Le type de performance (ex. "cardio").
 * @param {number} performanceData.value - La valeur de performance pour la catégorie.
 * @returns {JSX.Element} Élément JSX représentant le graphique radar de performances.
 */

const Radarchart = ({ performanceData }) => {
	// Initialise le modèle de données
	const modele = new Modele();
	const updateData = modele.transformPerformance(performanceData);

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
