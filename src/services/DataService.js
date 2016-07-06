import OrderHelper from '../helpers/OrderHelper';

import dataFixture from '../fixtures/dataFixture.json';

class DataService {

    fetchOrders(customerId) {
        console.log('getting data for customer: ', customerId);
        return OrderHelper.coordsFromOrderList(dataFixture);
    }

    fetchOrder(orderId) {
        console.log('fetching data for order: ', orderId);
        let data = [
            {
                key: "Frescos",
                y: 5
            },
            {
                key: "Droguería",
                y: 2
            },
            {
                key: "Congelados",
                y: 9
            },
            {
                key: "Bebidas",
                y: 7
            },
        ];

        return data;
    }
}

export default DataService;
