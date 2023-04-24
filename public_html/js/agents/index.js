import { getAllAbilities as abilities } from "../database.js";

export async function selectAbility(ability) {
    const url = new URLSearchParams(window.location.search);
    const agent = url.get('agent');

    const promisedAbilities = await abilities();
    const agentAbilities = promisedAbilities.find((abilityAgent) => abilityAgent.name === agent);

    let abilityNumber;
    switch (ability) {
        case 'one':
            abilityNumber = 0;
            break;
        case 'two':
            abilityNumber = 1;
            break;
        case 'three':
            abilityNumber = 2;
            break;
        case 'four':
            abilityNumber = 3;
            break;
    }

    const abilityIcon = document.querySelector('.ability-' + ability);
    if (abilityIcon.classList.contains('active')) {
        return;
    }

    const activeAbility = document.querySelector('.ability.active');
    if (activeAbility) {
        activeAbility.classList.remove('active');
        activeAbility.style.backgroundColor = '';
    }

    const abilityDescription = document.getElementById('ability-description');
    abilityDescription.innerHTML = agentAbilities.abilities[abilityNumber].description;
    abilityIcon.classList.add('active');

    const agentName = (agent === 'KAY/O') ? 'kayo' : agent.toLowerCase();

    const abilityVideo = document.getElementById('ability-video');
    const abilityVideoSource = document.getElementById('ability-video-source');
    abilityVideoSource.src = `../assets/videos/abilities/${agentName}/${abilityNumber+1}.mp4`;
    abilityVideo.load();
}