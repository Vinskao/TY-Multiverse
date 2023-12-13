<!-- <div id="adWall"></div> -->
          <!-- 生成五張圖 -->
          <!-- <button id="nextButton">Next</button> -->

          <script>
            // document.addEventListener("DOMContentLoaded", () => {
            //   const adWall = document.getElementById("adWall");
            //   const nextButton = document.getElementById("nextButton");
            //   // 設定生成張數
            //   const numVisibleAds = 5;
            //   // 設定當前左邊第一張圖index
            //   let currentImageIndex = 0;
            //   //確認是否正在loading圖片
            //   let isLoading = false;

            //   const imageList = [
            //     "/assets/poker/0.jpg",
            //     "/assets/poker/1.jpg",
            //     "/assets/poker/2.jpg",
            //     "/assets/poker/3.jpg",
            //     "/assets/poker/4.jpg",
            //     "/assets/poker/5.jpg",
            //     "/assets/poker/6.jpg",
            //     "/assets/poker/7.jpg",
            //     "/assets/poker/8.jpg",
            //     "/assets/poker/9.jpg",
            //     "/assets/poker/10.jpg",
            //     "/assets/poker/11.jpg",
            //     "/assets/poker/12.jpg",
            //     "/assets/poker/13.jpg",
            //     "/assets/poker/14.jpg",
            //     "/assets/poker/15.jpg",
            //     "/assets/poker/16.jpg",
            //     "/assets/poker/17.jpg",
            //     "/assets/poker/18.jpg",
            //     "/assets/poker/19.jpg",
            //     "/assets/poker/20.jpg",
            //   ];

            //   function createAdDiv(imageURL, linkURL, isClickable) {
            //     const adDiv = document.createElement("div");
            //     adDiv.className = "ad";
            //     const adLink = document.createElement("a");
            //     if (isClickable) {
            //       adLink.href = linkURL;
            //     }
            //     const adImage = document.createElement("img");
            //     adImage.src = imageURL;
            //     adImage.width = 200;
            //     adLink.appendChild(adImage);
            //     adDiv.appendChild(adLink);
            //     return adDiv;
            //   }

            //   function loadAds() {
            //     adWall.innerHTML = "";
            //     // 遍歷要顯示的廣告數量（numVisibleAds）
            //     for (
            //       let i = currentImageIndex;
            //       i < currentImageIndex + numVisibleAds;
            //       i++
            //     ) {
            //       // 計算要顯示的圖片索引，並確保循環
            //       const imageURL = imageList[i % imageList.length]; //i 除以 imageList.length 的餘數就是 i 本身。
            //       const linkURL = `link${i + 1}.html`;
            //       const isClickable = i === 2;
            //       const adDiv = createAdDiv(imageURL, linkURL, isClickable);
            //       adWall.appendChild(adDiv);
            //     }
            //     // 將 currentImageIndex 指向下一張圖片，進行循環
            //     currentImageIndex = (currentImageIndex + 1) % imageList.length;
            //     //使用 i % imageList.length 可以確保 i 的值在每次循環中都受限於圖片數組的索引範圍，並在達到 imageList.length 時從 0 開始

            //     //結束loading圖片
            //     isLoading = false;
            //   }

            //   function slideRight() {
            //     //正在loading圖片就跳出函數
            //     if (isLoading) {
            //       return;
            //     }
            //     // isLoading = true;
            //     loadAds();
            //   }

            //   nextButton.addEventListener("click", slideRight);
            // });
          </script>
