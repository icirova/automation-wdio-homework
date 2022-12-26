import {
    getSubstitute,
    getOrder,
    getTeachers,
    getSchool
} from '../pages/functions.js'

describe('Navigace', () => {

    beforeEach(() => {
        browser.reloadSession()
        browser.url('')
    })
    
    it(
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