const personActions = {
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getLasName: function () {
        return this.lastName;
    },
    getAlias: function () {
        return (this.alias.length > 0) ? this.alias : "Doen't have any Alias";
    },
    setAlias: function (newAlias) {
        this.alias = newAlias;
    },
};

function createPerson(firstName, lastName) {
    const person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName = lastName;
    person.alias = "";

    return {
        getFullName: person.getFullName.bind(person),
        getLastName: person.getLasName.bind(person),
        getAlias: person.getAlias.bind(person),
        setAlias: person.setAlias.bind(person),
    }
};

const a = createPerson("piero", "guerrero");

console.log("getLastName: " + a.getLastName());
console.log("getFullName: " + a.getFullName());
console.log("getAlias: " + a.getAlias());

a.setAlias("pepigue");
console.log("getAlias: " + a.getAlias());


console.log("----------------------------------------");

console.log("----------------------------------------");


const programmerActions = {
    getPrefTech: function () {
        return this.prefTech;
    },
    setPrefTech: function (newPrefTech) {
        this.prefTech = newPrefTech;
    }
};

function createProgrammer(firstName, lastName, prefTech) {

    const parent = createPerson(firstName, lastName);
    const obj = Object.create(programmerActions);
    obj.prefTech = prefTech;

    return Object.assign({}, parent, { getPrefTech: obj.getPrefTech.bind(obj), setPrefTech: obj.setPrefTech.bind(obj) });
};

const developer = createProgrammer("andre", "garmendia", "javascript");

console.log("DEVELOPER");
console.log(developer.getPrefTech());
console.log(developer.getFullName());
console.log(developer.getLastName());
console.log(developer.getAlias());

developer.setAlias("warrior");
console.log("developer alias: " + developer.getAlias());
console.log("person alias: " + a.getAlias());

developer.setPrefTech("node");
console.log(developer.getPrefTech());