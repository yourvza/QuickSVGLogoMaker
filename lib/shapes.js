class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  }

  renderText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }

  renderEnd() {
    return `</svg>`;
  }
}

class Triangle extends Shape {
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  renderShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  renderShape() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
