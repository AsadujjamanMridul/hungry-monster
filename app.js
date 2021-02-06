const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?';

const getMealData = meals => {
    const url = `${apiBase}f=${meals}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    const mealInput = document.getElementById('city').value;
    getMealData(mealInput)
})

const updateUI = mealsCollection => {
    // .innerText = data.name || "Unknown Location!"

    mealsCollection.meals.forEach(singleMeal => {
        const multipleMealDiv = document.getElementById('meals');

        const singleMealDiv = document.createElement('div');
        singleMealDiv.className = "mealDisplay";

        const mealName = singleMeal.strMeal || "Not Found";
        const mealImage = singleMeal.strMealThumb;

        const singleMealInfo = `
            <img src="${mealImage}"/>
            <div class="d-flex justify-content-center align-items-center">
                <p class="text-center mealName">${mealName}</p>
            </div>
        `

        singleMealDiv.innerHTML = singleMealInfo;
        multipleMealDiv.appendChild(singleMealDiv);
        
    });


    // document.getElementById('show_temperature').innerText = data.main.temp;
    // document.getElementById('weather_status').innerText = data.weather[0].main;
    // document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    // document.getElementById('city').value = "";
}

getMealData('Dhaka');