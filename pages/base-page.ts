import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class BasePage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private registerBtn: Locator;
  private logoutBtn: Locator;
  private topMenuBooksBtn: Locator;
  private topMenuComputersBtn: Locator;
  private topMenuJewelryBtn: Locator;
  private shoppingCartBtn: Locator;
  private successAddToCartMsg: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.registerBtn = page.getByRole('link', { name: 'Register' });
    this.logoutBtn = page.getByRole('link', { name: /log out/i });
    this.topMenuBooksBtn = page.locator('.top-menu').getByRole('link', { name: 'Books' });
    this.topMenuComputersBtn = page.locator('.top-menu').getByRole('link', { name: 'Computers' });
    this.topMenuJewelryBtn = page.locator('.top-menu').getByRole('link', { name: 'Jewelry' });
    this.shoppingCartBtn = page.getByRole('link', { name: 'Shopping cart', exact: true });
    this.successAddToCartMsg = page.getByText(/The product has been added to your/i);
  }

  async verifyRegisterButtonIsVisible(): Promise<boolean> {
    return await this.registerBtn.isVisible();
  }

  async clickRegister() {
    await this.elementMouseActionUtil.clickElement(this.registerBtn);
  }

  async clickLogout() {
    await this.elementMouseActionUtil.clickElement(this.logoutBtn);
  }

  async clickBooks() {
    await this.elementMouseActionUtil.clickElement(this.topMenuBooksBtn);
  }

  async clickComputers() {
    await this.elementMouseActionUtil.clickElement(this.topMenuComputersBtn);
  }

  async clickJewelry() {
    await this.elementMouseActionUtil.clickElement(this.topMenuJewelryBtn);
  }

  async clickShoppingCart() {
    await this.elementMouseActionUtil.clickElement(this.shoppingCartBtn);
  }

  async verifySuccessAddToCartMsg(): Promise<boolean> {
    return await this.successAddToCartMsg.isVisible();
  }
}