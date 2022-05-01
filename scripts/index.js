//  Link:-  https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=sSuj3RhIRT4k4HvBOlsVgNMI3jQAbND-1xOirjKV8X4

const API = "sSuj3RhIRT4k4HvBOlsVgNMI3jQAbND-1xOirjKV8X4";
import { navbar } from "../components/navbar.js";

let navbars = document.getElementById("navbar");
navbars.innerHTML = navbar();

import { searchImages, append } from "./fetch.js";

let search = (e) => {
  if (e.key === "Enter") {
    let value = document.getElementById("query").value;
    searchImages(API, value).then((data) => {
      console.log(data);
      let container = document.getElementById("container");
      container.innerHTML = null;
      append(data.results, container);
    });
  }
};

document.getElementById("query").addEventListener("keydown", search); //we can use keypress as well //  😎so,chill😎

let categories = document.getElementById("categories").children;
// console.log(categories);


// 🤔🤔🤔 (this.) will only work with normal function not with arrow function
function cSearch(){
console.log(this.id);
searchImages(API, this.id).then((data) => {
    console.log(data);
    let container = document.getElementById("container");
    container.innerHTML = null;
    append(data.results, container);
  });
}


for(let el of categories){
    el.addEventListener("click",cSearch);
}

// let searchImages = async () => {
//   let value = document.getElementById("query").value;

//   try {
//     let res = await fetch(
//       ` https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//     );
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("err:-", err);
//   }
// };
