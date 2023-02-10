const button = document.getElementById('btn');
const textSpace = document.getElementById('text');

button.addEventListener('click', () => {
    const textTemplate = `
    <p class="pText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          hendrerit, nisi nec aliquet rutrum, massa nisi semper lectus, ut
          tempus urna nunc et ligula. Nullam blandit tempus sodales. Vestibulum
          luctus ligula mauris, in dictum massa condimentum vel. Aliquam pretium
          maximus odio, quis volutpat diam volutpat quis. Phasellus malesuada
          mollis ante, varius egestas nisl lacinia a. Sed justo metus, eleifend
          at tempor at, facilisis maximus nulla. Mauris sollicitudin malesuada
          viverra.
        </p>
    `;
    textSpace.innerHTML += textTemplate;
});

document.addEventListener("copy", function(event){
    event.clipboardData.setData("text/plain", "No puedes pegar este texto");
    event.preventDefault();
}, false);