function createAgentCard(parent, cardElement, agent, role, number) {
    var agentWrapper = document.querySelector(parent);
    
    var agentCardDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var roleDiv = document.createElement('div');
    
    agentCardDiv.classList.add('agent-card');
    agentCardDiv.classList.add((agent === 'KAY/O') ? 'kayo' : agent);
    nameDiv.classList.add('name');
    roleDiv.classList.add('role');

    agentCardDiv.addEventListener('mouseover', function() {
        mouseOverAgentCard(cardElement, agent);
    });

    agentCardDiv.addEventListener('mouseout', function() {
        mouseOutAgentCard(cardElement, agent);
    });
    
    agentCardDiv.addEventListener('click', function() {
        clickAgentCard(agent);
    });

    agentCardDiv.style.backgroundImage = (agent === "KAY/O") ? `url('./assets/images/agents/kayo-20.png')` : `url('./assets/images/agents/${agent}-20.png')`;
    agentCardDiv.style.backgroundSize = 'cover';


    nameDiv.innerHTML = `<h4>${number}.</h4>` + `<h3>${agent}</h3>`;
    roleDiv.innerHTML = `<img src='./assets/images/roles/${role}.png'>` + `<p class='subheading'>${role}</p>`

    agentCardDiv.appendChild(nameDiv);
    agentCardDiv.appendChild(roleDiv);

    agentWrapper.appendChild(agentCardDiv);
}

function createAgentCards(parent, cardElement, agents, await) {
    if (await) {
        agents.reverse().forEach(function(agent) {
            createAgentCard(parent, cardElement, agent.name, agent.role, agent.number);
        });
        return;
    }
    
    agents.then(function(result) {
        result.reverse().forEach(function(agent) {
            createAgentCard(parent, cardElement, agent.name, agent.role, agent.number);
        });
    });
}

function createWeaponCard(parent, cardElement, weapon, type) {
    var weaponWrapper = document.querySelector(parent);
    
    var weaponCardDiv = document.createElement('div');
    var infoDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var typeDiv = document.createElement('div');
    
    weaponCardDiv.classList.add('weapon-card');
    weaponCardDiv.classList.add(weapon);

    weaponCardDiv.addEventListener('mouseover', function() {
        mouseOverWeaponCard(cardElement, weapon);
    });
    
    weaponCardDiv.addEventListener('mouseout', function() {
        mouseOutWeaponCard(cardElement, weapon);
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

function createWeaponCards(parent, cardElement, weapons, await) {
    if (await) {
        weapons.reverse().forEach(function(weapon) {
            createWeaponCard(parent, cardElement, weapon.name, weapon.type);
        });
        return;
    }
    
    weapons.then(function(result) {
        result.reverse().forEach(function(weapon) {
            createWeaponCard(parent, cardElement, weapon.name, weapon.type);
        });
    });
}


/* Agent card functionality */
function mouseOverAgentCard(element, agent) {
    const card = document.querySelector(element + '.' + ((agent === "KAY/O") ? 'kayo' : agent));
    agent = (agent === "KAY/O") ? 'kayo' : agent;

    card.style.backgroundColor = '#3D1D26';
    card.style.backgroundImage = `url("./assets/images/agents/${agent}.png")`;
    card.style.backgroundPositionX = '100px'
}

function mouseOutAgentCard(element, agent) {
    const card = document.querySelector(element + '.' + ((agent === "KAY/O") ? 'kayo' : agent));
    agent = (agent === "KAY/O") ? 'kayo' : agent;

    card.style.backgroundColor = '';
    card.style.backgroundImage = `url("./assets/images/agents/${agent}-20.png")`;
    card.style.backgroundPositionX = '';
}

function clickAgentCard(agent) {
    window.location.href = `./agents/agent.html?agent=${agent}`;
}


/* Weapon card functionality */
function mouseOverWeaponCard(element, weapon) {
    const card = document.querySelector(element + '.' + weapon);
    const text = card.querySelector('.info');
    
    card.style.backgroundColor = '#173B3F';
    card.style.backgroundImage = `url("./assets/images/weapons/${weapon}.png")`;
    text.style.transform = 'translateY(20px)';
}

function mouseOutWeaponCard(element, weapon) {
    const card = document.querySelector(element + '.' + weapon);
    const text = card.querySelector('.info');

    card.style.backgroundColor = '';
    card.style.backgroundImage = `url("./assets/images/weapons/${weapon}-20.png")`;
    text.style.transform = '';
}

function clickWeaponCard(weapon) {
    window.location.href = `./weapons/weapon.html?weapon=${weapon}`;
}