import React,{Component} from 'react';

class AddPhoto extends Component{

    constructor()
    {
        super();
       this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event)
    {
         event.preventDefault();
        const imageLink=event.target.elements.link.value
         const description=event.target.elements.description.value
         const post={
            id:Number(new Date()),
            description:description,
            imagelink:imageLink
         }
         if(description && imageLink)
            {
               this.props.onAddPhoto(post)
            }
    }

    render(){
        return (<div>
                 <h1>Photowall</h1>
                  <form className="form" on onSubmit={this.handleSubmit}>
                    <input className="form input" type="text" placeholder="link" name="link"></input>
                    <input className="form input" type="text" placeholder="description" name="description"></input>
                    <button className="form button">Post</button>
                  </form>
            </div>
        )

    }
}

export default AddPhoto;