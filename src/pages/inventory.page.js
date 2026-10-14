class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProduct(productName) {
    const product = this.page
      .locator('.inventory_item')
      .filter({
        has: this.page.locator('.inventory_item_name', {
          hasText: productName
        })
      });

    await product.locator('button[data-test^="add-to-cart-"]').click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
