import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '18:40'
        },
        'ID2': {
            name: 'Get bananas',
            completed: false,
            dueDate: '2019/05/13',
            dueTime: '14:00'
        },
        'ID3': {
            name: 'Get apples',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '12:30'
        },
    }
}

const mutations = {
    updateTask(state, payload) {
        console.log('payload (from mutation): ', payload);
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskID = uid()
        let payload = {
            id: taskID,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}