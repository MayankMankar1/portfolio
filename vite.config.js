// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/portfolio/", // 👈 important for GitHub Pages
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
 // https://vite.dev/config/ 
  export default defineConfig({ plugins: [react(), tailwindcss()],

    base: "/portfolio/"
   });
