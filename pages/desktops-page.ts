import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class DesktopsPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private desktopPageHeader: Locator;
  private desktopLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.desktopPageHeader = page.getByRole('heading', { name: 'Desktops' });
    this.desktopLink = page.getByRole('link', { name: 'Build your own cheap computer', exact: true });
  }

  async verifyDesktopPageIsDisplayed(): Promise<string | null> {
    return await this.desktopPageHeader.textContent();
  }

  async clickBuildYourOwnCheapComputer() {
    await this.elementMouseActionUtil.clickElement(this.desktopLink);
  }
}