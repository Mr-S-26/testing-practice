# Function Testing Project

This project implements and tests several utility functions, including string manipulation, a calculator, a Caesar cipher, and array analysis. The project uses Jest for testing.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [capitalize](#capitalize)
  - [reverseString](#reversestring)
  - [calculator](#calculator)
  - [caesarCipher](#caesarcipher)
  - [analyzeArray](#analyzearray)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git

   Navigate to the project directory:
sh
cd your-repo-name
Install the dependencies:
sh
npm install
Usage
Running the Tests
To run the tests, use the following command:

sh
npm test
Functions
capitalize
Capitalizes the first character of a string.

Usage:

JavaScript
const { capitalize } = require('./functions');
console.log(capitalize('hello')); // Output: 'Hello'
reverseString
Reverses the given string.

Usage:

JavaScript
const { reverseString } = require('./functions');
console.log(reverseString('hello')); // Output: 'olleh'
calculator
An object containing functions for basic arithmetic operations: add, subtract, multiply, and divide.

Usage:

JavaScript
const { calculator } = require('./functions');
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(4, 3)); // Output: 12
console.log(calculator.divide(8, 2)); // Output: 4
caesarCipher
Applies a Caesar cipher to the given string with the specified shift factor.

Usage:

JavaScript
const { caesarCipher } = require('./functions');
console.log(caesarCipher('Hello, World!', 3)); // Output: 'Khoor, Zruog!'
analyzeArray
Analyzes an array of numbers and returns an object with the average, min, max, and length properties.

Usage:

JavaScript
const { analyzeArray } = require('./functions');
console.log(analyzeArray([1, 8, 3, 4, 2, 6])); 
// Output: { average: 4, min: 1, max: 8, length: 6 }
Tests
This project uses Jest for testing. The tests are located in the __tests__ directory and cover all the functions listed above.

To run the tests, simply execute:

sh
npm test
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository
Create a new branch (git checkout -b feature/your-feature-name)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature-name)
Create a new Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Code
### Customizing the README

- Replace `yourusername` and `your-repo-name` with your actual GitHub username and repository name.
- Add any additional sections or information relevant to your project.
- If your project has more complicated setup or usage instructions, be sure to include those as well.

This template should give users a clear understanding of what your project does, how to use it, and how to contribute.