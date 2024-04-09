document.addEventListener('DOMContentLoaded', function() {
  const themeToggleCheckbox = document.querySelector('.theme-switch__checkbox');
  // Get both the navbar and footer logo images
  const navbarLogoImage = document.querySelector('.navbar__logo img');
  const footerLogoImage = document.querySelector('.footer__logo img'); 

  // Define your logo images for each theme
  const lightLogo = 'assets/images/fast-forex-exchange-logo.png';
  const darkLogo = 'assets/images/fast-forex-exchange-dark-logo.png';

  // Select partner logos in the featured section
  const partnerLogos = document.querySelectorAll('.partner-logos img');

  // Define arrays of image paths for light and dark themes
  const lightThemePartnerLogos = [
    'assets/images/Partners Card.png',
    'assets/images/Partners Card-2.png',
    'assets/images/Partners Card-3.png',
    'assets/images/Partners Card-4.png',
  ];

  const darkThemePartnerLogos = [
    'assets/images/Partners Card-dark-theme.png',
    'assets/images/Partners Card-2-dark-theme.png',
    'assets/images/Partners Card-3-dark-theme.png',
    'assets/images/Partners Card-4-dark-theme.png',
  ];

  themeToggleCheckbox.addEventListener('change', function() {
      const html = document.querySelector('html');
      const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', theme);

      // Switch both logos based on the theme
      navbarLogoImage.src = theme === 'dark' ? darkLogo : lightLogo;
      footerLogoImage.src = theme === 'dark' ? darkLogo : lightLogo;

      // Update partner logos based on the theme
      const themeBasedPartnerLogos = theme === 'dark' ? darkThemePartnerLogos : lightThemePartnerLogos;
      partnerLogos.forEach((img, index) => {
        img.src = themeBasedPartnerLogos[index];
      });
  });

  // Set the initial state of the checkbox and logos based on the current theme
  const currentTheme = document.querySelector('html').getAttribute('data-theme');
  themeToggleCheckbox.checked = currentTheme === 'dark';
  // Ensure the correct logos are displayed on initial load
  navbarLogoImage.src = currentTheme === 'dark' ? darkLogo : lightLogo;
  footerLogoImage.src = currentTheme === 'dark' ? darkLogo : lightLogo;

  // Set initial partner logos based on the theme
  const initialPartnerLogos = currentTheme === 'dark' ? darkThemePartnerLogos : lightThemePartnerLogos;
  partnerLogos.forEach((img, index) => {
    img.src = initialPartnerLogos[index];
  });
});
