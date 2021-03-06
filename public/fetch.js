const APP_ID = "11a6b98e";
const APP_KEY = "37b650a4e558dc71340ea7a5e1b9d92d";

const div = document.getElementById("content");
const dish = document.getElementById('dish');
const fetch_details = () => {
    if (dish.value === "") {
        alert("Oh ho seems that No input is Given .\nPlease try Again");
    } else {
        div.innerHTML = ``;
        div.innerHTML = `Please wait while we fetch Recipe related with "${dish.value}"`;
        fetch(`https://api.edamam.com/search?q=${dish.value}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`)
            .then(res => res.json())
            .then(recipe => {
                div.innerHTML = ``;
                const data = recipe.hits;
                data.map(recipe => {
                    div.innerHTML +=
                        `<img src=${recipe.recipe.image} style="margine:3px;padding:3px;item-align:center;width:100px;height:100px;"/><br>` +
                        `<b>Dish : </b>${recipe.recipe.label}<br>` +
                        `<b>Type : </b>${recipe.recipe.healthLabels[0]}<br>` +
                        `<b>Calories : </b>${Math.floor(recipe.recipe.calories)}<br><hr>`;
                    dish.value = ``;
                })
            })
            .catch(err => console.log(err));
    }
}
