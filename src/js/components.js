import HorDialog from './Dialog/HorDialog.vue';
import HorDialogMethod from './Dialog/HorDialogMethod';

const Components = {
    HorDialog,
};

const install = function(Vue) {
    for(const i in Components) {
        Vue.component(i, Components[i])
    }

    Vue.prototype.$horizons = {
        dialog: HorDialogMethod
    };
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

Components.install = install;

export default Components;