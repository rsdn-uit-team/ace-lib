export const addGlobalThemeStyles = (id, ...styles) => {
  const styleTag = document.createElement('style');
  styleTag.id = id;
  styleTag.textContent = styles
    .map((style) => style.toString())
    .join('\n')
    .replace(':host', 'html');

  document.head.insertAdjacentElement('afterbegin', styleTag);
};
