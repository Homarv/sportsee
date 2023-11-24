import React, { useState } from "react";
import {
	LineChart,
	XAxis,
	Line,
	Tooltip,
	ReferenceArea,
	YAxis,
} from "recharts";
import Modele from "../models/Modele";

/**
 * Composant graphique en ligne.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.averageSessionsData - Données des sessions moyennes.
 * @returns {JSX.Element} Élément JSX représentant un graphique en ligne représentant les durées de sessions moyennes.
 */

const Linechart = ({ averageSessionsData }) => {
	const [clickX, setClickX] = useState(null);
	const [showRightBackground, setShowRightBackground] = useState(false);
	const joursSemaine = ["O", "L", "M", "M", "J", "V", "S", "D"];

	// Initialise le modèle de données
	let modele = new Modele();
	let updateData = modele.addDayZero(averageSessionsData);

	/**
	 * Composant personnalisé pour l'affichage des informations de tooltip.
	 *
	 * @param {Object} props - Les propriétés du composant.
	 * @param {boolean} props.active - Indique si le tooltip est actif.
	 * @param {Object[]} props.payload - Données du tooltip.
	 * @returns {JSX.Element|null} Élément JSX représentant le tooltip personnalisé.
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
	 * Gère le clic sur le graphique.
	 *
	 * @param {Object} event - Événement de clic.
	 */
	const handleClick = (event) => {
		const x = event.activeLabel;
		if (x) {
			setClickX(x);
			setShowRightBackground(true);
		}
	};

	// Rendu du composant
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
					tickFormatter={(value) => joursSemaine[value]}
				/>
				{showRightBackground && (
					<ReferenceArea
						x1={clickX}
						x2={updateData.sessions.length - 1}
						fill="black"
						fillOpacity={0.1}
						radius={[0, 10, 10, 0]} // Définit le bord arrondi droit
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

export default Linechart;
