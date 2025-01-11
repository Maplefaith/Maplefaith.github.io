document.addEventListener("DOMContentLoaded", function () {
    // 检查是否启用标题编号
    const frontMatter = document.querySelector("meta[name='enable_numbering']");
    if (frontMatter && frontMatter.content === "true") {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/stylesheets/forsome.css"; // 确保路径正确
        document.head.appendChild(link);
    }
});
