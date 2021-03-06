document.getElementById('button').addEventListener('click', function () {
    const food = document.getElementById('input').value;
    // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+food)
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + food)
        .then(res => res.json())
        .then(data => display(data))
    count++;
    console.log(count);
    if (food != '') {
        document.getElementById('input').value = '';
    }
})

const display = foods => {

    for (let i = 0; i < foods.meals.length; i++) {

        //this takes the meal name
        const element = foods.meals[i].strMeal;
        // console.log(element);

        //this takes the meal image
        const link = foods.meals[i].strMealThumb;


        //this takes the meal id
        const id = foods.meals[i].idMeal;


        // console.log(link)
        // const ing = [];
        // ing.push(foods.meals[i].strIngredient[i])



        //making elements or adding elements 
        const mainParentNode = document.getElementById('foodHolder');
        const parentNode = document.createElement('div');
        parentNode.className = 'text';

        const foodPicture = document.createElement('img')
        foodPicture.src = link;
        foodPicture.className = 'foodPicture'
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
        foodId.style.display = 'none';
        mainParentNode.appendChild(parentNode);



        // const foodIndex = document.createElement('ul')
        // const index = foods.meals[i];
        // // foodIndex.className = 'btn';
        // foodIndex.className = ''+i;
        // parentNode.appendChild(foodIndex);


        // this will take the current click 
        parentNode.addEventListener('click', function (event) {
            console.log(this);
           

            //adding image which we have  clicked
            const output = document.getElementById('output');
            const foodPicture = document.createElement('img');
            foodPicture.src = link;
            output.appendChild(foodPicture);

            //adding name which we have  clicked
            const foodName = document.createElement('p');
            foodName.innerText = 'FOOD NAME:   ' + element;
            output.appendChild(foodName);


            foodId.innerText = id;
            output.appendChild(foodId);


            // finding ingredient with foodID
            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + foodId.innerText)
                .then(res => res.json())
                .then(data => {
                    for (let i = 1; i < 21; i++) {
                        const para = document.createElement('li');
                        para.innerText = data.meals[0]['strIngredient' + i];
                        if(para.innerText == ''){
                            continue;
                        }
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

