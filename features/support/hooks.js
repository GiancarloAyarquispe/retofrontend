const {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout
} = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { CartPage } = require('../../src/pages/cart.page');
const { CheckoutPage } = require('../../src/pages/checkout.page');
const { InventoryPage } = require('../../src/pages/inventory.page');
const { LoginPage } = require('../../src/pages/login.page');

let browser;

setDefaultTimeout(30 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false'
  });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function () {
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});
