
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(`error: ${err}`))

}

const loadVideos = () => {

  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))

}

const loadCategoryVideos = (id) => {

  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideos(data.category))

}


const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");

    categoryDiv.innerHTML = `
    <button onclick="loadCategoryVideos(${cat.category_id}) " class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`

    categoryContainer.appendChild(categoryDiv);
  }
}

const displayVideos = (videos) => {

  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = " "

  videos.forEach(video => {

    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
         <div class="bg-base-100 shadow-sm">
          <figure>
            <img
              class="w-full h-[250px] object-cover rounded-md"
              src="${video.thumbnail}"
              alt="thumbnail"
            />
          </figure>
          <div class="flex gap-5 px-0 py-5">

           <div class="avatar p-2">
            <div class="w-16 rounded-full ">
             <img src="${video.authors[0].profile_picture}" />
            </div>
           </div>



            

            <div class="info">
              <h2 class="text-xl font-bold">
                ${video.title}
              </h2>
              <p class="text-slate-400 text-sm">${video.authors[0].profile_name}</p>
              <p class="text-slate-400 text-sm">${video.others.views}</p>
            </div>
          </div>
        </div>
        `

    videoContainer.appendChild(videoDiv);


  });



}


loadCategories();
