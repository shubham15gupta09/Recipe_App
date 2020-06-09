const APP_ID = "<>";
const APP_KEY = "<>";

const div = document.getElementById("content");
const dish = document.getElementById('dish');
const fetch_details = () => {
    div.innerHTML = ``;
    fetch(`https://api.edamam.com/search?q=${dish.value}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`)
        .then(res => res.json())
        .then(recipe => {
            const data = recipe.hits;
            console.log(data);
            data.map(recipe => {
                div.innerHTML +=
                    `<b>Dish Name : </b>${recipe.recipe.label}<br>` +
                    `<b>Image : </b>${recipe.recipe.image}<br>` +
                    `<b>Type : </b>${recipe.recipe.healthLabels[0]}<br>` +
                    `<b>Calories : </b>${Math.floor(recipe.recipe.calories)}<br><hr>`;
                dish.value = ``;
            })
        })
        .catch(err => console.log(err));
}
