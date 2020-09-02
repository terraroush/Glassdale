import { useConvictions, getConvictions } from "./ConvictionProvider.js";

const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictionsArray = useConvictions();
    render(convictionsArray);
  });
};
const render = (convictionsCollection) => {
  const crimeNames = convictionsCollection.map((crimeObj) => {
    let crimeNameInArray = crimeObj.name;
    return crimeNameInArray;
  });
  const sortedArray = crimeNames.sort();
  contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${sortedArray.map((crimeStr) => {
                  return `<option>${crimeStr}</option>`;
                })}
            </select>
        `;
};
