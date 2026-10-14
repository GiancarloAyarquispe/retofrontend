Feature: Carrito y compra en Sauce Demo
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito y completar una compra
  Para adquirir los productos que necesito

  Background:
    Given que el cliente abre la pagina de inicio de sesion
    And inicia sesion como "standard_user" con contrasena "secret_sauce"
    Then se muestra el inventario de productos

  @cart @smoke
  Scenario: Agregar un producto al carrito
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el carrito muestra 1 producto

  @cart
  Scenario: Consultar los productos agregados al carrito
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito de compras
    Then el carrito contiene el producto "Sauce Labs Backpack"

  @checkout @smoke
  Scenario: Completar la compra hasta la confirmacion
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito de compras
    And inicia el proceso de compra
    And completa los datos de envio "Ana", "Prueba", "15001"
    And confirma la compra
    Then se muestra la confirmacion "Thank you for your order!"
