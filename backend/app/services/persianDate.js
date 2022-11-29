const moment = require('jalali-moment');
moment.locale('fa');

exports.humanReadable = (date) => {

    return moment(date).format('')

};