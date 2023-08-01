/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary-theme1)',
        secondary: 'var(--color-secondary-theme1)',
        textSecondary: 'var(--color-text-secondary-theme1)',
        buttonPrimary: 'var(--color-button-primary-theme1)',
        footerColor: 'var(--color-footer-color-theme1)',
        portfolioSecondary: 'var(--color-portfolio-secondary-theme1)',
        portfolioPrimaryText: 'var(--color-portfolio-primary-text-theme1)',
        porfolioTitleText: 'var(--color-portfolio-title-text-theme1)',
        checkoutPage: 'var(--color-checkout-page-theme1)',
        grayLight: 'var(--color-gray-light-theme1)',
        graylight2: 'var(--color-gray-light2-theme1)',
        landingSubText: 'var(--color-landing-sub-text-theme1)',
        quotationColor: 'var(--color-quotation-color-theme1)',
        quotebg: 'var(--color-quote-bg-theme1)',
        skillColor: 'var(--color-skill-color-theme1)',
        customPurple: 'var(--color-custom-purple-theme1)',

        // new colors for portfolio theme two

        primaryBlue: '#0c151c',
        secondaryBlue: '#2c6c7b',
        backgroundBlue: '#082b33',
      },
      dropShadow: {
        md: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      stroke: {
        portfolioPrimary: 'var(--stroke-portfolio-primary-theme1)',
        portfolioSecondary: 'var(--stroke-portfolio-secondary-theme1)',
      },
      fontFamily: {
        dmsans: ['"DM Sans"'],
        playfair: ['"Playfair Display"'],
        lexend: ['"Lexend"'],
        roboto: ['"Roboto"'],
        inter: ['"Inter"'],
        outfit: ['"Outfit"'],
      },
      inset: {
        '50p': '50%',
        // You can continue this pattern to cover your needs
      },
    },
  },
  plugins: [],
};
