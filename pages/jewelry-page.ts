import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class JewelryPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private jewelryHeader: Locator;
  private jewelryLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.jewelryHeader = page.getByRole('heading', { name: 'Jewelry' });
    this.jewelryLink = page.getByRole('link', { name: 'Create Your Own Jewelry', exact: true });
  }

  async verifyCreateYourOwnJewelryLinkIsDisplayed(): Promise<string | null> {
    return await this.jewelryHeader.textContent();
  }

  async clickCreateYourOwnJewelry() {
    await this.elementMouseActionUtil.clickElement(this.jewelryLink);
  }
}