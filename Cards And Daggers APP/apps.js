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
      function dualityDice()
    {
      const Hope = Math.floor(Math.random() * 12) + 1;
      const Fear = Math.floor(Math.random() * 12) + 1;
      const resultElementDD = document.getElementById(`dualityDiceResult`);

      resultElementDD.innerText = `Hope: ${Hope}, Fear: ${Fear}!`;
      
      if (Fear > Hope) {
  
        resultElementDD.style.color = "#C51200"; //red
  
      } 
      else if (Hope > Fear){
  
        resultElementDD.style.color = "#D19900"; //gold
  
      }
      else {
  
        resultElementDD.style.color = "#1b8e2d"; //green
      
      }
    }
    </script>
</body>

</html>
  