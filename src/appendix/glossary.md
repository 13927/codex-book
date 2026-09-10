# 术语表

本表汇总全书十六章「出场角色」表中的全部术语，按 English 名去重，同一术语在全书的译名唯一。正文各章若曾对同一 English 术语使用不同译法，一律以首次出现章节（见「首次出现」列）的译法为准。本表按中文名拼音排序。

| 中文名 | English | 解释 | 首次出现 |
| ------ | ------- | ---- | -------- |
| 按路径读线程 | read_thread_by_rollout_path | 线程仓库一侧按存档路径加载全部条目 | 第 10 章 |
| 绑定捕获器 | capture_binding_with_metadata | 为当轮采样捕获一份连接与工具目录绑定 | 第 13 章 |
| 曝光策略模块 | mcp_tool_exposure | 决定外部工具协议工具以什么级别进表 | 第 11 章 |
| 暴露面政策 | apply_mcp_tool_exposure_policy | 按服务的忽略清单收缩对模型的暴露面 | 第 13 章 |
| 备好的调用 | PreparedMcpCall | 带目录版本租约的一次待发调用 | 第 13 章 |
| 本地启动器 | LocalStdioServerLauncher | 拉起本地子进程并接管其标准输入输出 | 第 13 章 |
| 本地摘要模块 | compact.rs | 路径四"模型自己写交接纪要"的实现 | 第 9 章 |
| 必达通知判定函数 | server_notification_requires_delivery | 判定哪些服务器通知丢了会导致状态失步 | 第 4 章 |
| 变更通知处理器 | on_tool_list_changed | 收到"工具列表已变更"通知时记日志 | 第 13 章 |
| 标准输入输出传输 | stdio 模块 | 一行一条消息的管道传输 | 第 4 章 |
| 补丁安全评估 | assess_patch_safety | 补丁类操作（不走 shell）的放行判断 | 第 12 章 |
| 补丁工具 | apply-patch | 把模型给出的补丁打到文件上 | 第 2 章 |
| 步上下文 | StepContext | 单次提问前拍的一致快照：设置、工具路由器、外部工具绑定等 | 第 7 章 |
| 采样前压缩检查 | run_pre_sampling_compact | 每轮向模型提问前，检查是否该先压缩 | 第 9 章 |
| 采样请求循环 | run_sampling_request | 组装提示词、发起单次流式采样、失败后交给重试策略 | 第 8 章 |
| 仓库军规 | AGENTS.md | 写给所有贡献者的代码组织纪律 | 第 2 章 |
| 操作指令 | Op | 前端发给引擎的指令枚举 | 第 2 章 |
| 操作指令·压缩 | Op::Compact | 用户手动要求压缩的命令变体 | 第 9 章 |
| 策略规则库 | Policy | 命令策略代码包（crate）里存放与匹配规则的本体 | 第 12 章 |
| 插话校验 | steer_input | 校验插话合法性并写入待定输入 | 第 8 章 |
| 插话输入模式 | TurnInputMode::Steer | 标记"这是一条插话"及其目标轮次 | 第 8 章 |
| 常规任务 | RegularTask | 一轮在任务框架里的载体 | 第 5 章 |
| 持票人认证提供者 | BearerAuthProvider | 把令牌写进网络请求头的执行者 | 第 3 章 |
| 重建应用 | Session::apply_rollout_reconstruction | 把重建出来的历史装进会话状态 | 第 10 章 |
| 处理器缓存 | McpHandlerCache | 把每条外部工具包成调用分发器并登记 | 第 13 章 |
| 初始化处理器 | initialize_processor | 完成登记握手、解析客户端能力的请求处理器 | 第 16 章 |
| 初始历史 | InitialHistory | 会话启动时历史来源的三选一：全新、恢复、分叉 | 第 10 章 |
| 初始上下文注入策略 | InitialContextInjection | 决定压缩后的新历史里，初始上下文放不放、放哪 | 第 9 章 |
| 出站路由函数 | route_outgoing_envelope | 按登记状态与免打扰清单过滤并投递出站信封 | 第 16 章 |
| 出站信封 | OutgoingEnvelope | 出站消息的信封：单投或广播 | 第 16 章 |
| 传输枚举 | AppServerTransport | 描述四种传输选择的枚举 | 第 4 章 |
| 传输事件 | TransportEvent | 各传输上报给主循环的统一事件 | 第 4 章 |
| 串行化队列键 | RequestSerializationQueueKey | 服务端把串行化域落成的具体排队键 | 第 16 章 |
| 串行化访问模式 | RequestSerializationAccess | 独占写或共享读两种排队模式 | 第 16 章 |
| 串行作用域 | serialization_scope | 标记"哪些请求必须按线程排队执行"的请求字段 | 第 5 章 |
| 窗口用量判定器 | context_window_token_status_with_config | 算出当前词元用量是否到限 | 第 9 章 |
| 词元预算模块 | compact_token_budget.rs | 路径一"不摘要、直接开新窗口"的实现 | 第 9 章 |
| 存档加载 | RolloutRecorder::load_rollout_items | 逐行解码整个文件，坏行跳过并计数 | 第 10 章 |
| 存档检查点 | RolloutItem::Compacted | 追加进存档流水的"第 N 块白板已归档"记录 | 第 9 章 |
| 存档流水 | rollout | 会话内容的落盘 | 第 2 章 |
| 存档迁移模块 | rollout_migration | 旧格式问题的集中迁移地 | 第 10 章 |
| 存档文件名 | RolloutFileName | 文件名的解析与渲染；还原操作后追加新存档编号 | 第 10 章 |
| 存档行 | RolloutLine / RolloutLineRef | 一行存档的结构：时间戳、可选序号、条目本体 | 第 10 章 |
| 存档行解码器 | decode_rollout_line | 绕过序列化框架精度陷阱的手写解码入口 | 第 10 章 |
| 待处理请求登记簿 | PendingAppServerRequests | 记住"哪条对话的哪次审批对应哪个请求编号" | 第 14 章 |
| 登录服务启动器 | run_login_server | 起一个本地回调服务，接住浏览器带回来的授权码 | 第 3 章 |
| 底部面板 | BottomPane | 屏幕底部容器：输入框加一摞模态视图栈 | 第 14 章 |
| 调用分发器 | McpHandler | 模型点名后负责解析、审批、拨号的处理器 | 第 13 章 |
| 调用解析器 | build_tool_call | 把模型输出的调用项解析为统一分发对象 | 第 11 章 |
| 调用协调函数 | handle_mcp_tool_call | 解析参数、决定审批策略、驱动执行 | 第 13 章 |
| 定稿函数 | finalize_tool_router | 补注册、查重名，把注册表组装成路由器 | 第 11 章 |
| 动态工具规格 | DynamicToolSpec | 客户端声明动态工具时用的描述结构 | 第 11 章 |
| 动态工具回包处理器 | on_call_response | 应用服务侧把客户端回包转交核心引擎 | 第 11 章 |
| 动态工具请求函数 | request_dynamic_tool | 核心引擎侧发起动态工具调用并挂起等待 | 第 11 章 |
| 动态工具响应操作 | Op::DynamicToolResponse | 把客户端结果递回核心引擎的操作类型 | 第 11 章 |
| 动态工具追加器 | append_dynamic_tool_runtimes | 把客户端声明的动态工具装进注册表 | 第 11 章 |
| 读取守门与清洗 | reject_unknown_thread_history_mode / strip_legacy_ghost_snapshot_rollout_line | 不认识的模式直接报错；旧版幽灵快照行读取时剥掉 | 第 10 章 |
| 读写锁 | RwLock | 多读单写的并发门锁，即并行闸门本体 | 第 11 章 |
| 对话项记录入口 | Session::record_conversation_items | 按"内存、磁盘、界面"的固定顺序记录对话内容 | 第 10 章 |
| 发送前瘦身器 | trim_function_call_history_to_fit_context_window | 发请求前把超长工具输出改写成占位文本 | 第 9 章 |
| 分发入口 | dispatch_tool_call_with_terminal_outcome | 路由器上带终态上报的分发函数 | 第 11 章 |
| 分析 | analytics | 使用情况分析 | 第 2 章 |
| 覆盖层 | Overlay | 借用整块屏幕的临时页面：历史全览与差异查看 | 第 14 章 |
| 覆盖折叠函数 | build_cli_overrides_layer | 把捕获到的键值对折叠成一张配置表层 | 第 3 章 |
| 复核决定 | ReviewDecision | 用户对审批请求的五种答复 | 第 12 章 |
| 复核员审批 | request_guardian_approval | 第二级：值守复核员给决定 | 第 12 章 |
| 服务传输层 | app-server-transport | 承载服务的底层通信传输 | 第 2 章 |
| 服务器请求 | ServerRequest | 应用服务反向向前端发起的请求（如审批） | 第 5 章 |
| 服务器请求拦截器 | handle_server_request | 把漏网抵达的审批请求一律拒绝 | 第 15 章 |
| 服务器通知 | ServerNotification | 应用服务推给前端的事件载荷 | 第 5 章 |
| 复用判定函数 | can_reuse_implicit_local_daemon | 判定本次启动是否有资格复用共享守护进程 | 第 4 章 |
| 负载目录 | protocol/v2 | 各方法的参数与返回值类型，按资源分文件存放 | 第 6 章 |
| 工具曝光级别 | ToolExposure | 决定工具对模型可见程度的六级开关 | 第 11 章 |
| 工具编排器 | ToolOrchestrator | 所有工具调用共用的编排主线 | 第 12 章 |
| 工具表构建函数 | build_tool_router | 每一步采样前现场构建工具表的管线 | 第 11 章 |
| 工具代码包 | tools | 工具规格与适配层，正从引擎迁出 | 第 2 章 |
| 工具档案 | ToolInfo | 同时携带路由名、模型可见名与回传原名 | 第 13 章 |
| 工具调用运行时 | ToolCallRuntime | 接收敲定的工具调用并执行（第 11 章展开） | 第 8 章 |
| 工具构建入口 | built_tools | 组装提示词前准备本步工具表的函数 | 第 11 章 |
| 工具规格 | ToolSpec | 序列化后即是模型可见的工具定义 | 第 2 章 |
| 工具聚合入口 | list_all_tools | 并发向所有服务收工具并统一改名 | 第 13 章 |
| 工具路由器 | ToolRouter | 识别模型发出的工具调用并安排执行 | 第 5 章 |
| 工具名 | ToolName | 工具的唯一标识，可带命名空间前缀 | 第 11 章 |
| 工具迁移自述 | tools README | 记录工具层迁出引擎的计划与禁区 | 第 2 章 |
| 工具输出接口 | ToolOutput | 工具输出对模型与对日志的双面契约 | 第 11 章 |
| 工具执行器 | ToolExecutor | 每个工具必须实现的执行接口 | 第 11 章 |
| 工具注册中心 | ToolRegistry | 所有工具的登记处：按名索引、记录首个重名事故 | 第 11 章 |
| 共享命令行选项 | SharedCliOptions | 各前端共用的通用选项（模型、权限档位等） | 第 15 章 |
| 工作区清单 | workspace Cargo.toml | 登记全部成员代码包与共享配置的总规划图 | 第 2 章 |
| 关停状态机 | ShutdownState | 记录停机进度，双归零才真正退出 | 第 16 章 |
| 规则固化 | persist_execpolicy_amendment | 把"连规则一起批准"写回规则库 | 第 12 章 |
| 规则决策 | Decision | 命令策略（execpolicy）的三值判定 | 第 12 章 |
| 核心引擎 | codex-core | 唯一的智能体引擎（第 7 章展开） | 第 1 章 |
| 核心引擎线程 | CodexThread | 一条线程在核心引擎内的句柄 | 第 5 章 |
| 花名册管理员 | McpManager | 把配置文件、插件、内置三方来源合并成运行时花名册并仲裁撞名 | 第 13 章 |
| 换行补齐 | ensure_rollout_is_newline_terminated | 追加写入前，给残行补上换行符 | 第 10 章 |
| 换模型压缩检查 | maybe_run_previous_model_inline_compact | 换模型或压缩指纹变化时，先用上一模型压一次 | 第 9 章 |
| 恢复模式 | enter_recovery_mode | 写入失败后录制器的自我保护状态 | 第 10 章 |
| 回灌条目 | ResponseInputItem::McpToolCallOutput | 把外部工具结果写回对话历史的协议条目 | 第 13 章 |
| 回滚处理器 | thread_rollback | 处理线程回滚指令的函数 | 第 10 章 |
| 会话 | Session | 核心引擎里一条会话的运行时 | 第 5 章 |
| 会话级运行时 | McpRuntime | 持有当前发布的连接快照，协调配置变更 | 第 13 章 |
| 会话区组件 | ChatWidget | 会话画面状态机：历史、流式输出、底部面板的总管家 | 第 14 章 |
| 会话收发口 | SessionIo | 会话对外收发操作信封的接口 | 第 5 章 |
| 会话选择结果 | SessionSelection | 恢复会话选择器里你可能做出的几种选择 | 第 14 章 |
| 会话元数据 | SessionMeta / SessionMetaLine | 文件首行：线程身份、工作目录、版本号与仓库信息 | 第 10 章 |
| 回退判定器 | should_retry_with_current_model | 上一模型压缩失败时，判断是否换当前模型重试 | 第 9 章 |
| 机器可读渲染器 | EventProcessorWithJsonOutput | 机器模式，把每个事件写成一行 JSON | 第 15 章 |
| 降级切换 | try_switch_fallback_transport | 尝试把专线降级为重拨，返回是否首次切换 | 第 8 章 |
| 校验锁生成器 | generate_pkce | 生成一次性校验锁，防止授权码被半路截胡 | 第 3 章 |
| 进程内客户端 | InProcessAppServerClient | 给同进程的前端提供统一的请求与事件接口 | 第 1 章 |
| 进程内客户端 | app-server-client | 同进程前端的统一请求与事件接口 | 第 2 章 |
| 进程内启动函数 | start（in_process 模块内） | 启动进程内运行时并完成初始化握手 | 第 4 章 |
| 进程内事件枚举 | InProcessServerEvent | 进程内运行时发给客户端的事件（含掉队标记 Lagged） | 第 4 章 |
| 进程内协议 | protocol | 引擎的进程内协议类型，几乎不依赖别人 | 第 2 章 |
| 进程内传输模块 | in_process | 用进程内消息通道替代网络通信、但保持同一协议 | 第 1 章 |
| 开新窗口 | start_new_context_window | 在会话里换一块新白板 | 第 9 章 |
| 客户端工厂 | make_rmcp_client | 按传输方式分派，为单个服务创建客户端 | 第 13 章 |
| 客户端请求 | ClientRequest | 客户端可调用的全部请求的枚举 | 第 2 章 |
| 客户端请求串行化域 | ClientRequestSerializationScope | 协议层为每个请求声明的排序范围，共九个变体 | 第 16 章 |
| 客户端通知 | ClientNotification | 前端发给应用服务、不需回应的单向消息 | 第 6 章 |
| 客户端投递函数 | try_send_client_message | 把客户端消息非阻塞地投进运行时队列 | 第 4 章 |
| 可见规格构建器 | build_model_visible_specs | 从注册表筛出本步发给模型的工具规格 | 第 11 章 |
| 空宏代码包 | app-server-protocol-noop-macros | 正常构建时顶替代码生成的占位宏，编译零开销 | 第 6 章 |
| 空闲回收器 | UnloadingState | 对无订阅且长期不活跃的线程做自动卸载的计时状态 | 第 16 章 |
| 控制套接字传输 | unix_socket 模块 | 本机共享守护进程使用的套接字传输 | 第 4 章 |
| 快照捕获函数 | capture_step_context | 每次提问前重新打包步上下文的函数 | 第 7 章 |
| 快照捕获函数 | capture_step_context_inner | 每次采样前冻结当轮上下文 | 第 13 章 |
| 类型导出器 | export | 仅在测试构建中把类型定义导出成多语言产物 | 第 6 章 |
| 历史重建算法 | reconstruct_history_from_rollout | 反向扫描加正向重放的核心算法 | 第 10 章 |
| 历史单元 | HistoryCell | 一段写定内容的接口：给定宽度，交出若干行 | 第 14 章 |
| 历史过滤器 | should_keep_compacted_history_item | 过滤服务端整理回来的历史，防注入回流 | 第 9 章 |
| 历史类型 | history | 历史记录的数据类型 | 第 2 章 |
| 历史模式与序号状态 | ThreadHistoryMode / RolloutOrdinalState | 行格式的世代标记，以及下一行该用的序号 | 第 10 章 |
| 历史替换器 | ContextManager::replace_annotated | 真正换掉模型可见历史的底层方法 | 第 9 章 |
| 连接绑定 | McpBinding | 当轮采样捕获的精确连接、配置与目录 | 第 13 章 |
| 连接编号 | ConnectionId | 每条连接的递增编号 | 第 4 章 |
| 连接会话状态 | ConnectionSessionState | 每条连接的档案：登记状态、闸门、订阅信息 | 第 16 章 |
| 连接集 | McpConnectionSet | 一组运行中外部工具连接的不可变发布视图 | 第 13 章 |
| 连接来源 | ConnectionOrigin | 记录连接来自哪种传输，供状态与遥测区分 | 第 4 章 |
| 连接目标 | AppServerTarget | 终端界面三种连接目标的枚举 | 第 4 章 |
| 连接目标选择函数 | app_server_target_for_launch | 决定本次启动连内嵌、守护进程还是远程端点 | 第 4 章 |
| 连接预热 | prewarm_websocket | 首个正式请求前先发一个空转请求热身专线 | 第 8 章 |
| 连接闸门 | ConnectionRpcGate | 连接级的执行闸门，关闭后不再受理新活并等在途排空 | 第 16 章 |
| 连接状态 | ConnectionState | 裁决者连接表里每条连接的运行时条目 | 第 16 章 |
| Linux 沙箱 | linux-sandbox | Linux 平台的沙箱实现 | 第 2 章 |
| Linux 沙箱命令构造 | create_linux_sandbox_command_args_for_permission_profile | 把权限档案序列化后拼成助手进程参数 | 第 12 章 |
| Linux 沙箱助手 | codex-linux-sandbox | 同一程序文件改个名字变身出的隔离助手 | 第 12 章 |
| 流式错误通知 | notify_stream_error | 重连时向前端发"正在重连"事件 | 第 8 章 |
| 流事件工具集 | stream_events_utils | 把流式增量整理成完整输出项的工具模块 | 第 5 章 |
| 流式控制器 | StreamController | 给往外蹦的回答把门：攒到内容边界再放行 | 第 14 章 |
| 流式收尾器 | drain_to_completed | 把一次流式响应从头到尾读完 | 第 9 章 |
| 流式消费循环 | try_run_sampling_request | 逐个消费统一事件并分发给前端和工具执行器 | 第 8 章 |
| 流水线脚本 | write_schema_fixtures.py | 一键重新生成全部类型产物与 Python 开发包类型 | 第 6 章 |
| 路径预计算 | precompute_new_rollout_path | 生成按年月日分层的新存档文件路径 | 第 10 章 |
| 录制命令 | RolloutCmd | 发给录制器的四种指令 | 第 10 章 |
| 录制器 | RolloutRecorder | 用消息通道加后台写入任务，把所有落盘串行化 | 第 10 章 |
| 轮处理器 | turn_processor | 把协议层的"开始一轮"请求翻译成核心引擎的提交 | 第 5 章 |
| 轮上下文 | TurnContext | 一轮的运行时上下文，携带轮的编号 | 第 5 章 |
| 轮输入处理模块 | turn_input | 受理"新起或插队一轮"并派生轮任务 | 第 5 章 |
| 轮提交结果 | TurnInputSubmission | 核心引擎对一次提交的三分答复：新起、插队、拒绝 | 第 5 章 |
| 轮主循环 | run_turn | 一轮的主循环：采样、工具、再采样 | 第 5 章 |
| 落地总入口 | Session::replace_compacted_history | 内存替换、磁盘追加、事件外发的汇合点 | 第 9 章 |
| 落盘策略 | is_persisted_rollout_item / persisted_rollout_items | 裁决哪类条目落盘，并在写入前执行过滤 | 第 10 章 |
| Markdown 流收集器 | MarkdownStreamCollector | 给模型回答文本划出稳定边界，不做解析 | 第 14 章 |
| 密钥登录函数 | login_with_api_key | 把接口密钥直接写成一份凭证文件 | 第 3 章 |
| 名称规范化器 | normalize_tools_for_model_with_prefix | 去重、哈希改名、压进长度上限 | 第 13 章 |
| 命令策略 | execpolicy | 判定一条命令能不能执行 | 第 2 章 |
| 命令审批请求 | request_command_approval | 造一次性通道、广播事件并挂起等待 | 第 12 章 |
| 命令审批入口 | create_exec_approval_requirement_for_command | 把 shell 命令拆段并逐段对照规则 | 第 12 章 |
| 命令行覆盖捕获器 | CliConfigOverrides | 原样捕获命令行上的临时覆盖键值对 | 第 3 章 |
| 命令行入口 | cli | 程序的起点，决定这次启动扮演哪个角色 | 第 1 章 |
| 命令执行单元 | ExecCell | 渲染"执行命令"这一段历史的专用单元 | 第 14 章 |
| 命令执行输出 | ExecCommandToolOutput | 命令类工具的输出结构，负责按预算截断 | 第 11 章 |
| 名字分派器 | arg0 | 根据"程序被以什么名字调用"分派到特殊角色 | 第 1 章 |
| 默认审批判定 | default_exec_approval_requirement | 把两个旋钮合流成三态结论 | 第 12 章 |
| 模式生成函数 | config_schema | 从配置结构生成校验用的格式说明书 | 第 3 章 |
| 模型端点客户端 | codex-api | 模型端点的流式与长连接客户端 | 第 2 章 |
| 模型客户端会话 | ModelClientSession | 与模型服务建立流式连接的客户端 | 第 5 章 |
| 模型默认阈值 | auto_compact_token_limit | 模型级的默认触发线：窗口的九成与配置上限取小 | 第 9 章 |
| 模型协议清单 | model-provider-info | 定义 Codex 支持哪些模型通信协议 | 第 1 章 |
| 配置层 | config / config-schema | 分层配置加载与配置模式生成 | 第 2 章 |
| 配置层来源枚举 | ConfigLayerSource | 给每一种配置来源定性，并附上优先级分数 | 第 3 章 |
| 配置层栈 | ConfigLayerStack | 持有全部配置层，负责合并生效值与记录来源 | 第 3 章 |
| 配置层装配函数 | load_config_layers_state | 按优先级把各层配置从磁盘读出、组装成栈 | 第 3 章 |
| 配置覆盖 | ConfigOverrides | 启动时强制改写配置的载体，无人值守默认值靠它注入 | 第 15 章 |
| 配置构建器 | ConfigBuilder | 核心引擎侧的配置入口，发起加载并产出运行时配置 | 第 3 章 |
| 配置构建器 | build_exec_config | 构建批处理配置，并给自动评审留了例外 | 第 15 章 |
| 配置合并函数 | merge_toml_values | 把两张配置表递归合并，冲突键由高层覆盖 | 第 3 章 |
| 配置文件结构 | ConfigToml | 配置文件格式的唯一事实来源，合并结果反序列化成它 | 第 3 章 |
| 配置指纹函数 | version_for_toml | 给每层配置算内容指纹，回答"配置变没变" | 第 3 章 |
| 批处理参数定义 | Cli | 批处理模式全部命令行参数的定义处 | 第 15 章 |
| 批处理模式 | exec | 无人值守的运行前端 | 第 2 章 |
| 批处理入口函数 | run_main | 批处理模式主函数，从解析参数一路管到进程退出 | 第 15 章 |
| 批处理子命令 | Subcommand::Exec | 命令行入口里把「批处理」分派出去的分支 | 第 15 章 |
| 苹果沙箱命令构造 | create_seatbelt_command_args_with_profile | 把权限档案编译成 Seatbelt 策略文本 | 第 12 章 |
| 凭证存储模式 | AuthCredentialsStoreMode | 决定凭证存文件、系统钥匙串，还是只留在内存 | 第 3 章 |
| 凭证文件结构 | AuthDotJson | 凭证文件的格式：密钥、令牌、刷新时间各占一栏 | 第 3 章 |
| 启动包装器 | codex-cli | 按你的操作系统和芯片找到正确的程序文件并启动它 | 第 1 章 |
| 启动编排器 | run_main_inner | 启动期总调度：加载配置、登录与信任校验、会话选择 | 第 14 章 |
| 启动草稿 | StartupDraft | 尽早接管终端，让启动过程也有画面可看 | 第 14 章 |
| 启动进度事件 | McpStartupUpdateEvent | 把每个服务的启动进度上报给前端 | 第 13 章 |
| 启动前加固 | pre_main_hardening | 主函数跑起来之前的进程自我加固 | 第 12 章 |
| 启动失败诊断 | mcp_init_error_display | 把启动失败翻译成面向用户的修复建议 | 第 13 章 |
| 前置/后置钩子 | PreToolUse / PostToolUse | 执行前后拦截调用与结果的扩展点 | 第 11 章 |
| 强制重拨 | force_http_fallback | 把"禁用专线"做会话级原子置位 | 第 8 章 |
| 请求编号 | RequestId | 请求与响应之间的对账编号，字符串或整数皆可 | 第 6 章 |
| 请求构造器 | build_responses_request | 组装发往模型服务的请求体 | 第 8 章 |
| 请求体类型 | ResponsesApiRequest | 发往模型服务的请求体结构 | 第 8 章 |
| 权限巡检钩子 | run_permission_request_hooks | 第一级：自动化脚本先盖章 | 第 12 章 |
| 人类可读渲染器 | EventProcessorWithHumanOutput | 默认模式，把摘要与进度写到标准错误 | 第 15 章 |
| 任务全量中止 | abort_all_tasks | 中止会话下所有运行中的任务 | 第 8 章 |
| 任务收尾 | on_task_finished | 一轮结束时发出完成事件与指标 | 第 8 章 |
| 任务种类 | TaskKind | 区分三种后台任务：常规、评审、手动压缩 | 第 7 章 |
| 任务中止处理 | handle_task_abort | 优雅退出、超时强杀、落盘中断标记 | 第 8 章 |
| 认证 | login | 登录流程与密钥管理 | 第 2 章 |
| 认证管理器 | AuthManager | 认证数据的唯一事实来源 | 第 2 章 |
| 认证恢复 | handle_unauthorized | 请求被拒时触发一次令牌恢复并重试 | 第 3 章 |
| 认证结果枚举 | CodexAuth | 一次认证解析的全部可能结果，共八种形态 | 第 3 章 |
| 认证解析函数 | load_auth | 按优先级决定本次运行使用哪份凭证 | 第 3 章 |
| 沙箱策略 | SandboxPolicy | 决定"沙箱里能做什么"的四档旋钮 | 第 12 章 |
| 沙箱层 | sandboxing | 跨平台的命令沙箱化 | 第 2 章 |
| 沙箱管理器 | SandboxManager | 沙箱层（sandboxing）代码包的统一抽象：给命令穿沙箱外衣 | 第 12 章 |
| 沙箱类型 | SandboxType | 四值枚举：本机三平台沙箱或不包裹 | 第 12 章 |
| 上下文管理器 | ContextManager | 持有对话历史，底层是写时复制结构，克隆极廉价 | 第 7 章 |
| 上下文注入片段 | ContextualUserFragment | 所有注入块的统一接口：角色、类别、标记、正文四要素 | 第 7 章 |
| 设备码登录函数 | run_device_code_login | 无浏览器环境的登录流程：显示验证码并轮询结果 | 第 3 章 |
| 设置事件构造 | thread_settings::applied_event | 生成"线程设置已应用"事件 | 第 10 章 |
| 审批策略 | AskForApproval | 决定"什么时候问人"的四档旋钮 | 第 12 章 |
| 审批弹窗 | ApprovalOverlay | 批准或拒绝的模态选择列表 | 第 14 章 |
| 审批回传操作 | Op::ExecApproval | 前端把决定送回引擎的协议消息 | 第 12 章 |
| 审批回传处理器 | exec_approval | 核心引擎（codex-core）里接收回传决定的分发者 | 第 12 章 |
| 审批通知 | Session::notify_approval | 把决定推回挂起中的工具调用 | 第 12 章 |
| 审批需求三态 | ExecApprovalRequirement | 一次调用的结论：放行、要请示、禁止 | 第 12 章 |
| 审批询问函数 | maybe_request_mcp_tool_approval | 需要审批时向前端发问（含守卫复核） | 第 13 章 |
| 审批总入口 | Session::request_approval | 会话（Session，一次完整对话的运行体）上发起三级审批决策 | 第 12 章 |
| 事件 | Event | 引擎外发的一条消息信封，用编号关联回某条提交 | 第 6 章 |
| 事件处理器接口 | EventProcessor | 输出双轨的抽象：同一批事件、两种渲染方式 | 第 15 章 |
| 事件翻译器 | item_event_to_server_notification | 把引擎事件译成对外通知的集中翻译处 | 第 6 章 |
| 事件翻译与路由 | apply_bespoke_event_handling | 把核心引擎事件翻译并路由成服务器通知 | 第 5 章 |
| 事件过滤器 | should_process_notification | 只放行属于本线程、本轮的通知 | 第 15 章 |
| 事件模型 | ThreadEvent | 机器模式下全部事件类型的枚举 | 第 15 章 |
| 事件通知 | EventMsg | 引擎发回前端的事件枚举 | 第 2 章 |
| 实验性门控 | ExperimentalApi | 标记并检查"还在试用期"的方法与字段 | 第 6 章 |
| 手动压缩任务 | CompactTask | 手动压缩的执行体，作为后台任务独立运行 | 第 9 章 |
| 守护进程模块 | app-server-daemon | 共享守护进程的生命周期管理（启动、停止等） | 第 4 章 |
| 守护进程探测函数 | maybe_probe_default_daemon_socket | 探测本机默认守护进程套接字是否可用 | 第 4 章 |
| 守卫复核函数 | review_guardian_mcp_elicitation | 对反向提问做安全复核 | 第 13 章 |
| 输出截断库 | output-truncation | 给超长输出做截断并留下显式标记的工具库 | 第 11 章 |
| 输出项定稿分发 | handle_output_item_done | 把流式敲定的条目三分：工具、消息、回喂错误 | 第 8 章 |
| 输入队列 | InputQueue | 信箱：暂存输入并支持"插话"式追加 | 第 7 章 |
| 输入框组件 | ChatComposer | 你打字的地方：多行编辑、附件、提及、斜杠命令 | 第 14 章 |
| 特性开关 | Feature | 控制词元预算模式与远端新版是否启用的开关总表 | 第 9 章 |
| 提交条目 | Submission | 排队等待引擎处理的一条任务，携带来源编号与指令本体 | 第 6 章 |
| 提交循环 | submission_loop | 逐条消费会话邮箱里的操作信封 | 第 5 章 |
| 提示词 | Prompt | 发往模型的请求体，含输入与工具表 | 第 11 章 |
| 提问用历史函数 | for_prompt | 把历史归一化成可发给模型的形态（函数） | 第 7 章 |
| 条目补齐器 | maybe_backfill_turn_completed_items | 消息被背压丢弃后回读线程、补齐条目 | 第 15 章 |
| 条目模型 | ThreadItemDetails | 事件里「条目」的类型枚举（消息、命令、文件变更等） | 第 15 章 |
| 通道容量 | CHANNEL_CAPACITY | 所有内部信箱的统一容量上限，固定为 128 | 第 16 章 |
| 统计口径 | AutoCompactTokenLimitScope | 决定数全部活跃词元，还是只数本窗口内新增 | 第 9 章 |
| 统一事件枚举 | ResponseEvent | 两条传输路径共同产出的事件类型 | 第 8 章 |
| 统一写口 | Session::persist_rollout_items | 会话内所有存档落盘的汇聚点 | 第 10 章 |
| 统一执行入口 | handle_any_tool | 按工具类型调用对应执行体的总开关 | 第 11 章 |
| 通用选择列表 | ListSelectionView | 审批弹窗底层可过滤、可键盘导航的列表 | 第 14 章 |
| TS 开发包封装 | CodexExec | TypeScript 开发包对批处理命令的薄封装 | 第 15 章 |
| 推送流解析入口 | spawn_response_stream | 从响应头捞元数据，并起后台任务逐条解析推送 | 第 8 章 |
| 推送事件映射器 | process_responses_event | 把每种服务器推送事件翻译成统一事件 | 第 8 章 |
| 外部工具服务侧 | codex-mcp | 面向外部工具的协议服务端 | 第 2 章 |
| 外部工具客户端 | rmcp-client | 连接外部工具服务的客户端 | 第 2 章 |
| 外部认证桥 | ExternalAuthBridge | 应用服务向持有凭证的客户端反向请求新令牌的通道 | 第 3 章 |
| 外部注册入口 | register_external_with_exposure | 外部工具进注册表的专用通道 | 第 11 章 |
| 网络套接字传输 | websocket 模块 | 唯一能跨机器的传输 | 第 4 章 |
| 尾部丢弃 | drop_last_n_user_turns | 从内存历史尾部删掉最近若干用户轮 | 第 10 章 |
| Windows 沙箱 | windows-sandbox-rs | Windows 平台的沙箱实现 | 第 2 章 |
| Windows 沙箱包装 | create_windows_sandbox_command_args_for_permission_profile | 用受限令牌方式改写进程启动 | 第 12 章 |
| 细粒度审批配置 | GranularApprovalConfig | 按类别单独开关审批弹窗 | 第 12 章 |
| 线程处理器 | thread_processor | 处理线程的创建、恢复、回滚等请求 | 第 16 章 |
| 线程管理器 | ThreadManager | 按线程编号取回核心引擎线程句柄 | 第 5 章 |
| 线程级限制施加 | apply_permission_profile_to_current_thread | 在目标线程上落实提权封锁与系统调用过滤 | 第 12 章 |
| 线程路由模块 | thread_routing | 终端界面里把应用命令分发到对应处理的模块 | 第 5 章 |
| 线程启动参数 | ThreadStartParams | "开新线程"方法的参数类型，后文拿它当样本 | 第 6 章 |
| 线程生命周期模块 | thread_lifecycle | 为每条线程监听核心引擎事件流的模块 | 第 5 章 |
| 线程事件通道 | ThreadEventChannel | 账本外接的传送带：有界队列加共享账本 | 第 14 章 |
| 线程事件账簿 | ThreadEventStore | 终端界面侧接收服务器通知并记账，驱动增量渲染 | 第 5 章 |
| 线程索引 | thread-store | 线程级别的索引与查询 | 第 2 章 |
| 线协议代码包 | codex-app-server-protocol | 对外远程调用协议的家 | 第 6 章 |
| 线协议清单 | app-server-protocol | 定义线上请求与响应的类型 | 第 2 章 |
| 项目配置黑名单 | PROJECT_LOCAL_CONFIG_DENYLIST | 明文列出项目层永远不许设置的敏感键 | 第 3 章 |
| 响应代理 | responses-api-proxy | 模型交互协议的本地代理 | 第 2 章 |
| 消息处理器 | MessageProcessor | 应用服务内部真正处理每条请求的调度者（第 16 章展开） | 第 1 章 |
| 写入循环 | rollout_writer | 后台任务本体：逐行序列化，每行写完立即冲刷 | 第 10 章 |
| 协议代码包 | codex-protocol | 进程内协议的家 | 第 6 章 |
| 信封枚举 | JSONRPCMessage | 线上消息的四种信封：请求、通知、响应、错误 | 第 6 章 |
| 压缩触发器条目 | ResponseItem::CompactionTrigger | 追加在历史末尾的"请整理"便签 | 第 9 章 |
| 压缩阶段 | CompactionPhase | 标记压缩发生在轮前还是轮中 | 第 9 章 |
| 压缩模块三件套 | spawn_rollout_compression_worker / materialize_rollout_for_append / open_rollout_line_reader | 冷文件后台压缩、追加前解压还原、对两种文件透明读取 | 第 10 章 |
| 压缩前后钩子 | run_pre_compact_hooks / run_post_compact_hooks | 让外部扩展在压缩前后插手，可叫停 | 第 9 章 |
| 压缩完成事件 | EventMsg::ContextCompacted | 旧版事件格式里的压缩完成通知 | 第 9 章 |
| 压缩完成条目 | TurnItem::ContextCompaction | 通知前端"压缩完成"的条目 | 第 9 章 |
| 压缩原因 | CompactionReason | 标记这次压缩为什么发生（四个变体） | 第 9 章 |
| 遥测 | otel | 运行指标与链路观测 | 第 2 章 |
| 钥匙串存储 | keyring-store | 操作系统钥匙串的存取 | 第 2 章 |
| 一次性通道 | oneshot | 只能送一次消息的通道，用于挂起-回包 | 第 11 章 |
| 已批准执行入口 | handle_approved_mcp_tool_call | 审批通过后在目录租约内执行 | 第 13 章 |
| 已注册工具 | RegisteredTool | 注册表里的一条记录：执行体加曝光级别 | 第 11 章 |
| 应用编排器 | App | 终端界面的总调度：主循环与全部事件分发 | 第 14 章 |
| 应用服务 | app-server | 所有前端的统一入口，托管核心引擎 | 第 1 章 |
| 应用服务会话适配器 | AppServerSession | 终端界面侧把界面动作打包成协议请求的发送口 | 第 5 章 |
| 应用服务客户端 | AppServerClient | 传输层二选一：进程内或远程 | 第 14 章 |
| 应用服务入口函数 | run_main / run_main_with_transport_options | 按传输参数挂起监听器的启动函数 | 第 4 章 |
| 应用服务事件 | AppServerEvent | 应用服务推来的事件统一类型：通知、请求、断线、滞后 | 第 14 章 |
| 应用命令 | AppCommand | 终端界面内部的应用级指令，回车被归约为它的"用户一轮"变体 | 第 5 章 |
| 应用事件 | AppEvent | 界面内部便签的枚举：组件间异步通信的统一载体 | 第 14 章 |
| 应用事件发送器 | AppEventSender | 各组件往便签通道投递消息的把手 | 第 14 章 |
| 用量回填 | last_token_usage_record_from_rollout | 从存档尾部找回最近的令牌用量记录 | 第 10 章 |
| 用量汇总 | Usage | 一轮结束时的词元（token——模型计费与限流的计量单位）统计 | 第 15 章 |
| 有序并发收集器 | FuturesOrdered | 让工具并发执行、但按入队顺序吐出结果 | 第 8 章 |
| 有序索引表 | IndexMap | 保持插入顺序的键值表，工具按登记顺序存放 | 第 11 章 |
| 优雅中断时长 | GRACEFULL_INTERRUPTION_TIMEOUT_MS | 强杀之前给任务的 100 毫秒优雅期 | 第 8 章 |
| 预计算导出物 | precomputed_exports | 把压缩好的类型清单编进二进制、构建时解压写出 | 第 6 章 |
| 预热工人 | mcp_prewarm | 后台尽力预热连接，不做正确性保证 | 第 13 章 |
| 远程端点枚举 | RemoteAppServerEndpoint | 描述远程连接目标：网络套接字或本机套接字 | 第 4 章 |
| 远程客户端 | RemoteAppServerClient | 连接守护进程或远程端点的客户端 | 第 4 章 |
| 远程执行服务 | exec-server | 远程进程与文件能力 | 第 2 章 |
| 远程执行启动器 | ExecutorStdioServerLauncher | 在远程执行环境里拉起服务进程 | 第 13 章 |
| 远端旧版模块 | compact_remote.rs | 路径三"整段历史寄给服务端"的实现 | 第 9 章 |
| 远端新版模块 | compact_remote_v2.rs | 路径二"夹便签、拿回密封档案袋"的实现 | 第 9 章 |
| 远端压缩能力 | RemoteCompactionSupport | 描述模型服务商支持哪种远端压缩 | 第 9 章 |
| 远端压缩请求构造器 | compact_conversation_history | 把整理请求打包发给服务端的整理接口 | 第 9 章 |
| 元数据写入 | write_session_meta | 把携带仓库信息的会话元数据写成文件首行 | 第 10 章 |
| 在途结果排空 | drain_in_flight | 流结束后按序落盘所有在途工具结果 | 第 8 章 |
| 在线线程 | LiveThread | 活跃线程的持久化句柄，先过滤再交给录制器 | 第 10 章 |
| 摘要前缀 | SUMMARY_PREFIX | 摘要开头的固定标记，声明"这是另一个模型的交接" | 第 9 章 |
| 摘要提示词 | SUMMARIZATION_PROMPT | 教模型写交接纪要的提示词模板 | 第 9 章 |
| 诊断 | diagnostics | 诊断信息的收集 | 第 2 章 |
| 帧率限制器 | FrameRateLimiter | 记住上一帧时刻，把两帧间隔钳在下限之上 | 第 14 章 |
| 帧请求器与帧调度员 | FrameRequester / FrameScheduler | 收重绘便签、合并、按帧率上限放行 | 第 14 章 |
| 征求发起函数 | request_mcp_server_elicitation | 登记挂起请求、发事件、等待答案 | 第 13 章 |
| 征求解决函数 | resolve_elicitation | 把前端的答案送回挂起的请求 | 第 13 章 |
| 征求路由器 | ElicitationRequestRouter | 把反向提问路由到正确的挂起应答方 | 第 13 章 |
| 征求应答服务 | ElicitationClientService | 在外部工具客户端层接住反向提问 | 第 13 章 |
| 重拨流式路径 | stream_responses_api | 重拨一侧的请求构造与认证恢复 | 第 8 章 |
| 终端抽象 | Tui | 对真实终端的封装：事件流、画帧、写滚动历史 | 第 14 章 |
| 中断管理器 | InterruptManager | 流式输出期间给审批请求排队，保证先来后到 | 第 14 章 |
| 终端恢复守卫 | TerminalRestoreGuard | 无论正常退出还是崩溃，都把终端还原成借用前的样子 | 第 14 章 |
| 终端界面 | tui | 交互式终端前端 | 第 2 章 |
| 终端界面代码包 | codex-tui | 终端界面的全部代码 | 第 14 章 |
| 中断入口 | interrupt_task | 响应用户打断，发起任务中止 | 第 8 章 |
| 重放检查点 | ReplayCheckpoint | 反向扫描找到的压缩记录锚点 | 第 10 章 |
| 重名碰撞错误 | ToolCollision | 定稿时发现两个工具共用一个名字的报错 | 第 11 章 |
| 重试协调器 | handle_retryable_response_stream_error | 按优先级执行三级重试策略 | 第 8 章 |
| 注册表分发器 | dispatch_any_with_terminal_outcome | 注册表上真正跑钩子与执行体的分发函数 | 第 11 章 |
| 助手消息流解析器 | AssistantMessageStreamParsers | 按条目分槽累积文本增量，剥离引用与计划块 | 第 8 章 |
| 专线开关判定 | responses_websocket_enabled | 判断当前是否允许走专线 | 第 8 章 |
| 专线流式路径 | stream_responses_websocket | 专线一侧的发送与接收：懒连接、预热、增量输入 | 第 8 章 |
| 状态库 | state | 本地数据库形式的持久状态 | 第 2 章 |
| 准入票 | TurnPermit | 准入闸发还的守卫票据，丢弃时自动归还名额 | 第 16 章 |
| 准入闸 | turn_admission | 决定服务在关停排空时是否还接新的一轮 | 第 5 章 |
| 准入闸 | TurnAdmission | 优雅停机的闸门：关门后拒绝新轮 | 第 16 章 |
| 自定义终端 | CustomTerminal | 在绘图库之上维护屏幕底部那块固定画面区域 | 第 14 章 |
| 自动压缩分派器 | run_auto_compact | 按优先级在四条实现路径中选择一条执行 | 第 9 章 |
