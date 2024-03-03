// import { learnDataBase, newsDataBase, users } from "./database.js";

// document.addEventListener('DOMContentLoaded', () => {
//     localStorage.setItem('learnData', JSON.stringify(learnDataBase));
//     localStorage.setItem('newsData', JSON.stringify(newsDataBase));
//     localStorage.setItem("users", JSON.stringify(users));
// })

import { learnDataBase, newsDataBase, favoriteLearnDataBase, favoriteNewsDataBase, users } from "./database.js";

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('favoriteLearnData')) {
        localStorage.setItem('favoriteLearnData', JSON.stringify(favoriteLearnDataBase));
    }

    if (!localStorage.getItem('favoriteNewsData')) {
        localStorage.setItem('favoriteNewsData', JSON.stringify(favoriteNewsDataBase));
    }

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (!localStorage.getItem('learnData')) {
        // Добавляем общие уроки, если их еще нет
        localStorage.setItem('learnData', JSON.stringify(learnDataBase));
    }

    if (!localStorage.getItem('newsData')) {
        // Добавляем общие новости, если их еще нет
        localStorage.setItem('newsData', JSON.stringify(newsDataBase));
    }


    // localStorage.removeItem('favoriteLearnData');
    // localStorage.removeItem('favoriteNewsData');
});