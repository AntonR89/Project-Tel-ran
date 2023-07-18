export const sendPhoneNumber = async (phoneNumber) => {
    try {
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  export const sendOrder = async (phoneNumber, cart) => {
    try {
      const order = cart.map(item => ({
        ...item,
        total: item.price * item.count,
      }));
  
      const totalOrderCost = order.reduce((sum, item) => sum + item.total, 0);
  
      const response = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber, order, totalOrderCost }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  