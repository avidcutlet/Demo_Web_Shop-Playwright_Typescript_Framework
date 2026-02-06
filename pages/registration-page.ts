import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';
import { ElementKeyboardActionUtil } from '@utils/element-keyboard-action-util';

export class RegistrationPage {
  private elementMouseActionUtil: ElementMouseActionUtil;
  private elementKeyboardActionUtil: ElementKeyboardActionUtil;

  private maleRadio: Locator;
  private femaleRadio: Locator;
  private firstNameTxt: Locator;
  private lastNameTxt: Locator;
  private emailTxt: Locator;
  private passwordTxt: Locator;
  private repasswordTxt: Locator;
  private registerBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);
    this.elementKeyboardActionUtil = new ElementKeyboardActionUtil(page);

    this.maleRadio = page.getByLabel('Male');
    this.femaleRadio = page.getByLabel('Female');
    this.firstNameTxt = page.getByLabel('First name:');
    this.lastNameTxt = page.getByLabel('Last name:');
    this.emailTxt = page.getByLabel('Email:');
    this.passwordTxt = page.getByLabel('Password:');
    this.repasswordTxt = page.getByLabel('Confirm password:');
    this.registerBtn = page.getByRole('button', { name: 'Register' });
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