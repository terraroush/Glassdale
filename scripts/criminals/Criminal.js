export const CriminalHTML = (criminalObj) => {
  return `
    <section id="criminal-${criminalObj.id}" class="card-criminal">
        <h2>${criminalObj.name}</h2>
        <div class="infoBox">
        <div>Age: ${criminalObj.age}</div>
        <div>Crime: ${criminalObj.conviction}</div>
        <div>Term start: ${new Date(
          criminalObj.incarceration.start
        ).toLocaleDateString("en-US")}</div>
        <div>Term end: ${new Date(
          criminalObj.incarceration.end
        ).toLocaleDateString("en-US")}</div>
        </div>
    </section>
    `;
};
