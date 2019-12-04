const divButtons = document.querySelector('.divButtons');
const divOvelser = document.querySelector('.divOvelser');
const spGruppe = document.querySelector('#spGruppe');
const inpReps = document.querySelector('#inpReps');
const inpMotstand = document.querySelector('#inpMotstand');
const btnLeggTil = document.querySelector('#btnLeggTil');
const tOkt = document.querySelector('#tOkt>tbody');
const spMostand = document.querySelector('#spMostand');


let valgtGruppe;
let valgtOvelse;

let okt = [];


const muskelgrupper = [{
    navn: 'Armer',
    ovelser: ['Bicepscurl med stang', 'Fransk press']
  },
  {
    navn: 'Skuldre',
    ovelser: ['Stående militærpress', 'Sidehev']
  },
  {
    navn: 'Ben',
    ovelser: ['Knebøy', 'Leg extension', 'Leg curl']
  },
  {
    navn: 'Rygg',
    ovelser: ['Nedtrekk', 'Roing']
  },
  {
    navn: 'Bryst',
    ovelser: ['Benkpress', 'Flies', 'Push up']
  },
];

for (let i = 0; i < muskelgrupper.length; i += 1) {
  divButtons.innerHTML += `
      <button onclick=velgGruppe(${i})>${muskelgrupper[i].navn}</button>
    `;
}


const velgGruppe = (gruppeIndex) => {

  // Setter valgtGruppe til den valgte gruppen.
  valgtGruppe = gruppeIndex;

  // Sletter øvelser som sto på nettsiden og skriver ut øvelser til muskelgruppen som er trykket på
  divOvelser.innerHTML = ``;
  for (let j = 0; j < muskelgrupper[gruppeIndex].ovelser.length; j += 1) {
    divOvelser.innerHTML += `
        <button onclick=velgOvelse(${gruppeIndex},${j})>${muskelgrupper[gruppeIndex].ovelser[j]}</button
      `;
  }
  spGruppe.innerHTML = muskelgrupper[gruppeIndex].navn;
  spOvelse.innerHTML = `Velg en øvelse`;
  btnLeggTil.disabled = true;
  inpReps.disabled = true;
  inpMotstand.disabled = true;
}

const velgOvelse = (gruppeIndex, ovelseIndex) => {

  // Setter valgtOvelse til den valgte øvelsen.
  valgtOvelse = ovelseIndex;
  spOvelse.innerHTML = muskelgrupper[valgtGruppe].ovelser[valgtOvelse];
  inpReps.disabled = false;
  inpMotstand.disabled = false;
  btnLeggTil.disabled = false;
}

btnLeggTil.onclick = () => {
  okt.push({
    gruppe: valgtGruppe,
    ovelse: valgtOvelse,
    reps: Number(inpReps.value),
    motstand: Number(inpMotstand.value),
  });
  skrivUtOkt();
}

const skrivUtOkt = () => {
  tOkt.innerHTML = ``;
  let motstand = 0;
  for (const i in okt){
    tOkt.innerHTML += `
        <tr>
          <td>${Number(i) + 1}</td>
          <td>${muskelgrupper[okt[i].gruppe].navn}</td>
          <td>${muskelgrupper[okt[i].gruppe].ovelser[okt[i].ovelse]}</td>
          <td>${okt[i].reps}</td>
          <td>${okt[i].motstand} kg</td>
        </tr>
      `
      motstand += okt[i].reps * okt[i].motstand
  }
  spMostand.innerHTML = motstand + " kg";
};