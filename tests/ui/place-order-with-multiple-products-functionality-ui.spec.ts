import { test, expect } from '@playwright/test';

import { initializeTestHooks } from '@hooks/web-hook';

import AllureAttachScreenshot from '@utils/allure-report-util';
import DatasetUtil from '@utils/test-data-util';

import { generateContactData } from '@testData/test-data-generator';
import { placeOrderWithMultipleProductsTestCase } from '@testData/place-order-with-multiple-products-functionality-ui-data';

import { BasePage } from '@pages/base-page';
import { BooksPage } from '@pages/books-page';
import { BuildYourOwnCheapComputerPage } from '@pages/build-your-own-cheap-computer-page';
import { CartPage } from '@pages/cart-page';
import { CheckoutPage } from '@pages/checkout-page';
import { CompletedCheckoutPage } from '@pages/completed-checkout-page';
import { ComputersPage } from '@pages/computers-page';
import { ComputingAndInternetPage } from '@pages/computing-and-internet-page';
import { CreateYourOwnJewelryPage } from '@pages/create-your-own-jewelry-page';
import { DesktopsPage } from '@pages/desktops-page';
import { OrderInformationPage as OrderInformationPage } from '@pages/order-information-page';
import { RegistrationPage } from '@pages/registration-page';
import { ReusableHelpers } from '@reusableScripts/reusable-scripts';
import { JewelryPage } from '@pages/jewelry-page';

const { label, LabelName, displayName, feature } = require('allure-js-commons');
const dataSetUI = new DatasetUtil('ui');
const attach = new AllureAttachScreenshot();
initializeTestHooks().setupHooks();

test.describe('Verify User Can Place Order with Multiple Products via UI @ALL @UI @TS1 @tagToSkipInProd1', () => {
  for (const testCase of placeOrderWithMultipleProductsTestCase) {
    test(`${testCase.name} @${testCase.name.split(' ')[0]}`, async ({ page }) => {
      await label(LabelName.SUB_SUITE, testCase.subSuite);
      await displayName(testCase.displayName);
      await feature("UI");

      const basePageInstance = new BasePage(page);
      const booksPageInstance = new BooksPage(page);
      const buildYourOwnCheapComputerPageInstance = new BuildYourOwnCheapComputerPage(page);
      const cartPageInstance = new CartPage(page);
      const checkoutPageInstance = new CheckoutPage(page);
      const completedCheckoutPageInstance = new CompletedCheckoutPage(page);
      const computersPageInstance = new ComputersPage(page);
      const computingAndInternetPageInstance = new ComputingAndInternetPage(page);
      const createYourOwnJewelryPageInstance = new CreateYourOwnJewelryPage(page);
      const desktopsPageInstance = new DesktopsPage(page);
      const jewelryPageInstance = new JewelryPage(page);
      const orderInformationPageInstance = new OrderInformationPage(page);
      const registrationPageInstance = new RegistrationPage(page);
      const reusableHelpers = new ReusableHelpers(page);

      const booksPageHeader = dataSetUI.getTestData('Header', 'BooksPageHeader');
      const builsdYourOwnCheapComputerPageHeader = dataSetUI.getTestData('Header', 'BuildYourOwnCheapComputerPageHeader');
      const cartPageHeader = dataSetUI.getTestData('Header', 'CartPageHeader');
      const checkoutPageHeader = dataSetUI.getTestData('Header', 'CheckoutPageHeader');
      const completedCheckoutPageHeader = dataSetUI.getTestData('Header', 'CompletedCheckoutPageHeader');
      const computersPageHeader = dataSetUI.getTestData('Header', 'ComputersPageHeader');
      const computingAndInternetPageHeader = dataSetUI.getTestData('Header', 'ComputingAndInternetPageHeader');
      const createYourOwnJewelryPageHeader = dataSetUI.getTestData('Header', 'CreateYourOwnJewelryPageHeader');
      const desktopsPageHeader = dataSetUI.getTestData('Header', 'DesktopsPageHeader');
      const orderDetailsPageHeader = dataSetUI.getTestData('Header', 'OrderDetailsPageHeader');
      const registrationPageHeader = dataSetUI.getTestData('Header', 'RegistrationPageHeader');

      const addToCartSuccessMsg = dataSetUI.getTestData('Notification', 'SuccessAddToCartMsg');
      const successRegistrationMsg = dataSetUI.getTestData('Notification', 'SuccessRegistrationMsg');

      const userData = generateContactData();

      await basePageInstance.verifyRegisterButtonIsVisible();
      const registrationResult = await reusableHelpers.registerUser(
        userData.firstName,
        userData.lastName,
        userData.gender,
        userData.email,
        userData.password
      );
      expect(registrationResult!.trim()).toBe(successRegistrationMsg);

      await attach.withAllureStep(page, 'User Clicks Book Menu', async () => {
        await basePageInstance.clickBooks();
        const booksPageHeaderResult = await booksPageInstance.verifyBooksPageIsDisplayed();
        expect(booksPageHeaderResult).toBe(booksPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Computer and Internet Book Link', async () => {
        await booksPageInstance.clickComputingAndInternet();
        const computingAndInternetPageHeaderResult = await computingAndInternetPageInstance.verifyComputingAndInternetPageIsDisplayed();
        expect(computingAndInternetPageHeaderResult!.trim()).toBe(computingAndInternetPageHeader);
      });

      await attach.withAllureStep(page, 'User Add Computer and Internet Book to Cart', async () => {
        await computingAndInternetPageInstance.clickAddToCart();
        const successAddToCartMsgResult = await basePageInstance.verifySuccessAddToCartMsg();
        expect(successAddToCartMsgResult).toBeTruthy();
      });

      await attach.withAllureStep(page, 'User Clicks Computer Menu', async () => {
        await basePageInstance.clickComputers();
        const computersPageHeaderResult = await computersPageInstance.verifyComputersPageIsDisplayed();
        expect(computersPageHeaderResult!.trim()).toBe(computersPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Desktop Category', async () => {
        await computersPageInstance.clickDesktops();
        const desktopsPageHeaderResult = await desktopsPageInstance.verifyDesktopPageIsDisplayed();
        expect(desktopsPageHeaderResult!.trim()).toBe(desktopsPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Build your own cheap computer Link', async () => {
        await desktopsPageInstance.clickBuildYourOwnCheapComputer();
        const buildYourOwnCheapComputerPageHeaderResult = await buildYourOwnCheapComputerPageInstance.verifyBuildYourOwnCheapComputerPageIsDisplayed();
        expect(buildYourOwnCheapComputerPageHeaderResult!.trim()).toBe(builsdYourOwnCheapComputerPageHeader);
      });

      await attach.withAllureStep(page, 'User Add Build your own cheap computer to Cart', async () => {
        await buildYourOwnCheapComputerPageInstance.clickAddToCart();
        const successAddToCartMsgResult = await basePageInstance.verifySuccessAddToCartMsg();
        expect(successAddToCartMsgResult).toBeTruthy();
      });

      await attach.withAllureStep(page, 'User Clicks Jewelry Menu', async () => {
        await basePageInstance.clickJewelry();
        const createYourOwnJewelryPageHeaderResult = await createYourOwnJewelryPageInstance.verifyCreateYourOwnJewelryPageIsDisplayed();
        expect(createYourOwnJewelryPageHeaderResult!.trim()).toBe(createYourOwnJewelryPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Create your own jewelry Link', async () => {
        await jewelryPageInstance.clickCreateYourOwnJewelry();
        const createYourOwnJewelryPageHeaderResult = await createYourOwnJewelryPageInstance.verifyCreateYourOwnJewelryPageIsDisplayed();
        expect(createYourOwnJewelryPageHeaderResult!.trim()).toBe(createYourOwnJewelryPageHeader);
      });

      await attach.withAllureStep(page, 'User Add Create your own jewelry to Cart', async () => {
        await createYourOwnJewelryPageInstance.enterLengthInCm(testCase.jewelryLength);
        await createYourOwnJewelryPageInstance.clickAddToCart();
        const successAddToCartMsgResult = await basePageInstance.verifySuccessAddToCartMsg();
        expect(successAddToCartMsgResult).toBeTruthy();
      });

      await attach.withAllureStep(page, 'User Clicks Shopping Cart', async () => {
        await basePageInstance.clickShoppingCart();
        const shoppingCartPageHeaderResult = await cartPageInstance.verifyCartPageIsDisplayed();
        expect(shoppingCartPageHeaderResult!.trim()).toBe(cartPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Checkout', async () => {
        await cartPageInstance.clickTermsOfService();
        await cartPageInstance.clickCheckout();
        const checkoutPageHeaderResult = await checkoutPageInstance.verifyCheckoutPageIsDisplayed();
        expect(checkoutPageHeaderResult!.trim()).toBe(checkoutPageHeader);
      });

      await attach.withAllureStep(page, 'User Fills Billing Address', async () => {
        await checkoutPageInstance.selectCountry(testCase.country);
        await checkoutPageInstance.enterCity(userData.city);
        await checkoutPageInstance.enterAddress(userData.street1);
        await checkoutPageInstance.enterPostalCode(userData.postalCode);
        await checkoutPageInstance.enterPhoneNumber(userData.phone);
        await checkoutPageInstance.clickContinue();
      });

      await attach.withAllureStep(page, 'User Fills Shipping Address', async () => {
        const isShippingAddressDisplayed = await checkoutPageInstance.verifyShippingAddressIsDisplayed();
        expect(isShippingAddressDisplayed).toBeTruthy();
        await checkoutPageInstance.clickShippingAddressContinue();
      });

      await attach.withAllureStep(page, 'User Fills Shipping Method', async () => {
        const isShippingMethodDisplayed = await checkoutPageInstance.verifyShippingMethodIsDisplayed();
        expect(isShippingMethodDisplayed).toBeTruthy();
        await checkoutPageInstance.clickShippingMethodContinue();
      });

      await attach.withAllureStep(page, 'User Fills Payment Method', async () => {
        const isPaymentMethodDisplayed = await checkoutPageInstance.verifyPaymentMethodIsDisplayed();
        expect(isPaymentMethodDisplayed).toBeTruthy();
        await checkoutPageInstance.clickPaymentMethodContinue();
      });

      await attach.withAllureStep(page, 'User Fills Payment Information', async () => {
        const isPaymentInfoDisplayed = await checkoutPageInstance.verifyPaymentInfoIsDisplayed();
        expect(isPaymentInfoDisplayed).toBeTruthy();
        await checkoutPageInstance.clickPaymentInfoContinue();
      });

      await attach.withAllureStep(page, 'User Fills Confirm Order', async () => {
        const isConfirmOrderDisplayed = await checkoutPageInstance.verifyConfirmOrderIsDisplayed();
        expect(isConfirmOrderDisplayed).toBeTruthy();
        await checkoutPageInstance.clickConfirmOrder();
        const completedCheckoutResult = await completedCheckoutPageInstance.verifyCompletedCheckoutIsDisplayed();
        expect(completedCheckoutResult!.trim()).toBe(completedCheckoutPageHeader);
      });

      await attach.withAllureStep(page, 'User Clicks Order Details Link', async () => {
        await completedCheckoutPageInstance.clickOrderDetailsLink();
        const orderDetailsPageHeaderResult = await orderInformationPageInstance.verifyOrderInformationIsDisplayed();
        expect(orderDetailsPageHeaderResult!.trim()).toBe(orderDetailsPageHeader);
      });

      await attach.withAllureStep(page, 'Verify Order Total Price', async () => {
        const orderTotalPriceResult = await orderInformationPageInstance.verifyOrderTotalPrice();
        const totalPrice = testCase.orderTotal + testCase.cashOnDeliveryFee;
        expect(orderTotalPriceResult!.trim()).toBe(totalPrice.toFixed(2));
      });
    });
  }
});