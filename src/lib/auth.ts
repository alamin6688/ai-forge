
// Authentication utilities and types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: 'user' | 'admin';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Auth token management
export const AuthTokens = {
  get: () => localStorage.getItem('authToken'),
  set: (token: string) => localStorage.setItem('authToken', token),
  remove: () => localStorage.removeItem('authToken'),
};

// Auth headers for API requests
export const getAuthHeaders = () => {
  const token = AuthTokens.get();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
