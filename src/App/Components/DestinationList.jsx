import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { destinationClicked } from '../../redux/slices/destinationSlice'

function DestinationList() {

  const dispatch = useDispatch()

  const destinationList = useSelector((state) =>{
    return state.destinationStore.destinations
  })
  return (
    destinationList.map((destination,index) =>{
      return(
      <div className='text-center text-white row'
      style={{borderBottom:"1px solid #333", borderTop:"1px solid #333", paddingTop:"5px"}}
      key={index}>
        <div className='col-8 col-md-3 offset-md-4 pt-2'>
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <button
          onClick={()=> dispatch(destinationClicked(destination))} 
          className='btn btn-success form-control m-1'>Details</button>
        </div>
      </div>
      )
    })
  )
}

export default DestinationList