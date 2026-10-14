# Estrategia de automatizacion

## Alcance

La suite cubre los criterios de aceptacion del reto en Sauce Demo: autenticacion correcta e incorrecta, usuario bloqueado, gestion del carrito y confirmacion de una compra.

## Herramientas y patrones

- **Playwright** controla Chromium y sus localizadores con espera automatica.
- **Cucumber** ejecuta los escenarios Gherkin y permite expresar el flujo en lenguaje de negocio.
- **Page Object Model** encapsula localizadores e interacciones por pantalla en  `src/pages/`, evitando acoplar los pasos a la estructura del DOM.
- **World de Cucumber** conserva el estado propio del escenario y sus objetos de pagina.
- **Hooks** comparten el proceso del navegador y crean un contexto nuevo por escenario, aislando cookies y estado entre pruebas.

## Cobertura

Se validan seis escenarios: login valido, credenciales invalidas, usuario
bloqueado, agregar un producto, consultar el carrito y completar la compra.
Las verificaciones comprueban contenido visible y el mensaje de confirmacion,
no solamente la navegacion entre paginas.

## Reportes y datos

Cucumber genera un reporte HTML en `reports/cucumber-report.html`. Las
credenciales corresponden a los usuarios de demostracion publicados por Sauce
Demo y no son credenciales de una cuenta personal. El flujo de compra usa datos
ficticios de envio.

## Limitaciones conocidas

Las pruebas requieren que el sitio publico y la descarga/instalacion del
navegador esten disponibles. Cambios externos en Sauce Demo pueden requerir
actualizar localizadores o mensajes esperados.
