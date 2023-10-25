import * as fs from 'node:fs'; // ES6 szintaktika, kell hozzá a package.json-ben "type": "module"
//const fs = require('fs') // ugyanolyan importálás, mint a felette lévő sor <- commonJS szintaktika

/* try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
} */
/* try {
  const data = fs.readFileSync('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (err) {
  console.error('Error reading or parsing the JSON file:', err);
} */


/* fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
}); */

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }
  
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Error parsing the JSON data:', err);
  }
});