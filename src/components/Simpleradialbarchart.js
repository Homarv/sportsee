import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import Modele from '../models/Modele';

/**
 * Composant affichant un graphique radial de barres simples.
 *
 * @component
 * @param {Object} informationData - Les données d'information.
 * @returns {JSX.Element} Élément JSX représentant le graphique radial de barres simples.
 */

const SimpleRadialBarchart = ({ informationData }) => {

  let model = new Modele();
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
      style={{ backgroundColor: '#FBFBFB', borderRadius: '10px' }}
    >
      <RadialBar dataKey="score" cornerRadius={10} />
      <Legend iconSize={0} width={120} height={140} layout="vertical" verticalAlign="top" align="left" />
      <Tooltip />
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
