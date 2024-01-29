import { createStore } from 'vuex';
import * as auth from './auth';

export default createStore({
    modules: {
        auth
    }
});
