import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';
import { ElementKeyboardActionUtil } from '@utils/element-keyboard-action-util';

export class CreateYourOwnJewelryPage {
  private elementMouseActionUtil: ElementMouseActionUtil;
  private elementKeyboardActionUtil: ElementKeyboardActionUtil;

  private createYourOwnJewelryHeader: Locator;
  private lengthInCm: Locator;
  private addToCartBtn: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);
    this.elementKeyboardActionUtil = new ElementKeyboardActionUtil(page);

    this.createYourOwnJewelryHeader = page.getByRole('heading', { name: 'Create Your Own Jewelry' });
    this.lengthInCm = page.locator('input[id^="product_attribute"]');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
  }

  async verifyCreateYourOwnJewelryPageIsDisplayed(): Promise<string | null> {
    return await this.createYourOwnJewelryHeader.textContent();
  }

  async enterLengthInCm(length: string) {
    await this.elementKeyboardActionUtil.inputElementText(this.lengthInCm, length);
  }

  async clickAddToCart() {
    await this.elementMouseActionUtil.clickElement(this.addToCartBtn);
  }
}