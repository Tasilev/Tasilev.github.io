var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo'), // required
    path: 'data.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
  });