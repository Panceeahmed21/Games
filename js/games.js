//responsible for section of games

 import {apiData} from "./UI.js"
import {detailsOfGames} from "./detailsOfGames.js"


export class games  {


  getCategory(){
    let getCat=document.querySelectorAll("ul li a")
    for (let i = 0; i < getCat.length; i++) {
getCat[i].addEventListener("click",function(e){
    let categCode=e.target.getAttribute("data-category")
         displayData(categCode)
})
    }
    displayData()
    function displayData(categCode="mmorpg") {
       var data;
       var final = [];
       async function getDataCategory() {
           const options = {
               method: 'GET',
               headers: {
                   'X-RapidAPI-Key': 'cc0b0d2e12msh0ecede13e86e424p1bd459jsn409e3e84e51d',
                   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
               }
           };
         data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categCode}`, options)
         final = await data.json();
   
let finalList=new apiData(final)
let finalListToDetails=new detailsOfGames (final)



          }
          getDataCategory()
        }

  }
}

