describe('Handling Multiple Elements',()=>{
    it('Usage of $$',async()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await browser.pause(3000)
        const allElements=await $$("//div[contains(@class,'login-footer-sm')]//a")
        console.log("Length of Elements found ",allElements.length)

        for(let i=0;i<allElements.length;i++){
            const hrefAtt=await allElements[i].getAttribute("href")
            console.log(hrefAtt)
            if(hrefAtt.includes("youtube")){
                await allElements[i].click()
                await browser.pause(3000)
                break
            }
        }
    })
})