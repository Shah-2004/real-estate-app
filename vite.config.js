
// Vite ka configuration import kar rahe hain
import { defineConfig } from "vite";

// React plugin import kar rahe hain
import react from "@vitejs/plugin-react";

// Tailwind ka Vite plugin import kar rahe hain
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({

  // Project me use hone wale plugins
  plugins: [

    // React support
    react(),

    // Tailwind support
    tailwindcss(),

  ],

});