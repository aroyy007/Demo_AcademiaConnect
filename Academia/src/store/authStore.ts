import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      set({
        user: {
          id: '1',
          name: 'John Doe',
          email,
          role: 'user',
        },
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ error: 'Invalid credentials', isLoading: false });
    }
  },
  signup: async (data: any) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      set({
        user: {
          id: '1',
          name: data.name,
          email: data.email,
          role: 'user',
        },
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
    }
  },
  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },
}));