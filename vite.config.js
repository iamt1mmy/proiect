import { defineConfig } from 'vite'
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: ["index.html", "login.html", "squad.html", "defenders.html", "midfielders.html", "forwards.html", "shedule.html", "matchinfo.html", "photos.html", "about us.html"]
        }
    }
})
