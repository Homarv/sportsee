import { BarChart, Bar, XAxis, Legend, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { MOCK_USER_ACTIVITY_18 } from '../mock/mock';

const dataActivity = MOCK_USER_ACTIVITY_18;

const Barchart = () => {

 // const minKilogram = Math.min(...dataActivity.sessions.map(session => session.kilogram));

  const maxKilogram = Math.max(...dataActivity.sessions.map(session => session.kilogram));

  // Fonction pour formater les dates
  const formatXAxis = (value) => {
    const dateParts = value.split('-');
    const lastPart = dateParts[2].replace(/^0+/, ''); // Supprime les zéros initiaux
    return lastPart;
  };

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

  return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart className="barchart"
         data={dataActivity.sessions} 
         barSize={10}
         barGap={15}
        >
          <XAxis 
            dataKey="day" 
            dy={16} 
            tickLine={false}
            tickFormatter={formatXAxis} // Utilisez la fonction de formatage personnalisée pour les dates
          />          
          <YAxis dataKey="kilogram"  
            tickCount={3}
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={[0 , maxKilogram + 5]} // Utilisez les valeurs minimale et maximale calculées avec des marges
          />
          <CartesianGrid vertical={false} strokeDasharray="4 2" />
          <Tooltip content={<CustomTooltip/>} />  
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
      </ResponsiveContainer>
  );
};

export default Barchart;