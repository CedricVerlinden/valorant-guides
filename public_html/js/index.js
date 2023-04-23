function createAgentCard(agent, role, number) {
    var agentWrapper = document.querySelector('.featured .agents .bottom');
    
    var agentCardDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var roleDiv = document.createElement('div');
    
    agentCardDiv.classList.add('agent-card');
    agentCardDiv.classList.add(agent);
    nameDiv.classList.add('name');
    roleDiv.classList.add('role');

    agentCardDiv.addEventListener('mouseover', function() {
        mouseOverAgentCard(agent);
    });

    agentCardDiv.addEventListener('mouseout', function() {
        mouseOutAgentCard(agent);
    });
    
    agentCardDiv.addEventListener('click', function() {
        clickAgentCard(agent);
    });

    agentCardDiv.style.backgroundImage = `url('./assets/images/agents/${agent}-20.png')`;
    agentCardDiv.style.backgroundSize = 'cover';


    nameDiv.innerHTML = `<h4>${number}.</h4>` + `<h3>${agent}</h3>`;
    roleDiv.innerHTML = `<img src='./assets/images/roles/${role}.png'>` + `<p class='subheading'>${role}</p>`

    agentCardDiv.appendChild(nameDiv);
    agentCardDiv.appendChild(roleDiv);

    agentWrapper.appendChild(agentCardDiv);
}

function createAgentCards(agents) {
    agents.then(function(result) {
        result.reverse().forEach(function(agent) {
            createAgentCard(agent.name, agent.role, agent.number);
        });
    });
}

function createWeaponCard(weapon, type) {
    var weaponWrapper = document.querySelector('.featured .weapons .bottom');
    
    var weaponCardDiv = document.createElement('div');
    var infoDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var typeDiv = document.createElement('div');
    
    weaponCardDiv.classList.add('weapon-card');
    weaponCardDiv.classList.add(weapon);

    weaponCardDiv.addEventListener('mouseover', function() {
        mouseOverWeaponCard(weapon);
    });
    
    weaponCardDiv.addEventListener('mouseout', function() {
        mouseOutWeaponCard(weapon);
    });
    
    weaponCardDiv.addEventListener('click', function() {
        clickWeaponCard(weapon);
    });

    weaponCardDiv.style.backgroundImage = `url('./assets/images/weapons/${weapon}-20.png')`;
    weaponCardDiv.style.backgroundSize = 'cover';

    infoDiv.classList.add('info');
    nameDiv.classList.add('name');
    typeDiv.classList.add('type');

    nameDiv.innerHTML = `<h3>${weapon}</h3>`;
    typeDiv.innerHTML = "<p class='subheading slash'>//</p>" + `<p class='subheading'>${type}</p>`;

    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(typeDiv);
    weaponCardDiv.appendChild(infoDiv);

    weaponWrapper.appendChild(weaponCardDiv);
}


/* Agent card functionality */
function mouseOverAgentCard(agent) {
    const card = document.querySelector(`.featured .agents .bottom .agent-card.${agent}`);

    card.style.backgroundColor = '#3D1D26';
    card.style.backgroundImage = `url('./assets/images/agents/${agent}.png')`;
    card.style.backgroundPositionX = '100px';
}

function mouseOutAgentCard(agent) {
    const card = document.querySelector(`.featured .agents .bottom .agent-card.${agent}`);

    card.style.backgroundColor = '';
    card.style.backgroundImage = `url('./assets/images/agents/${agent}-20.png')`;
    card.style.backgroundPositionX = '';
}

function clickAgentCard(agent) {
    window.location.href = `./agents/${agent}.html`;
}


/* Weapon card functionality */
function mouseOverWeaponCard(weapon) {
    const card = document.querySelector(`.featured .weapons .bottom .weapon-card.${weapon}`);
    const text = card.querySelector('.info');
    
    card.style.backgroundColor = '#173B3F';
    card.style.backgroundImage = `url("./assets/images/weapons${weapon}.png")`;
    text.style.transform = 'translateY(20px)';
}

function mouseOutWeaponCard(weapon) {
    const card = document.querySelector(`.featured .weapons .bottom .weapon-card.${weapon}`);
    const text = card.querySelector('.info');

    card.style.backgroundColor = '';
    card.style.backgroundImage = `url("./assets/images/weapons${weapon}-20.png")`;
    text.style.transform = '';
}

function clickWeaponCard(weapon) {
    window.location.href = `./weapons/${weapon}.html`;
}