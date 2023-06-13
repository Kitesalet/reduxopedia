import React from 'react'
import {useDispatch } from 'react-redux'
import { resetReduxOPedia } from '../../redux/actions/actions'

function ResetApp() {

  const dispatch = useDispatch()
  
  const ResetAll = () =>{
    return(
    dispatch(resetReduxOPedia)
    )
  }



  return (
    <div className='text-center'>
        <button
        onClick={() => dispatch(ResetAll())}
        className='btn btn-warning p-3 my-4'>
            Reset App
        </button>
    </div>
  )
}

export default ResetApp