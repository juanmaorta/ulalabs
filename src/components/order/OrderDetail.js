import template from './orderDetail.html';
import controller from '../../controllers/OrderDetailCtrl';

let OrderDetail = {
    template: template,
    controller: controller,
    bindings: {
        orderId: '<',
    }
};

export default OrderDetail;
