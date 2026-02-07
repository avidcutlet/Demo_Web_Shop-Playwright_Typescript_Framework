import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';
import { ElementKeyboardActionUtil } from '@utils/element-keyboard-action-util';

export class CheckoutPage {
  private elementMouseActionUtil: ElementMouseActionUtil;
  private elementKeyboardActionUtil: ElementKeyboardActionUtil;

  private checkoutHeader: Locator;
  private countryDropdown: Locator;
  private cityTxt: Locator;
  private addressTxt: Locator;
  private postalCodeTxt: Locator;
  private phoneNumberTxt: Locator;
  private continueBtn: Locator;
  private shippingAddressContinueBtn: Locator;
  private shippingMethodContinueBtn: Locator;
  private paymentMethodContinueBtn: Locator;
  private paymentInfoContinueBtn: Locator;
  private confirmOrderConfirmBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);
    this.elementKeyboardActionUtil = new ElementKeyboardActionUtil(page);

    this.checkoutHeader = page.getByRole('heading', { name: 'Checkout' });
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityTxt = page.getByLabel('City:');
    this.addressTxt = page.getByLabel('Address 1:');
    this.postalCodeTxt = page.getByLabel('Zip / postal code:');
    this.phoneNumberTxt = page.getByLabel('Phone number:');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.shippingAddressContinueBtn = page.locator('#shipping-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.shippingMethodContinueBtn = page.locator('#shipping-method-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.paymentMethodContinueBtn = page.locator('#payment-method-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.paymentInfoContinueBtn = page.locator('#payment-info-buttons-container')
      .getByRole('button', { name: 'Continue' });
    this.confirmOrderConfirmBtn = page.locator('#confirm-order-buttons-container')
      .getByRole('button', { name: 'Confirm' });
  }

  async verifyCheckoutPageIsDisplayed(): Promise<string | null> {
    return await this.checkoutHeader.textContent();
  }

  async selectCountry(country: string) {
    await this.elementMouseActionUtil.selectDropdown(this.countryDropdown, country);
  }

  async enterCity(city: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.cityTxt, city);
  }

  async enterAddress(address: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.addressTxt, address);
  }

  async enterPostalCode(postalCode: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.postalCodeTxt, postalCode);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.phoneNumberTxt, phoneNumber);
  }

  // Billing Address
  async clickContinue() {
    await this.elementMouseActionUtil.clickElement(this.continueBtn);
  }

  // Shipping Address
  async verifyShippingAddressIsDisplayed(): Promise<boolean | null> {
    return await this.shippingAddressContinueBtn.isEnabled();
  }

  async clickShippingAddressContinue() {
    await this.elementMouseActionUtil.clickElement(this.shippingAddressContinueBtn);
  }

  // Shipping Method
  async verifyShippingMethodIsDisplayed(): Promise<boolean | null> {
    return await this.shippingMethodContinueBtn.isEnabled();
  }

  async clickShippingMethodContinue() {
    await this.elementMouseActionUtil.clickElement(this.shippingMethodContinueBtn);
  }

  // Payment Method
  async verifyPaymentMethodIsDisplayed(): Promise<boolean | null> {
    return await this.paymentMethodContinueBtn.isEnabled();
  }

  async clickPaymentMethodContinue() {
    await this.elementMouseActionUtil.clickElement(this.paymentMethodContinueBtn);
  }

  // Payment Information
  async verifyPaymentInfoIsDisplayed(): Promise<boolean | null> {
    return await this.paymentInfoContinueBtn.isEnabled();
  }

  async clickPaymentInfoContinue() {
    await this.elementMouseActionUtil.clickElement(this.paymentInfoContinueBtn);
  }

  // Confirm Order
  async verifyConfirmOrderIsDisplayed(): Promise<boolean | null> {
    return await this.confirmOrderConfirmBtn.isEnabled();
  }

  async clickConfirmOrder() {
    await this.elementMouseActionUtil.clickElement(this.confirmOrderConfirmBtn);
  }
}