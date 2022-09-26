//some every exercises

function hasOddNumber(arr){
   return arr.some(function(value){
    return value % 2 !== 0;
  });
}

function hasAZero(num){
    let number= num.toString().split('');
    return number.some(function(arr){
        return arr==='0'
    })}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val%2 !==0; })}

function hasNoDuplicates(arr){
            return arr.every(function(val){
              return arr.indexOf(val) === arr.lastIndexOf(val);
            });
          }

function hasCertainKey(arr, key){
            return arr.every(function(val){
              return key in val
            })
          }

function hasCertainValue(arr, key, searchValue){
            return arr.every(function(val){
              return val[key] === searchValue;
            })
          }
          
function findUserByUsername(arr,val){
    return arr.find(function(key){
    return key.val === val;
    })}

    function removeUser(usersArray, username) {
        let foundIndex = usersArray.findIndex(function(user){
          return user.username === username;
        })
        if(foundIndex === -1) return;
      
        return usersArray.splice(foundIndex,1)[0];
      }
      