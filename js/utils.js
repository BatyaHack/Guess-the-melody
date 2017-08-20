export default function getElementFromTemplate(html) {
  const template = document.createElement(`div`);
  template.innerHTML = html;
  return template;
}
