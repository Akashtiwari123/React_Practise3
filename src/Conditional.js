import React from "react"

function Conditional(props){
  if(props.isLoading===true){
    return(
      <h4>Loading...</h4>
    )
  }
  else{
return(
  <h4>
   Session TimeOut
  </h4>
)
}
}
export default Conditional