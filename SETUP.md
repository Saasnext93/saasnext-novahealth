# NovaHealth Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gemini API Key

To enable the AI Health Assistant feature, you need a Google Gemini API key:

1. **Get your free API key**: Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Create a new API key** (it's free!)
3. **Update `.env.local`** file:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

### 3. Run the Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Features

- ✅ Modern healthcare website with appointment booking
- ✅ AI-powered health assistant (requires API key)
- ✅ Responsive design with smooth animations
- ✅ Doctor profiles and medical specialties
- ✅ Emergency care information

## Troubleshooting

### API Key Issues
If you see "API Key must be set" error:
- Make sure you've added your actual Gemini API key to `.env.local`
- Restart the development server after updating the `.env.local` file
- The key should start with `VITE_GEMINI_API_KEY=`

### Port Already in Use
If port 3000 is already in use, you can change it in `vite.config.ts`

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Google Gemini AI

