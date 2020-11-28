import {Person, hello} from './b.js'
//import ccc from './c.js' // ccc()호출 - export default경우
//import {default as dummy} from './c.js'
import defaultExport from './c.js'


//ccc();

const p = new Person("펭수");
hello();
//dummy(); // c.js
defaultExport(); // ccc()호출
console.log("=======", p.name);
