import React from "react";

class Moviecard extends React.Component{
    // addStars=() => {

        // this.state.stars += 0.5;
        // console.log("this.state.stars: ", this.state.stars);

        //setState() is a function which update the current state
        // and re-rendering the component,we don't need to render root.creteElement
        
        //form1
        // this.setState({
        //     stars: this.state.stars +0.5
        // });

        // form2
        // this.setState((previousState)=>{
        //     if(previousState.stars < 5){
        //         return{
        //             stars: previousState.stars +0.5
        //          }
        //     }
            
        // })
       
    //  }

        //  subStars=()=>{
        //     this.setState((previousState)=>{
        //         if(previousState.stars > 0){
        //             return{
        //                 stars: previousState.stars -0.5
        //             }
        //         }
                
        //     })
        //  }

        // handleFav = () =>{
        //   this.setState({
        //     fav: !this.state.fav
        //   })
        // }

        // handleCart = () =>{
        //     this.setState({
        //         cart: !this.state.cart
        //     })
        // }

       render(){
        const{movies,addStars,subStars,favHandler,cartHandler}= this.props;
        // const{movies:data}=this.props;
        const {title,plot,price,rating,stars,fav, cart,poster} = movies;
        // console.log("here nik",movies);
        return(
            <div className="main">
            <div className="movie-card">
               <div className="left">
                <img alt="Poster" src={poster}/>
               </div>

               <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>
                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                          <img className="star-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                          onClick={() => {subStars(movies)}} />
                          <img alt="star"  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                          <img className="star-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                          onClick={() => {addStars(movies)}} />
                           {/* onClick={this.addStars.bind(this)} /> */}
                          <span className="starCount">{stars}</span>
                        
                    </div>

                    {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Unfavourite</button>
                    :  <button className="favourite-btn" onClick={this.handleFav}>Favourite</button> } */}
                    <button className={fav? "unfavourite-btn":"favourite-btn"} onClick = {()=>favHandler(movies)}>
                       {fav? "unfavourite-btn":"favourite"} 
                    </button>
                   
                    {cart? <button className="cart-btn" onClick = {()=>cartHandler(movies)}>Remove</button>
                    :<button className="card-btn" onClick = {()=>cartHandler(movies)}>Add to cart</button>}
                    

                </div>
               </div>
            </div>
             
            </div>
        )
    }
}
export default Moviecard;