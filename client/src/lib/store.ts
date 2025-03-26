import { create } from 'zustand';
import { signInWithGoogle as signInWithGoogleAuth, signOut as signOutAuth } from './auth';

// Define user types for the application
export type UserType = 'student' | 'ngo' | 'donor' | 'worker';

// Define the user profile structure
interface UserProfile {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  type: UserType;
}

// Auth state interface
interface AuthState {
  isAuthenticated: boolean;
  userType: UserType | null;
  userProfile: UserProfile | null;
  setAuth: (isAuthenticated: boolean, userType: UserType | null, profile?: any) => void;
  loginWithGoogle: (userType: UserType) => Promise<void>;
  logout: () => Promise<void>;
}

// Theme state interface
interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create auth state store
export const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  userType: null,
  userProfile: null,
  
  // Set authentication state
  setAuth: (isAuthenticated, userType, profile) => {
    set({
      isAuthenticated,
      userType,
      userProfile: profile ? {
        id: profile.uid || '',
        name: profile.displayName || '',
        email: profile.email || '',
        photoURL: profile.photoURL || '',
        type: userType as UserType
      } : null
    });
  },
  
  // Login with Google
  loginWithGoogle: async (userType) => {
    try {
      const result = await signInWithGoogleAuth(userType);
      
      if (result.success && result.user) {
        set({
          isAuthenticated: true,
          userType,
          userProfile: {
            id: result.user.uid,
            name: result.user.displayName || '',
            email: result.user.email || '',
            photoURL: result.user.photoURL || '',
            type: userType
          }
        });
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  },
  
  // Logout
  logout: async () => {
    try {
      await signOutAuth();
      set({
        isAuthenticated: false,
        userType: null,
        userProfile: null
      });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}));

// Create theme state store
export const useThemeStore = create<ThemeState>()((set) => {
  // Check if user has a theme preference in localStorage or prefer dark color scheme
  const prefersDark = 
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Set initial theme based on preference
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return {
    isDarkMode: prefersDark,
    toggleTheme: () => {
      set((state) => {
        const newDarkMode = !state.isDarkMode;
        
        // Update document class and localStorage
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        
        return { isDarkMode: newDarkMode };
      });
    }
  };
});