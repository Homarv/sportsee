import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { MOCK_USER_PERFORMANCE_18 } from '../mock/mock';

console.log(MOCK_USER_PERFORMANCE_18);

const Radarchart = () => {

  const kindLabels = Object.values(MOCK_USER_PERFORMANCE_18.kind); // Obtenez les labels à partir de l'objet kind

  return (
    <ResponsiveContainer width={250} height={250}>
        <RadarChart 
          cx="50%" 
          cy="50%" 
          outerRadius="60%" 
          data={MOCK_USER_PERFORMANCE_18.data}
          style={{ backgroundColor: 'black', borderRadius: '20px' }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10, stroke: 'white' }} tickFormatter={(value) => kindLabels[value - 1]} />
          <Radar name='performance' dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
     </ResponsiveContainer>
  );
};

export default Radarchart;