import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class CartPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private shoppingCartHeader: Locator;
  private termsCheckbox: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.shoppingCartHeader = page.getByRole('heading', { name: 'Shopping cart' });
    this.termsCheckbox = page.locator('#termsofservice');
  }

  async verifyCartPageIsDisplayed(): Promise<string | null> {
    return await this.shoppingCartHeader.textContent();
  }

  async clickTerms() {
    await this.elementMouseActionUtil.clickElement(this.termsCheckbox);
  }
}