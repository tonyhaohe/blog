/* 
MIT License

Copyright (c) [2026] [swpark907]
https://codepen.io/swpark907/pen/gOGExJr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const area = document.querySelector(".galaxy");

let amountMeteor = 15;
let amountStar = 200;
let i = 0;
let j = 0;
let k = 0;

function galaxy() {

  while(i < amountMeteor){ // meteor from top
    let drop = document.createElement('i');
    let size = Math.random() * 2 + 0.5;
    let posX = Math.floor(Math.random() * area.offsetWidth);
    let delay = Math.random() * - 20;
    let duration = Math.random() * 20 + 3;

    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = 0;
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    area.appendChild(drop);
    i++;
  }

  while(k < amountMeteor*2){ // meteor from right
    let drop = document.createElement('i');
    let size = Math.random() * 2 + 0.5;
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() * -20;
    let duration = Math.random() * 30 + 3;

    drop.style.width = size + 'px';
    drop.style.right = 0;
    drop.style.top = posY + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    area.appendChild(drop);
    k++;
  }

  while(j < amountStar){
    let star = document.createElement('j');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * area.offsetWidth * 2);
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() * 100 + 50;
    let duration = Math.random() * 300 + 15;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = posX + 'px';
    star.style.top =  posY + 'px';
    star.style.animationDuration = duration + 's';

    area.appendChild(star);
    j++;
  }
}

galaxy();
