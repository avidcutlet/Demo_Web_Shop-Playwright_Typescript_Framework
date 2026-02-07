import { Page, Locator } from '@playwright/test';

export class OrderInformationPage {

  private orderInformationHeader: Locator;
  private orderTotalValue: Locator;

  constructor(page: Page) {

    this.orderInformationHeader = page.getByRole('heading', { name: 'Order information' });
    this.orderTotalValue = page.locator('tr')
      .filter({ hasText: 'Order Total:' })
      .locator('.cart-total-right');

  }

  async verifyOrderInformationIsDisplayed(): Promise<string | null> {
    return this.orderInformationHeader.textContent();
  }

  async verifyOrderTotalPrice(): Promise<string | null> {
    return this.orderTotalValue.textContent();
  }
}