export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://globetrotter-backend-three.vercel.app";
export const AUTH_REGISTER = `${API_BASE_URL}/auth/register`;
export const AUTH_LOGIN = `${API_BASE_URL}/auth/login`;
export const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_URL ||
  "https://globetrotter-frontend-kappa.vercel.app";
export const API_RANDOM_LOCATION = `${API_BASE_URL}/locations/random`;
export const API_SUBMIT_ANSWER = `${API_BASE_URL}/locations/submit`;
export const API_INVITE_SCORE = `${API_BASE_URL}/locations/invite-score`;
export const API_RESET_SCORE = `${API_BASE_URL}/locations/reset-score`;
export const API_CHALLENGE_INVITE = `${API_BASE_URL}/challenge/invite`;
