

let cnt = 0;
function loadscript(url, isModule=false) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = url;
    script.type = isModule ? "module" : "text/javascript";
    script.async = false;

    script.onload = function() {
      resolve();
    };
    script.onerror = function() {
      reject();
    };

    document.body.appendChild(script);
  }) ;
}

window.addEventListener('load', () => {
  Promise.all([
    loadscript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js'),
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'),
    loadscript('https://code.jquery.com/jquery-3.7.1.min.js'),
    // integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
    // crossorigin="anonymous'
  ]).then(() => {
    loadscript('/components/index.mjs', true);
    loadscript('./index.mjs', true).then(() => {
      loadscript('https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js');
    });
  }).catch(() => {
    console.log('oops');
  })
});


const faviconStart = 0;
const faviconEnd = 27;
let curFavicon = 0;
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/x-icon';
faviconLink.setAttribute('href', `/assets/favicon/icons8-heart-${curFavicon}.png`);
document.head.appendChild(faviconLink);
// function changeFavicon() {
//   if (curFavicon >= faviconEnd) {
//     curFavicon = faviconStart;
//   } else {
//     curFavicon++;
//   }
//   faviconLink.setAttribute('href', `/assets/favicon/icons8-heart-${curFavicon}.png`);
// }

// setInterval(function() {
//   changeFavicon();
// }, 10);
