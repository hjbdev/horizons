import HorDialog from './HorDialog.vue';
import HorDialogMethod from './HorDialogMethod';

export default Vue => {
    Vue.component(HorDialog.name, HorDialog);
    if(!Vue.prototype.$horizons) {
        Vue.prototype.$horizons = {};
    }
    Vue.prototype.$horizons.dialog = HorDialogMethod;
}