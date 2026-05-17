import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Hardcoded guest user for demo mode
  const [user] = useState({
    id: 'guest-user-id',
    name: 'Guest User',
    email: 'guest@example.com'
  });
  
  // No loading state required
  const loading = false;

  const login = async () => {
    // No-op for demo mode
  };

  const register = async () => {
    // No-op for demo mode
  };

  const logout = () => {
    // In demo mode, logout does nothing except maybe alert or redirect
    // State is maintained as guest user
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
