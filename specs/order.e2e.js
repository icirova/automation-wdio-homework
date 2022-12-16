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
        'Funkční navigace', () => {


            $('a*=Pro učitelé').click()
            $('a*=Objednávka pro MŠ/ZŠ').click()
            console.log('Je zobrazena Objednávka akce? ' + $('h3*=Objednávka akce').isDisplayed())

        }
    )

    it.only(
        'Vyplnění IČO a automatické načtení jména a adresy odběratele z ARESu', () => {

            const ico = $('#ico')
            
            ico.setValue(ICO)
            browser.keys('Enter')
            
            const toast = $('.toast-message')
            toast.waitForExist()
           
            const value = getFieldValueById('client')
            console.log('Value: ' + value)
            const address = getFieldValueById('address')
            console.log('Value: ' + address)

        }
    )

    it(
        'Vyplnění a následné odeslání objednávky', () => {

            const client = $('#client')
            const completeAddress = $('#address')
            const ico = $('#ico')
            const substitute = $('#substitute')
            const name = $('#contact_name')
            const tel = $('#contact_tel')
            const mail = $('#contact_mail')
            const beginning = $('#start_date_1')
            const end = $('#end_date_1')
            const campButton = $('#nav-home-tab')
            const dayTimeCamp = $('#camp-date_part')
            const students = $('#camp-students')
            const age = $('#camp-age')
            const adults = $('#camp-adults')
            const save = $('.btn-primary')
            const toastMessage = $('.toast-message')

            client.setValue(clientName)
            completeAddress.setValue(address)
            ico.setValue(ICO)

            substitute.setValue(substituteName)
            name.setValue(contactName)
            tel.setValue(contactPhone)
            mail.setValue(contactEmail)
            beginning.setValue(startDate)
            end.setValue(endDate)

            campButton.click()
            dayTimeCamp.selectByVisibleText('Odpolední')
            students.setValue(20)
            age.setValue(12)
            adults.setValue(2)

            save.click()

            // browser.pause (5000)

            console.log('Toast message: ' + toastMessage.getText())


            //browser.saveScreenshot('foto.png')
        }
    )

    it(
        'Objednávku nelze odeslat pokud není řádně vyplněna', () => {



        }
    )


})
