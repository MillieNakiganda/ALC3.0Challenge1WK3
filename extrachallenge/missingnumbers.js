
let arrays = [];
let missingnumbers = new Array();


function missingnumber(anArray)
{


     for(let i = Math.min(...anArray); i < (Math.max(...anArray) + 1); i++)

        {
            arrays.push(i);
        }
          
     for( let p = 0; p < (Math.max(...anArray)); p++)

        {
           if(anArray.indexOf(arrays[p]) == -1)
              {
                missingnumbers.push(arrays[p]);
              }
                           
        }

        return missingnumbers;
}
console.log(missingnumber([ 1, 2, 3, 5, 6, 7,9]));
module.exports = missingnumber;

    


