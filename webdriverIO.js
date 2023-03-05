describe('Login Test Suite', function() {

    it('First Test In WDIO', async function() {
        
       await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       console.log("Title of app "+await browser.getTitle())

       console.log("URL of app "+await browser.getUrl())

       console.log("URL of app "+await browser.sessionId)

       expect(browser).toHaveTitle("OrangeHRM") 

    });

    it('Login Test In WDIO', async function() {
        
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
        await browser.maximizeWindow()

        const user=await $("//input[@name='username']")

        console.log("Clickable ? "+await user.isClickable())

        console.log("Displayed ? "+await user.isDisplayed())

        console.log("Enabled ? "+await user.isEnabled())

        await user.setValue("Admin")

        await (await $("input[placeholder ='Password']")).setValue("admin123")     
        
        await (await $("//button[contains(@class,'login')]")).click()

        expect(browser).toHaveUrlContaining("dashboard")

        await (await $("img[alt='profile picture']")).click();

        await browser.pause(3000)

        await (await $("//a[text()='Logout']")).click()

        expect(browser).toHaveUrlContaining("login")
 
     });

});