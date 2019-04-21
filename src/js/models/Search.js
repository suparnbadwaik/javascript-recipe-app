// // export default 'Test export';

import axios from 'axios';
import { apiQuery } from '../config/apiQuery';

export default class Search {
    
    constructor(recipeItem) {
        this.recipeItem = recipeItem;
    }

    async getSearchResults() {
        try {
            const response = await axios(`${apiQuery.searchItem}${this.recipeItem}`);
            this.result = response.data.recipes;
        } catch (error) {
            console.log(error);
        }
    }
}