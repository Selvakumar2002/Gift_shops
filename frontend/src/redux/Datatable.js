import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import theme
import 'primereact/resources/primereact.min.css';           // Import PrimeReact styles
import 'primeicons/primeicons.css';                         // Import PrimeIcons

const Datatable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Orders</h1>
      <div className="card">
        <DataTable value={orders} tableStyle={{ minWidth: '50rem' }} responsiveLayout="scroll">
          <Column field="_id" header="Order ID"></Column>
          <Column 
            header="Items" 
            body={(rowData) => (
              <div>
                {rowData.cartitems.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <img 
                      src={item.Img} 
                      alt={item.Title} 
                      className="img-thumbnail" 
                      style={{ width: '60px', height: '60px', marginRight: '10px' }} 
                    />
                    <div>
                      <strong>{item.Title}</strong> - Quantity: {item.quantity} - Price: ${item.Price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          ></Column>
          <Column field="totalPrice" header="Total Price" body={(rowData) => `$${rowData.totalPrice.toFixed(2)}`}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Datatable;
