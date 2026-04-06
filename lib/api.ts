// API Service for OpenDataBot Authentication
// Based on the provided API specification

const API_BASE_URL = "https://api.opendatabot.ua/api/cabinet";

export interface User {
  id: number;
  email: string;
  name: string;
  lastname: string;
  phone: string | null;
  avatar: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  status: "success" | "error";
  message?: string;
  data?: {
    user: User;
    token: string;
  };
  errors?: Record<string, string[]>;
}

export interface ProfileResponse {
  status: "success" | "error";
  message?: string;
  data?: User;
  errors?: Record<string, string[]>;
}

export interface MessageResponse {
  status: "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
}

// Helper to get auth token
function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

// Helper to create headers
function createHeaders(includeAuth: boolean = false): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
}

// Register a new user
export async function register(data: {
  name: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  captcha: string;
}): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(data),
  });

  return response.json();
}

// Login user
export async function login(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(data),
  });

  return response.json();
}

// Logout user
export async function logout(): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: "POST",
    headers: createHeaders(true),
  });

  return response.json();
}

// Get user profile
export async function getProfile(): Promise<ProfileResponse> {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: "GET",
    headers: createHeaders(true),
  });

  return response.json();
}

// Update user profile
export async function updateProfile(data: {
  name?: string;
  lastname?: string;
  phone?: string;
}): Promise<ProfileResponse> {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: "PUT",
    headers: createHeaders(true),
    body: JSON.stringify(data),
  });

  return response.json();
}

// Upload avatar
export async function uploadAvatar(file: File): Promise<ProfileResponse> {
  const formData = new FormData();
  formData.append("avatar", file);

  const token = getAuthToken();
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/profile/avatar`, {
    method: "POST",
    headers,
    body: formData,
  });

  return response.json();
}

// Delete avatar
export async function deleteAvatar(): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/profile/avatar`, {
    method: "DELETE",
    headers: createHeaders(true),
  });

  return response.json();
}

// Change password
export async function changePassword(data: {
  current_password: string;
  password: string;
  password_confirmation: string;
}): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/password`, {
    method: "PUT",
    headers: createHeaders(true),
    body: JSON.stringify(data),
  });

  return response.json();
}

// Send email verification
export async function sendEmailVerification(): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/email/verification-notification`, {
    method: "POST",
    headers: createHeaders(true),
  });

  return response.json();
}

// Request password reset
export async function forgotPassword(email: string): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/forgot-password`, {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify({ email }),
  });

  return response.json();
}

// Reset password with token
export async function resetPassword(data: {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}): Promise<MessageResponse> {
  const response = await fetch(`${API_BASE_URL}/reset-password`, {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(data),
  });

  return response.json();
}
