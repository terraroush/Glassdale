import { CriminalHTML } from "./Criminal.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalsArray = useCriminals();
    // console.log("criminals Array", criminalsArray)
    addCriminalsToDom(criminalsArray);
  });
};

const addCriminalsToDom = (aCriminalArr) => {
  const domElement = document.querySelector(".criminalsContainer");

  let HTMLArray = aCriminalArr.map((singleCriminal) => {
    return CriminalHTML(singleCriminal);
  });
  // console.log("criminal HTML array", HTMLArray);
  domElement.innerHTML = HTMLArray.join("");
};
