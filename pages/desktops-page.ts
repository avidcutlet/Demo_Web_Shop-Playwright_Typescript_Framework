import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class ComputersPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private desktopHeader: Locator;
  private desktopLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.desktopHeader = page.getByRole('heading', { name: 'Desktops' });
    this.desktopLink = page.getByRole('link', { name: 'Build your own cheap computer' });
  }

  async verifyDesktopPageIsDisplayed(): Promise<string | null> {
    return await this.desktopHeader.textContent();
  }

  async clickBuildYourOwnCheapComputer() {
    await this.elementMouseActionUtil.clickElement(this.desktopLink);
  }
}