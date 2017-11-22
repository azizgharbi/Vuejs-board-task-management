import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const cards = new Vuex.Store({
    state : {
         CardsExample : [
            {
                'title' : 'Lorem ipsum dolor sit amet',
                'status' : 'Done',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            },
            {
                'title' : 'Morbi hendrerit magna felis',
                'status' : 'todo',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            }
        ]
    }
})