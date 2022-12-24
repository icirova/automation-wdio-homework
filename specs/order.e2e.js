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

function getIco() {
    return $('#ico')
}

function getToast() {
    return $('.toast-message')
}

function getClientName(){
    return $('#client')
}

function getAddress(){
    return $('#address')
}

function getSubstitute() {
    return $('#substitute')
}

function getName() {
    return $('#contact_name')
}
function getTel() {
    return $('#contact_tel')
}
function getMail() {
    return $('#contact_mail')
}
 function getBeginning() {
    return $('#start_date_1')
 }
function getEnd() {
    return $('#end_date_1')
}
function getCampButton () {
    return $('#nav-home-tab')
}
function getDayTimeCamp() {
    return $('#camp-date_part')
}

function getStudents () {
    return $('#camp-students')
}
function getAge() {
    return $('#camp-age')
}
function getAdults() {
    return $('#camp-adults')
}
function getSave(){
    return $('.btn-primary')
}
function getConfirmation() {
    return $('h3=Děkujeme za objednávku')
}
function getOrder () {
    return $('h3*=Objednávka akce')
}
function getTeachers(){
    return  $('a=Pro učitelé')
}

function getSchool() {
    return $('a=Objednávka pro MŠ/ZŠ')
}

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
        'Vyplnění a následné odeslání objednávky', () => {

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

            const dayTimeCamp =getDayTimeCamp()
            dayTimeCamp.selectByVisibleText('Odpolední')
            
            const students =getStudents ()
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



describe('Navigace', () => {

    beforeEach(() => {
        browser.reloadSession()
        browser.url('')
    })
    
    it.only(
        'Funkční navigace', () => {

            const teachers = getTeachers()
            teachers.click()
            
            const school = getSchool()
            school.click()

            const order = getOrder()
            expect(order).toBeDisplayed()
            
            const substitute = getSubstitute()
            expect(substitute).toBeDisplayed()

        }
    )

})
