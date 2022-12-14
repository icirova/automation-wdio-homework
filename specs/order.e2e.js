import {
    ICO,
    clientName,
    address,
    substituteName,
    contactName,
    contactPhone,
    contactEmail,
    startDate,
    endDate
} from './fixtures.js'

import {
    getFieldValueById
} from '../pages/functions.js'

describe('Objednávka pro MŠ/ZŠ', () => {

    beforeEach(() => {
        browser.reloadSession()
        browser.url('/objednavka/pridat')
    })

    it(
        'Vyplnění objednávkového formuláře', () => {

            $('#ico').setValue(ICO)
            browser.keys('Enter')

            browser.pause(4000)

            const value = getFieldValueById('client')

            console.log('Value: ' + value)

            const address = getFieldValueById('address')

            console.log('Value: ' + address)

            $('#substitute').setValue(substituteName)
            $('#contact_name').setValue(contactName)
            $('#contact_tel').setValue(contactPhone)
            $('#contact_mail').setValue(contactEmail)
            $('#start_date_1').setValue(startDate)
            $('#end_date_1').setValue(endDate)

            $('#nav-home-tab').click()
            $('#camp-date_part').selectByVisibleText('Odpolední')

            //browser.saveScreenshot('foto.png')
        }
    )

})
