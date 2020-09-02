import { CriminalHTML } from "./Criminal.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("crimeChosen", (event) => {
  if (event.detail.crimeThatWasChosen !== "0") {
    const matchingCriminals = useCriminals().filter((criminalObj) => {
      return criminalObj.conviction === event.detail.crimeThatWasChosen;
    });
    render(matchingCriminals);
  }
});

eventHub.addEventListener("officerSelected", (event) => {
  const officerName = event.detail.officer;
  const criminals = useCriminals();
  const matchingCriminals = criminals.filter((criminalObject) => {
    if (criminalObject.arrestingOfficer === officerName) {
      return true;
    }
  });
  render(matchingCriminals);
});

const render = (criminalCollection) => {
  const contentTarget = document.querySelector(".criminalsContainer");

  let HTMLArray = criminalCollection.map((criminalObj) => {
    return CriminalHTML(criminalObj);
  });
  // console.log("criminal HTML array", HTMLArray);
  contentTarget.innerHTML = HTMLArray.join("");
};

export const CriminalList = () => {
  getCriminals().then(() => {
    const appStateCriminals = useCriminals();
    render(appStateCriminals);
  });
};
