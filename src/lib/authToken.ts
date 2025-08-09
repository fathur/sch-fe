let inMemoryToken: string | null = null;

type PersistMode = 'none' | 'session';

export function setAuthToken(token: string, persist: PersistMode = 'none'): void {
  inMemoryToken = token;
  if (typeof window !== 'undefined') {
    try {
      if (persist === 'session') {
        window.sessionStorage.setItem('auth_token', token);
      } else {
        window.sessionStorage.removeItem('auth_token');
      }
    } catch {
      // Ignore storage errors (e.g., blocked in private mode)
    }
  }
}

export function getAuthToken(): string | null {
  if (inMemoryToken) return inMemoryToken;
  if (typeof window !== 'undefined') {
    try {
      const stored = window.sessionStorage.getItem('auth_token');
      if (stored) {
        inMemoryToken = stored;
        return stored;
      }
    } catch {
      // Ignore
    }
  }
  return null;
}

export function clearAuthToken(): void {
  inMemoryToken = null;
  if (typeof window !== 'undefined') {
    try {
      window.sessionStorage.removeItem('auth_token');
    } catch {
      // Ignore
    }
  }
}


