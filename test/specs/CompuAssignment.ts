import loginPage from "../pageobjects/loginPage"
import searchPage from "../pageobjects/searchPage"

describe ('My main test', () =>{

    it ('Load homepage and cick search', async () =>{
        await loginPage.visit()
        await loginPage.acceptCookies()
        await loginPage.clickSearchBar()
        await searchPage.assertSearchDisplayed()
    })

    it('Should enter name and check results dislayed',async () =>{
        await searchPage.sendTextInSearch('Peter Test')
        await searchPage.clickSearchBtn()
        const listitems=await searchPage.searchResult('Peter Test')
        await browser.pause(5000)
        expect(listitems.length == 2)

        //await browser.$('.')
        
    })

    it.skip('Should select option from dropdown', async () =>{

        await searchPage.sendTextInSearch('Pet')
        //await browser.pause(5000)
        await searchPage.selectDropdownOption() 
       
        //await browser.pause(5000)
        const whitehouse=await browser.$('/html/body/app-root/div[2]/div[1]/div/app-physician-profile-container/div/div[2]/div[1]/div/div[1]/app-profile-location-container/div/div/app-profile-location-info/div/app-profile-field[1]/div').getText()
       expect (whitehouse).toHaveTextContaining('Heusnerstraße 40\n42283 Wuppertal')
       await (await browser.$('.header__content--title')).getText()
    })

})