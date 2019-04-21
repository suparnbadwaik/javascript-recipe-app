import Search from './models/Search';
import { elements } from './config/elements';

/* 
Global state of the app - Search object        - Current recipe object     - Shopping list object      - Liked recipes
*/

const state = {};

elements.searchButton.addEventListener('click', (e) => {
    e.preventDefault(); //to stop the page from refreshing
    controlSearch();
});

const controlSearch = async () => {
    let itemName = 'pizza';
    state.search = new Search(itemName);
    await state.search.getSearchResults();   
    console.log(state.search.result);
}


// // import {add, sub as s} from './views/searchView';
// // console.log(`${add(1,2)} is ${s(2,1)} is ${search}`);
