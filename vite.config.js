import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/free-brands-svg-icons" ,'@fortawesome/free-brands-svg-icons',
      '@fortawesome/react-fontawesome',
      '@mui/icons-material/AccountCircle',
      '@mui/icons-material/Explore',
      '@mui/icons-material/Feed',
      '@mui/icons-material/HelpCenter',
      '@mui/icons-material/History',
      '@mui/icons-material/Home',
      '@mui/icons-material/LibraryAdd',
      '@mui/icons-material/LibraryMusic',
      '@mui/icons-material/LiveTv',
      '@mui/icons-material/MovieCreation',
      '@mui/icons-material/Report',
      '@mui/icons-material/SettingsBrightness',
      '@mui/icons-material/Settings',
      '@mui/icons-material/SportsBasketball',
      '@mui/icons-material/SportsEsports',
      '@mui/icons-material/Subscriptions'],
    },
  },
})
