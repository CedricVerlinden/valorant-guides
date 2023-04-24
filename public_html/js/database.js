import { agents as agentsData } from "./data/agents.js";
import { weapons as weaponsData } from "./data/weapons.js";
import { abilities as abilitiesData } from "./data/abilities.js";

indexedDB.deleteDatabase("valorant_guides");

let db;
let request = indexedDB.open("valorant_guides", 1);

request.onerror = (event) => {
  console.log("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = (event) => {
  db = event.target.result;

  let agentsTable = db.createObjectStore("agents", {
    keyPath: "id",
    autoIncrement: true,
  });
  agentsTable.createIndex("name", "name", { unique: true });
  agentsTable.createIndex("role", "role", { unique: false });
  agentsTable.createIndex("numbe", "number", { unique: true });

  let abilitiesTable = db.createObjectStore("abilities", {
    keyPath: "id",
    autoIncrement: true,
  });
  abilitiesTable.createIndex("name", "name", { unique: true });
  abilitiesTable.createIndex("abilities", "abilities", { unique: false });

  let weaponsTable = db.createObjectStore("weapons", {
    keyPath: "id",
    autoIncrement: true,
  });
  weaponsTable.createIndex("name", "name", { unique: true });
  weaponsTable.createIndex("type", "type", { unique: false });
};

request.onsuccess = (event) => {
  db = event.target.result;

  let agentsTransaction = db.transaction("agents", "readwrite");
  let agentsStore = agentsTransaction.objectStore("agents");
  agentsData.forEach(function (agent) {
    agentsStore.add(agent);
  });

  let abilitiesTransaction = db.transaction("abilities", "readwrite");
  let abilitiesStore = abilitiesTransaction.objectStore("abilities");
  abilitiesData.forEach(function (ability) {
    abilitiesStore.add(ability);
  });

  let weaponsTransaction = db.transaction("weapons", "readwrite");
  let weaponsStore = weaponsTransaction.objectStore("weapons");
  weaponsData.forEach(function (weapon) {
    weaponsStore.add(weapon);
  });
};

export function getAllAgents() {
  return new Promise((resolve, reject) => {
    var request = window.indexedDB.open("valorant_guides");

    request.onerror = (event) => {
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      var db = event.target.result;
      var transaction = db.transaction(["agents"], "readonly");
      var objectStore = transaction.objectStore("agents");
      var getRequest = objectStore.getAll();

      getRequest.onsuccess = (event) => {
        var agents = event.target.result;
        var mappedAgents = agents.map(function (agent) {
          return {
            id: agent.id,
            name: agent.name,
            role: agent.role,
            description: agent.description,
            number: agent.number,
          };
        });

        resolve(mappedAgents);
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    };
  });
}

export function getAllAbilities() {
  return new Promise((resolve, reject) => {
    var request = window.indexedDB.open("valorant_guides");

    request.onerror = (event) => {
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      var db = event.target.result;
      var transaction = db.transaction(["abilities"], "readonly");
      var objectStore = transaction.objectStore("abilities");
      var getRequest = objectStore.getAll();

      getRequest.onsuccess = (event) => {
        var abilities = event.target.result;
        var mappedAbilities = abilities.map((ability) => {
          return {
            id: ability.id,
            name: ability.name,
            abilities: ability.abilities,
          };
        });

        resolve(mappedAbilities);
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    };
  });
}

export function getAllWeapons() {
  return new Promise((resolve, reject) => {
    var request = window.indexedDB.open("valorant_guides");

    request.onerror = (event) => {
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      var db = event.target.result;
      var transaction = db.transaction(["weapons"], "readonly");
      var objectStore = transaction.objectStore("weapons");
      var getRequest = objectStore.getAll();

      getRequest.onsuccess = (event) => {
        var weapons = event.target.result;
        var mappedWeapons = weapons.map((weapon) => {
          return {
            id: weapon.id,
            name: weapon.name,
            description: weapon.description,
            type: weapon.type,
          };
        });

        resolve(mappedWeapons);
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    };
  });
}

export async function getLastThreeAgents() {
  const agents = await getAllAgents();
  return agents.slice(-3);
}

export async function getLastThreeWeapons() {
  const weapons = await getAllWeapons();
  return weapons.slice(-3);
}