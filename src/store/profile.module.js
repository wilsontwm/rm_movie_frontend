import { profileService } from '../services/profile.service';
const state = {triggerLogin: false, isLoggingIn: false, user: null};

const actions = {
    triggerLogin({commit, state}) {
        if(state.user === null) {
            commit('triggerLogin');
        }
    },
    cancelLogin({commit}) {
        commit('cancelLogin');
    },
    async login({commit}, {provider}) {
        commit('loginRequest');

        let response = await profileService.login(provider);
        let user = null;
        if(response.success) {
            const name = response.data.user.displayName;
            const photo = response.data.user.photoURL;
            user = {name, photo};
        }

        commit('handleLoginResponse', {
            success: response.success,
            user: user
        });
    },
    logout({commit}) {
        profileService.logout();

        commit('logoutRequest');
    }
}

const mutations = {
    triggerLogin(state) {
        state.triggerLogin = true;
    },
    cancelLogin(state) {
        state.triggerLogin = false;
    },
    loginRequest(state) {
        state.isLoggingIn = true;
        state.triggerLogin = false;
    },
    handleLoginResponse(state, {success, user}) {
        state.isLoggingIn = false;
        if(success) {
            state.user = user;
        }
    },
    logoutRequest(state) {
        state.user = null;
    }
}

export const profileModule = {
    namespaced: true,
    state,
    actions,
    mutations
}