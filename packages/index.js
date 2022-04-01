/*
 * @Author: your name
 * @Date: 2022-03-30 15:29:42
 * @LastEditTime: 2022-03-31 15:24:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /test/index.js
 */
import fx404 from "./pages/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

const components = [
    fx404
]

const install = function (Vue) {
    if (install.installed) return
    components.map(item => {
        console.log(item);
        Vue.component(item.name, item)
    })
    Vue.use(ElementUI, "ElementUI");
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    fx404,
    isUseTheme: true
};