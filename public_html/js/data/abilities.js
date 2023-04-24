const brimstoneAbilities = [
  {
    name: "Incendiary",
    description: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
  },
  {
    name: "Sky Smoke",
    description: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
  },
  {
    name: "Stim Beacon",
    description: "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
  },
  {
    name: "Orbital Strike",
    description: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
  },
];

const phoenixAbilities = [
  {
    name: "Curveball",
    description: "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
  },
  {
    name: "Hot Hands",
    description: "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
  },
  {
    name: "Blaze",
    description: "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
  },
  {
    name: "Run It Back",
    description: "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
  },
];

const sageAbilities = [
  {
    name: "Slow Orb",
    description: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
  },
  {
    name: "Healing Orb",
    description: "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
  },
  {
    name: "Barrier Orb",
    description: "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
  },
  {
    name: "Resurrection",
    description: "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
  },
];

const sovaAbilities = [
  {
    name: "Shock Bolt",
    description: "EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
  },
  {
    name: "Recon Bolt",
    description: "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
  },
  {
    name: "Owl Drone",
    description: "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
  },
  {
    name: "Hunter's Fury",
    description: "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
  },
];

const viperAbilities = [
  {
    name: "Poison Cloud",
    description: "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
  },
  {
    name: "Toxic Screen",
    description: "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
  },
  {
    name: "Snake Bite",
    description: "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.",
  },
  {
    name: "Viper's Pit",
    description: "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.",
  },
];

const cypherAbilities = [
  {
    name: "Cyber Cage",
    description: "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
  },
  {
    name: "Spycam",
    description: "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
  },
  {
    name: "Trapwire",
    description: "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
  },
  {
    name: "Neural Theft ",
    description: "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
  },
];

const reynaAbilities = [
  {
    name: "Devour",
    description: "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
  },
  {
    name: "Dismiss",
    description: "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
  },
  {
    name: "Leer",
    description: "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
  },
  {
    name: "Empress",
    description: "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.",
  },
];

const killjoyAbilities = [
  {
    name: "Alarmbot",
    description: "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
  },
  {
    name: "Turret",
    description: "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
  },
  {
    name: "Nanoswarm",
    description: "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
  },
  {
    name: "Lockdown",
    description: "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
  },
];

const breachAbilities = [
  {
    name: "Flashpoint",
    description: "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.",
  },
  {
    name: "Fault Line",
    description: "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.",
  },
  {
    name: "Aftershock",
    description: "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
  },
  {
    name: "Rolling Thunder",
    description: "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.",
  },
];

const omenAbilities = [
  {
    name: "Paranoia",
    description: "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
  },
  {
    name: "Dark Cover",
    description: "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the marker closer.",
  },
  {
    name: "Shrouded Step",
    description: "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
  },
  {
    name: "From The Shadows",
    description: "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.",
  },
];

const jettAbilities = [
  {
    name: "Updraft",
    description: "INSTANTLY propel Jett high into the air.",
  },
  {
    name: "Tailwind",
    description: "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.",
  },
  {
    name: "Cloudburst",
    description: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
  },
  {
    name: "Blade Storm",
    description: "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.",
  },
];

const razeAbilities = [
  {
    name: "Blast Pack",
    description: "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
  },
  {
    name: "Paint Shells",
    description: "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
  },
  {
    name: "Boom Bot",
    description: "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
  },
  {
    name: "Showstopper",
    description: "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.",
  },
];

const skyeAbilities = [
  {
    name: "Trailblazer",
    description: "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
  },
  {
    name: "Guiding Light",
    description: "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.",
  },
  {
    name: "Regrowth",
    description: "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
  },
  {
    name: "Seekers",
    description: "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.",
  },
];

const yoruAbilities = [
  {
    name: "Blindside",
    description: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
  },
  {
    name: "Gatecrash",
    description: "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport.",
  },
  {
    name: "Fakeout",
    description: "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.",
  },
  {
    name: "Dimensional Drift",
    description: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
  },
];

const astraAbilities = [
  {
    name: "Nova Pulse",
    description: "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
  },
  {
    name: "Nebula",
    description: "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning.",
  },
  {
    name: "Gravity Well",
    description: "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.",
  },
  {
    name: "Astral Form / Cosmic Divide",
    description: "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
  },
];

const kayoAbilities = [
  {
    name: "FLASH/drive",
    description: "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
  },
  {
    name: "ZERO/point",
    description: "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
  },
  {
    name: "FRAG/ment",
    description: "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
  },
  {
    name: "NULL/cmd",
    description: "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.",
  },
];

const chamberAbilities = [
  {
    name: "Headhunter",
    description: "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
  },
  {
    name: "Rendezvous",
    description: "PLACE a teleport anchor. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
  },
  {
    name: "Trademark",
    description: "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
  },
  {
    name: "Tour de Force",
    description: "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.",
  },
];

const neonAbilities = [
  {
    name: "Relay Bolt",
    description: "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
  },
  {
    name: "High Gear",
    description: "INSTANTLY channel Neon's power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
  },
  {
    name: "Fast Lane",
    description: "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.",
  },
  {
    name: "Overdrive",
    description: "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.",
  },
];

const fadeAbilities = [
  {
    name: "Seize",
    description: "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight",
  },
  {
    name: "Haunt",
    description: "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.",
  },
  {
    name: "Prowler",
    description: "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.",
  },
  {
    name: "Nightfall",
    description: "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.",
  },
];

const harborAbilities = [
  {
    name: "Cove",
    description: "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a destructible water shield that blocks bullets.",
  },
  {
    name: "High Tide",
    description: "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are SLOWED",
  },
  {
    name: "Cascade",
    description: "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.",
  },
  {
    name: "Reckoning",
    description: "EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are CONCUSSED.",
  },
];

const gekkoAbilities = [
  {
    name: "Wingman",
    description: "EQUIP Wingman FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.",
  },
  {
    name: "Dizzy",
    description: "EQUIP Dizzy FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded. When Dizzy expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.",
  },
  {
    name: "Mosh Pit",
    description: "EQUIP Mosh FIRE to throw Mosh like a grenade ALT FIRE to throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.",
  },
  {
    name: "Thrash",
    description: "EQUIP Thrash FIRE to link with Thrash's mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius. When Thrash expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.",
  },
];

export const abilities = [
  {
    name: "Brimstone",
    abilities: brimstoneAbilities,
  },
  {
    name: "Phoenix",
    abilities: phoenixAbilities,
  },
  {
    name: "Sage",
    abilities: sageAbilities,
  },
  {
    name: "Sova",
    abilities: sovaAbilities,
  },
  {
    name: "Viper",
    abilities: viperAbilities,
  },
  {
    name: "Cypher",
    abilities: cypherAbilities,
  },
  {
    name: "Reyna",
    abilities: reynaAbilities,
  },
  {
    name: "Killjoy",
    abilities: killjoyAbilities,
  },
  {
    name: "Breach",
    abilities: breachAbilities,
  },
  {
    name: "Omen",
    abilities: omenAbilities,
  },
  {
    name: "Jett",
    abilities: jettAbilities,
  },
  {
    name: "Raze",
    abilities: razeAbilities,
  },
  {
    name: "Skye",
    abilities: skyeAbilities,
  },
  {
    name: "Yoru",
    abilities: yoruAbilities,
  },
  {
    name: "Astra",
    abilities: astraAbilities,
  },
  {
    name: "KAY/O",
    abilities: kayoAbilities,
  },
  {
    name: "Chamber",
    abilities: chamberAbilities,
  },
  {
    name: "Neon",
    abilities: neonAbilities,
  },
  {
    name: "Fade",
    abilities: fadeAbilities,
  },
  {
    name: "Harbor",
    abilities: harborAbilities,
  },
  {
    name: "Gekko",
    abilities: gekkoAbilities,
  },
];
