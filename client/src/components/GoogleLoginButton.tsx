import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { UserType, useAuthStore } from '../lib/store';

interface GoogleLoginButtonProps {
  userType: UserType;
  onSuccess?: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ userType, onSuccess }) => {
  const { loginWithGoogle } = useAuthStore();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(userType);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-2 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <FcGoogle className="h-5 w-5" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;