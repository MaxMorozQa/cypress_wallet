describe('Тест кейсы на авторизацию', function () {

    it('Проверяем авторизацию в сервисе', () => {
        cy.login()
    });

    it('Проверяем выход из личного кабинета', () => {
        cy.login();
        cy.get('.header__user-phone').click();
        cy.get(':nth-child(4) > .profile-dropdown__nav-item-link').click()
    });

    it('Проверяем поведение системы при валлидном логине и не валидном пароле', () => {
        cy.visit('/');
        cy.get('input.sc-pGacB.hTtqBA').type('9654343434');
        cy.get('input.sc-jSgvzq.jxlYeS').type('M20082002');
        cy.get('p.sc-fodVek.gZEljK').click();
        cy.contains('Некорректный логин или пароль').should('be.visible');
    });

    it('Проверяем что при пустом поле Пароль, кнопка "Войти не активна"', () => {
        cy.visit('/');
        cy.get('input.sc-pGacB.hTtqBA').type('9654343434');
        cy.get('.sc-dmlqKv.jwCkyu.sc-fvhFOF.fIIDsV').should('be.disabled')
    });

    it('Проверяем чувствительность пароля к регистру', () => {
        cy.visit('/');
        cy.get('input.sc-pGacB.hTtqBA').type('9654343434');
        cy.get('input.sc-jSgvzq.jxlYeS').type('lhb-ytp-DUL-VT6');
        cy.get('p.sc-fodVek.gZEljK').click();
        cy.contains('Некорректный логин или пароль').should('be.visible')
    });
    
})