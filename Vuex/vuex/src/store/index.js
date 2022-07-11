import { createStore } from 'vuex';

const store = createStore({
    //состояние
    state () {
        return {
            count: 1
        }
    },
    //мутации(методы для изменения состояния)
    mutations: {
        increase(state, payload) {
           state.count += payload.value;
        },
        multByFive(state, payload) {
            state.count *= payload
        }
    },
    //геттеры для получения данных из состояния
    getters: {
        count(state) {
            return state.count
        },
        multByThree(state) {
            return state.count * 3;
        },
        multbyThree2(_, getters) {
            return getters.count * 3;
        }
    },
    //экшны
    actions: {
        asyncMultByFive(context /*{commit}*/, payload) {
            setTimeout(() => {
                context.commit('multByFive', payload) /*commit('multByFive')*/
            }, 1000)
        }
    }
})

export default store