console.log('connesso');

const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: true
                },
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Buttare la spazzatura',
                    done: true
                },
                {
                    text: 'Fare gli esercizi',
                    done: false
                },
                {
                    text: 'Dormire la notte',
                    done: false
                },
            ]
        }
    },
    methods: {
        // funzione per cancellare gli elementi della lista
        deleteToDo(index) {
            console.log('eliminato');
            this.toDoList.splice(index, 1)
        },
        // funzione per creare un nuovo oggetto e inserirlo nella lista
        addToDo() {
            if (this.newToDo.trim() !== '') {
                this.toDoList.push({ text: this.newToDo, done: false });
                this.newToDo = '';
            }
        },
        mounted() {
            console.log(this.toDoList);
        }
    }
}).mount('#app')
