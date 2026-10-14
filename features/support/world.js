const { setWorldConstructor, World } = require('@cucumber/cucumber');

class SauceDemoWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com';
  }
}

setWorldConstructor(SauceDemoWorld);
