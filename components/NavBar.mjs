import { html, render } from './libs/lit-html.mjs';

customElements.define('nav-bar', class MyNavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const _back = () => window.navigation.back();

    const _toggleHeart = () => {
      const clsList = document.querySelector('#heart').classList;
      if (clsList.contains('run')) {
        clsList.remove('run');
      } else {
        clsList.add('run');
      }
    }
    render(html`
      <style>
        nav {
          height: var(--navbar-height, 56px);
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg)
          }
          25% {
            transform: rotateY(90deg)
          }
          50% {
            transform: rotateY(180deg)
          }
          75% {
            transform: rotateY(270deg)
          }
          100% {
            transform: rotateY(360deg)
          }
        }

        #heart {
          display: block;
          /* animation-name: spin; */
          animation-duration: 2s;
          animation-delay: 0s;
          animation-iteration-count: infinite;
        }

        #heart.run {
          animation-name: spin;
        }
        

      </style>

      <nav class="navbar navbar-expand-lg bg-primary text-light">
        <div class="container-fluid">
          ${
            !this._curPath.replace(siteContext, '').split('/').join('/')
              ? html`
                <div class="btn text-primary">
                  <i class="bi bi-backspace"></i>
                </div>
              `
              : html`
                <!-- <a href="${this.backUrl}" class="btn text-light">
                  <i class="bi bi-backspace d-flex align-items-center"></i>
                </a> -->
                <button class="btn text-light" @click="${_back}">
                  <i class="bi bi-backspace d-flex align-items-center"></i>
                </button>
              `
          }
          <a class="navbar-brand text-light me-0">
            ${document.title}
          </a>

          <button class="btn text-light" @click="${_toggleHeart}">
            <!-- <i class="bi bi-three-dots-vertical d-flex align-items-center"></i> -->
            <span id="heart">❤️</span>
          </button>

        </div>
      </nav>
    `, this); 
  }

  
  _curPath = window.location.pathname
    .replace(/index\.html$/g, '')
    .replace(/\/$/g, '')

  get curPathList() {
    return this._curPath.split('/') 
  }

  get curPath() {
    return this.curPathList.join('/')
  }

  get backPathList() {
    return this.curPathList.slice(0, this.curPathList.length-1);
  }

  get backUrl() {
    const path = this.backPathList.join('/');
    if (path.startsWith('/')) {
      return path;
    } else {
      return '/' + path;
    }
  }
});