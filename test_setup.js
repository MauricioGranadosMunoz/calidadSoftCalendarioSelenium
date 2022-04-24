// CONFIGURACION DEL WEB DRIVER PARA USAR CHROME
const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const colors = require('colors');


require('chromedriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
 
// INSTANCIA PARA REALIZAR PRUEBAS EN EL LOCAL HOST

console.log(' CONECTANDO CON EL LOCALHOST'.cyan.underline.bold);
driver.navigate().to("http://localhost:3000/")
.then(() =>    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )  )

// REGISTRO NUEVO USUARIO

.then(() => console.log('\n','REGISTRO DE UN NUEVO USUARIO'.cyan.underline.bold))
.then(() => driver.findElement(By.css('.input-reg-nombre')).sendKeys('Nombre de Prueba'))
.then(() => driver.findElement(By.css('.input-reg-email')).sendKeys('pruebaemail5@test.com'))
.then(() => driver.findElement(By.css('.input-reg-contra')).sendKeys('123456'))
.then(() => driver.findElement(By.css('.input-reg-contra-rep')).sendKeys('123456'))


.then(() => driver.wait(until.elementLocated(By.css('.crear-cuenta-cta')), 30000).click())
.then(() => driver.wait(until.elementLocated(By.css('.logout-cta')), 30000).click())
.then(() =>    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )  )

// PROCESO DE USER FLOW DE LOGIN IN PARA HACER EL CRUD DE TESTING
.then(() => {
    console.log('\n','LOGIN DE UN NUEVO USUARIO'.cyan.underline.bold);
    driver.findElement(By.css('#login-username')).sendKeys('pruebaemail5@test.com')
})
.then(() => driver.findElement(By.css('#login-pass')).sendKeys('123456'))
.then(() => {
    driver.findElement(By.css('#btn-submit')).click()
    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )
})

// METODOS PARA AGREGAR UN NUEVO EVENTO
.then(() => console.log('\n','CREANDO UN EVENTO NUEVO'.cyan.underline.bold))
.then(() => driver.wait(until.elementLocated(By.css('#favicon-cta')), 30000).click())
.then(() => driver.findElement(By.css('#titulo-evento')).sendKeys('TITULO AUTOMATIZADO'))
.then(() => driver.findElement(By.css('#notas-evento')).sendKeys('NOTAS AUTOMATIZADO'))
.then(() => {
    driver.findElement(By.css('#guardar-evento')).click()
    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )
})

// METODOS PARA EDITAR UN EVENTO
.then(() => console.log('\n','EDITANDO UN EVENTO EXISTENTE'.cyan.underline.bold))
.then(() => driver.wait(until.elementLocated(By.css('.rbc-event')), 30000).click())
.then(() => driver.findElement(By.css('#titulo-evento')).sendKeys(' EDITED'))
.then(() => driver.findElement(By.css('#notas-evento')).sendKeys(' EDITED'))
.then(() => {
    driver.findElement(By.css('#guardar-evento')).click()
    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )
})

// METODOS PARA ELIMINAR UN EVENTO
.then(() => console.log('\n','ELIMINANDO UN EVENTO EXISTENTE'.cyan.underline.bold))
.then(() => driver.wait(until.elementLocated(By.css('.rbc-event')), 30000).click())
.then(() => {
    driver.findElement(By.css('.fab-danger')).click()   
    console.log(' ESTADO DE LA PRUEBA | '.magenta.italic.bold, 'OK \u2713'.green.bold )
})
.then(() => driver.wait(until.elementLocated(By.css('.logout-cta')), 30000).click())