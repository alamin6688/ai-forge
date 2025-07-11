
import { apiRequest } from '@/lib/api';
import { getAuthHeaders } from '@/lib/auth';

export interface ToolUsage {
  toolId: string;
  userId: string;
  usedAt: string;
  creditsUsed?: number;
}

export const toolsService = {
  // Log tool usage
  async logToolUsage(toolId: string, data?: any) {
    return apiRequest<ToolUsage>('/tools/usage', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ toolId, data }),
    });
  },

  // Get user's tool usage history
  async getUsageHistory() {
    return apiRequest<ToolUsage[]>('/tools/usage/history', {
      headers: getAuthHeaders(),
    });
  },

  // Check if user can use a tool (credits/plan check)
  async canUseTool(toolId: string) {
    return apiRequest<{ canUse: boolean; reason?: string }>(`/tools/${toolId}/can-use`, {
      headers: getAuthHeaders(),
    });
  },

  // Get tool statistics
  async getToolStats(toolId: string) {
    return apiRequest(`/tools/${toolId}/stats`, {
      headers: getAuthHeaders(),
    });
  },
};
