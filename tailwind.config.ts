import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* AI-specific colors */
				ai: {
					DEFAULT: 'hsl(var(--primary))',
					accent: 'hsl(var(--ai-accent))',
					light: 'hsl(var(--ai-light))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slideUp 0.3s ease-out',
				'slide-in': 'slideIn 0.3s ease-out',
				'scale-in': 'scaleIn 0.2s ease-out',
				'bounce-in': 'bounceIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'fade-in': 'fadeIn 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'ai-pulse': 'aiPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'ai-float': 'aiFloat 3s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			spacing: {
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'18': '4.5rem',
				'88': '22rem',
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-ai': 'var(--gradient-ai)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-ai-glow': 'var(--gradient-ai-glow)',
				'gradient-price-up': 'var(--gradient-price-up)',
				'gradient-price-down': 'var(--gradient-price-down)',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)',
				'ai': 'var(--shadow-ai)',
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'ai-pulse': 'var(--shadow-ai-pulse)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
