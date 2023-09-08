import React, { useState } from 'react';
import { LineChart, XAxis, Rectangle, Line, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_USER_AVERAGE_SESSIONS_18 } from '../mock/mock';

console.log(MOCK_USER_AVERAGE_SESSIONS_18.sessions);

const Linechart = () => {
  const [showRightBackground, setShowRightBackground] = useState(false);

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

  const handleClick = (event) => {
    const x = event.activeLabel;
    if (x) {
      setShowRightBackground(true);
    }
  };


  return (
    <ResponsiveContainer width={250} height={250}>
      <LineChart
        data={MOCK_USER_AVERAGE_SESSIONS_18.sessions}
        margin={{ top: 50, right: 0, left: 0, bottom: 5 }}
        style={{ backgroundColor: 'red', borderRadius: '20px' }}
        onClick={handleClick}
      >
        <Tooltip content={<CustomTooltip />} 
          position={{ y: 100 }}
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '10px', fill: 'white' }}
          dy={10}
        />
        {showRightBackground && (
          <Rectangle
            x={140} // Ajustez la position x en fonction de vos besoins
            y={10}
            width={1000} // Ajustez la largeur pour couvrir la partie droite
            height="100%"
            fill="red" // Rouge foncé avec une opacité de 0,2
          />
        )}
        <Line
          type="monotone"
          dataKey="sessionLength"
          name="Session Length"
          stroke="#fff"
          strokeWidth={2}
          dot={{ r: 0, fill: '#8884d8' }} // Affichez le point avec le rayon de 0 pixels (invisible)
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
    </ResponsiveContainer>
  );
};

export default Linechart;





