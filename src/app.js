/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variables to create the excuse
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework", " my phone", " the car"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  //Structure of the sentence
  let position1 = Math.floor(Math.random() * who.length);
  let position2 = Math.floor(Math.random() * action.length);
  let position3 = Math.floor(Math.random() * what.length);
  let position4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[position1] + action[position2] + what[position3] + when[position4];
};
