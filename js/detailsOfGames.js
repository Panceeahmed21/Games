import { apiData } from "./UI.js";

export class detailsOfGames {

getNameID(code){

var gameID=code
displayData(gameID)

     function displayData(gameID) {

  var details;
  var gameDetails = [];
    async function getDataCategory() {

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "cc0b0d2e12msh0ecede13e86e424p1bd459jsn409e3e84e51d",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

       details = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`, options)

       gameDetails = await details.json();
console.log(gameDetails);
      let detailsSend = new apiData();
      detailsSend.displayDetails(gameDetails)



  }
  getDataCategory(gameID);
}
}
}

