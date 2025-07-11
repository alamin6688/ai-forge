
import { apiRequest } from '@/lib/api';
import { getAuthHeaders, User } from '@/lib/auth';

export interface UpdateUserData {
  name?: string;
  email?: string;
  avatar?: string;
}

export const userService = {
  // Get user profile
  async getProfile(userId: string) {
    return apiRequest<User>(`/users/${userId}`, {
      headers: getAuthHeaders(),
    });
  },

  // Update user profile
  async updateProfile(userData: UpdateUserData) {
    return apiRequest<User>('/users/profile', {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });
  },

  // Delete user account
  async deleteAccount() {
    return apiRequest('/users/account', {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },

  // Get user settings
  async getSettings() {
    return apiRequest('/users/settings', {
      headers: getAuthHeaders(),
    });
  },

  // Update user settings
  async updateSettings(settings: Record<string, any>) {
    return apiRequest('/users/settings', {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(settings),
    });
  },
};
