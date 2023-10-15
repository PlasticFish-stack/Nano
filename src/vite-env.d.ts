/// <reference types="vite/client" />
declare module '*.vue'{
    import { Component } from "vue";
    const component: Component;
    export default component
};
declare module '*vue-router';
declare module '@vitejs/plugin-vue'