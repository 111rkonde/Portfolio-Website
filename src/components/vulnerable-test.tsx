// VULNERABLE CODE FOR SONARQUBE TESTING - TO BE REMOVED AFTER TESTING
// This file contains intentional security vulnerabilities for testing SonarQube

"use client";

import { useState } from "react";

// VULNERABILITY 1: Hardcoded API Key (Critical)
// SonarQube will detect hardcoded credentials
const API_KEY = "sk-1234567890abcdef1234567890abcdef"; // Hardcoded API key
const PASSWORD = "admin123"; // Hardcoded password

// VULNERABILITY 2: Weak Random Number Generation (Major)
// SonarQube will detect Math.random() for security-sensitive contexts
function generateToken() {
  return Math.random().toString(36).substring(2); // Weak random generation
}

// VULNERABILITY 3: Command Injection (Critical)
// SonarQube will detect unsafe command execution
function executeCommand(userInput: string) {
  const { exec } = require("child_process");
  exec(`echo ${userInput}`, (error: any) => { // Command injection vulnerability
    if (error) console.error(error);
  });
}

// VULNERABILITY 4: Weak Cryptographic Algorithm (Major)
// SonarQube will detect MD5 usage (weak hash algorithm)
import crypto from "crypto";
function hashPassword(password: string) {
  return crypto.createHash("md5").update(password).digest("hex"); // MD5 is weak
}

export function VulnerableTestComponent() {
  const [input, setInput] = useState("");

  return (
    <div className="p-4 border border-red-500 rounded">
      <h2 className="text-red-500 font-bold mb-4">
        VULNERABLE TEST COMPONENT - REMOVE AFTER TESTING
      </h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">API Key: {API_KEY.substring(0, 8)}...</p>
        </div>
        
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command"
            className="border p-2 rounded"
          />
          <button
            onClick={() => executeCommand(input)}
            className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Execute (VULNERABLE)
          </button>
        </div>

        <div>
          <p>Generated Token: {generateToken()}</p>
        </div>

        <div>
          <p>Hashed Password: {hashPassword("test")}</p>
        </div>
      </div>
    </div>
  );
}
