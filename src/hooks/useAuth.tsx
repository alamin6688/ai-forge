
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, User } from '@/lib/auth';
import { authService } from '@/services/authService';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name?: string) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    const response = await authService.login({ email, password });
    
    if (response.success && response.data) {
      setAuthState({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    }
    
    return false;
  };

  const signup = async (email: string, password: string, name?: string): Promise<boolean> => {
    const response = await authService.signup({ email, password, name });
    
    if (response.success && response.data) {
      setAuthState({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    authService.logout();
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const refreshUser = async () => {
    const response = await authService.getCurrentUser();
    
    if (response.success && response.data) {
      setAuthState(prev => ({
        ...prev,
        user: response.data,
        isAuthenticated: true,
      }));
    }
  };

  useEffect(() => {
    // Check if user is already authenticated on app start
    const initAuth = async () => {
      const response = await authService.getCurrentUser();
      
      if (response.success && response.data) {
        setAuthState({
          user: response.data,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      signup,
      logout,
      refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
