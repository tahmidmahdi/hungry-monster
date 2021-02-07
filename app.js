document.getElementById('button').addEventListener('click', function() {
    const food = document.getElementById('input').value;
    // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+food)
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+food)
    .then(res => res.json())
    .then(data => display(data))
})

const display = foods =>{
    for (let i = 0; i < foods.meals.length; i++) {
        const element = foods.meals[i].strMeal;
        // console.log(element);
        const link = foods.meals[i].strMealThumb;
        // console.log(link)

        const ing = [];
        ing.push(foods.meals[i].strIngredient[i])


        //making elements

        const mainParentNode = document.getElementById('foodHolder');
        const parentNode = document.createElement('div');
        parentNode.className = 'text';

        const foodPicture = document.createElement('img')
        foodPicture.src = link;
        foodPicture.className= 'foodPicture'
        parentNode.appendChild(foodPicture);

        const foodName = document.createElement('p')
        foodName.innerText = element;
        foodName.className = 'foodName'
        parentNode.appendChild(foodName);

        mainParentNode.appendChild(parentNode);

        parentNode.addEventListener('click', function (event) {
            // console.log(foodPicture.src = link);
            const output = document.getElementById('output');
            const foodPicture = document.createElement('img');
            foodPicture.src = link;
            // imgo.src = link;
            output.appendChild(foodPicture);
            for (let i = 0; i < ing.length; i++) {
                const element = ing[i];
                const ingradiants = document.createElement('p');
                ingradiants.innerText = element;
                output.appendChild(ingradiants);
                
            }
        })
        

        // document.getElementById('foodHolder').addEventListener('click', function () {
        //     console.log('clicked',foodName);
        // })

        // document.querySelectorAll('.foodName').forEach(item => {
        //     item.addEventListener('click', event => { latest
        //       console.log(event.target.innerText);
        //     })
        //   })
          


        
        
        
   
    }
}

