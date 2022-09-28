import { INCREASE } from '@/vuex/mutation_types';

// 表示状态. 可以认为state是一个数据库，保存了各种数据。我们无法直接访问里面的数据。
const state = {
    points: 10,
};

// 取值的方法。 就是getter( 跟setter相对）
const getters = {
    get_points: (state) => {
        return state.points;
    },
};

// 变化。 可以认为所有的state都是由mutation来驱动变化的。 也可以认为它是个setter.
const mutations = {
    [INCREASE](state, data) {
        state.points = data;
    },
};

export default {
    state,
    getters,
    mutations,
};
