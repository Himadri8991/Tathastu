import { 
  signInWithPopup, 
  signOut as firebaseSignOut,
  getRedirectResult,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { UserType } from "./store";

export const signInWithGoogle = async (userType: UserType) => {
  try {
    // Store the user type in the local storage before initiating the sign-in process
    localStorage.setItem('userType', userType);
    
    // Trigger Google sign-in popup
    const result = await signInWithPopup(auth, googleProvider);
    
    // The result contains user information
    return {
      success: true,
      user: result.user,
      userType
    };
  } catch (error) {
    console.error("Google Sign-in error:", error);
    return {
      success: false,
      error
    };
  }
};

export const checkRedirectResult = async () => {
  try {
    // Check if there's a sign-in redirect result
    const result = await getRedirectResult(auth);
    
    if (result) {
      // Get the user type from local storage that was set before redirect
      const userType = localStorage.getItem('userType') as UserType;
      
      return {
        success: true,
        user: result.user,
        userType
      };
    }
    
    return {
      success: false,
      user: null,
      userType: null
    };
  } catch (error) {
    console.error("Redirect result error:", error);
    return {
      success: false,
      error
    };
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    localStorage.removeItem('userType');
    return { success: true };
  } catch (error) {
    console.error("Sign out error:", error);
    return { 
      success: false,
      error
    };
  }
};

export const getCurrentUser = () => {
  return new Promise<{ user: User | null, userType: UserType | null }>((resolve) => {
    // Get current auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      const userType = localStorage.getItem('userType') as UserType | null;
      resolve({ user, userType });
    });
  });
};