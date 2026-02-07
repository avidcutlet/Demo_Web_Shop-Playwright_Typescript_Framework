import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class CartPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private shoppingCartHeader: Locator;
  private termsCheckbox: Locator;
  private checkoutBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.shoppingCartHeader = page.getByRole('heading', { name: 'Shopping cart' });
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutBtn = page.locator('#checkout');
  }

  async verifyCartPageIsDisplayed(): Promise<string | null> {
    return await this.shoppingCartHeader.textContent();
  }

  async clickTermsOfService() {
    await this.elementMouseActionUtil.clickElement(this.termsCheckbox);
  }

  async clickCheckout() {
    await this.elementMouseActionUtil.clickElement(this.checkoutBtn);
  }
}