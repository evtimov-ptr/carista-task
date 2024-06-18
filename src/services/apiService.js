import axios from "axios";

const API_KEY = process.env.VUE_APP_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

const apiClient = axios.create({
    baseURL: BASE_URL,
});

export const fetchRecipes = async (query) => {
    try {
        const response = await apiClient.get('/complexSearch', {
            params: {
                apiKey: API_KEY,
                query: query,
                number: 10,
                addRecipeInformation: true
            },
        });
        return response.data.results;
    } catch (err) {
        console.log('API fetch error:', err);
        throw err;
    }
};

export default {
    fetchRecipes
};