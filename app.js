let array = [
             '00', '01', '02', '03', 
             '10', '11', '12', '13', 
             '20', '21', '22', '23', 
             '30', '31', '32', '33'
            ];
let arr = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3},
           {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3},
           {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3},
           {x: 3, y: 0}, {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3},]
           
  function getLeft(x){
   let result
   if(x[1] > 0){
      result = x[0].toString() + (x[1] - 1).toString();
     }
   
   return result; 
 }
 function getRight(x){
   let result
   if(x[1] < 3){
      result = x[0].toString() + (+x[1] + 1).toString();
   } 
   
   return result; 
 }
 function getUp(x){
   let result
   if(x[0] > 0){
      result = (+x[0] - 1).toString() + x[1].toString();
   }
   
   return result; 
 }
 function getDown(x){
   let result;
   if(x[0] < 3){
      result = (+x[0] + 1).toString() + x[1].toString();
   }
   
   return result; 
 }


$(document).ready(function(){
   $('td').css('width', '75px');
   $('td').css('height', '75px');
   $('td').css('background-color', 'wheat');
   $('td').css('color', 'balck');
   let ide;
   let x;
   let y;
   for(let i = 1; i <= 15; i++){
      let random = Math.floor(Math.random() * arr.length);
      x = arr[random].x.toString()
      y = arr[random].y.toString()
      ide = x + y;
      let index = array.indexOf(ide)

      $('td#' + array[index]).text(i)
      arr.splice(random, 1);
   }
   $('td').on('click', function(){
      let ident = this.id
      // debugger
      if($('td#' + getLeft(ident)).text() == '' && ident[1] > 0){
         $('td#' + getLeft(ident)).text($('td#' + ident).text());
         $('td#' + ident).text('');
      }
      else if($('td#' + getRight(ident)).text() == '' && ident[1] < 3){
         $('td#' + getRight(ident)).text($('td#' + ident).text());
         $('td#' + ident).text('');
      }
      else if($('td#' + getUp(ident)).text() == '' && ident[0] > 0){
         $('td#' + getUp(ident)).text($('td#' + ident).text());
         $('td#' + ident).text('');
      }
      else if($('td#' + getDown(ident)).text() == '' && ident[0] < 3){
         $('td#' + getDown(ident)).text($('td#' + ident).text());
         $('td#' + ident).text('');
      }
      

   });
});
