describe('Verifying error Messages',()=> {
    it('Capturing error messages',async ()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
        await browser.maximizeWindow()

        const user=await $("//input[@name='username']")

        await user.setValue("Admin")

        await (await $("input[placeholder ='Password']")).setValue("admin1234")     
        
        await (await $("//button[contains(@class,'login')]")).click()

        const msg=await $("//p[contains(@class,'alert-content')]").getText()

        expect(msg).toHaveTextContaining("Invalid credentials")
 
    })
})