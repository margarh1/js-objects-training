/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(string) {
  var givenDate = new Date(string);
  var numOfDays = (givenDate - Date.now()) / 86400000;
  return Math.floor(numOfDays);
}

function birthdayReminder(arr) {
    var reminders = [];
    for (person of arr) {
        var remainingDays = daysUntilDate(person.dob)
        var bday = person.name + "'s birtday is in " + remainingDays + ' days';
        reminders.push(bday);
    }
    return reminders;
}

console.log(daysUntilDate('10/31/2013'));
console.log(daysUntilDate('4/01/1975'));
console.log(daysUntilDate('12/25/2016'));
var someBdays = [{name: 'Jack', dob: '10/31/2013'}, {name: 'Jill', dob: '4/01/1975'}, {name: 'Abigail', dob: '12/25/2016'}];
console.log(birthdayReminder(someBdays));

