//если указывать ./ то ищет локально, если без то имет в node_modules
import Reach from 'react';
import { sum } from './sum';
// import "./index.scss";
import "./index.css";

Reach.createElement('div', null);

const a = document.querySelector('.ulfirst');

console.log(sum(3, 5))

console.log(a)

