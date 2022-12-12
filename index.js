class Patient{
    constructor() {
        this.patient = [];
        
    }

   
    list() {
        return [...this.patient];
    }

    add(nom) {
        let todo = {
            nom: nom,
            completed: false,
        }

        this.patient.push(todo);
    }
    complete(nom) {
        let todoFound = false;
        this.patient.forEach((todo) => {
            if (todo.nom === nom) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });

        if (!todoFound) {
            throw new Error(`No TODO was found with the title: "${nom}"`);
        }
    }

}
module.exports = Patient;