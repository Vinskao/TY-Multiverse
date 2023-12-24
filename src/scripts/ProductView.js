import Swal from "https://www.unpkg.com/sweetalert2@11.10.1/dist/sweetalert2.all.min.js";
import axios from "https://www.unpkg.com/axios@1.6.2/dist/axios.min.js";

// Function to handle the common loading and closing logic
function handleLoading(action) {
  Swal.fire({
    text: "Loading.......",
    allowOutsideClick: false,
    showConfirmButton: false,
  });

  action.finally(() => {
    setTimeout(() => {
      Swal.close();
    }, 500);
  });
}

export function find() {
  console.log(3);
  let request = {
    start: 0,
    rows: 5,
  };

  handleLoading(
    axios
      .post("http://192.168.1.110:8080/pages/ajax/products/find", request)
      .then(function (response) {
        console.log("response", response);
        console.log("count", response.data.count);
        console.log("list", response.data.list);
        if (response.data.list) {
          for (let i = 0; i < response.data.list.length; i++) {
            console.log(i, response.data.list[i]);
          }
        }
      })
      .catch(function (error) {})
  );
}

export function remove() {
  Swal.fire({
    icon: "question",
    text: "確定要刪除嗎？",
    allowOutsideClick: false,
    confirmButtonText: "確定",
    showCancelButton: true,
    cancelButtonText: "取消",
  }).then(function (result) {
    if (result.isConfirmed) {
      let request = {
        // start: 0,
        // rows: 5,
      };
      handleLoading(
        axios
          .delete("http://192.168.1.110:8080/pages/ajax/products/1002", request)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              text: response.data.message,
              confirmButtonText: "確定",
            });
          })
          .catch(function (error) {
            console.log("error", error);
            Swal.fire({
              icon: "error",
              text: "查詢錯誤：" + error.message,
              confirmButtonText: "確定",
            });
          })
      );
    } else {
      Swal.fire({
        icon: "error",
        text: "已取消刪除",
        confirmButtonText: "確定",
      });
    }
  });
}

export function modify() {
  Swal.fire({
    text: "Loading.......",
    allowOutsideClick: false,
    showConfirmButton: false,
  });

  let request = {
    id: 1003,
    name: "this is another demo",
    price: 6.78,
    make: "2021-2-3",
    expire: 90,
  };

  handleLoading(
    axios
      .put("http://192.168.1.110:8080/pages/ajax/products/1003", request)
      .then(function (response) {
        console.log("response", response);
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonText: "確定",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: response.data.message,
            confirmButtonText: "確定",
          });
        }
      })
      .catch(function (error) {
        console.log("error", error);
        Swal.fire({
          icon: "error",
          text: "查詢錯誤：" + error.message,
          confirmButtonText: "確定",
        });
      })
  );
}

export function create() {
  Swal.fire({
    text: "Loading.......",
    allowOutsideClick: false,
    showConfirmButton: false,
  });

  let request = {
    id: 1003,
    name: "this is a demo",
    price: 12.34,
    make: "2023-12-18",
    expire: 56,
  };
  handleLoading(
    axios
      .post("http://192.168.1.110:8080/pages/ajax/products", request)
      .then(function (response) {
        console.log("response", response);
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonText: "確定",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: response.data.message,
            confirmButtonText: "確定",
          });
        }
      })
      .catch(function (error) {
        console.log("error", error);
        Swal.fire({
          icon: "error",
          text: "查詢錯誤：" + error.message,
          confirmButtonText: "確定",
        });
      })
  );
}

export function findById() {
  Swal.fire({
    text: "Loading.......",
    allowOutsideClick: false,
    showConfirmButton: false,
  });

  axios
    .get("http://192.168.1.110:8080/pages/ajax/products/2")
    .then(function (response) {
      console.log("response", response);
      if (response.data.list) {
        console.log("id", response.data.list[0].id);
        console.log("name", response.data.list[0].name);
        console.log("price", response.data.list[0].price);
        console.log("make", response.data.list[0].make);
        console.log("expire", response.data.list[0].expire);
      }

      setTimeout(function () {
        Swal.close();
      }, 500);
    })
    .catch(function (error) {
      console.log("error1", error);
      Swal.fire({
        icon: "error",
        text: "查詢錯誤：" + error.message,
        confirmButtonText: "確定",
      });
    });
}
