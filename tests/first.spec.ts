import {test,expect} from "@playwright/test"

test("Verification of Page launch",async ({page})=>{
        await page.goto("https://toolsqa.com/")
        let pageTitle:string = await page.title()
        console.log(pageTitle)
        await expect(page).toHaveTitle("Tools QA")
})