/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
  let po1 = Math.floor(Math.random() * who.length);
  let po2 = Math.floor(Math.random() * action.length);
  let po3 = Math.floor(Math.random() * what.length);
  let po4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[po1] + action[po2] + what[po3] + when[po4];
};
