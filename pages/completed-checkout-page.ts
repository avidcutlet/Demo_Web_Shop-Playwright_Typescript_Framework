import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class CompletedCheckoutPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private completedCheckoutHeader: Locator;
  private orderDetailsLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.completedCheckoutHeader = page.locator('.title >> strong');
    this.orderDetailsLink = page.getByRole('link', { name: 'Click here for order details.' });
  }

  async clickOrderDetailsLink() {
    await this.elementMouseActionUtil.clickElement(this.orderDetailsLink);
  }
}