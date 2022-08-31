import { createApp } from 'vue'
import App from './App.vue'
// import './assets/resize'
import './assets/styles/main.css'
// import './assets/global.less';

/**
 * .mount()方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
 */
createApp(App).mount('#app')
