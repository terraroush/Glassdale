export const WitnessHTML = (witnessObj) => {
    return `
    <section id="witness-${witnessObj.id}" class="witness-card">
    <h3>Name: ${witnessObj.name}</h2>
    <p> Statement: ${witnessObj.statements}</p>
  
</section>
    `
}