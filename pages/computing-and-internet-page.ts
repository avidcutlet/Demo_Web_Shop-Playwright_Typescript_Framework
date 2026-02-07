import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class ComputingAndInternetPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private computingAndInternetHeader: Locator;
  private addToCartBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.computingAndInternetHeader = page.getByRole('heading', { name: 'Computing and Internet' });
    this.addToCartBtn = page.locator('#add-to-cart-button-13');

  }

  async verifyComputingAndInternetPageIsDisplayed(): Promise<string | null> {
    return await this.computingAndInternetHeader.textContent();
  }

  async clickAddToCart() {
    await this.elementMouseActionUtil.clickElement(this.addToCartBtn);
  }
}