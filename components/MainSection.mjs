import {html, render, unsafeHTML} from './libs/lit-html.mjs';

customElements.define('main-section', class MyNavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = this.innerHTML;
    this.innerHTML = '';

    render(html`
      <style>
        main {
          min-height: calc(100vh - var(--navbar-height, 56px));
        }
        section {
          min-height: calc(100vh - var(--navbar-height, 56px));
        }
      </style>
      <main>
        <section class="p-3">
          ${unsafeHTML(content)}
        </section>
      </main>
    `, this); 
  }
});