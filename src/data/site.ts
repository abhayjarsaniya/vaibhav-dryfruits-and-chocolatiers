export const BRAND = "Vaibhav Dryfruits & Chocolatiers";
export const BRAND_SHORT = "Vaibhav";
export const BRAND_SUB = "Dryfruits & Chocolatiers";
export const BRAND_FULL = "Vaibhav Dryfruits & Chocolatiers";
export const STORE_NAME = "Vaibhav Dryfruits & Chocolatiers";

export const STORE_ADDRESS = {
  line1: "Jain Vadi",
  line2: "Manek Chowk Road, Khadia",
  area: "Khadia",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "380001",
  full: "Jain Vadi, Manek Chowk Road, Khadia, Ahmedabad, Gujarat 380001",
};

export const STORE_RATING = "5.0 ★";

export const WHATSAPP_DISPLAY = "+91 98989 05557";
export const WHATSAPP_E164 = "919898905557";

export const GOOGLE_MAPS_URL =
  "https://share.google/jOHY5ZZPfu6mzPzpQ";

export const MAX_QTY_PER_PRODUCT = 10;
export const MAX_QTY_MESSAGE = "Maximum quantity reached (10 per product).";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
