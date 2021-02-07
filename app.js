function getFoodList () {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(data=>displayCategory(data));

    const displayCategory= categories=>{
        const foodContainers=document.getElementById('foodContainer');       
        while (foodContainers.firstChild) {
            foodContainers.removeChild(foodContainers.lastChild);
        }
        for(let i=0;i<categories.categories.length;i++)
        {
            const category=categories.categories[i];
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
            .then(res=>res.json())
            .then(data=>{
                for(let i=0;i<data.meals.length;i++)
                {
                    const meal=data.meals[i];
                    const subString=document.getElementById('foodNameInput');
                    if(meal.strMeal.toLowerCase().includes(subString.value.toLowerCase()))
                    {                    
                        const foodDiv=document.createElement('div');
                        foodDiv.className='food';
                        foodDiv.setAttribute('onclick', 'showDetail(event)');
                        const foodName=document.createElement('p');
                        foodName.innerText=meal.strMeal;     
                        const foodImage=document.createElement('img');
                        foodImage.setAttribute('src', meal.strMealThumb);
                        foodImage.setAttribute('height', '150');
                        foodImage.setAttribute('width', '170');
                        foodDiv.appendChild(foodImage);
                        foodDiv.appendChild(foodName);
                        foodContainers.appendChild(foodDiv);
                    }
                }
            });
            }
    }
}

function showDetail(event) {
    const ingradientList = document.getElementById('ingradientList');
    const mealImage = document.getElementById('mealImage');
    while (ingradientList.firstChild) {
        ingradientList.removeChild(ingradientList.lastChild);
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.currentTarget.innerText}`)
        .then(res=>res.json())
        .then(data=>{ 
            const foodDetail=data.meals[0];  
            console.log(foodDetail.strMealThumb);
            mealImage.src= foodDetail.strMealThumb;
            if(foodDetail.strIngredient1!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient1;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient2!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient2;
                ingradientList.appendChild(li);
            }   
            if(foodDetail.strIngredient3!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient3;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient4!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient4;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient5!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient5;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient6!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient6;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient7!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient7;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient8!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient8;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient9!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient9;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient10!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient10;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient11!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient11;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient12!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient12;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient13!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient13;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient14!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient14;
                ingradientList.appendChild(li);
            }    
            if(foodDetail.strIngredient15!=""){
                const li=document.createElement('li');
                li.innerText=foodDetail.strIngredient15;
                ingradientList.appendChild(li);
            }             
        }
   );
    
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
  