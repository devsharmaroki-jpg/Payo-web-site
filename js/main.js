document.getElementById('add-money-btn').addEventListener('click', function (event) {

   event.preventDefault();
   const amountBox = document.getElementById('amount-box').value;
   const convertedAmount = parseFloat(amountBox);
   const addPin = document.getElementById('pin').value;
   const convertedPin = parseInt(addPin);
   const newAmount = document.getElementById('all-amount').innerText;
   const convertedAllAmount = parseFloat(newAmount);

   if (convertedPin == 12345) {
      if (convertedAmount >= 0) {
         const sum = (convertedAllAmount + convertedAmount);
         document.getElementById('all-amount').innerText = sum;
      }
      else {
         alert('type Your amount')
      }
   }
   else {
      alert('wrong PIN')
   }

   document.getElementById('amount-box').value = '';




})
// document.getElementById('amount-box').addEventListener('')