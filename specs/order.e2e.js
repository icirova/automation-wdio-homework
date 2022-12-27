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

import orderPage from '../pages/orderPage.js'

import confirmationPage from '../pages/confirmationPage.js'



describe('Objednávka pro MŠ/ZŠ', () => {

    beforeEach(() => {
        orderPage.open()
    })

    it(
        'Vyplnění IČO a automatické načtení jména a adresy odběratele z ARESu', () => {

            const ico = orderPage.ico
            ico.setValue(ICO)
            browser.keys('Enter')

            const toast = orderPage.toast
            toast.waitForExist()

            const client = orderPage.clientName
            const value = getFieldValueById('client')
            expect(client).toBeDisplayed()
            expect(value).toEqual(clientName)

            const inputAddress = orderPage.address
            const address = getFieldValueById('address')
            expect(inputAddress).toBeDisplayed()
            expect(address).toEqual(clientAddress)
        }
    )

    it(
        'Vyplnění a následné odeslání objednávky na příměstský tábor', () => {

            const ico = orderPage.ico
            ico.setValue(ICO)

            const substitute = orderPage.substitute
            substitute.setValue(substituteName)

            const name = orderPage.name
            name.setValue(contactName)

            const tel = orderPage.tel
            tel.setValue(contactPhone)

            const mail = orderPage.mail
            mail.setValue(contactEmail)

            const beginning = orderPage.beginning
            beginning.setValue(startDate)

            const end = orderPage.end
            end.setValue(endDate)

            const campButton =orderPage.campButton
            campButton.click()

            const dayTimeCamp = orderPage.dayTimeCamp
            dayTimeCamp.selectByVisibleText('Odpolední')

            const students = orderPage.students
            students.setValue(20)

            const age = orderPage.age
            age.setValue(12)

            const adults = orderPage.adults
            adults.setValue(2)

            const save = orderPage.save
            save.click()

            const confirmation = confirmationPage.confirmation
            expect(confirmation).toBeDisplayed

            //expect(confirmationPage.toast.getText()).toEqual('Objednávka byla úspěšně uložena')

        }
    )

    it(
        'Vyplnění a následné odeslání objednávky na školu v přírodě', () => {

            const ico = orderPage.ico
            ico.setValue(ICO)

            browser.pause(3000)

            const substitute = orderPage.substitute
            substitute.setValue(substituteName)

            browser.pause(3000)

            const name = orderPage.name
            name.setValue(contactName)

            const tel = orderPage.tel
            tel.setValue(contactPhone)

            const mail = orderPage.mail
            mail.setValue(contactEmail)

            const beginning = orderPage.beginning
            beginning.setValue(startDate)

            const end = orderPage.end
            end.setValue(endDate)

            const natureButton = orderPage.natureButton
            natureButton.click()

            const natureStudents = orderPage.natureStudents
            natureStudents.setValue (20)

            const natureAge = orderPage.natureAge
            natureAge.setValue('12-15')

            const natureAdults = orderPage.natureAdults
            natureAdults.setValue(2)
            
            const natureStartTime = orderPage.natureStartTime
            natureStartTime.setValue('12:00')

            const natureStartFood = orderPage.natureStartFood
            natureStartFood.selectByVisibleText('Obědem')
           
            const natureEndTime = orderPage.natureEndTime
            natureEndTime.setValue('18:00')

            const natureEndFood = orderPage.natureEndFood
            natureEndFood.selectByVisibleText('Večeří')

            const natureSave = orderPage.natureSave
            natureSave.click()

            const confirmation = confirmationPage.confirmation
            expect(confirmation).toBeDisplayed

            //expect(confirmationPage.toast.getText()).toEqual('Objednávka byla úspěšně uložena')

        }
    )

    it(
        'Objednávku nelze odeslat pokud není řádně vyplněna', () => {

            const ico = orderPage.ico
            ico.setValue(ICO)

            const substitute = orderPage.substitute
            substitute.setValue(substituteName)

            const name = orderPage.name
            name.setValue(contactName)

            const tel = orderPage.tel
            tel.setValue(contactPhone)

            const mail = orderPage.mail
            mail.setValue(contactEmail)

            const beginning = orderPage.beginning
            beginning.setValue()

            const end = orderPage.end
            end.setValue()

            const campButton = orderPage.campButton
            campButton.click()

            const dayTimeCamp = orderPage.dayTimeCamp
            dayTimeCamp.selectByVisibleText('Odpolední')

            const students = orderPage.students
            students.setValue(20)

            const age = orderPage.age
            age.setValue(12)

            const adults = orderPage.adults
            adults.setValue(2)

            const save = orderPage.save
            save.click()

            const confirmation = confirmationPage.confirmation
            expect(confirmation).not.toBeDisplayed()

            expect(save).toBeDisplayed()

        }
    )
})




