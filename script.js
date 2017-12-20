document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
  function summerTime() {
    return "It's summertime baby!";
  };


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(summerTime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below.
  function addFive(num1) {
    return num1 + 5;
  };


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(addFive(10))
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
  function double(num1) {
    return num1 * 2;
  };


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(double(6));
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
  function greetMe(name) {
    return "Hello, " + name + "!";
  };



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(greetMe("Carl"));
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.
  function isItLessThanTen(num1) {
    if (num1 <= 10) {
      return "Your number is less than 10";
    }
    else {
      return "Your number is not less than 10";
    };
  };


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(isItLessThanTen(3));
  console.log(isItLessThanTen(20));
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.
  function inHighSchool(age) {
    if ((age >= 14) && (age <= 18)) {
      return "High Schooler";
    } else {
      return "Nope";
    };
  };


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(inHighSchool(17));
  console.log(inHighSchool(10));
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.
  function areTheySpeeding(mph) {
    if (mph < 75) {
      return "Thanks for driving safely!";
    } else {
      return "SLOW DOWN!!";
    }
  };


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(areTheySpeeding(60));
  console.log(areTheySpeeding(90));
//////////////////////////////////////////////////////////////////////////
  // Write `sum` below.
  function sum(num1, num2) {
    return num1 + num2;
  };


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(sum(3, 4));
//////////////////////////////////////////////////////////////////////////
  // Write `product` below.
  function product(num1, num2) {
    return num1 * num2;
  };


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(product(8, 10));
//////////////////////////////////////////////////////////////////////////
})