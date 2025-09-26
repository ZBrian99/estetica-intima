import { create } from 'zustand';

export type AdminUser = {
  email: string;
  role: 'admin';
};

type AuthState = {
  isAdminAuthenticated: boolean;
  adminUser: AdminUser | null;
  loginAdmin: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logoutAdmin: () => void;
  hydrate: () => void;
};

const ADMIN_EMAIL = 'admin@intima.com';
const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'admin_auth_v1';

export const useAuthStore = create<AuthState>()((set, get) => ({
  isAdminAuthenticated: false,
  adminUser: null,

  async loginAdmin(email, password) {
    // Validación simple y chequeo contra credenciales hardcodeadas
    const normalizedEmail = email.trim().toLowerCase();
    const ok = normalizedEmail === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    if (!ok) {
      return { success: false, message: 'Credenciales inválidas' };
    }
    const user: AdminUser = { email: ADMIN_EMAIL, role: 'admin' };
    set({ isAdminAuthenticated: true, adminUser: user });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user }));
    }
    return { success: true };
  },

  logoutAdmin() {
    set({ isAdminAuthenticated: false, adminUser: null });
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  },

  hydrate() {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { user: AdminUser } | null;
      if (parsed?.user) {
        set({ isAdminAuthenticated: true, adminUser: parsed.user });
      }
    } catch {
      // Ignorar errores de parseo
    }
  },
}));