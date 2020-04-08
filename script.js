// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
  var symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
  ];
  var lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var passwordLength = prompt(
    "What length of password would you like? (between 8 and 128 characters"
  );
  var characterLower = confirm("Would you like to include lower case letters?");
  var characterUpper = confirm("Would you like to include upper case letters?");
  var characterNumber = confirm("Would you like to include numbers?");
  var characterSpecial = confirm(
    "Would you like to include special case letters?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    while(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt(
      "Please enter a password length between 8 and 128 characters"
    );
    }
  }
  if (
    !characterLower &&
    !characterUpper &&
    !characterNumber &&
    !characterSpecial
  ) {
    alert("Please select at least one option");
    characterLower = confirm("Would you like to include lower case letters?");
    characterUpper = confirm("Would you like to include upper case letters?");
    characterNumber = confirm("would you like to include numbers?");
    characterSpecial = confirm(
      "Would you like to include special case letters?"
    );
  }
  var passwordArray = [];
  // LOWER, UPPER, NUMBER, SPECIAL
  if (characterLower && characterUpper && characterNumber && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 4 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
      if (randomIndex === 3) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      if (randomIndex === 4) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //LOWER, UPPER, NUMBER
  } else if (characterLower && characterUpper && characterNumber) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 3 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }

      if (randomIndex === 3) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //LOWER, NUMBER, SPECIAL
  } else if (characterLower && characterNumber && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 3 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }

      if (randomIndex === 2) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      if (randomIndex === 3) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //LOWER, UPPER, SPECIAL
  } else if (characterLower && characterUpper && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 3 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
      if (randomIndex === 3) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
    }
    //UPPER, NUMBER, SPECIAL
  } else if (characterUpper && characterNumber && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 3 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");
      }
      if (randomIndex === 1) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
      if (randomIndex === 2) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      if (randomIndex === 3) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //LOWER, NUMBER
  } else if (characterLower && characterNumber) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }

      if (randomIndex === 2) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //LOWER, SPECIAL
  } else if (characterLower && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
    }
    //UPPER, NUMBER
  } else if (characterUpper && characterNumber) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");
      }
      if (randomIndex === 1) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
      if (randomIndex === 2) {
        passwordArray.push(Math.floor(Math.random() * 10));
      }
    }
    //UPPER, SPECIAL
  } else if (characterUpper && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");
      }

      if (randomIndex === 1) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
      if (randomIndex === 2) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
    }

    //LOWER, UPPER
  } else if (characterLower && characterUpper) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
      }
    }
    //NUMBER, SPECIAL
  } else if (characterNumber && characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 2 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(Math.floor(Math.random() * 10));
        console.log(passwordArray);
      }
      if (randomIndex === 2) {
        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
    }

    //LOWER
  } else if (characterLower) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 1 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
        console.log(passwordArray);
      }
    }
    //UPPER
  } else if (characterUpper) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 1 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
        console.log(passwordArray);
      }
    }
    //SPECIAL
  } else if (characterSpecial) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 1 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        console.log(passwordArray);
      }
    }
    //NUMBER
  } else if (characterNumber) {
    console.log(passwordLength);
    for (var i = 0; i <= parseInt(passwordLength) - 1; i++) {
      console.log("inside  loop");
      console.log(passwordArray);

      var randomIndex = Math.floor(Math.random() * 1 + 1);
      if (randomIndex === 1) {
        console.log("INSIDE IF 1");

        passwordArray.push(Math.floor(Math.random() * 10));
        console.log(passwordArray);
      }
    }
  }

  var createdPassword = passwordArray.join("");
  console.log(createdPassword);
  return createdPassword;
}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // userInput();
  // characterLower();
  // characterUpper();
  // characterNumber();
  // characterSpecial();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
