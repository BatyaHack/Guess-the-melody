export default function getElementFromTemplate(html) {
  // для того что бы не использовать лишний div
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}
