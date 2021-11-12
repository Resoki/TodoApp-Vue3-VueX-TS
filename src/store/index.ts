import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    todos: [
      {
        id: 1,
        title: 'One'
      },
      {
        id: 2,
        title: 'Two'
      },
      {
        id: 3,
        title: 'Three'
      }
    ]
  },
  getters: {
    allTodos : (state) => state.todos,
    getName : (state) => state.name,
  },
  mutations: {
    add_todo(state, todo):void {
      //si le title du todo est vide je return une alert, sinon je push
      if(todo.title.length === 0 ) alert('le todo ne peux pas être vide')
      if(!state.name) alert('vous devez déjà renseignez votre nom')
      else state.todos.push(todo)
    },
    delete_todo(state, id):void {
      state.todos = state.todos.filter((todo) => todo.id != id)
    },
    edit_todo(state, todo):void {
      const index = state.todos.findIndex(t => t.id == todo.id)
      console.log(index)
    },
    reset_todo(state, todos):void {
      while (state.todos.length) {
        state.todos.pop();
      }
    },

    add_name(state, name) {
      state.name = name
     console.log('state', state)
    },
  },
  actions: {
    addTodo({commit}, todo):void {
      commit('add_todo', todo);
    },
    deleteTodo({commit}, id):void {
      commit('delete_todo', id)
    },
    editTodo({commit}, todo):void {
      commit('edit_todo', todo )
    },
    addName({commit},name){
      commit('add_name', name)
    },
    resetTodo({commit}, todos){
      commit('reset_todo', todos)
    }
  },
  modules: {
  }
})
