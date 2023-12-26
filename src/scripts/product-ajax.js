const app = Vue.createApp({
  data: function () {
    return {
      isShowSelect: true,
      isShowModify: false,
      findId: null,
      findName: null,
    };
  },
  methods: {
    showSelect: function () {
      this.isShowSelect = true;
      this.isShowModify = false;
      this.findId = null;
      this.findName = null;
    },
    toggleModifySection: function () {
      this.isShowModify = !this.isShowModify;
    },
    CancelModifySection: function () {
      this.isShowModify = !this.isShowModify;
    },
  },
});
app.mount("#app");
