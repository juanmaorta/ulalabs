import dataFixture from '../fixtures/dataFixture.json';

class DataService {

    fetchOrders() {
        return dataFixture;
    }
}

export default DataService;
