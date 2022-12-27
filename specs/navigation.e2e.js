
import orderPage from '../pages/orderPage.js'

describe('Navigace', () => {

    beforeEach(() => {
        browser.reloadSession()
        browser.url('')
    })

    it(
        'Funkční navigace', () => {

            const teachers = orderPage.teachers
            teachers.click()

            const school = orderPage.school
            school.click()

            const order = orderPage.order
            expect(order).toBeDisplayed()

            const substitute = orderPage.substitute
            expect(substitute).toBeDisplayed()

        }
    )

})