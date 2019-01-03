# vue-web-components

This project demonstrates the usage within a Vue.js app of web components that were built using [clarity-webcomponent-starter](https://github.com/vigie/clarity-webcomponent-starter).

The following web-components are installed and displayed within the `HelloWorld` Vue component.

* [`vmw-datagrid`](https://www.npmjs.com/package/@mcritch/clarity-webcomponent-starter)
* [`vmw-datepicker`](https://www.npmjs.com/package/@mcritch/clarity-date-picker-web-component)

In particular, you can see the `vmw-datagrid` web component API interacting with the Vue.js data binding and event mechanism.

This project demonstates the following things:

* Multiple web components built with Clarity and Angular can be loaded into a single app with no runtime errors.
* Web components can be easily incorporated into existing apps via npm modules.
* The hosting app can use any tech stack - it does not need to be Angular based
* The web components API can interoperate with any proprietary web framework API.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Note: production build and deployment not yet tested.