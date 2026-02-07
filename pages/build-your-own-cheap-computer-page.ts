import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class BuildYourOwnCheapComputerPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private buildYourOwnCheapComputerHeader: Locator;
  private addToCartBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.buildYourOwnCheapComputerHeader = page.getByRole('heading', { name: 'Build your own cheap computer' });
    this.addToCartBtn = page.locator('#add-to-cart-button-72');

  }

  async verifyBuildYourOwnCheapComputerPageIsDisplayed(): Promise<string | null> {
    return await this.buildYourOwnCheapComputerHeader.textContent();
  }

  async clickAddToCart() {
    await this.elementMouseActionUtil.clickElement(this.addToCartBtn);
  }
}