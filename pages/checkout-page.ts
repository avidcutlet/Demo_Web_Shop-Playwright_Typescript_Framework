import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';
import { ElementKeyboardActionUtil } from '@utils/element-keyboard-action-util';

export class CheckoutPage {
  private elementMouseActionUtil: ElementMouseActionUtil;
  private elementKeyboardActionUtil: ElementKeyboardActionUtil;

  private checkoutHeader: Locator;
  private countryDropdown: Locator;
  private cityInput: Locator;
  private address1Input: Locator;
  private postalCodeInput: Locator;
  private phoneNumberInput: Locator;
  private continueBtn: Locator;
  private shippingContinueBtn: Locator;
  private paymentMethodContinueBtn: Locator;
  private paymentInfoContinueBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);
    this.elementKeyboardActionUtil = new ElementKeyboardActionUtil(page);

    this.checkoutHeader = page.getByRole('heading', { name: 'Checkout' });
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.getByLabel('City:');
    this.address1Input = page.getByLabel('Address 1:');
    this.postalCodeInput = page.getByLabel('Zip / postal code:');
    this.phoneNumberInput = page.getByLabel('Phone number:');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.shippingContinueBtn = page.locator('#shipping-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.paymentMethodContinueBtn = page.locator('#payment-method-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.paymentInfoContinueBtn = page.locator('#payment-info-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.paymentInfoContinueBtn = page.locator('#confirm-order-buttons-container')
      .getByRole('button', { name: 'Continue' });
  }

  async verifyCheckoutPageIsDisplayed(): Promise<string | null> {
    return await this.checkoutHeader.textContent();
  }

  async selectCountry(country: string) {
    await this.elementMouseActionUtil.selectDropdown(this.countryDropdown, country);
  }

  async enterCity(city: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.cityInput, city);
  }

  async enterAddress1(address: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.address1Input, address);
  }

  async enterPostalCode(postalCode: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.postalCodeInput, postalCode);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.phoneNumberInput, phoneNumber);
  }

  async clickContinue() {
    await this.elementMouseActionUtil.clickElement(this.continueBtn);
  }

  async clickShippingContinue() {
    await this.elementMouseActionUtil.clickElement(this.shippingContinueBtn);
  }

  async clickPaymentMethodContinue() {
    await this.elementMouseActionUtil.clickElement(this.paymentMethodContinueBtn);
  }

  async clickPaymentInfoContinue() {
    await this.elementMouseActionUtil.clickElement(this.paymentInfoContinueBtn);
  }

  async clickConfirmOrderContinue() {
    await this.elementMouseActionUtil.clickElement(this.paymentInfoContinueBtn);
  }
}