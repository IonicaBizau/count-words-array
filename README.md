# count-words-array [![Support this project][donate-now]][paypal-donations]

Get the word count as array.

## Installation

```sh
$ npm i --save count-words-array
```

## Example

```js
const countWordsArray = require("count-words-array");

console.log(countWordsArray("Home, sweet, home!"));
// => [ { name: 'Home', count: 1 },
//  { name: 'sweet', count: 1 },
//  { name: 'home', count: 1 } ]

console.log(countWordsArray("Home, sweet, home!", true));
// => [ { name: 'home', count: 2 }, { name: 'sweet', count: 1 } ]
```

## Documentation

### `countWordsArray(s, i)`
Get the word count as sorted array.

#### Params
- **String** `s`: The input string.
- **Boolean** `i`: A flag representing if the word matching is case insensitive.

#### Return
- **Array** An array of objects containing the `name` and the `count` fields.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md