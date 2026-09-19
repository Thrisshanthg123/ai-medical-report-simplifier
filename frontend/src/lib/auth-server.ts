import { NextRequest } from "next/server";
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";

export interface AuthenticatedContext {
  user: User;
  supabaseClient: SupabaseClient;
}

export async function getAuthenticatedUser(
  request: NextRequest
): Promise<AuthenticatedContext | null> {
  // 1. Check Authorization header
  const authHeader =
    request.headers.get("authorization") || request.headers.get("Authorization");
  let token: string | null = null;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  }

  // 2. Check direct sb-access-token cookie
  if (!token) {
    const directCookie = request.cookies.get("sb-access-token")?.value;
    if (directCookie && directCookie.trim().length > 20) {
      token = directCookie.trim();
    }
  }

  // 3. Fallback to scanning all cookies
  if (!token) {
    const allCookies = request.cookies.getAll();
    for (const c of allCookies) {
      if (c.name.includes("auth-token") || c.name.includes("access-token")) {
        try {
          const parsed = JSON.parse(c.value);
          if (parsed.access_token) {
            token = parsed.access_token;
            break;
          } else if (Array.isArray(parsed) && parsed[0]) {
            token = parsed[0];
            break;
          }
        } catch {
          if (c.value.length > 20) {
            token = c.value;
          }
        }
      }
    }
  }

  if (!token) {
    return null;
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://hxpskhiqfplhckwqeamm.supabase.co";

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY ||
    "dummy-anon-key";

  const scopedClient = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const {
    data: { user },
    error,
  } = await scopedClient.auth.getUser(token);

  if (error || !user) {
    return null;
  }

  return { user, supabaseClient: scopedClient };
}
