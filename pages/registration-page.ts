import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';
import { ElementKeyboardActionUtil } from '@utils/element-keyboard-action-util';

export class RegistrationPage {
  private page: Page;
  private elementMouseActionUtil: ElementMouseActionUtil;
  private elementKeyboardActionUtil: ElementKeyboardActionUtil;

  private registrationSuccessfulMsg: Locator;
  private maleRadio: Locator;
  private femaleRadio: Locator;
  private firstNameTxt: Locator;
  private lastNameTxt: Locator;
  private emailTxt: Locator;
  private passwordTxt: Locator;
  private repasswordTxt: Locator;
  private registerBtn: Locator;

  private registerUserURLRegex: RegExp;

  constructor(page: Page) {
    this.page = page;
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);
    this.elementKeyboardActionUtil = new ElementKeyboardActionUtil(page);

    this.registrationSuccessfulMsg = page.getByText('Your registration completed');

    this.maleRadio = page.getByLabel('Male', { exact: true });
    this.femaleRadio = page.getByLabel('Female');
    this.firstNameTxt = page.getByLabel('First name:');
    this.lastNameTxt = page.getByLabel('Last name:');
    this.emailTxt = page.getByLabel('Email:');
    this.passwordTxt = page.getByLabel('Password:', { exact: true });
    this.repasswordTxt = page.getByLabel('Confirm password:');
    this.registerBtn = page.getByRole('button', { name: 'Register' });

    this.registerUserURLRegex = /.*\/register/;
  }

  // Wait for the URL to contain '/register'
  async waitForRegistrationPageLoad(): Promise<void> {
    await this.page.waitForURL(this.registerUserURLRegex);
  }

  async verifySuccessRegistration(): Promise<string | null> {
    return await this.registrationSuccessfulMsg.textContent();
  }

  async selectMaleGender() {
    await this.elementMouseActionUtil.clickElement(this.maleRadio);
  }

  async selectFemaleGender() {
    await this.elementMouseActionUtil.clickElement(this.femaleRadio);
  }

  async enterFirstName(firstName: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.firstNameTxt, firstName);
  }

  async enterLastName(lastName: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.lastNameTxt, lastName);
  }

  async enterEmail(email: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.emailTxt, email);
  }

  async enterPassword(password: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.passwordTxt, password);
  }

  async enterRePassword(repassword: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.repasswordTxt, repassword);
  }

  async clickRegisterButton() {
    await this.elementMouseActionUtil.clickElement(this.registerBtn);
  }
}