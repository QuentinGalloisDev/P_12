import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

import { USER_MAIN_DATA } from '../data'

// const style = {
//     top: '50%',
//     right: 0,
//     transform: 'translate(0, -50%)',
//     lineHeight: '24px',
// };
// Créer un tableau comprenant la valeur de todayScore * 100
const scaledUserMainData = USER_MAIN_DATA.map(score => ({
    ...score,
    todayScore: score.todayScore * 100
}));

const renderLegend = () => {
    return (
        <p className='legend_text'>{scaledUserMainData[0].todayScore} % de votre objectif</p>
    );
};

export default function Score() {
    return (
        <div className='score'>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    startAngle={180}
                    endAngle={-270}
                    innerRadius={70}
                    barSize={15}
                    data={scaledUserMainData[0]}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 125]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        fill="#FF0000"
                        background
                        dataKey="todayScore"
                        angleAxisId={0}
                        data={[scaledUserMainData[0]]}
                    />
                    <Legend iconSize={10}
                        content={renderLegend}
                        align='center'
                        layout="vertical"
                        verticalAlign="middle"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}
