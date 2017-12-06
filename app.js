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
      ]
    },
    methods: {
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join('');
      }
    },
  })
};
