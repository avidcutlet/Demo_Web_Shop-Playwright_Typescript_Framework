import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class ComputersPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private computersHeader: Locator;
  private desktopsCategory: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.computersHeader = page.getByRole('heading', { name: 'Computers' });
    this.desktopsCategory = page.getByRole('link', { name: 'Desktops' });
  }

  async verifyDesktopsCategoryIsDisplayed(): Promise<string | null> {
    return await this.computersHeader.textContent();
  }

  async clickDesktops() {
    await this.elementMouseActionUtil.clickElement(this.desktopsCategory);
  }
}