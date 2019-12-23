const sizeOptions = {
  xs: '575.98px', // Extra small devices (portrait phones, less than 576px)
  sm: '767.98px', // Small devices (landscape phones, less than 768px)
  md: '991.98px', // Medium devices (tablets, less than 992px)
  lg: '1199.98px', // Large devices (desktops, less than 1200px),
  xl: '1600px'
};

function down(size) {
  return `@media (max-width: ${sizeOptions[size]})`;
}

export { down };
