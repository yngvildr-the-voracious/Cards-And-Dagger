if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
          .then(registration => {
              console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
              console.error('Service Worker registration failed:', error);
          });
  });
}

function rollDice(numSides) {
    const randomNumber = Math.floor(Math.random() * numSides) + 1;
  
    const resultElement = document.getElementById(`resultD${numSides}`);
  
    resultElement.innerText = `${randomNumber}!`;
  
    if (randomNumber === numSides) {
      resultElement.style.color = "#1b8e2d";
    } else if (randomNumber === 1) {
      resultElement.style.color = "#C51200"; //Red
    } else {
      resultElement.style.color = "#000000";
    }
  }
  