<template>
  <div id="app">
    <!-- Your template content here -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const param = ref({});
const errors = ref({});
const deleteData = ref(undefined);
const insertData = ref(undefined);
const updateData = ref(undefined);
const prodaction = ref("");

const clearForm = () => {
  // 清空表单逻辑
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      inputs[i].value = "";
    }
  }
};

const fetchData = () => {
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
};

onMounted(() => {
  // 這裡的程式碼在客戶端渲染後執行
  clearForm();
});

export default {
  clearForm,
  fetchData,
};
</script>
