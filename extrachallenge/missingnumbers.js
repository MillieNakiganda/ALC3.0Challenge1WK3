
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

module.exports = missingnumber;

    


