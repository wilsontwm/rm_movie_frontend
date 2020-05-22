const constants = {
    apiUrl: process.env.VUE_APP_API_URL,
    apiKey: process.env.VUE_APP_API_KEY,
}

const actions = {
    async handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            
            return data;
        })
    },
    async handleError(error) {
        const data = {
            error: error,
        };
        return data;
    }
}

export const baseService = {
    namespaced: true,
    constants,
    actions
}