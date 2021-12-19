describe('Weathercom test', () => {
    it('Open weather.com', () => {
        cy.visit('https://weather.com/weather/today/l/f38419bdba5b880763808b472bd412cc03b64a36a7f21968ced9c4976789813c')
    })

    it('open main menu and click privacy policy', () => {
        cy.scrollTo('top').wait(3000)
        cy.get('button[id="MainMenuTrigger"]').click().wait(3000)

        cy.get('button[data-testid="privacyPolicy"]').click()

    })


    it('section 14 text control', () => {

        cy.xpath('//div[@id="new-policy"]//ol[@class="toc"]//li[14]/a').click() 
        cy.get('li[id="lgpd-notice-new"]').find('h2').should('have.text', 'Lei Geral de Prote\u{00E7}\u{00E3}o de Dados Pessoais (LGPD) Notice')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(0).should('have.text', 'The Lei 13.709/ 2018 (Lei Geral de Prote\u{00E7}\u{00E3}o de Dados Pessoais, \u{201C}LGPD\u{201D}) requires certain disclosures that already are covered in our Privacy Policy.')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(1).should('have.text','In addition, please note that for the purposes of LGPD, the data controller is TWC Product and Technology, LLC, doing business as The Weather Company, an IBM business, which may be contacted at the email or address listed in Section 11 How to Contact Us.')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(2).should('have.text','The relevant Data Protection Officer may be contacted at privacy@weather.com.')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(3).should('have.text', 'Data Rights: Under LGPD, you can request to access your personal data, receive confirmation of the existence of processing and be able to request to receive confirmation about the private and public entities with whom the controller shares the data, and obtain a portable copy of your data. These rights will be fulfilled when you choose to Request a Portable Copy of Data. You also have the right to object to the processing when data is processed unlawfully and to request correction, anonymization, blocking and deletion of unnecessary, excessive data or data processed unlawfully related to your stored preferences and your use of the Services. These rights will be fulfilled when you choose to Delete Data. You can exercise your data rights on weather.com by clicking here and on the iOS or Android app by navigating to \u{201C}Data Rights\u{201D} under \u{201C}Settings\u{201D} in the app menu. Please note that you must make any requests from each browser or device where you access the Services.')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(4).should('have.text', 'International Transfers: If you are located where LGPD applies, information that we collect (including through cookies) will be processed and stored in the United States. The appropriate cross-border transfer method governing personal data included in such transfers is the EU Standard Contractual Clauses agreement pursuant to EC Decision 2010/87/EU.')
        cy.get('li[id="lgpd-notice-new"]').find('p').eq(5).should('have.text', 'Processing Basis: Our processing of your personal data in order to provide you with the Services will typically be based on one of the following processing bases (pursuant to Article 7 LGPD):')
        cy.get('li[id="lgpd-notice-new"]').find('ul').find('li').eq(0).should('have.text', 'Because you have provided us with your specific, informed, freely-given, and unambiguous consent; or')
        cy.get('li[id="lgpd-notice-new"]').find('ul').find('li').eq(1).should('have.text', 'Because the processing is necessary for the purposes of the legitimate interests pursued either by us or by a third party and such legitimate interests are not overridden by your privacy and related rights as an individual. Our legitimate interests include the provision of market-leading weather-related products and services, including the Services.')
  
    })
})

