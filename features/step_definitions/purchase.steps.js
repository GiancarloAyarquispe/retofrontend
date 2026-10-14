const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('agrega el producto {string} al carrito', async function (productName) {
  await this.inventoryPage.addProduct(productName);
});

Then('el carrito muestra {int} producto', async function (count) {
  await expect(this.inventoryPage.cartBadge).toHaveText(String(count));
});

When('abre el carrito de compras', async function () {
  await this.inventoryPage.openCart();
});

Then(
  'el carrito contiene el producto {string}',
  async function (productName) {
    await expect(this.cartPage.itemNames).toHaveText([productName]);
  }
);

When('inicia el proceso de compra', async function () {
  await this.cartPage.checkout();
});

When(
  'completa los datos de envio {string}, {string}, {string}',
  async function (firstName, lastName, postalCode) {
    await this.checkoutPage.enterShippingInformation(
      firstName,
      lastName,
      postalCode
    );
  }
);

When('confirma la compra', async function () {
  await this.checkoutPage.finishPurchase();
});

Then(
  'se muestra la confirmacion {string}',
  async function (confirmationMessage) {
    await expect(this.checkoutPage.confirmationMessage).toHaveText(
      confirmationMessage
    );
  }
);
