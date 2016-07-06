class MainCtrl {
    constructor($scope, DataService) {
        $scope.options = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                duration: 500,
                stacked: true,
                showControls: false,
                x: function(d) {
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                xAxis: {
                    //axisLabel: 'Pedido',
                    showMaxMin: true,
                    staggerLabels: true,
                    tickFormat: function(d) {
                        //return d3.time.format('%x')(new Date(d))
                        return d;
                    }
                },
                tooltip: {
                    contentGenerator: (e) => {
                        let series = e.series[0];
                        if (series.value === null) {
                            return;
                        }

                        return `<div>Este día ahorraste ${series.value}</div>`;
                    }
                },
                yAxis: {
                    //axisLabel: 'Importe (euros)',
                    axisLabelDistance: -20,
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d) + '€';
                    }
                }
            }
        };

        $scope.orders = DataService.fetchOrders().data;

        $scope.showOrder = () => {
            console.log('xxx');
        }
    }
}

export default MainCtrl;
