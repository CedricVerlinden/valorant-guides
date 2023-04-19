function hoverAgentCard(agent) {
    console.log('hi');
    var sheet = window.document.styleSheets[2];
    
    if (agent == "gekko") {
        sheet.insertRule(".featured .agents .bottom .agent-card.gekko:hover { background-image: url('../../images/gekko.png'); }", sheet.cssRules.length);
    }
    
    if (agent == "harbor") {
        sheet.insertRule(".featured .agents .bottom .agent-card.harbor:hover { background-image: url('../../images/harbor.png'); }", sheet.cssRules.length);
    }
    
    if (agent == "fade") {
        sheet.insertRule(".featured .agents .bottom .agent-card.fade:hover { background-image: url('../../images/fade.png'); }", sheet.cssRules.length);
    }
    sheet.insertRule(".featured .agents .bottom .agent-card:hover { background-position-x: 100px; }", sheet.cssRules.length);
}

function hoverWeaponCard(weapon) {
    var sheet = window.document.styleSheets[2];

    if (weapon == "vandal") {
        sheet.insertRule(".featured .weapons .bottom .weapon-card.vandal:hover { background-image: url('../../images/vandal.png'); }", sheet.cssRules.length);
    }

    if (weapon == "sheriff") {
        sheet.insertRule(".featured .weapons .bottom .weapon-card.sheriff:hover { background-image: url('../../images/sheriff.png'); }", sheet.cssRules.length);
    }

    if (weapon == "operator") {
        sheet.insertRule(".featured .weapons .bottom .weapon-card.operator:hover { background-image: url('../../images/operator.png'); }", sheet.cssRules.length);
    }
}