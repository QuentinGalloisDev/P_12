import React from 'react'
import { USER_MAIN_DATA } from '../data'
import UserKeyData from './UserKeyData'
import calorieIcon from '../Icons/calories-icon.svg'
import proteinIcon from '../Icons/protein-icon.svg'
import carbsIcon from '../Icons/carbs-icon.svg'
import fatIcon from '../Icons/fat-icon.svg'

export default function GalleryUserKeyData() {

    let userKeyData = USER_MAIN_DATA[0].keyData
    userKeyData = Object.entries(userKeyData)
    console.log(userKeyData)

    // mettre les icones associée à chaque UserKeyData suivant le nom de la donnée détecté en condition 
    // et mettre le chemin de l'url en fonction.

    function getIconPath(goalDataName) {
        // Vous pouvez ajouter autant de conditions que nécessaire pour chaque valeur de goalDataName
        if (goalDataName === 'calorieCount') {
            return calorieIcon; // chemin vers l'image associée aux calories
        } else if (goalDataName === 'proteinCount') {
            return proteinIcon; // chemin vers l'image associée aux protéines
        } else if (goalDataName === 'carbohydrateCount') {
            return carbsIcon; // chemin vers l'image associée aux glucides
        } else if (goalDataName === 'lipidCount') {
            return fatIcon; // chemin vers l'image associée aux lipides
        }
    }

    // Créer une fonction avec en param le nom de la goalData pour ajouter Kcal ou g après la valeur numériques
    function addTypeOfNutrients(goalNutrientsName) {
        if (goalNutrientsName === 'calorieCount') {
            return "Kcal";
        } else if (goalNutrientsName === 'proteinCount' || 'carbohydrateCount' || 'lipidCount') {
            return "g";
        }
    }

    // Créer une fonction avec en param le nom de la donnée et la transformer en fr.
    function nutrientTypeFr(nutrientsName) {
        if (nutrientsName === 'calorieCount') {
            return "calories";
        } else if (nutrientsName === 'proteinCount') {
            return "protéines";
        } else if (nutrientsName === 'carbohydrateCount') {
            return "lipides";
        } else if (nutrientsName === 'lipidCount') {
            return "glucides";
        }
        else {
            return "";
        }
    }

    return (
        <ul className='user_key_datas'>
            {userKeyData.map((key) => (

                <li key={key[0]} >
                    {/* Passer les données de keyData en tant que props à UserKeyData */}
                    <UserKeyData
                        children={getIconPath(key[0])}
                        goalData={`${key[1]}${addTypeOfNutrients(key[0])}`}
                        goalDataName={`${nutrientTypeFr(key[0])}`} />

                </li>
            ))}

        </ul>
    )
}
