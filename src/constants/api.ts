
// API endpoints and constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  USERS: {
    PROFILE: '/users/profile',
    SETTINGS: '/users/settings',
    DELETE: '/users/account',
  },
  TOOLS: {
    USAGE: '/tools/usage',
    HISTORY: '/tools/usage/history',
    STATS: (toolId: string) => `/tools/${toolId}/stats`,
    CAN_USE: (toolId: string) => `/tools/${toolId}/can-use`,
  },
  PAYMENTS: {
    CREATE_INTENT: '/payments/create-intent',
    HISTORY: '/payments/history',
  },
  SUBSCRIPTIONS: {
    CREATE: '/subscriptions/create',
    CURRENT: '/subscriptions/current',
    CANCEL: '/subscriptions/cancel',
  },
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
