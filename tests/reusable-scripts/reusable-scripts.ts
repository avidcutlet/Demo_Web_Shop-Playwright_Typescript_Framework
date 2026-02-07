import { Page, expect } from '@playwright/test';

import { BasePage } from '@pages/base-page';
import { RegistrationPage } from '@pages/registration-page';
import DatasetUtil from '@utils/test-data-util';

const dataSetUI = new DatasetUtil('ui');

export class ReusableHelpers {
  private basePage: BasePage;
  private registrationPage: RegistrationPage;

  private successRegistrationMsg: string;

  constructor(page: Page) {
    this.basePage = new BasePage(page);
    this.registrationPage = new RegistrationPage(page);

    this.successRegistrationMsg = dataSetUI.getTestData('Notification', 'SuccessRegistrationMsg');
  }

  // Go to registration page, fill in sign up fields, and verify successful sign up
  async registerUser(firstName: string, lastName: string, gender: string, email: string, password: string): Promise<string | null> {
    await this.basePage.clickRegister();
    await this.registrationPage.waitForRegistrationPageLoad();
    gender.toLowerCase() === 'male' ? await this.registrationPage.selectMaleGender() : await this.registrationPage.selectFemaleGender();
    await this.registrationPage.enterFirstName(firstName);
    await this.registrationPage.enterLastName(lastName);
    await this.registrationPage.enterEmail(email);
    await this.registrationPage.enterPassword(password);
    await this.registrationPage.enterRePassword(password);
    await this.registrationPage.clickRegisterButton();
    return await this.registrationPage.verifySuccessRegistration();
  }
}