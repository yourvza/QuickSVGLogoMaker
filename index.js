const fs = require('fs');
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Questions for inquirer to specify the properties of the object
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please Enter up to 3 Characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please Enter a valid color for text:",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please Enter a valid color for shape:",
    },
    {
        type: "list",
        name: "shape",
        message: "Please Choose from the list below the shape you would like to implement",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to generate the SVG string based on user input
function generateSvgString(answers) {
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";

    switch (answers.shape) {
        case "Triangle":
            svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
            break;
        case "Square":
            svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
            break;
        case "Circle":
            svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
            break;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    return svgString;
}

// Function to write the SVG file using user answers from inquirer prompts
function writeToFile(fileName, svgString) {
    fs.writeFile(fileName, svgString, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
    });
}

// Function to initialize the inquirer prompts and handle user input
function init() {
    inquirer.prompt(questions).then((answers) => {
        if (answers.text.length > 3) {
            console.log("Value must be 3 characters or less");
            init();
        } else {
            const svgString = generateSvgString(answers);
            writeToFile("logo.svg", svgString);
        }
    });
}

init();