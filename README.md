# Codex 技术解析

一本由浅入深剖析 [Codex](https://github.com/openai/codex)（OpenAI 的本地编码 agent）
的中文电子书：技术细节、具体实现、整体架构、技术难点，以及每章与通用 agent 范式
的对照。

## 在线阅读

**<https://13927.github.io/codex-book/>**

## 内容结构

全书五个部分，共 16 章，由浅入深：

1. **认识 Codex** — 总览 / crate 地图 / 配置与认证
2. **看懂一次请求** — 进程与传输 / 主时序 / 协议层
3. **Agent 的大脑** — 线程模型与上下文 / 采样与流式 / 上下文压缩 / 持久化与恢复
4. **Agent 的手和脚** — 工具系统 / 审批与沙箱 / MCP 链路
5. **形态与进阶** — TUI 内部架构 / exec headless / app-server 深入

每章六段式：本章导读 → 概念与架构 → 源码深挖 → 技术难点与设计取舍 →
对照通用 agent 范式 → 小结。新手只读导读 / 概念 / 小结即可通读主线。

## 代码基线

全书源码引用基于 openai/codex 的 commit
[`9e868bd9dc`](https://github.com/openai/codex/commit/9e868bd9dc007c05e84a98e0b1f4e31dc98c5e6a)
（2026-09-09）。引用格式为 `仓库相对路径#L起-L止`，行号以该 commit 为准。

## 本地构建

需要 [mdBook](https://github.com/rust-lang/mdBook) 0.5+：

```bash
mdbook serve   # 本地预览（默认 http://localhost:3000）
mdbook build   # 产出静态站点到 book/
```

mermaid 渲染通过 vendored `mermaid.min.js` + `mermaid-init.js` 实现，
无需安装额外预处理器。

## 说明

本书是第三方技术剖析，与 OpenAI 官方无关；内容基于公开源码阅读整理，
难免有理解偏差，欢迎 Issue 指正。

## License

书中原创内容以 [CC BY 4.0](LICENSE) 发布；所引用的 Codex 源码片段版权归原作者所有
（Apache-2.0）。
