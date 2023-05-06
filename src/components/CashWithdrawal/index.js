// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDecrement = value => {
    const {balance} = this.state
    if (balance >= value) {
      this.setState(prevState => ({
        balance: prevState.balance - value,
      }))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="container2">
          <div className="div1">
            <div className="letter">S</div>
            <h1 className="h1">Shiva Krishna</h1>
          </div>

          <div className="div2">
            <p className="p1">Your Balance</p>
            <div>
              <p className="h1">{balance}</p>
              <p className="p1">In Rupees</p>
            </div>
          </div>

          <div className="div3">
            <p className="h1">Withdraw</p>
            <p className="p1">CHOOSE SUM (IN RUPEES)</p>
            <ul className="div4">
              {denominationsList.map(each => (
                <DenominationItem
                  value={each.value}
                  key={each.id}
                  onDecrement={this.onDecrement}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
