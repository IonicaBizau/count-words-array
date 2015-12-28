const countWordsArray = require("../lib");

console.log(countWordsArray("Home, sweet, home!"));
// => [ { name: 'Home', count: 1 },
//  { name: 'sweet', count: 1 },
//  { name: 'home', count: 1 } ]

console.log(countWordsArray("Home, sweet, home!", true));
// => [ { name: 'home', count: 2 }, { name: 'sweet', count: 1 } ]
