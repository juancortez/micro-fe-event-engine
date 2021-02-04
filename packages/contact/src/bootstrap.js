import { render } from './App';

const mount = (el) => {
  render(el);

  return {
    onParentNavigate() {},
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_contact-root');

  if (el) {
    mount(el);
  }
}

export { mount };
