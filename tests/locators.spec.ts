import {test,expect,Locator} from "@playwright/test"

/* getByRole */
test("Verification of getByRole locator",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
      page.getByRole("textbox",{name:'Username:'}).fill("Darshan")

})

test("Verification of getByRole Locator with checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByRole("checkbox",{name: /Accept terms/i}).click()
    await page.waitForTimeout(3000);
})


/* getBy text */
test("Verification of getByText Locator",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
   let text:Locator = page.getByText("Locate elements by their text content.")
   await expect(text).toBeVisible()
})


test("Verification of getByText assertion with partial text",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
  let text:Locator=page.getByText("Locate elements by their text content.")
  await expect(text).toContainText("by their text content")
})

/* getByalttext */
test("Verification of getByAltText locator",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         let altText:Locator = page.getByAltText("logo image")
         await expect(altText).toBeVisible()
})


/*getByLabel */

test("Verification of getByLabel",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByLabel("Email Address:").fill("darshanmesta33@gmail.com")
         await page.waitForTimeout(3000);
})

test("Verification of getByLabel password regex",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByLabel(/password: /i).fill("password")
         await page.waitForTimeout(5000);

})

test("Verification of getByLabel radio button",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByLabel(/Standard/i).click()
         await page.waitForTimeout(5000);

})


test("Verification of getByLabel Express radio button",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByLabel(/Express/i).click()
         await page.waitForTimeout(5000);

})


/*getByPlaceholder*/
test("Verification of getByPlaceholder button",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByPlaceholder("your full name").fill("Darshan Mesta")
         await page.waitForTimeout(5000);

})

test("Verification of getByPlaceholder1 button",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByPlaceholder("your message here").fill("Hi This is Darshan Mesta")
         await page.waitForTimeout(5000);

})


/*getByTitle*/


test("Verification of getByTitle",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByTitle("Home page link").click()
         await page.waitForTimeout(15000);

})



/*getByTestId*/

test("Verification of getByTestId",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         await page.getByTestId("edit-profile-btn").click()
         await page.waitForTimeout(15000);

})