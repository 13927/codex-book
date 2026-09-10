/* mdBook 的 mermaid 集成（JS-only 方案，无预处理器）：
 * 把 ```mermaid 代码块（<pre><code class="language-mermaid">）转换为
 * <pre class="mermaid"> 并调用 mermaid.run() 渲染；跟随 mdBook 主题切换重渲染。
 * 原始图源保存在元素的 data-source 属性中。 */
(() => {
    const darkThemes = ["ayu", "navy", "coal"];
    const htmlClassList = document.getElementsByTagName("html")[0].classList;

    const mermaidTheme = () => {
        for (const t of darkThemes) {
            if (htmlClassList.contains(t)) {
                return "dark";
            }
        }
        return "default";
    };

    const prepareDiagrams = () => {
        document
            .querySelectorAll("pre > code.language-mermaid")
            .forEach((code) => {
                const pre = code.parentElement;
                const source = code.textContent;
                const div = document.createElement("pre");
                div.className = "mermaid";
                div.dataset.source = source;
                div.textContent = source;
                pre.replaceWith(div);
            });
    };

    const render = () => {
        if (typeof mermaid === "undefined") {
            return;
        }
        mermaid.initialize({ startOnLoad: false, theme: mermaidTheme() });
        document.querySelectorAll("pre.mermaid").forEach((el) => {
            // mermaid 渲染后会打 data-processed 并替换内容；重渲染前先还原源码
            if (el.dataset.processed === "true") {
                el.removeAttribute("data-processed");
                el.textContent = el.dataset.source;
            }
        });
        mermaid.run({ querySelector: "pre.mermaid" });
    };

    const main = () => {
        prepareDiagrams();
        render();
        new MutationObserver(() => render()).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", main);
    } else {
        main();
    }
})();
