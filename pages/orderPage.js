class OrderPage {

    constructor() {
        this._url = '/objednavka/pridat'
    }

    open() {
        browser.reloadSession()
        browser.url(this._url)
    }

    get ico() {
        return $('#ico')
    }

    get toast() {
        return $('.toast-message')
    }

    get clientName() {
        return $('#client')
    }

    get address() {
        return $('#address')
    }

    get substitute() {
        return $('#substitute')
    }

    get name() {
        return $('#contact_name')
    }

    get tel() {
        return $('#contact_tel')
    }

    get mail() {
        return $('#contact_mail')
    }

    get beginning() {
        return $('#start_date_1')
    }

    get end() {
        return $('#end_date_1')
    }

    get campButton() {
        return $('#nav-home-tab')
    }

    get dayTimeCamp() {
        return $('#camp-date_part')
    }

    get students() {
        return $('#camp-students')
    }

    get age() {
        return $('#camp-age')
    }

    get adults() {
        return $('#camp-adults')
    }

    get save() {
        return $('.btn-primary')
    }

    get order() {
        return $('h3*=Objednávka akce')
    }

    get teachers() {
        return $('a=Pro učitelé')
    }

    get school() {
        return $('a=Objednávka pro MŠ/ZŠ')
    }

    get natureButton() {
        return $('#nav-profile-tab')
    }
    get natureStudents() {
        return $('#nature-students')
    }
    get natureAge() {
        return $('#nature-age')
    }

    get natureAdults() {
        return $('#nature-adults')
    }

    get natureStartTime() {
        return $('#nature-start_time')
    }

    get natureStartFood() {
        return $('#nature-start_food')
    }

    get natureEndTime() {
        return $('#nature-end_time')
    }

    get natureEndFood() {
        return $('#nature-end_food')
    }

    get natureSave() {
        return $('[name ="school_nature"]')
    }
}

module.exports = new OrderPage()