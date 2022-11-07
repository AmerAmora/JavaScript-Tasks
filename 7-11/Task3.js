function shorterInArray(array)

{
let shortest=array[0].length;
for(let i=1;i<array.length;i++)
{
  if(shortest>array[i].length)
  shortest=array[i].length;
}
document.write("the length of the shortest string is ");
document.write(shortest);
}
shorterInArray(["Amer","Ahmad","ea"]);