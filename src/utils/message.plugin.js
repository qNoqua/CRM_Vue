export default {
  /*global M*/
  install: (app,) => {
    app.config.globalProperties.$message = (html) => {
      M.toast({ html});
    };
    app.config.globalProperties.$error = (html) => {
      M.toast({ html: `[Ошибка]: ${html}`});
    };
    // console.log(options, app.config.globalProperties);
  },
};
