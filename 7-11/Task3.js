function shorterInArray(array)

{
let shortest=array[0].length;
let index=0;
for(let i=1;i<array.length;i++)
{
  if(shortest>array[i].length){
  shortest=array[i].length; index=i;}
}
document.write("the length of the shortest string is   " + shortest);
document.write(" and the element is " +array[index]);
}
shorterInArray(["Amer","Ahmad","ea"]);