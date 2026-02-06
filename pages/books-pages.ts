import { Page, Locator } from '@playwright/test';

import { ElementMouseActionUtil } from '@utils/element-mouse-action-util';

export class BooksPage {
  private elementMouseActionUtil: ElementMouseActionUtil;

  private booksHeader: Locator;
  private categoryLink: Locator;

  constructor(page: Page) {
    this.elementMouseActionUtil = new ElementMouseActionUtil(page);

    this.booksHeader = page.getByRole('heading', { name: 'Books' });
    this.categoryLink = page.getByRole('link', { name: 'Computing and Internet' });
  }

  async verifyBooksPageIsDisplayed(): Promise<string | null> {
    return await this.booksHeader.textContent();
  }

  async clickComputingAndInternet() {
    await this.elementMouseActionUtil.clickElement(this.categoryLink);
  }
}