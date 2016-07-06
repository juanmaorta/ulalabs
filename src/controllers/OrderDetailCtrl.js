class OrderDetailCtrl {
    constructor($rootScope, DataService) {
        this.show = false;
        this.dataService = DataService;

        $rootScope.$on('displayOrderClicked', this.onClick.bind(this));
        //$rootScope.$on('displayOrderClicked', (e, orderId) => this.onClick(e, orderId));

        this.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
    }

    onClick(e, orderId) {
        console.log(e, orderId);
        this.orderId = orderId;
        //this.show = true;
        this.order = this.dataService.fetchOrder(orderId);
    }
};

export default OrderDetailCtrl;