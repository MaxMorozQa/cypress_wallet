describe('тест кейсы на регистрацию дохода', () => {

    const registerDeal = 'Если вы состоите на учете ФНС, как плательщик налога на профессиональный доход, то вам необходимо регистрировать полученный доход от коммерческой деятельности.';
    const nalog = 'Также предусмотрен налоговый вычет (бонус)';
    const whenPayNalog = 'Оплата налога (НПД) производится ежемесячно не позднее 25 числа месяца, следующего за истекшим налоговым периодом (месяцем). Если эта дата является праздничным или выходным днем, тогда срок уплаты переносится на первый рабочий день.';

    it('Проверяем регистрацию дохода физ.лицу', () => {
        cy.login();
        cy.get('.get-money__content-tab_active > :nth-child(1) > [data-testid="service-card"]').click();
        cy.get('.income-registration-card__textarea').type('test');
        cy.get('[data-cy="datepicker-custom-input"]').click();
        cy.get('[data-cy="datepicker-custom-input"]').type('05062024');
        cy.get('.income-registration-card__right-part').click();
        cy.get('.income-registration-card__input').click();
        cy.get('.income-registration-card__input').type('100');
        cy.get('.income-registration-card__button').click();
        cy.get('.income-registration-summary__button-wrap > :nth-child(2)').click();
        cy.contains('Вы зарегистрировали доход.').should('be.visible');
    });

    it('Проверяем регистрацию дохода юр. лицу', () => {
        cy.login();
        cy.get('.get-money__content-tab_active > :nth-child(1) > [data-testid="service-card"]').click();
        cy.get('.form-select__control').click();
        cy.get('#react-select-2-option-1').click();
        cy.get(':nth-child(1) > .income-registration-card__input').type('testComp');
        cy.get('.company-name-input-with-dropdown__input').type('ООО "АБ ХОЛДИНГ"');
        cy.get('.company-name-input-with-dropdown__dropdown > :nth-child(1)').click();
        cy.get('[data-cy="datepicker-custom-input"]').click().type('05062024');
        cy.get('.income-registration-card__right-part').click();
        cy.get(':nth-child(5) > .income-registration-card__input').type('100');
        cy.get('.income-registration-card__button').click();
        cy.get('.income-registration-summary__button-wrap > :nth-child(2)').click();
        cy.contains('Вы зарегистрировали доход.').should('be.visible');
    });

    it('Проверяем актив ссылки на этапе регистрации дохода', () => {
        cy.login();
        cy.get('.get-money__content-tab_active > :nth-child(1) > [data-testid="service-card"]').click();
        cy.get(':nth-child(1) > [data-cy="hints-list-item"] > .hints-list__item-text').click();
        cy.contains(registerDeal).should('be.visible');
        cy.get('[data-cy="hint-auth-close-btn"]').click();
        cy.get(':nth-child(2) > [data-cy="hints-list-item"] > .hints-list__item-text').click();
        cy.contains(nalog).should('be.visible');
        cy.get('[data-cy="hint-auth-close-btn"]').click();
        cy.get(':nth-child(4) > [data-cy="hints-list-item"] > .hints-list__item-text').click();
        cy.contains(whenPayNalog).should('be.visible');
        cy.get('[data-cy="hint-auth-close-btn"]').click();
    });

    

})