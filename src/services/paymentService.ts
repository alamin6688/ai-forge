
import { apiRequest } from '@/lib/api';
import { getAuthHeaders } from '@/lib/auth';

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
}

export interface Subscription {
  id: string;
  planId: string;
  status: string;
  currentPeriodEnd: string;
}

export const paymentService = {
  // Create payment intent
  async createPaymentIntent(amount: number, currency = 'usd') {
    return apiRequest<PaymentIntent>('/payments/create-intent', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ amount, currency }),
    });
  },

  // Get payment history
  async getPaymentHistory() {
    return apiRequest('/payments/history', {
      headers: getAuthHeaders(),
    });
  },

  // Create subscription
  async createSubscription(planId: string) {
    return apiRequest<Subscription>('/subscriptions/create', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ planId }),
    });
  },

  // Get current subscription
  async getCurrentSubscription() {
    return apiRequest<Subscription>('/subscriptions/current', {
      headers: getAuthHeaders(),
    });
  },

  // Cancel subscription
  async cancelSubscription() {
    return apiRequest('/subscriptions/cancel', {
      method: 'POST',
      headers: getAuthHeaders(),
    });
  },
};
