console.log('funguju!');

const updateSkill = (id, uroven) => {
    const postup = document.querySelector(`#${id} .skill__progress`);
    const hodnota = document.querySelector(`#${id} .skill__value`);

    if (uroven >= 0 && uroven <= 100) {
        postup.style.width = `${uroven}%`;
        hodnota.textContent = `${uroven} / 100`;
    } else {
        document.body.innerHTML+='Zadej číslo v rozsahu od 0 do 100.';
    }
};


const html = prompt('Zadej úroveň v HTML (0 - 100):');
const css = prompt('Zadej úroveň v CSS (0 - 100):');
const javascript = prompt('Zadej úroveň v JavaScriptu (0 - 100):');

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', javascript);
