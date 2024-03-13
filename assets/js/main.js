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
        deleteToDo(index){
            console.log('eliminato');
            this.toDoList.splice(index, 1)
        }
    },
    mounted(){
        console.log(this.toDoList);
    }
  }).mount('#app')
