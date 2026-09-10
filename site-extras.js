/* 站点增强：页面操作条、右侧本页目录、页脚（模仿 DDIA 中文站的文档站体验）
 * 注意：一律用 createElement + textContent 构建 DOM，不用 innerHTML。 */
(() => {
    const REPO = "https://github.com/13927/codex-book";
    const RAW_REPO = "https://raw.githubusercontent.com/13927/codex-book";
    const BASELINE_URL =
        "https://github.com/openai/codex/commit/9e868bd9dc007c05e84a98e0b1f4e31dc98c5e6a";

    const makeLink = (text, href) => {
        const a = document.createElement("a");
        a.textContent = text;
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener";
        return a;
    };

    /* 当前页面对应的源 Markdown 路径（相对 src/） */
    const currentMdPath = () => {
        const p = window.location.pathname
            .replace(/^\/codex-book\//, "") // GitHub Pages 项目前缀
            .replace(/^\//, "");
        if (p === "" || p === "index.html") return "README.md";
        return p.replace(/\.html$/, ".md");
    };

    /* ---- 顶部页面操作条 ---- */
    const buildActionBar = (content) => {
        const h1 = content.querySelector("h1");
        if (!h1) return;
        const mdPath = currentMdPath();
        const bar = document.createElement("div");
        bar.className = "page-actions";
        bar.append(
            makeLink("查看源码", `${REPO}/blob/main/src/${mdPath}`),
            makeLink("编辑本页", `${REPO}/edit/main/src/${mdPath}`),
            makeLink("编辑历史", `${REPO}/commits/main/src/${mdPath}`),
            makeLink("提交议题", `${REPO}/issues/new`),
        );
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "copy-md";
        copyBtn.textContent = "复制 Markdown";
        copyBtn.addEventListener("click", async () => {
            try {
                const resp = await fetch(`${RAW_REPO}/main/src/${mdPath}`);
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                await navigator.clipboard.writeText(await resp.text());
                copyBtn.textContent = "已复制 ✓";
            } catch {
                copyBtn.textContent = "复制失败";
            }
            setTimeout(() => (copyBtn.textContent = "复制 Markdown"), 1500);
        });
        bar.appendChild(copyBtn);
        h1.insertAdjacentElement("afterend", bar);
    };

    /* ---- 右侧本页目录（scroll-spy） ---- */
    const buildToc = (content) => {
        const headings = [...content.querySelectorAll("h2[id], h3[id]")];
        if (headings.length < 2) return;
        const toc = document.createElement("nav");
        toc.className = "page-toc";
        toc.setAttribute("aria-label", "本页目录");
        const title = document.createElement("div");
        title.className = "page-toc-title";
        title.textContent = "本页目录";
        toc.appendChild(title);
        const links = new Map();
        for (const h of headings) {
            const a = document.createElement("a");
            a.href = `#${h.id}`;
            a.className = `toc-${h.tagName.toLowerCase()}`;
            a.dataset.target = h.id;
            a.textContent = h.textContent;
            toc.appendChild(a);
            links.set(h.id, a);
        }
        (
            document.getElementById("mdbook-page-wrapper") ?? document.body
        ).appendChild(toc);

        const spy = () => {
            let current = headings[0];
            for (const h of headings) {
                if (h.getBoundingClientRect().top <= 120) current = h;
                else break;
            }
            links.forEach((a) => a.classList.remove("active"));
            links.get(current.id)?.classList.add("active");
        };
        window.addEventListener("scroll", spy, { passive: true });
        spy();
    };

    /* ---- 页脚 ---- */
    const buildFooter = (content) => {
        const footer = document.createElement("div");
        footer.className = "page-footer";
        footer.append(
            document.createTextNode("内容基于 openai/codex commit "),
            makeLink("9e868bd9dc", BASELINE_URL),
            document.createTextNode("（2026-09-09） · 本书源码 "),
            makeLink("13927/codex-book", REPO),
            document.createTextNode(" · 以 "),
            makeLink("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
            document.createTextNode(" 发布"),
        );
        content.appendChild(footer);
    };

    const main = () => {
        const content = document.getElementById("mdbook-content");
        if (!content) return;
        if (window.location.pathname.endsWith("print.html")) return;
        buildActionBar(content);
        buildToc(content);
        buildFooter(content);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", main);
    } else {
        main();
    }
})();
