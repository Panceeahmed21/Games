
import { detailsOfGames } from "./detailsOfGames.js"

export class apiData {

constructor(finalList){
 this.final=finalList
this.displayGames(this.final)


}


displayGames(){
  let cartona = ``;
  for (var i = 0; i < $(this.final).length; i++) {
  
    cartona += `
<div class="col-md-6 col-lg-3 ">
<div class="card bg-transparent mb-2" data-id="${ $(this.final)[i].id} " >
<img src="${ $(this.final)[i].thumbnail}" class="card-img-top" alt="...">
<div class="card-body text-center ">
<div class="card-body-top d-flex justify-content-between align-items-center mb-1">
<h6 class="card-title vipH6 text-white">${$(this.final)[i].title}</h6>
<span class="badge badge-body px-3 py-2">Free</span></div>
<p class="card-parag" >${$(this.final)[i].short_description}</</p></div>
<footer class="card-footer d-flex justify-content-between ">
  <span class="badge badge-color">${$(this.final)[i].genre}</span>
<span class="badge badge-color">${$(this.final).platform}</span> </footer></div></div>
`;

  }

  document.getElementById("apiData").innerHTML = cartona;
  var card =document.querySelectorAll(".card")


  for (let i = 0; i < card.length; i++) {

   card[i].addEventListener("click",function(e){
       var code = $(card[i]).attr("data-id");
let callDetails= new detailsOfGames(code)
callDetails.getNameID(code)

document.querySelector("#games").classList.add("d-none")
document.querySelector("#details").classList.remove("d-none")


let btnClose=document.getElementById("btnClose")
btnClose.addEventListener("click",function(){
 history.go("../index.html")
})
   })
    
  }

  
}

displayDetails(gameDetails){
if(gameDetails==undefined){

}

else{
  var gameDetails= Array.from( new Map (Object.entries(gameDetails)) )
 console.log(gameDetails);
  let cartona = ``;
  for (var i = 0; i < gameDetails.length; i++) {
    cartona += `
    <div class="col-md-5 col-sm-12">
    <div class="col-left w-100 text-center">
      <img src=" ${gameDetails[2][1]}" class="w-100" alt="" srcset="">
    
    </div>    
      </div>
          <div class="col-md-7 col-sm-12"  >
         <div class="col-right ">
          <h3>Title : <span>${gameDetails[1][1]}</span> </h3>
          <p>Category : <span class="badge text-bg-info">${gameDetails[7][1]}</span></p>
          <p>Platform: <span class="badge text-bg-info"> ${gameDetails[8][1]}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${gameDetails[3][1]}</span> </p>
          <p class="small">  ${gameDetails[5][1]}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${gameDetails[6][1]}">Show Game</a>
         </div>
          </div>
`
;
break
  }

  document.getElementById("dataOfDetails").innerHTML = cartona;

}


    
  }

}

