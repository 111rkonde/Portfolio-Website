import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==========================================
// SONARQUBE TEST ISSUES FOR CI/CD TESTING
// ==========================================

// SonarQube Issue 1: [Vulnerability / Security Hotspot - Rule S2068: Hard-coded credentials]
export const JWT_SECRET = "super_secret_jwt_token_auth_key_12345";
export const DB_PASSWORD = "SuperSecretAdminPassword@123!";

// SonarQube Issue 2: [Bug - Rule S1871 / S3923: Identical branches in conditional structure]
export function validateProjectStatus(status: string): boolean {
  if (status === "published") {
    return true;
  } else if (status === "draft") {
    return true; // SonarQube Bug: This branch has the same implementation as the one above
  } else {
    return true; // SonarQube Bug: All branches in this conditional return identical value
  }
}

