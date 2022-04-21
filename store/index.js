export const state = () => ({
    todos: [],
    ids: []
})

export const mutations = {
    addTodo(state, todo) {
        let exists = false;
        state.ids.forEach(id => {
            if(todo.todo.id == id) {
                exists = true;
            }
        })
        if(!exists) {
            state.ids.push(todo.todo.id)
            state.todos.push(todo.todo)
        }
    }
}

export const actions = {
    async fetchTodo ({ commit }) {
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
            method: "GET",
            headers: {
                "x-api-key": process.env.API_KEY
            }
        }
        let response = await this.$axios(options);
        commit('addTodo', response.data);
    }
}