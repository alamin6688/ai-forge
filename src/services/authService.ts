
import { apiRequest } from '@/lib/api';
import { getAuthHeaders, AuthTokens, User } from '@/lib/auth';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name?: string;
}

export const authService = {
  // Login user
  async login(credentials: LoginCredentials) {
    const response = await apiRequest<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.success && response.data) {
      AuthTokens.set(response.data.token);
    }

    return response;
  },

  // Register new user
  async signup(credentials: SignupCredentials) {
    const response = await apiRequest<{ user: User; token: string }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.success && response.data) {
      AuthTokens.set(response.data.token);
    }

    return response;
  },

  // Get current user
  async getCurrentUser() {
    return apiRequest<User>('/auth/me', {
      headers: getAuthHeaders(),
    });
  },

  // Logout user
  async logout() {
    AuthTokens.remove();
    return { success: true };
  },

  // Refresh token
  async refreshToken() {
    return apiRequest<{ token: string }>('/auth/refresh', {
      method: 'POST',
      headers: getAuthHeaders(),
    });
  },
};
