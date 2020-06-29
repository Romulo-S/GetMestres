class people {

    constructor() {
        this.peopleList = [];
    }
    addPeople(person) {
        this.peopleList.push(person)
    }

    getAll() {
        return this.peopleList
    }
}

const _people = new people();
_people.addPeople({ name: 'Joao' })

console.log('list', _people.getAll());