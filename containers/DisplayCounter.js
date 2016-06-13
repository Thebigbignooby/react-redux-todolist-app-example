// import React from 'react'
import Display from '../components/Display'
import { connect } from 'react-redux'

// let DisplayCounter = ({counter}) => {
//   return (
//     <div>
//       <Display counter={counter} />
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const DisplayCounter = connect(
  mapStateToProps,
  null
)(Display)

export default DisplayCounter
