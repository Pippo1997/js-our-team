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
        img: "angela-caroll-chief-editor.jpg"
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

// const listContainer = document.querySelector(`.worker-list`);

// let element = ``;

// Creo un ciclo per visualizzare singolarmete i valori
// for (let i = 0; i < team.length; i++){

//     let worker = team[i];

//     let element = `<li>${worker.name}, ${worker.role}, ${worker.img}</li>`;
    
//     listContainer.innerHTML += element;

    // console.log(`${worker.name} ${worker.role} ${worker.img}`);
// }

//**********BONUS 1 *********

// const listContainer = document.getElementById(`card-container`);

// for (let i = 0; i < team.length; i++){

//     let worker = team[i];

//     listContainer.innerHTML += `
//     <img src="./img/${worker.img}" width="200px"/>
//     <p>${worker.name}</p>
//     <p>${worker.role}</p>
//     `
// }

//**********BONUS 2 *********

function drawTeamWorker(person)
{
    const listContainer = document.getElementById(`card-container`);

    let worker_card=`
    <div class="team-card">
        <div class="team-img">
            <img class="img-fluid" src="./img/${person.img}" alt="${person.img}"/>
        </div>
        <div class="card-text">
            <h4>${person.name}</h4>
            <p>${person.role}</p>
        </div>
    </div>
    `

    listContainer.innerHTML += worker_card
}

for(let i = 0; i<team.length; i++){
    
    let worker = team[i];
    drawTeamWorker(worker);
}