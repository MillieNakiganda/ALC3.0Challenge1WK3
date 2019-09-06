let arrays=[];
let evensarray = [];
let oddsarray = [];
let lettersarray = [];
let result = new Object();

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
function arraySort(anArray) 
{
    // Your code here
    if( typeof(anArray) === "number")
    {
        return "invalid input";
    }
    else if(typeof(anArray) === "string")
    {
      return "invalid input";
    }
    else
    {
        for(let i = 0;i<anArray.length;i++)
           {
             if(typeof(anArray[i]) === "number" )
               {
                 if(anArray[i] % 2 === 0)
                  {
                    evensarray.push(anArray[i]);
                  }
                else
                  {
                    oddsarray.push(anArray[i]);
                  }
                }
             else if(typeof(anArray[i]) === "string")
               {
                  lettersarray.push(anArray[i])
               }
           }   
    }
    evensarray.sort(compareNumeric);
    oddsarray.sort(compareNumeric);
    lettersarray.sort();
    result = { evens : evensarray, odds: oddsarray, chars : lettersarray };
    
    return { evens : evensarray, odds: oddsarray, chars : lettersarray };
    
}






module.exports = arraySort;