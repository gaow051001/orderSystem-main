import React from 'react';
import axios from 'axios';

class OrderTicket extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`/ordertest`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.orders
            .map(order =>
              <li key={order.cust_id}>{order.first_name}</li>
            )
        }
      </ul>
    )
  }
}


// function orderPage() {
//     return (
//         <div>
//             <div>
//                 <OrderTicket/>

//             </div>
//         </div>
//     )
// }

export default OrderTicket
