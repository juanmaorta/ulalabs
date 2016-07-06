import template from './lastOrdersList.html';
import controller from '../controllers/LastOrdersListCtrl';

let LastOrdersList= {
    template: template,
    controller: controller,
    bindings: {
        title: '=',
    }
};

export default LastOrdersList;