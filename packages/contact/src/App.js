class VanillaApplication {
  constructor(root) {
    this.root = root;
  }

  loadStylesheet() {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = 'amazon-styles';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/npm/@aws-amplify/ui@2.0.2/dist/style.css';
    link.media = 'all';
    head.appendChild(link);
  }

  render(content) {
    this.root.innerHTML = content;
  }
}

const render = (el) => {
  const vanillaApplication = new VanillaApplication(el);

  vanillaApplication.loadStylesheet();

  vanillaApplication.render(`
    <main>
      <h1 class='_heading_2qdw9_14rjr_86 _heading-variant-h1_2qdw9_14rjr_96'>Contact Page</h1>
  
      <ul>
        <li>Email: event-engine@amazon.com</li>
        <li>Phone: 512-555-1234</li>
      </ul>
  
      <button class='Button__button___vS7Mv'>Chat With Us</button>
    </main>
  `);
};

export { render };
