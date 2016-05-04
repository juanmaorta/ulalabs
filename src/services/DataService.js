import OrderHelper from '../helpers/OrderHelper';

import dataFixture from '../fixtures/dataFixture.json';

class DataService {

    fetchOrders() {
        return OrderHelper.coordsFromOrderList(dataFixture);
    }
}

export default DataService;
