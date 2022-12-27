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
    getFieldValueById,
    getIco,
    getToast,
    getClientName,
    getAddress,
    getSubstitute,
    getName,
    getTel,
    getMail,
    getBeginning,
    getEnd,
    getCampButton,
    getDayTimeCamp,
    getStudents,
    getAge,
    getAdults,
    getSave,
    getConfirmation,
    getNatureStudents,
    getNatureButton,
    getNatureAge,
    getNatureAdults,
    getNatureStartTime,
    getNatureStartFood,
    getNatureEndTime,
    getNatureEndFood,
    getNatureSave
   
} from '../pages/functions.js'



describe('Objednávka pro MŠ/ZŠ', () => {

    beforeEach(() => {
        browser.reloadSession()
        browser.url('/objednavka/pridat')
    })

    it(
        'Vyplnění IČO a automatické načtení jména a adresy odběratele z ARESu', () => {

            const ico = getIco()
            ico.setValue(ICO)
            browser.keys('Enter')

            const toast = getToast()
            toast.waitForExist()

            const client = getClientName()
            const value = getFieldValueById('client')
            expect(client).toBeDisplayed()
            expect(value).toEqual(clientName)

            const inputAddress = getAddress()
            const address = getFieldValueById('address')
            expect(inputAddress).toBeDisplayed()
            expect(clientAddress).toEqual(address)

        }
    )

    it(
        'Vyplnění a následné odeslání objednávky na příměstský tábor', () => {

            const ico = getIco()
            ico.setValue(ICO)

            const substitute = getSubstitute()
            substitute.setValue(substituteName)

            const name = getName()
            name.setValue(contactName)

            const tel = getTel()
            tel.setValue(contactPhone)

            const mail = getMail()
            mail.setValue(contactEmail)

            const beginning = getBeginning()
            beginning.setValue(startDate)

            const end = getEnd()
            end.setValue(endDate)

            const campButton = getCampButton()
            campButton.click()

            const dayTimeCamp = getDayTimeCamp()
            dayTimeCamp.selectByVisibleText('Odpolední')

            const students = getStudents()
            students.setValue(20)

            const age = getAge()
            age.setValue(12)

            const adults = getAdults()
            adults.setValue(2)

            const save = getSave()
            save.click()

            const confirmation = getConfirmation()
            expect(confirmation).toBeDisplayed
            expect(getToast().getText()).toEqual('Objednávka byla úspěšně uložena')

        }
    )

    it(
        'Vyplnění a následné odeslání objednávky na školu v přírodě', () => {

            const ico = getIco()
            ico.setValue(ICO)

            browser.pause(3000)

            const substitute = getSubstitute()
            substitute.setValue(substituteName)

            browser.pause(3000)

            const name = getName()
            name.setValue(contactName)

            const tel = getTel()
            tel.setValue(contactPhone)

            const mail = getMail()
            mail.setValue(contactEmail)

            const beginning = getBeginning()
            beginning.setValue(startDate)

            const end = getEnd()
            end.setValue(endDate)

            const natureButton = getNatureButton()
            natureButton.click()

            const natureStudents = getNatureStudents()
            natureStudents.setValue (20)

            const natureAge = getNatureAge ()
            natureAge.setValue('12-15')

            const natureAdults = getNatureAdults ()
            natureAdults.setValue(2)
            
            const natureStartTime = getNatureStartTime ()
            natureStartTime.setValue('12:00')

            const natureStartFood = getNatureStartFood ()
            natureStartFood.selectByVisibleText('Obědem')
           
            const natureEndTime = getNatureEndTime ()
            natureEndTime.setValue('18:00')

            const natureEndFood = getNatureEndFood ()
            natureEndFood.selectByVisibleText('Večeří')

            const natureSave = getNatureSave()
            natureSave.click()

            const confirmation = getConfirmation()
            expect(confirmation).toBeDisplayed
            expect(getToast().getText()).toEqual('Objednávka byla úspěšně uložena')

        }
    )

    it(
        'Objednávku nelze odeslat pokud není řádně vyplněna', () => {

            const ico = getIco()
            ico.setValue(ICO)

            const substitute = getSubstitute()
            substitute.setValue(substituteName)

            const name = getName()
            name.setValue(contactName)

            const tel = getTel()
            tel.setValue(contactPhone)

            const mail = getMail()
            mail.setValue(contactEmail)

            const beginning = getBeginning()
            beginning.setValue()

            const end = getEnd()
            end.setValue()

            const campButton = getCampButton()
            campButton.click()

            const dayTimeCamp = getDayTimeCamp()
            dayTimeCamp.selectByVisibleText('Odpolední')

            const students = getStudents()
            students.setValue(20)

            const age = getAge()
            age.setValue(12)

            const adults = getAdults()
            adults.setValue(2)

            const save = getSave()
            save.click()

            const confirmation = getConfirmation()
            expect(confirmation).not.toBeDisplayed()

            expect(save).toBeDisplayed()

        }
    )
})




