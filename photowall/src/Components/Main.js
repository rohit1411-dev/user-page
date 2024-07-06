import Title from './Title';
import PhotoWall from './Photowall';
import React,{Component} from 'react';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import Photo from './Photo';


class Main extends Component{

constructor()
{
    super();
    
         //   screen: 'photos'
     
    
      //  this.removePhoto=this.removePhoto.bind(this)
      //  this.navigate=this.navigate.bind(this)
    
}

// navigate()
//{
    //this.setState({
      // screen: 'addPhoto'
    //})


// addPhoto(postSubmitted)
// {
//     this.setState(state => ({
//         posts: state.posts.concat(postSubmitted)
//     }))
// }
// removePhoto(postRemoved)
// {
//     console.log(postRemoved.description);
//     this.setState((state)=>({
//         posts: state.posts.filter(post=>post !== postRemoved)
//     }))
// }


    render()
    {
      
       return(
       <>
       
               <Route exact path="/" render={() => (   
            <div>
            <Title title={'Photowall'}/>
            <PhotoWall posts={this.props.posts}/>
              {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
                       
            </div>
        
               )}/>
           {/* <Route path="/AddPhoto" render={({history}) => (
                 <AddPhoto onAddPhoto={(addedPosts)=>{
                    this.addPhoto(addedPosts)
                    history.push('/')
                 }}/> */}
            
                {/* )}/>     */}
        
        </>);

    }
       
  
}
  export default Main;