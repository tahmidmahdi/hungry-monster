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

        const id = foods.meals[i].idMeal;
        // console.log(link)

        // const ing = [];
        // ing.push(foods.meals[i].strIngredient[i])


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

        const foodId = document.createElement('p')
        foodId.innerText = id;
        foodId.className = 'foodId'
        parentNode.appendChild(foodId);
        mainParentNode.appendChild(parentNode);

        // const foodIndex = document.createElement('ul')
        // const index = foods.meals[i];
        // // foodIndex.className = 'btn';
        // foodIndex.className = ''+i;
        // parentNode.appendChild(foodIndex);

        

        parentNode.addEventListener('click', function (event) {
            console.log(this);

            const output = document.getElementById('output');
            const foodPicture = document.createElement('img');
            foodPicture.src = link;
            
            output.appendChild(foodPicture);
            const foodName = document.createElement('p');
            foodName.innerText = element;
            output.appendChild(foodName);
            
            foodId.innerText = id;
            output.appendChild(foodId);
            

            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+foodId.innerText)
            .then(res => res.json())
            .then(data => {
                for (let i = 1; i < 21; i++){
                    const para = document.createElement('p');
                    para.innerText = data.meals[0]['strIngredient'+i];
                    output.appendChild(para);                 
                }
            })



            // const li = document.createElement('li');
           

            // for (let i = 1; i < 21; i++) {
            //     const ing = foods.meals[]['strIngredient'+i];
            //         const foodIng = document.createElement('li');
            //         foodIng.innerText = ing;
            //         console.log(foodIng);
            //         output.appendChild(foodIng);
                
            // }

            // const meal = this.foods.meals
            // console.log('size', meal);
            // for (let j = 0; j < meal.length; j++) {
            //     for (let i = 1; i < 21; i++) {
            //         // const element = ing[i];
            //         // const ingradiants = document.createElement('p');
            //         // ingradiants.innerText = element;
            //         // output.appendChild(ingradiants);
                    
            //         const ing = foods.meal['strIngredient'+i];
            //         const foodIng = document.createElement('p');
            //         foodIng.innerText = ing;
            //         console.log(foodIng);
            //         output.appendChild(foodIng);
            //         // console.log(ing);
                    
            //     }
            // }

            
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

