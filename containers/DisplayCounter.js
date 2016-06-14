import Display from '../components/Display'
import { connect } from 'react-redux'

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
