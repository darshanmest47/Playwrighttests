import {test,expect} from "@playwright/test"


test("Verifcation of URL",async ({page})=>{
    await page.goto("https://toolsqa.com/")
    let url :string = await page.url()
    console.log(url)
    await expect(page).toHaveURL("https://toolsqa.com/")
})