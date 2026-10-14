Feature: Inicio de sesion en Sauce Demo
  Como cliente de Sauce Demo
  Quiero iniciar sesion con mis credenciales
  Para acceder a los productos disponibles

  Background:
    Given que el cliente abre la pagina de inicio de sesion

  @login @smoke
  Scenario: Inicio de sesion con credenciales validas
    When inicia sesion como "standard_user" con contrasena "secret_sauce"
    Then se muestra el inventario de productos

  @login @negative
  Scenario: Rechazo de credenciales invalidas
    When inicia sesion como "standard_user" con contrasena "contrasena_incorrecta"
    Then se muestra el error "Username and password do not match any user in this service"

  @login @negative
  Scenario: Rechazo del usuario bloqueado
    When inicia sesion como "locked_out_user" con contrasena "secret_sauce"
    Then se muestra el error "Sorry, this user has been locked out."
