let cards = document.querySelector(".main-container1")

// let linkInf = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")


// linkInf.then((response) => {
//     return response.json();
//   })
//     .then((info) => {
//       console.log(info.Search);
//       cards.innerHTML = ""
//       info.Search.forEach((elem) => {
//           cards.innerHTML += `
//           <div class="card">
//         <img
//           class="img"
//           src="${elem.Poster}"
//           alt=""
//         />
//         <div class="text">
//           <span class="desc">${elem.Title}</span>   <span class="year">${elem.Year}</span>
//         </div>
//       </div>
    
      
//           `;  
//       });
//     })