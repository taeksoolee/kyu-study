try {
  const data = JSON.parse(decodeURIComponent(window.location.hash).replace(/^#/, ''));
  window.data = data;
} catch(err) {
  console.log(err);
}


