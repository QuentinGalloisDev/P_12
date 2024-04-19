import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { USER_PERFORMANCE } from '../data'
// importer durée des sessions et jour
// Je dois faire une boucle dans data qui est dans userPerformance et créer un tableau qui transforme les chiffres dans 
// kind en la string qui correspond dans userPermormance.kind
let user1Data = USER_PERFORMANCE[0].data
let typeOfSport = USER_PERFORMANCE[0].kind
console.log(user1Data)
console.log(typeOfSport)
let userPerformanceForChart = user1Data.map((perf) => {
    const perfForChart = {};
    perfForChart["kind"] = kindOfSport(perf.kind, typeOfSport)
    perfForChart["value"] = perf.value
    return perfForChart
})
// prend en parametre le nombre à transformer et le tableau ou chercher les données
function kindOfSport(number, activityString) {
    switch (number) {
        case 1:
            return activityString[number]
        case 2:
            return activityString[number]
        case 3:
            return activityString[number]
        case 4:
            return activityString[number]
        case 5:
            return activityString[number]
        case 6:
            return activityString[number]

        default:
            break;
    }
}
console.log(userPerformanceForChart)

export default function Performance() {
    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformanceForChart} style={{ backgroundColor: '#282D30' }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar name="user_1" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

kindOfSport.prototype = {
    number: PropTypes.number,
    activityString: PropTypes.array
}