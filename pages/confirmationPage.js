class ConfirmationPage {
    
    get confirmation() {
        return $('h3=Děkujeme za objednávku')
    }

    get toast() {
        return $('.toast-message')
    }
}

module.exports = new ConfirmationPage()