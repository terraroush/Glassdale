import { useConvictions, getConvictions } from "./ConvictionProvider.js";

const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictionsArray = useConvictions();
    render(convictionsArray);
  });

  const render = (convictionsCollection) => {
    const crimeNames = convictionsCollection.map((crimeObj) => {
      let crimeNameInArray = crimeObj.name;
      return crimeNameInArray;
    });
    // console.log(crimeNames);
    contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map((crimeObj) => {
                  const crime = crimeObj.name;
                  return `<option>${crime}</option>`;
                })}
            </select>
        `;
  };
};
