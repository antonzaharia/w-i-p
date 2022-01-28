import { useState, useContext } from 'react'

const SendForm = function ({}) {
  const [ethAddress, setEthAddress] = useState("")
  const [amount, setAmount] = useState("0")

  const sendWip = async (event) => {
    // TODO!
  }

  return (
    <form onSubmit={sendWip}>
      <div>
        <label>Address</label>
        <input type="text" value={ethAddress} onChange={e => setEthAddress(e.target.value)} />
      </div>
      <div>
        <label>Amount of $WIP</label>
        <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>
      <button>Send</button>
    </form>
  )
}

export default SendForm;