 

 export function removePosts(index)  //index id of the image to be removed passed to the function
 {
      return {
        type : 'REMOVE_POST',
        index: index
      }
 }