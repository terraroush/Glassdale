import { OfficerHTML } from "./Officer.js";
import { useOfficers, getOfficers } from "./OfficerProvider.js";

export const OfficerList = () => {
  getOfficers().then(() => {
    const officerArray = useOfficers();
    // console.log("officer array", officerArray)
    addOfficersToDom(officerArray);
  });
};

const addOfficersToDom = (anOfficerArr) => {
  const domElement = document.querySelector(".officersContainer");

  let HTMLArray = anOfficerArr.map((singleOfficer) => {
    return OfficerHTML(singleOfficer);
  });
  // console.log("HTML Array", HTMLArray);

  domElement.innerHTML = HTMLArray.join("");
};
