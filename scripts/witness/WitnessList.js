import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { WitnessHTML } from "./Witness.js"

export const WitnessList = () => {
    getWitnesses().then(() => {
        const appStateWitnesses = useWitnesses();
        addWitnessToDom(appStateWitnesses)
    })
}

const addWitnessToDom = (witnessCollection) => {
    const contentTarget = document.querySelector(".witnessContainer");

    let HTMLArray = witnessCollection.map((witnessObj) => {
     return WitnessHTML(witnessObj);
 })
 contentTarget.innerHTML = `<h2>Witnesses</h2>` + HTMLArray.join("");
}