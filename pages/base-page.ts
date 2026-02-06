import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class BasePage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private registerBtn: Locator;
  private logoutBtn: Locator;
  private booksBtn: Locator;
  private computersBtn: Locator;
  private jewelryBtn: Locator;
  private shoppingCartBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.registerBtn = page.getByRole('link', { name: 'Register' });
    this.logoutBtn = page.getByRole('link', { name: /log out/i });
    this.booksBtn = page.getByRole('link', { name: 'Books ' });
    this.computersBtn = page.getByRole('link', { name: 'Computers ' });
    this.jewelryBtn = page.getByRole('link', { name: 'Jewelry ' });
    this.shoppingCartBtn = page.getByRole('link', { name: 'Shopping cart' });

  }

  async clickRegister() {
    await this.elementMouseActionUtil.clickElement(this.registerBtn);
  }

  async clickLogout() {
    await this.elementMouseActionUtil.clickElement(this.logoutBtn);
  }

  async clickBooks() {
    await this.elementMouseActionUtil.clickElement(this.booksBtn);
  }

  async clickComputers() {
    await this.elementMouseActionUtil.clickElement(this.computersBtn);
  }

  async clickJewelry() {
    await this.elementMouseActionUtil.clickElement(this.jewelryBtn);
  }

  async clickShoppingCart() {
    await this.elementMouseActionUtil.clickElement(this.shoppingCartBtn);
  }
}