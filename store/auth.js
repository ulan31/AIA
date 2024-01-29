export const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
});

export const mutations = {
    setAccessToken(state, token) {
        state.accessToken = token;
    },
    setRefreshToken(state, token) {
        state.refreshToken = token;
    },
    setUser(state, user) {
        state.user = user;
    },
    clearAuthData() {
        state.accessToken =  null;
        state.refreshToken = null;
        state.user = null;
    },
};

export const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await $fetch('/user/login', {
                method: 'POST',
                body: credentials
            });

            console.log('response', response);
        } catch (error) {
            throw error.response.data;
        }
    },
};
