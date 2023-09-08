import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_USER_18 } from '../mock/mock';

const data = [
  {
    name: 'Reste',
    score: 100 - MOCK_USER_18.score * 100,
    fill: 'transparent',
  },
  {
    name: 'Score',
    score: MOCK_USER_18.score * 100,
    fill: 'red',
  },
];


const SimpleRadialBarchart = () => {
  return (
    <ResponsiveContainer width={250} height={250}>
      <RadialBarChart  
      cx={125} cy={150} 
      innerRadius={20} 
      outerRadius={140} 
      barSize={10} 
      data={data}
      style={{ backgroundColor: '#FBFBFB', borderRadius: '20px' }}
      >
        <RadialBar dataKey="score" cornerRadius={10} />
        <Legend iconSize={0} width={120} height={140} layout="vertical" verticalAlign="top" align="left" />
      <Tooltip />
      <text
          x="105"
          y="125"
          textAnchor="start"
          dominantBaseline="hanging"
          fill="grey"
        >
          {data[1].score} %
        </text>
      <text
          x="95"
          y="145"
          textAnchor="start"
          dominantBaseline="hanging"
          fill="grey"
        >
          de votre
        </text>
        <text
          x="95"
          y="165"
          textAnchor="start"
          dominantBaseline="hanging"
          fill="grey"
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
    
  );
};

export default SimpleRadialBarchart;