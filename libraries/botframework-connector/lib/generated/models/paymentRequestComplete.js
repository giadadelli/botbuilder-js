/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Payload delivered when completing a payment request
 *
 */
class PaymentRequestComplete {
  /**
   * Create a PaymentRequestComplete.
   * @member {string} [id] Payment request ID
   * @member {object} [paymentRequest] Initial payment request
   * @member {string} [paymentRequest.id] ID of this payment request
   * @member {array} [paymentRequest.methodData] Allowed payment methods for
   * this request
   * @member {object} [paymentRequest.details] Details for this request
   * @member {object} [paymentRequest.details.total] Contains the total amount
   * of the payment request
   * @member {string} [paymentRequest.details.total.label] Human-readable
   * description of the item
   * @member {object} [paymentRequest.details.total.amount] Monetary amount for
   * the item
   * @member {string} [paymentRequest.details.total.amount.currency] A currency
   * identifier
   * @member {string} [paymentRequest.details.total.amount.value] Decimal
   * monetary value
   * @member {string} [paymentRequest.details.total.amount.currencySystem]
   * Currency system
   * @member {boolean} [paymentRequest.details.total.pending] When set to true
   * this flag means that the amount field is not final.
   * @member {array} [paymentRequest.details.displayItems] Contains line items
   * for the payment request that the user agent may display
   * @member {array} [paymentRequest.details.shippingOptions] A sequence
   * containing the different shipping options for the user to choose from
   * @member {array} [paymentRequest.details.modifiers] Contains modifiers for
   * particular payment method identifiers
   * @member {string} [paymentRequest.details.error] Error description
   * @member {object} [paymentRequest.options] Provides information about the
   * options desired for the payment request
   * @member {boolean} [paymentRequest.options.requestPayerName] Indicates
   * whether the user agent should collect and return the payer's name as part
   * of the payment request
   * @member {boolean} [paymentRequest.options.requestPayerEmail] Indicates
   * whether the user agent should collect and return the payer's email address
   * as part of the payment request
   * @member {boolean} [paymentRequest.options.requestPayerPhone] Indicates
   * whether the user agent should collect and return the payer's phone number
   * as part of the payment request
   * @member {boolean} [paymentRequest.options.requestShipping] Indicates
   * whether the user agent should collect and return a shipping address as
   * part of the payment request
   * @member {string} [paymentRequest.options.shippingType] If requestShipping
   * is set to true, then the shippingType field may be used to influence the
   * way the user agent presents the user interface for gathering the shipping
   * address
   * @member {string} [paymentRequest.expires] Expiration for this request, in
   * ISO 8601 duration format (e.g., 'P1D')
   * @member {object} [paymentResponse] Corresponding payment response
   * @member {string} [paymentResponse.methodName] The payment method
   * identifier for the payment method that the user selected to fulfil the
   * transaction
   * @member {object} [paymentResponse.details] A JSON-serializable object that
   * provides a payment method specific message used by the merchant to process
   * the transaction and determine successful fund transfer
   * @member {object} [paymentResponse.shippingAddress] If the requestShipping
   * flag was set to true in the PaymentOptions passed to the PaymentRequest
   * constructor, then shippingAddress will be the full and final shipping
   * address chosen by the user
   * @member {string} [paymentResponse.shippingAddress.country] This is the
   * CLDR (Common Locale Data Repository) region code. For example, US, GB, CN,
   * or JP
   * @member {array} [paymentResponse.shippingAddress.addressLine] This is the
   * most specific part of the address. It can include, for example, a street
   * name, a house number, apartment number, a rural delivery route,
   * descriptive instructions, or a post office box number.
   * @member {string} [paymentResponse.shippingAddress.region] This is the top
   * level administrative subdivision of the country. For example, this can be
   * a state, a province, an oblast, or a prefecture.
   * @member {string} [paymentResponse.shippingAddress.city] This is the
   * city/town portion of the address.
   * @member {string} [paymentResponse.shippingAddress.dependentLocality] This
   * is the dependent locality or sublocality within a city. For example, used
   * for neighborhoods, boroughs, districts, or UK dependent localities.
   * @member {string} [paymentResponse.shippingAddress.postalCode] This is the
   * postal code or ZIP code, also known as PIN code in India.
   * @member {string} [paymentResponse.shippingAddress.sortingCode] This is the
   * sorting code as used in, for example, France.
   * @member {string} [paymentResponse.shippingAddress.languageCode] This is
   * the BCP-47 language code for the address. It's used to determine the field
   * separators and the order of fields when formatting the address for
   * display.
   * @member {string} [paymentResponse.shippingAddress.organization] This is
   * the organization, firm, company, or institution at this address.
   * @member {string} [paymentResponse.shippingAddress.recipient] This is the
   * name of the recipient or contact person.
   * @member {string} [paymentResponse.shippingAddress.phone] This is the phone
   * number of the recipient or contact person.
   * @member {string} [paymentResponse.shippingOption] If the requestShipping
   * flag was set to true in the PaymentOptions passed to the PaymentRequest
   * constructor, then shippingOption will be the id attribute of the selected
   * shipping option
   * @member {string} [paymentResponse.payerEmail] If the requestPayerEmail
   * flag was set to true in the PaymentOptions passed to the PaymentRequest
   * constructor, then payerEmail will be the email address chosen by the user
   * @member {string} [paymentResponse.payerPhone] If the requestPayerPhone
   * flag was set to true in the PaymentOptions passed to the PaymentRequest
   * constructor, then payerPhone will be the phone number chosen by the user
   */
  constructor() {
  }

  /**
   * Defines the metadata of PaymentRequestComplete
   *
   * @returns {object} metadata of PaymentRequestComplete
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaymentRequestComplete',
      type: {
        name: 'Composite',
        className: 'PaymentRequestComplete',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          paymentRequest: {
            required: false,
            serializedName: 'paymentRequest',
            type: {
              name: 'Composite',
              className: 'PaymentRequest'
            }
          },
          paymentResponse: {
            required: false,
            serializedName: 'paymentResponse',
            type: {
              name: 'Composite',
              className: 'PaymentResponse'
            }
          }
        }
      }
    };
  }
}

module.exports = PaymentRequestComplete;