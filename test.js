function getNumber (num) {
   var stack = [];
   var oldNumber = 0;
   var newNumber = 1;
   while (num-- > 1) {
      console.log('again-newNumber',newNumber)
      var remainder = 0;           //余数
      var quotient = 0;            //商
      var prev = 0;                //上次的余数
      var count = 0;
      while (newNumber > 0) {
         remainder = newNumber % 10;
         if (prev == 0) {
            prev = remainder;
            count = 1;
         } else {
            if (prev == remainder) {
               count ++;
            } else {
               stack.unshift(count *10 + prev);
               prev = remainder;
               count = 1;
            }
         }
         newNumber = Math.floor(newNumber / 10);
         if (newNumber == 0) {
            stack.unshift(count *10 + prev);
         }
         console.log('newNumber', newNumber);
         console.log(stack)

      }
      while (stack.length > 0) {
         var popNumber = stack.shift();
         console.log('popNumber',popNumber)
         oldNumber = oldNumber * 100 + popNumber;
      }
      newNumber = oldNumber;
      oldNumber = 0;
   }
   console.log("res-newNumber",newNumber)
}


getNumber(5);