class LastOrdersListCtrl {
    constructor(DataService) {
        this.orders = DataService.fetchOrders().data;

    }

    showOrder(id) {
        console.log(id);
    }
};

export default LastOrdersListCtrl;
