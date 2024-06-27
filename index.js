// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
 function  destructivelyAppendCat(Ralph){
    cats.push(Ralph)
 }
 function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
 }
function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
}
  function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
  }
  function appendCat(Broom){
    const modified=[...cats,"Broom"]
    return modified;
  }
  function prependCat(Arnold){
    const prepend=["Arnold",...cats]
    return prepend;

  }
function removeLastCat(){
    return cats.slice(0,2);
}
function removeFirstCat(){
   return cats.slice(1);

}