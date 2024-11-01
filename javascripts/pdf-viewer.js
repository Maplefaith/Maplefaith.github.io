// document.addEventListener('DOMContentLoaded', function () {
//     const url = document.getElementById('pdf-url').textContent; // 从 HTML 获取 PDF 路径
//     const pdfjsLib = window['pdfjs-dist/build/pdf'];
//     pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
  
//     const loadingTask = pdfjsLib.getDocument(url);
//     loadingTask.promise.then(pdf => {
//       console.log('PDF loaded');
  
//       const pagesToShow = 2;
//       const pdfContainer = document.getElementById('pdf-container');
//       const containerWidth = pdfContainer.clientWidth; // 获取容器宽度
  
//       for (let i = 1; i <= pagesToShow; i++) {
//         pdf.getPage(i).then(page => {
//           console.log('Page loaded: ' + i);
  
//           const scale = containerWidth / page.getViewport({ scale: 1 }).width; // 动态计算缩放比例
//           const viewport = page.getViewport({ scale: scale });
  
//           const canvas = document.createElement('canvas');
//           canvas.id = `pdf-canvas-${i}`;
//           pdfContainer.appendChild(canvas);
  
//           const context = canvas.getContext('2d');
//           canvas.height = viewport.height;
//           canvas.width = viewport.width;
  
//           const renderContext = {
//             canvasContext: context,
//             viewport: viewport
//           };
//           page.render(renderContext);
//         });
//       }
//     }, reason => {
//       console.error('Error: ' + reason);
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const url = document.getElementById('pdf-url').textContent; // 从 HTML 获取 PDF 路径
//     const pdfjsLib = window['pdfjs-dist/build/pdf'];
//     pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
  
//     const loadingTask = pdfjsLib.getDocument(url);
//     loadingTask.promise.then(pdf => {
//       console.log('PDF loaded');
  
//       const pagesToShow = 2;
//       const pdfContainer = document.getElementById('pdf-container');
//       const containerWidth = pdfContainer.clientWidth; // 获取容器宽度
  
//       for (let i = 1; i <= pagesToShow; i++) {
//         pdf.getPage(i).then(page => {
//           console.log('Page loaded: ' + i);
  
//           // 根据容器宽度计算自适应缩放比例
//           const scale = containerWidth / page.getViewport({ scale: 1 }).width; 
//           const viewport = page.getViewport({ scale: scale });
  
//           const canvas = document.createElement('canvas');
//           pdfContainer.appendChild(canvas);
  
//           // 设置 canvas 清晰度
//           const context = canvas.getContext('2d');
//           canvas.style.width = `${viewport.width}px`;
//           canvas.style.height = `${viewport.height}px`;
//           canvas.width = viewport.width * window.devicePixelRatio; // 使用设备像素比设置 canvas 宽度
//           canvas.height = viewport.height * window.devicePixelRatio; // 使用设备像素比设置 canvas 高度
//           context.scale(window.devicePixelRatio, window.devicePixelRatio); // 在渲染时缩放上下文
  
//           const renderContext = {
//             canvasContext: context,
//             viewport: viewport
//           };
//           page.render(renderContext);
//         });
//       }
//     }, reason => {
//       console.error('Error: ' + reason);
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const data = JSON.parse(document.getElementById('pdf-data').textContent); // 解析 JSON 数据
//     const url = data.url; // 获取 PDF 文件路径
//     const startPage = data.start; // 获取开始页
//     const endPage = data.end; // 获取结束页
  
//     const pdfjsLib = window['pdfjs-dist/build/pdf'];
//     pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@latest/build/pdf.worker.min.js';
  
//     const loadingTask = pdfjsLib.getDocument(url);
//     loadingTask.promise.then(pdf => {
//       console.log('PDF loaded');
  
//       const pdfContainer = document.getElementById('pdf-container');
//       const containerWidth = pdfContainer.clientWidth; // 获取容器宽度
  
//       for (let i = startPage; i <= endPage; i++) {
//         pdf.getPage(i).then(page => {
//           console.log('Page loaded: ' + i);
  
//           const scale = containerWidth / page.getViewport({ scale: 1 }).width; 
//           const viewport = page.getViewport({ scale: scale });
  
//           const canvas = document.createElement('canvas');
//           pdfContainer.appendChild(canvas);
        
//           const pixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio * 1.5 : 1.5;

//           const context = canvas.getContext('2d');
//           canvas.style.width = `${viewport.width}px`;
//           canvas.style.height = `${viewport.height}px`;
//           canvas.width = viewport.width * pixelRatio;
//           canvas.height = viewport.height * pixelRatio;
//           context.scale(pixelRatio, pixelRatio);
  
//           const renderContext = {
//             canvasContext: context,
//             viewport: viewport
//           };
//           page.render(renderContext);
//         });
//       }
//     }, reason => {
//       console.error('Error: ' + reason);
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const data = JSON.parse(document.getElementById('pdf-data').textContent); // 解析 JSON 数据
//     const url = data.url; // 获取 PDF 文件路径
//     const startPage = data.start; // 获取开始页
//     const endPage = data.end; // 获取结束页

//     const pdfjsLib = window['pdfjs-dist/build/pdf'];
//     pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

//     const loadingTask = pdfjsLib.getDocument(url);
//     loadingTask.promise.then(pdf => {
//         console.log('PDF loaded');

//         const pdfContainer = document.getElementById('pdf-container');
//         const containerWidth = pdfContainer.clientWidth; // 获取容器宽度

//         for (let i = startPage; i <= endPage; i++) {
//             pdf.getPage(i).then(page => {
//                 console.log('Page loaded: ' + i);

//                 // 提高缩放比例，提升渲染清晰度
//                 const pixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio * 1.5 : 1.5;
//                 const scale = (containerWidth / page.getViewport({ scale: 1 }).width) * pixelRatio;
//                 const viewport = page.getViewport({ scale: scale });

//                 const canvas = document.createElement('canvas');
//                 pdfContainer.appendChild(canvas);

//                 const context = canvas.getContext('2d');
//                 canvas.style.width = `${viewport.width / pixelRatio}px`; // 实际显示宽度
//                 canvas.style.height = `${viewport.height / pixelRatio}px`; // 实际显示高度
//                 canvas.width = viewport.width; // canvas实际像素宽度
//                 canvas.height = viewport.height; // canvas实际像素高度

//                 context.scale(pixelRatio, pixelRatio);

//                 const renderContext = {
//                     canvasContext: context,
//                     viewport: viewport
//                 };
//                 page.render(renderContext).promise.then(() => {
//                     console.log(`Page ${i} rendered.`);
//                 });
//             });
//         }
//     }).catch(reason => {
//         console.error('Error: ' + reason);
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const data = JSON.parse(document.getElementById('pdf-data').textContent);
    const url = data.url;
    const startPage = data.start || 1;

    // 根据设备类型调整分辨率倍率
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const customResolutionScale = isMobile ? 1.5 : (data.ResolutionScale || 2);

    const pdfjsLib = window['pdfjsLib'] || window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(pdf => {
        console.log('PDF loaded');

        // 设置结束页，如果没有指定，默认为 PDF 的最后一页
        const endPage = data.end || pdf.numPages;
        const pdfContainer = document.getElementById('pdf-container');
        const containerWidth = pdfContainer.clientWidth;

        for (let i = startPage; i <= endPage; i++) {
            pdf.getPage(i).then(page => {
                console.log('Page loaded: ' + i);

                const initialViewport = page.getViewport({ scale: 1 });
                const scale = containerWidth / initialViewport.width;
                const viewport = page.getViewport({ scale: scale });

                const canvas = document.createElement('canvas');
                pdfContainer.appendChild(canvas);

                const context = canvas.getContext('2d');

                // 使用自定义分辨率倍率
                canvas.style.width = `${viewport.width}px`;
                canvas.style.height = `${viewport.height}px`;
                canvas.width = viewport.width * window.devicePixelRatio * customResolutionScale;
                canvas.height = viewport.height * window.devicePixelRatio * customResolutionScale;

                context.scale(window.devicePixelRatio * customResolutionScale, window.devicePixelRatio * customResolutionScale);

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                // 渲染页面
                page.render(renderContext).promise.then(() => {
                    console.log(`Page ${i} rendered.`);
                });
            }).catch(error => {
                console.error(`Error rendering page ${i}:`, error);
            });
        }
    }).catch(reason => {
        console.error('Error loading PDF:', reason);
    });
});
