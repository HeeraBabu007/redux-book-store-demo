import React from 'react'
import {connect} from 'react-redux';
import {buyBook} from '../redux/index';

 function bookContainer(props){
    return(
        <div>
            <h1>Number of Book-{props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    )
}

const mapStateProps=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(){
            dispatch(buyBook())
        }
    }
}
export default connect(mapStateProps,mapDispatchtoProps)(bookContainer);