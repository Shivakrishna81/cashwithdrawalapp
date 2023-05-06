// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, onDecrement} = props

  const onDecrementValue = () => {
    onDecrement(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onDecrementValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
