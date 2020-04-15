# passwordGenerator
Homework 3: Javascript Password Generator
The first step for this homework was to set the necessary variables.  This included all lower-case letters, upper-case letters, numbers 0 -9 and an array of special characters.  After this a series of questions will prompt the user to determine the nature of the password generated.  The user will determine the length of the password between 8 and 128 characters long and the inclusion of lower-case letters, upper-case letters, numbers and special characters.  An IF statement defines the length of the password.  If an incorrect number is entered, the code will prompt for a correct response.  An IF statement confirms the inclusion of the variables.  The program will then run through the selected variable permutation and generate a password.  
The possible permutations are as follows:  
  lower, upper, number, and special;
  lower, upper, number;
  lower, number, special;
  lower, upper, special;
  upper, number, special;
  lower, number;
  lower, special;
  upper, number;
  upper, special;
  lower, upper;
  number, special;
  lower;
  upper;
  number;
  special.
  Once the program runs through the selected permutation it will create a password and display it.
  
