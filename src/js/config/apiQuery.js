import { env } from './environment';
export const apiQuery = {
        searchItem: `${env.proxy}https://www.food2fork.com/api/search?key=${env.apiKey}&q=`
}
