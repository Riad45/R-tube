
const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
    .catch(err=>console.log(`error: ${err}`))

}


// category
// : 
// "Comedy"
// category_id
// : 
// "1003"

const displayCategories=(categories)=>{
    const categoryContainer = document.getElementById("category-container");
    for(let cat of categories){
        const categoryDiv = document.createElement("div");

        categoryDiv.innerHTML=`<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`

        categoryContainer.appendChild(categoryDiv);
    }
}

loadCategories();