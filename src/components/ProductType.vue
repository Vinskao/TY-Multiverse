<template>
  <div id="app"></div>
</template>

<script src="./script.js">
import "vue@3";
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      param: {},
      errors: {},
      deleteData: undefined,
      insertData: undefined,
      updateData: undefined,
      prodaction: "",
    };
  },
  methods: {
    clearForm() {
      // 清空表单逻辑
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
          inputs[i].value = "";
        }
      }
    },
    fetchData() {
      // 使用 Fetch API 发送请求获取数据
      fetch("http://192.168.74.54:8080/pages/ajax/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // 如果有需要，您可以在这里添加要发送到后端的数据
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.success);
          if (data.success === false) {
            console.log(data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
});

app.mount("#app");
</script>
