export interface LoginDto {
  userNameOrEmailOrPhone: string;
  password: string;
}

export interface RegisterDto {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

export interface TokenDto {
  refreshToken: string;
  accessToken: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiry: string;
}
