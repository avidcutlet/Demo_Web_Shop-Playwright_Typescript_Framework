export interface placeOrderWithMultipleProductsTestCase {
  name: string;
  subSuite: string;
  displayName: string;
  testDataKey: string;
  expectedHeader?: string;
  jewelryLength: string;
  country: string;
  orderTotal: number;
  cashOnDeliveryFee: number;
}

export const placeOrderWithMultipleProductsTestCase: placeOrderWithMultipleProductsTestCase[] = [
  {
    name: 'TC1 - Successful User Place Order with Multiple Products',
    subSuite: 'Successful User Place Order with Multiple Products',
    displayName: 'Place Order with Multiple Products - Success',
    testDataKey: 'faker',
    jewelryLength: '20',
    country: 'United States',
    orderTotal: 925.00,
    // orderTotal: 10.00,
    cashOnDeliveryFee: 7.00
  }
];
