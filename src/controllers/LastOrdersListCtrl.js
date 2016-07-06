class LastOrdersListCtrl {
    constructor($rootScope, DataService) {
        this.$rootScope = $rootScope;
        this.orders = DataService.fetchOrders(this.customerId).data;
    }

    showOrder(id) {
        this.$rootScope.$broadcast('displayOrderClicked', id);

    }
};

export default LastOrdersListCtrl;
