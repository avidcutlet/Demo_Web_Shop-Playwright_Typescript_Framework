import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class CompletedCheckoutPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private completedCheckoutHeader: Locator;
  private orderDetailsLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.completedCheckoutHeader = page.getByRole('heading', { name: 'Thank you' });
    this.orderDetailsLink = page.getByRole('link', { name: 'Click here for order details.' });
  }

  async verifyCompletedCheckoutIsDisplayed(): Promise<string | null> {
    return await this.completedCheckoutHeader.textContent();
  }

  async clickOrderDetailsLink() {
    await this.elementMouseActionUtil.clickElement(this.orderDetailsLink);
  }
}