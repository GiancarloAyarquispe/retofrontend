# Reto de Automatizacion QA Frontend — Sauce Demo

Suite de pruebas end-to-end para `https://www.saucedemo.com`, implementada con
Playwright, Cucumber y Gherkin. Las paginas se modelan con Page Object Model
(POM), y cada escenario se ejecuta en un contexto de navegador aislado.

## Requisitos

- Node.js 22 LTS o 24 (o una version 26 o superior)
- npm (incluido con Node.js)
- Conexion a Internet para acceder a Sauce Demo y descargar Chromium

## Instalacion

Desde la raiz del proyecto:

```bash
npm ci
npx playwright install chromium
```

## Ejecucion

Ejecutar todos los escenarios en modo headless:

```bash
npm test
```

Ejecutar solo los escenarios de inicio de sesion:

```bash
npm run test:login
```

Ejecutar solo el flujo de compra:

```bash
npm run test:checkout
```

Para mostrar el navegador durante la ejecucion:

PowerShell:

```powershell
$env:HEADLESS = 'false'
npm test
Remove-Item Env:HEADLESS
```

macOS o Linux:

```bash
HEADLESS=false npm test
```

La URL puede cambiarse con la variable `BASE_URL`. En PowerShell:

```powershell
$env:BASE_URL = 'https://www.saucedemo.com'
npm test
```

## Escenarios incluidos

- Inicio de sesion exitoso con `standard_user`.
- Rechazo de credenciales incorrectas.
- Rechazo del usuario bloqueado `locked_out_user`.
- Incorporacion de un producto y validacion del indicador del carrito.
- Consulta del producto agregado al carrito.
- Compra completa, desde el carrito hasta la confirmacion del pedido.

Credenciales publicas de prueba de Sauce Demo:

| Usuario | Contrasena |
|---|---|
| `standard_user` | `secret_sauce` |
| `locked_out_user` | `secret_sauce` |

El informe HTML de Cucumber se genera en `reports/cucumber-report.html`.

## Estructura

```text
features/                 Escenarios Gherkin
features/step_definitions/ Pasos de Cucumber
features/support/         World y hooks del navegador
src/pages/                Page Objects de la aplicacion
docs/                     Estrategia y patrones
cucumber.cjs              Configuracion de Cucumber
```

