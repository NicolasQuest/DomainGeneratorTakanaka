import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

     //Probe con el \n para el salto de linea en el bucle, pero no me dejo
  document.getElementById("domainGenerator").innerHTML = generateDomain().join("<br>");
};

function generateDomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon","koala"];
  let domain = [".com", ".net", ".us", ".io", ".es", ".org",'.er','.oon'];
  let combinations = [];

  for (let i of pronoun) {
    for (let j of adj) {
      for (let x of noun) {
        for (let z of domain) {
           if (x.slice(-2) === z) {
            combinations.push(i + j + x.slice(0, 4) + "." + x.slice(4));
            
          } else if (x !== z) {
            combinations.push(i + j + x + z);
          } 
        }
      }
    }
  }
  return combinations;
}


