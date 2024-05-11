export function transformName(name, textToRemove) {
  const regex = new RegExp(textToRemove, 'gi');
  return name.replace(/.png/gi, '.png').replace(regex, '');
}
