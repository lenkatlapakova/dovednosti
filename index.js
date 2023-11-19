console.log('funguju!');
function parseDate(dateString) {
    const casti = dateString.split('.');
    const den = parseInt(casti[0], 10);
    const mesic = parseInt(casti[1], 10);
    const rok = parseInt(casti[2], 10);
    return { den, mesic, rok }; 
}

function promptDatum() {
    const zadejDatum = prompt('Zadej datum ve formátu DD.MM.YYYY:');
    const parsedDate = parseDate(zadejDatum);
    displayDate(parsedDate);
}

function displayDate({ den, mesic, rok }) {
    document.body.innerHTML += `<p>den ${den} </p>
    <p>mesic  ${mesic}</p>
    <p>rok  ${rok}</p>`;
}

promptDatum();



