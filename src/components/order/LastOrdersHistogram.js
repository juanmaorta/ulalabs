import template from './lastOrdersHistogram.html';
import controller from '../../controllers/LastOrdersHistogramCtrl';

let LastOrdersHistogram = {
    template: template,
    controller: controller,
    bindings: {
        customerId: '<',
        options: '<',
    }
};

export default LastOrdersHistogram;
