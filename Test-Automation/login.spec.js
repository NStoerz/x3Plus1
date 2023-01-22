// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login', async function() {
    await driver.get("https://www.saucedemo.com/")
    await driver.manage().window().setRect({ width: 974, height: 1040 })
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("react-burger-menu-btn")).click()
    await driver.findElement(By.id("logout_sidebar_link")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()
    {
      const element = await driver.findElement(By.css("*[data-test=\"login-button\"]"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.id("react-burger-menu-btn")).click()
    await driver.findElement(By.id("logout_sidebar_link")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("locked_out_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys(Key.ENTER)
    {
      const elements = await driver.findElements(By.css("*[data-test=\"error\"]"))
      assert(elements.length)
    }
  })
})
