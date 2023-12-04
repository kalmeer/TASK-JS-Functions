/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log(`Khalid`);
}

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(dob) {
  console.log(2023 - dob);
}

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, lang) {
  if (lang == "en") {
    console.log(`Hello ${name}`);
  } else if (lang == "es") {
    console.log(`Hola ${name}`);
  } else if (lang == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (lang == "tr") {
    console.log(`Merhaba ${name}`);
  }
}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(par1, par2) {
  if (par1 > par2) {
    console.log(par1);
  } else {
    console.log(par2);
  }
}

printName();
printAge(1996);
printHello("Khalid", "en");
printHello("Khalid", "es");
printHello("Khalid", "tr");
printMax(1, 2);
printMax(5, 1);
printMax(6, 6);
