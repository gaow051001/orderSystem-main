import React from 'react';
import axios from 'axios';

class MenuItems extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`/menu_items`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.items
            .map(item =>
              <li key={item.menu_id}>{item.item_name}</li>
            )
        }
      </ul>
    )
  }
}
export default MenuItems