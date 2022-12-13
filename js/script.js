// Array con dentro gli oggetti e le info date
let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carrol",
        role: "Chief Editor",
        img: "angela-carrol-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
]

const listContainer = document.querySelector(`.worker-list`);

let element = ``;

// Creo un ciclo per visualizzare singolarmete i valori
for (let i = 0; i < team.length; i++){

    let worker = team[i];

    let element = `<li class="list-item">${worker.name}, ${worker.role}, ${worker.img}</li>`;
    
    listContainer.innerHTML += element;

    // console.log(`${worker.name} ${worker.role} ${worker.img}`);
}
