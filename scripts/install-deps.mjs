import { execSync } from "child_process";

console.log("Installing resend package...");
execSync("cd /vercel/share/v0-project && pnpm add resend", { stdio: "inherit" });
console.log("Done! Lockfile updated.");
