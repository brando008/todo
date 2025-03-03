import "./styles.css";
import { list } from "./list.js";
import { Dom } from "./dom.js";

const test = Dom();

document.body.appendChild(test.createList());
