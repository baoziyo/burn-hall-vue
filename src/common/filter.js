export const filterHtml = (text) => {
  return text.replace(/<[^>]*>/g, '');
}
