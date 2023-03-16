
import  { apiData } from './UI.js'
import  { games } from './games.js'
$(document).ready(function(){
$(".lds-roller").fadeOut(1000,function(){
    $(".loading-page").fadeOut(1000,function(){
        $("body").css("overflow","auto")
    })
})

let dataFromAPI =new apiData ()
dataFromAPI.displayGames()
 dataFromAPI.displayDetails()


let gamesData =new games ()
gamesData.getCategory()

})