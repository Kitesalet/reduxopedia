import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {increment,decrement, incrementMultiplier, decrementMultiplier} from "../../redux/slices/counterSlice"
import { useState } from 'react'

function Counter() {


   const [multiplier, setMultiplier] = useState(() =>{
    return {number:10}
   })

   const counter = useSelector((state) => {return state.counterStore.count})

   const dispatch = useDispatch();

   return(<div style={{borderTop : "1px solid #999", marginTop:"4px"}}>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="h2 text-center text-white my-3">Counter: {counter}</div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-6 py-4 text-center" style={{border:"1px solid #999"}}>
                <p className='h3 text-white pb-3'>Basic Counter</p>
                <button onClick={() => dispatch(increment())} className='btn btn-success px-4 mx-3'>Add</button>
                <button onClick={() => dispatch(decrement())} className='btn btn-danger mx-3'>Remove</button>
            </div>
        </div>
        <div className="row justify-content-center py-3">
            <div className="col-8 py-4 text-center" style={{border:"1px solid #999"}}>
            <p className='h3 text-white pb-3'>Multiply Counter</p>
                <div className="row">
                    <div className="col-4 p-1">
                        <input type="text" placeholder='multiplier'
                        className='form-control' 
                        value={multiplier.number}
                        onChange={(e) => setMultiplier(p => {
                            return{
                                ...p,
                                number:e.target.value
                            }
                        })}
                        />
                    </div>
                    <div className="col-4 p-1">
                    <button onClick={() => dispatch(incrementMultiplier(multiplier.number))} className='btn btn-success px-4 form-control'>Add</button>
                    </div>
                    <div className="col-4 p-1">
                    <button onClick={() => dispatch(decrementMultiplier(multiplier.number))} className='btn btn-danger form-control'>Remove</button>
                    </div>
                </div>
               
            </div>
        </div>
        </div>
   </div>)
}

export default Counter