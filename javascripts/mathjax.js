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
  
  document$.subscribe(() => { 
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })

  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';  // MathJax CDN
    script.async = true;
    document.head.appendChild(script);
  })();

  