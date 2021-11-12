import { createStore } from 'vuex'

export default createStore({
  state: {
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
    allTodos : (state) => state.todos
  },
  mutations: {
    add_todo(state, todo):void {
      //si le title du todo est vide je return une alert, sinon je push
      if(todo.title.length === 0 ) alert('le todo ne peux pas être vide')
      else state.todos.push(todo)
    },
    delete_todo(state, id):void {
      state.todos = state.todos.filter((todo) => todo.id != id)
    },
    edit_todo(state, todo):void {
      const index = state.todos.findIndex(t => t.id == todo.id)
      console.log(index)
    }
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
    }
  },
  modules: {
  }
})
