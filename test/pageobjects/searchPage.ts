class searchPage {

    private get searchpageFind(){
        return $('#search-query-typeahead')
    }

    private get searchDocButton(){
        return $('.btn-block')
    }

    private get searchOption (){
        return $('/html/body/app-root/div[2]/div[1]/div/app-search-container/div/div/div/div[2]/div/div[1]/app-filter/div/div/div/div[1]/div/div/typeahead-container/button[1]/div[2]/span[1]')
    }

    //public get searchResults (){
      //  return $$('*=Peter')
    //}
    
    //private get searchDocName(){
        //return $$('*=Peter')
    //}

    public async assertSearchDisplayed (){
        await expect((await this.searchpageFind).isDisplayed())
    }

    public async sendTextInSearch (docname:string){
        await (await this.searchpageFind).setValue(docname)
    }

    public async clickSearchBtn(){
        await (await this.searchDocButton).click()
    }

    public async searchResult(text:string){
        const searchSelector = '*='+ text
        await browser.waitUntil (async () => {
            const results= await $$(searchSelector)
            return results.length>=0
        })
        return $$ (searchSelector)

    }

    public async selectDropdownOption(){
        await (await this.searchOption).click()
    }


}

export default new searchPage()