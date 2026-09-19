"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    const updateSessionState = (s: Session | null) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);

      if (typeof window !== "undefined") {
        if (s?.access_token) {
          document.cookie = `sb-access-token=${s.access_token}; path=/; max-age=${
            s.expires_in || 3600
          }; SameSite=Lax`;
        } else {
          document.cookie = `sb-access-token=; path=/; max-age=0`;
        }
      }
    };

    // Check active session on mount
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (mounted) {
          updateSessionState(session);
        }
      })
      .catch(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        updateSessionState(session);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data?.session) {
      if (typeof window !== "undefined") {
        document.cookie = `sb-access-token=${data.session.access_token}; path=/; max-age=${
          data.session.expires_in || 3600
        }; SameSite=Lax`;
      }
    }
    return { error: error ? new Error(error.message) : null };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data?.session) {
      if (typeof window !== "undefined") {
        document.cookie = `sb-access-token=${data.session.access_token}; path=/; max-age=${
          data.session.expires_in || 3600
        }; SameSite=Lax`;
      }
    }
    return { error: error ? new Error(error.message) : null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    if (typeof window !== "undefined") {
      document.cookie = `sb-access-token=; path=/; max-age=0`;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
