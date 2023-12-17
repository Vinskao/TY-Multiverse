<template>
  <div id="app">
    <button @click="fetchData">Fetch Data</button>
    <div v-if="errors && Object.keys(errors).length > 0">
      <h2>Error Messages:</h2>
      <ul>
        <li v-for="(message, field) in errors" :key="field">
          {{ field }}: {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const errors = ref({});

const clearForm = () => {
  // 清空表單逻辑
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      inputs[i].value = "";
    }
  }
};

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8080/pages/ajax/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // 如果有需要，您可以在这里添加要发送到后端的数据
      }),
    });

    const data = await response.json();

    if (data.errors) {
      // 如果後端返回錯誤，處理錯誤消息
      errors.value = data.errors;
    } else {
      // 如果成功，處理返回的數據
      console.log(data);
      // 在這裡處理接收到的數據，例如更新本地數據狀態
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

onMounted(() => {
  // 這裡的程式碼在客戶端渲染後執行
  clearForm();
});
</script>
