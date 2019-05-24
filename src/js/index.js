import axios from 'axios';

async function getResults(query) {

    const key = 'b5d7617531b9eb5a29bc7a6f523c8772';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pasta');