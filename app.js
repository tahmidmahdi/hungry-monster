document.getElementById('button').addEventListener('click', function() {
    const food = document.getElementById('input').value;
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+food)
    .then(res => res.json())
    .then(data => display(data))
})

const display = foods =>{
    for (let i = 0; i < foods.meals.length; i++) {
        const element = foods.meals[i].strMeal;
        console.log(element);
        const link = foods.meals[i].strMealThumb;
        console.log(link)


        //making elements

        const mainParentNode = document.getElementById('foodHolder');
        const parentNode = document.createElement('div');
        parentNode.className = 'text'+i;

        const foodPicture = document.createElement('img')
        foodPicture.src = link;
        parentNode.appendChild(foodPicture);

        const foodName = document.createElement('p')
        foodName.innerText = element;
        parentNode.appendChild(foodName);

        mainParentNode.appendChild(parentNode);
        

        document.getElementsByClassName('text').addEventListener('click', function () {
            
        })



        
        
        
   
    }
}

