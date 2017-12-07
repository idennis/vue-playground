window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      username: 'Den',
      message: 'yo',
      seen: true,
      todos: [
        { name: 'buy eggs' },
        { name: 'get prescription' },
        { name: 'meet mum' },
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],
    },
    methods: {
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join('');
      }
    },
  },
  
  // Register a new Component
  Vue.component('todo-item', {
    // Props allow child component to reference
    // parent component's data (vice versa)
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
)
  

  
};
