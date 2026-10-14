const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que el cliente abre la pagina de inicio de sesion', async function () {
  await this.loginPage.open(this.baseUrl);
});

When(
  'inicia sesion como {string} con contrasena {string}',
  async function (username, password) {
    await this.loginPage.login(username, password);
  }
);

Then('se muestra el inventario de productos', async function () {
  await expect(this.inventoryPage.title).toHaveText('Products');
});

Then('se muestra el error {string}', async function (message) {
  await expect(this.loginPage.errorMessage).toContainText(message);
});
