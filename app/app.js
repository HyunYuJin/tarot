import Vue from 'nativescript-vue';

import Home from './components/Home';

import { ModalStack, overrideModalViewMethod, VueWindowedModal } from './nativescript-windowed-modal';

overrideModalViewMethod();

Vue.registerElement('ModalStack', () => ModalStack);

Vue.use(VueWindowedModal);

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(Home)])

}).$start();