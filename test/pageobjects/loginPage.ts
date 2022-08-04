class loginPage {

//getters
private get cookies (){
    return $('.agree-consent--all')
}


private get searchBar(){
    return $ ('*=Arztsuche')
}


//functions

public async visit(){
    await browser.url ('https://demo.clickdoc.de')
    await browser.maximizeWindow()
}

public async acceptCookies (){
    await (await this.cookies).click()
}

public async clickSearchBar(){
    await (await this.searchBar).click()
}


}


export default new loginPage()