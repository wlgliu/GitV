import Particles from './particles';
import Indexbg from './indexbg';
import Foot from './foot';
import Topnav from './topnav'
import Icon from './icon'
import databox from './databox'
import nodata from './nodata'
import nouser from './nouser'
import loading from './loading'

const components = {
    Particles,
    Indexbg,
    Foot,
    Topnav,
    Icon,
    databox,
    nodata,
    nouser,
    loading
}

const install = (Vue, options = {}) => {
    if(install.installed) return;
    Object.keys(components).forEach(component => {
        Vue.component(components[component].name, components[component]);
    })
    Vue.prototype.$notice = Notification;
    install.installed = true;
}
install.installed = false;

const Vcomp = {
    ...components,
    install
}

export default Vcomp;