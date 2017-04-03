import React from 'react'
import FaCheck from 'react-icons/lib/fa/check'
const Success = props => {
  return <div className={props.visible}>
    <FaCheck size={300} />
  </div>
}
export default Success
Success.propTypes = {
  visible: React.PropTypes.string
}
