# Vulnerabilities Added for SonarQube Testing

**IMPORTANT: This file and the vulnerable code should be removed after testing is complete.**

## File Created
- `src/components/vulnerable-test.tsx`

## 4 Intentional Vulnerabilities Added

### 1. Hardcoded API Key (Critical Severity)
- **Location:** Line 8 in vulnerable-test.tsx
- **Issue:** Hardcoded API key and password in source code
- **Code:** `const API_KEY = "sk-1234567890abcdef1234567890abcdef";`
- **SonarQube Rule:** S2068 - Hardcoded credentials

### 2. Weak Random Number Generation (Major Severity)
- **Location:** Lines 13-15 in vulnerable-test.tsx
- **Issue:** Using Math.random() for security-sensitive token generation
- **Code:** `return Math.random().toString(36).substring(2);`
- **SonarQube Rule:** S2245 - Using pseudorandom number generators for security purposes

### 3. Command Injection (Critical Severity)
- **Location:** Lines 17-22 in vulnerable-test.tsx
- **Issue:** Unsafe command execution with user input
- **Code:** `exec(\`echo ${userInput}\`, ...)`
- **SonarQube Rule:** S2078 - Operating system command injection

### 4. Weak Cryptographic Algorithm (Major Severity)
- **Location:** Lines 24-27 in vulnerable-test.tsx
- **Issue:** Using MD5 hash algorithm (deprecated for security)
- **Code:** `crypto.createHash("md5").update(password).digest("hex")`
- **SonarQube Rule:** S2070 - Hashing algorithm should be strong

## Removal Instructions
When testing is complete, remove:
1. `src/components/vulnerable-test.tsx`
2. This `VULNERABILITIES_FOR_TESTING.md` file
3. Any references to the VulnerableTestComponent

## Testing with SonarQube
Run SonarQube scan to verify these vulnerabilities are detected:
```bash
mvn sonar:sonar
```
