import "./styles.css";
import { list } from "./list.js";
import { dom } from "./dom.js";

const test = dom();

document.body.appendChild(test.createList());
