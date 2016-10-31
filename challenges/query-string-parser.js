/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE

function parseQueryString(string) {
    var newObject = {};
    var newString = string.split('&');
    var currentKey;
    var currentValue;

    for (keyValue of newString) {
        var currentKeyValue = keyValue.split('=');
        currentKey = currentKeyValue[0];
        currentValue = currentKeyValue[1];
        newObject[currentKey] = currentValue;
    }

    return newObject;
}

console.log(parseQueryString(''));
console.log(parseQueryString('a=1'));
console.log(parseQueryString('first=alpha&last=omega'));
console.log(parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10"));

function convertToQueryParameter(object) {
    var keyArray = Object.keys(object);
    var keyValueArray = [];
    var newString = [];

    for (var idx = 0; idx < keyArray.length; idx++) {
        keyValueArray.push(keyArray[idx]);
        keyValueArray.push(object[keyArray[idx]]);
        keyValueArray = keyValueArray.join('=');
        newString.push(keyValueArray);
        keyValueArray = [];
    }

    return newString.join('&');
}

console.log(convertToQueryParameter({first: 'alpha', last: 'omega'}));