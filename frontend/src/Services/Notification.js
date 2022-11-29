import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Notification=withReactContent(Swal);
const fire=(config) => {
    return Notification.fire(config);
};
export default { fire };