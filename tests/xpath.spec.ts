import { test,expect,Locator} from "@playwright/test"

test("Writing of xpath in playwright",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

      const menu:Locator = page.locator("xpath=//li[@role='menuitem']")
      const value:number = await menu.count()
      console.log("The total count is : ",value)

      console.log("The first content is :",await menu.first().textContent())
      console.log("The last content is :",await menu.last().textContent())
      console.log("The second content is: ",await menu.nth(1).textContent())


      const allCount :string[] = await menu.allTextContents()

      for(const val of allCount){
        console.log("The content is: ",val)
      }

      //dynamic xpath

      const button:Locator= page.locator("xpath=//button[contains(text(),'START') or contains(text(),'STOP')]")
      
      console.log("Button content is : ",await button.textContent())
      await button.click();
      console.log("Button content is: ",await button.textContent())
      await button.click();
     

      //  starts with
      const links:Locator = page.locator("xpath=//a[starts-with(@href,'https://testautomation')]")
      const allContents:string[] = await links.allTextContents()
       
      // To get single text content
      console.log("The first content is : ",await links.first().textContent())
      console.log("The last content is : ",await links.last().textContent())
      console.log("The second content is : ",await links.nth(2).textContent())
     
      // to get all contents by looping
      for(const vals of allContents){
         console.log(vals)
      }



})