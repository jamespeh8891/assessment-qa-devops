
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw button', async () => {
    let drawBtn = await driver.findElement(By.name('choices'))
    await drawBtn.sendKeys('choices')
    await driver.sleep(2000)
})

test('clicking add to duo', async () => {
    let addBtn = await driver.findElement(By.name('player-duo'))
    await addBtn.sendKeys('player-duo')
    await driver.sleep(2000)
})