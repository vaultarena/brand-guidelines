/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    darkMode: 'class', // or 'media' for automatic OS-level detection
    theme: {
        extend: {
            colors: {
                // VaultArena Brand Colors
                orange: {
                    DEFAULT: '#FF6B1A',
                    light: '#FF8643',
                    dark: '#E25D12',
                    50: '#FFF4ED',
                    100: '#FFE8DB',
                    200: '#FFCFB7',
                    300: '#FFB693',
                    400: '#FF9D6F',
                    500: '#FF6B1A', // Primary
                    600: '#E25D12',
                    700: '#C55010',
                    800: '#A8430E',
                    900: '#8B360B',
                },
                navy: {
                    DEFAULT: '#0B1020',
                    light: '#131A33',
                    dark: '#060914',
                    50: '#E5E7EB',
                    100: '#CBD0DB',
                    200: '#97A1B7',
                    300: '#637293',
                    400: '#2F436F',
                    500: '#131A33', // Light
                    600: '#0B1020', // Primary
                    700: '#060914', // Dark
                    800: '#040610',
                    900: '#02030C',
                },
                warm: {
                    white: '#F5EDE6',
                },
                // Supporting Neutrals
                gray: {
                    DEFAULT: '#8C8C8C',
                    light: '#CFCFCF',
                    dark: '#1E1E1E',
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#8C8C8C', // Default
                    600: '#737373',
                    700: '#525252',
                    800: '#404040',
                    900: '#1E1E1E', // Dark
                },
                // Status Colors
                success: {
                    DEFAULT: '#2ECC71',
                    light: '#58D68D',
                    dark: '#27AE60',
                    50: '#E8F8F0',
                    100: '#D1F2E1',
                    200: '#A3E5C3',
                    300: '#75D8A5',
                    400: '#47CB87',
                    500: '#2ECC71', // Primary
                    600: '#27AE60',
                    700: '#229954',
                    800: '#1D8348',
                    900: '#186E3C',
                },
                warning: {
                    DEFAULT: '#F1C40F',
                    light: '#F4D03F',
                    dark: '#D4AC0D',
                    50: '#FEFBEA',
                    100: '#FDF7D5',
                    200: '#FBEFAB',
                    300: '#F9E781',
                    400: '#F7DF57',
                    500: '#F1C40F', // Primary
                    600: '#D4AC0D',
                    700: '#B7950B',
                    800: '#9A7D0A',
                    900: '#7D6608',
                },
                error: {
                    DEFAULT: '#E74C3C',
                    light: '#EC7063',
                    dark: '#C0392B',
                    50: '#FDEDEC',
                    100: '#FADBD8',
                    200: '#F5B7B1',
                    300: '#F1948A',
                    400: '#EC7063',
                    500: '#E74C3C', // Primary
                    600: '#C0392B',
                    700: '#A93226',
                    800: '#922B21',
                    900: '#7B241C',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
            },
            fontSize: {
                'display-xl': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'heading-xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                'heading-lg': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                'heading-md': ['1.25rem', { lineHeight: '1.4' }],
                'body-lg': ['1.125rem', { lineHeight: '1.75' }],
                'body': ['1rem', { lineHeight: '1.75' }],
                'body-sm': ['0.875rem', { lineHeight: '1.6' }],
                'caption': ['0.75rem', { lineHeight: '1.5' }],
            },
            spacing: {
                '18': '4.5rem',
                '112': '28rem',
                '128': '32rem',
            },
            borderRadius: {
                'sm': '6px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
            },
            boxShadow: {
                'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
                'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
                'md': '0 4px 8px rgba(0, 0, 0, 0.15)',
                'lg': '0 8px 16px rgba(0, 0, 0, 0.2)',
                'xl': '0 16px 32px rgba(0, 0, 0, 0.25)',
                '2xl': '0 24px 48px rgba(0, 0, 0, 0.3)',
                // Orange shadows for highlights
                'orange-sm': '0 2px 8px rgba(255, 107, 26, 0.25)',
                'orange-md': '0 4px 16px rgba(255, 107, 26, 0.3)',
                'orange-lg': '0 8px 24px rgba(255, 107, 26, 0.35)',
            },
            backgroundImage: {
                'gradient-orange': 'linear-gradient(90deg, #FF6B1A 0%, #FF8643 100%)',
                'gradient-orange-135': 'linear-gradient(135deg, #FF6B1A 0%, #FF8643 100%)',
                'gradient-navy': 'linear-gradient(180deg, #0B1020 0%, #131A33 100%)',
                'gradient-navy-135': 'linear-gradient(135deg, #060914 0%, #0B1020 100%)',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            transitionDuration: {
                'fast': '150ms',
                'base': '250ms',
                'slow': '350ms',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.4s ease-out',
                'slide-up': 'slide-up 0.3s ease-out',
                'slide-down': 'slide-down 0.3s ease-out',
            },
        },
    },
    plugins: [],
}
