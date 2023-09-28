import { BarChart, Bar, XAxis, Legend, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Modele from '../models/Modele';

/**
 * Composant de graphique à barres pour l'activité quotidienne.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.activityData - Données de l'activité quotidienne.
 * @returns {JSX.Element} Élément JSX représentant le graphique à barres.
 */


const Barchart = ({ activityData }) => {

  // calcul le poids maximal de l'utilisateur 
  const maxKilogram = Math.max(...activityData.sessions.map(session => session.kilogram));
  // Initialise le modèle de données
  let modele = new Modele();
  const updateData = modele.formatdate(activityData);

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
      const data = payload[0].payload; // Récupérer les données du point de données survolé
      return (
        <div className="custom-tooltip-barchart">
          <p>{data.kilogram} kg</p>
          <p>{data.calories} Kcal</p>
        </div>
      );
    }
    return null;
  };

  // Rendu du composant
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
        // tickFormatter={} // Utilisez la fonction de formatage personnalisée pour les dates
      />
      <YAxis
        dataKey="kilogram"
        tickCount={3}
        orientation="right"
        tickLine={false}
        axisLine={false}
        domain={[0, maxKilogram + 5]} // Utilisez les valeurs minimale et maximale calculées avec des marges
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
          if (value === 'calories') {
            return `Calories brûlées (kCal)`;
          }
          return `Poids (kg)`;
        }}
      />
      <text
        x={20}
        y={20}
        textAnchor="start"
        dominantBaseline="hanging"
      >
        Activité quotidienne
      </text>
    </BarChart>
  );
};

export default Barchart;
