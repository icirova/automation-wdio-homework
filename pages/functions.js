/**
 * Resolves input element value by it's ID using JavaScript call to document.getElementById
 * @param id input element id
 * @returns {Promise<*>}
 */
export function getFieldValueById(id) {
    return browser.execute((id) => {
        return document.getElementById(id).value
    }, id);
}


export function getIco() {
    return $('#ico')
}

export function getToast() {
    return $('.toast-message')
}

export function getClientName() {
    return $('#client')
}

export function getAddress() {
    return $('#address')
}

export function getSubstitute() {
    return $('#substitute')
}

export function getName() {
    return $('#contact_name')
}

export function getTel() {
    return $('#contact_tel')
}

export function getMail() {
    return $('#contact_mail')
}

export function getBeginning() {
    return $('#start_date_1')
}

export function getEnd() {
    return $('#end_date_1')
}

export function getCampButton() {
    return $('#nav-home-tab')
}

export function getDayTimeCamp() {
    return $('#camp-date_part')
}

export function getStudents() {
    return $('#camp-students')
}

export function getAge() {
    return $('#camp-age')
}

export function getAdults() {
    return $('#camp-adults')
}

export function getSave() {
    return $('.btn-primary')
}

export function getConfirmation() {
    return $('h3=Děkujeme za objednávku')
}

export function getOrder() {
    return $('h3*=Objednávka akce')
}

export function getTeachers() {
    return $('a=Pro učitelé')
}

export function getSchool() {
    return $('a=Objednávka pro MŠ/ZŠ')
}

export function getNatureButton() {
    return $('#nav-profile-tab')
}
export function getNatureStudents() {
    return $('#nature-students')
}
export function getNatureAge() {
    return $('#nature-age')
}

export function getNatureAdults() {
    return $('#nature-adults')
}

export function getNatureStartTime() {
    return $('#nature-start_time')
}

export function getNatureStartFood() {
    return $('#nature-start_food')
}

export function getNatureEndTime() {
    return $('#nature-end_time')
}

export function getNatureEndFood() {
    return $('#nature-end_food')
}

export function getNatureSave () {
    return $('[name ="school_nature"]')
}