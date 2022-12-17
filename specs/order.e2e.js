import {
    ICO,
    clientName,
    clientAddress,
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

            const substitute = $('#substitute')
            const order = $('h3*=Objednávka akce')

            browser.url('')
            $('a=Pro učitelé').click()
            $('a=Objednávka pro MŠ/ZŠ').click()

            expect(order).toBeDisplayed()
            expect(substitute).toBeDisplayed()

        }
    )

    it(
        'Vyplnění IČO a automatické načtení jména a adresy odběratele z ARESu', () => {

            const ico = $('#ico')
            const client = $('#client')
            const inputAddress = $('#address')

            ico.setValue(ICO)
            browser.keys('Enter')

            const toast = $('.toast-message')
            toast.waitForExist()

            const value = getFieldValueById('client')
            expect(client).toBeDisplayed()
            expect(value).toEqual(clientName)


            const address = getFieldValueById('address')
            expect(inputAddress).toBeDisplayed()
            expect(clientAddress).toEqual(address)

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
            const confirmation = $('h3=Děkujeme za objednávku')

            client.setValue(clientName)
            completeAddress.setValue(clientAddress)
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

            expect(confirmation).toBeDisplayed
            expect(toastMessage.getText()).toEqual('Objednávka byla úspěšně uložena')
           
        }
    )

    it.only(
        'Objednávku nelze odeslat pokud není řádně vyplněna', () => {

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
            const confirmation = $('h3=Děkujeme za objednávku')

            client.setValue(clientName)
            completeAddress.setValue(clientAddress)
            ico.setValue(ICO)

            substitute.setValue(substituteName)
            name.setValue(contactName)
            tel.setValue(contactPhone)
            mail.setValue(contactEmail)
            beginning.setValue()
            end.setValue()

            campButton.click()
            dayTimeCamp.selectByVisibleText('Odpolední')
            students.setValue(20)
            age.setValue(12)
            adults.setValue(2)

            save.click()

            expect(confirmation).not.toBeDisplayed()
            expect(save).toBeDisplayed()

        }
    )


})
