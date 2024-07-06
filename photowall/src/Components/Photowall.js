import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//anchor tag, href attribute
function PhotoWall(props) {
console.log(props);
return  <div> 
             <Link className = "addIcon" to="/AddPhoto"> </Link> 
             <div className="photoGrid" >
              <p></p>
             </div>
        </div>
}

// PhotoWall.propTypes = {
//     posts: PropTypes.array.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired
// }


 export default PhotoWall