const API_URL = import.meta.env.VITE_API_URL;

export async function credentialsLogin(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : "unknown error");
  }
}
