import React from 'react'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data'
// importer durée des sessions et jour
export default function Performance() {
    let userAverageSessionsMocked = USER_AVERAGE_SESSIONS[0].sessions

    let averageSessionsForChart = userAverageSessionsMocked.map((averageSession) => {
        let obj = {}
        obj["day"] = dayInLetter(averageSession.day)
        obj["sessionLength"] = averageSession.sessionLength

        return obj
    })
    function dayInLetter(number) {
        switch (number) {
            case 1:
                return "L"
            case 2:
                return "M";
            case 3:
                return "M";
            case 4:
                return "J";
            case 5:
                return "V";
            case 6:
                return "S";
            case 7:
                return "D";

            default:
                break;
        }
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: "#FFFFFF", padding: "2px" }}>
                    <p className="time">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomLegendContent = ({ payload }) => {
        return (
            <div className="custom-legend" style={{ color: "#FFFFFF" }}>
                <p>
                    Durée moyenne des sessions
                </p>
            </div>
        );
    };
    return (
        <div className='sessionLength'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={300}
                    height={100}
                    data={averageSessionsForChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    style={{ backgroundColor: '#FF0000' }}
                >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegendContent />} align='left' verticalAlign='top' wrapperStyle={{ color: '', fontSize: '21px' }} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
