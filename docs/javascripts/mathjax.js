window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      packages: {'[+]': ['mhchem']},  // 加载 mhchem 扩展
      processEscapes: true,
      processEnvironments: true,
      tags: 'ams',  // 自动为公式编号
      macros: {
        theorem: ["\\textbf{\\underline{定理:}} #1", 1],  // 定理宏
        definition: ["\\textbf{\\underline{定义:}} #1", 1]  // 定义宏
      }
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  // document$.subscribe(() => { 
  //   MathJax.startup.output.clearCache()
  //   MathJax.typesetClear()
  //   MathJax.texReset()
  //   MathJax.typesetPromise()
  // })

  // (function () {
  //   var script = document.createElement('script');
  //   script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';  // MathJax CDN
  //   script.async = true;
  //   document.head.appendChild(script);
  // })();

  // MkDocs中的MathJax初始化逻辑
document.addEventListener('DOMContentLoaded', () => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';  // MathJax CDN
  script.async = true;
  document.head.appendChild(script);
})();
  
document.addEventListener("DOMContentLoaded", function () {
  // 找到最外层的目录容器
  const tocElement = document.querySelector('[data-md-type="toc"]');

  if (tocElement) {
    console.log("TOC element found.");

    if (typeof MathJax !== 'undefined') {
      console.log("MathJax detected. Rendering...");

      // 查找所有的叶子节点（不再包含子元素的标签）
      const leafNodes = getLeafNodes(tocElement);

      // 使用 MathJax 渲染所有叶子节点
      MathJax.typesetPromise(leafNodes)
        .then(() => console.log("TOC MathJax rendering complete!"))
        .catch((err) => console.error("MathJax rendering error:", err));
    } else {
      console.warn("MathJax is not loaded.");
    }
  } else {
    console.warn("TOC element not found.");
  }

  // 递归查找所有叶子节点的函数
  function getLeafNodes(element) {
    const leaves = [];
    element.querySelectorAll('*').forEach((node) => {
      if (!node.children.length) {
        leaves.push(node);
      }
    });
    return leaves;
  }
});
