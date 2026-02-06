import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class BasePage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private orderInformationHeader: Locator;
  private totalPrice: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.orderInformationHeader = page.getByRole('heading', { name: 'Order information' });
    this.totalPrice = page.locator('.cart-total-right').last();
  }

  async verifyOrderInformationHeader(): Promise<string | null> {
    return this.orderInformationHeader.textContent();
  }

  async verifyTotalPrice(): Promise<string | null> {
    return this.totalPrice.textContent();
  }
}