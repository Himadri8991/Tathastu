import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Users, BookOpen } from 'lucide-react';
import DonationTracker from '../components/DonationTracker';
import GooglePayButtonWrapper from '../components/GooglePayButton';

const Donate = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'googlepay'>('card');
  const [showSuccess, setShowSuccess] = useState(false);
  const predefinedAmounts = [500, 1000, 5000, 10000];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setAmount(parseInt(value));
    }
  };

  const handlePaymentSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handlePaymentError = (error: Error | google.payments.api.PaymentsError) => {
    if ('message' in error) {
      alert('Payment failed: ' + error.message); // Standard Error handling
    } else if ('statusMessage' in error) {
      alert('Payment failed: ' + error.statusMessage); // Google Pay PaymentsError handling
    } else {
      alert('An unknown error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Payment successful! Thank you for your donation.
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
            alt="Donation"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Make a Difference Today
          </motion.h1>
          <p className="text-xl text-gray-200 mb-8">
            Your donation can change a student's life
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <DonationTracker totalDonations={750000} targetDonations={1000000} />
              
              <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5,000+</p>
                    <p className="text-gray-600 dark:text-gray-300">Students Helped</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</p>
                    <p className="text-gray-600 dark:text-gray-300">Books Distributed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Make a Donation
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {predefinedAmounts.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAmountSelect(value)}
                        className={`p-4 rounded-lg border ${
                          amount === value && !customAmount
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                            : 'border-gray-300 dark:border-gray-600'
                        } hover:border-blue-600 transition-colors dark:text-white`}
                      >
                        ₹{value.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
                        paymentMethod === 'card' 
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900' 
                          : 'border-gray-300 dark:border-gray-600'
                      } hover:border-blue-600 transition-colors dark:text-white`}
                    >
                      <CreditCard className="h-5 w-5" />
                      Card
                    </button>
                    <button 
                      onClick={() => setPaymentMethod('googlepay')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
                        paymentMethod === 'googlepay' 
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900' 
                          : 'border-gray-300 dark:border-gray-600'
                      } hover:border-blue-600 transition-colors dark:text-white`}
                    >
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png"
                        alt="Google Pay"
                        className="h-10"
                      />
                      Google Pay
                    </button>
                  </div>
                </div>

                {paymentMethod === 'googlepay' ? (
                  <GooglePayButtonWrapper
                    amount={amount}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  />
                ) : (
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5" />
                    Donate ₹{amount.toLocaleString()}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Donate;