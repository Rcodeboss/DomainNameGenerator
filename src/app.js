/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let four = [".com", ".net", ".us"];

  let string = "";

  for (let x of pronoun) {
    for (let y of adj) {
      for (let a of noun) {
        for (let b of four) {
          document.querySelector("#rafa").innerHTML +=
            "<li>" + x + y + a + b + "</li>";
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
