import React from 'react';
import GooglePayButton from '@google-pay/button-react';

interface Props {
  amount: number;
  onPaymentSuccess: () => void;
  onPaymentError: (error: Error | google.payments.api.PaymentsError) => void;
}

const GooglePayButtonWrapper: React.FC<Props> = ({ amount, onPaymentSuccess, onPaymentError }) => {
    const paymentRequest: google.payments.api.PaymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
      {
        type: 'CARD'as google.payments.api.PaymentMethodType,
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: import.meta.env.VITE_GOOGLE_PAY_MERCHANT_ID,
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: import.meta.env.VITE_GOOGLE_PAY_MERCHANT_ID,
      merchantName: 'Student Donation Platform',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: amount.toFixed(2),
      currencyCode: 'INR',
      countryCode: 'IN',
    },
  };

  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={paymentRequest}
      onLoadPaymentData={(paymentData: google.payments.api.PaymentData) => {
        console.log('Payment Success:', paymentData);
        onPaymentSuccess();
      }}
      onError={(error) => {
        console.error('Payment Error:', error);
        onPaymentError(error);
      }}
      className="w-full"
      buttonType="donate"
      buttonLocale="en"
      buttonSizeMode="fill"
      buttonColor="black"
    />
  );
};

export default GooglePayButtonWrapper;