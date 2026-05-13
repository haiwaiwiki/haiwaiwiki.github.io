window.GUIDE_ARTICLES = [
  {
    id: "gmail-app-google-account-register-mainland",
    title: "大陆用户如何通过 Gmail App 注册 Google 账号",
    description: "通过 Gmail 移动应用进入 Google 账号创建流程，适合新手按截图一步一步操作。相比直接在浏览器里找入口，这种方式路径更固定，更适合新手。",
    cover: "assets/tutorial-images/google/封面.jpg",
    coverFallback: "assets/tutorial-images/google/步骤01.jpg",
    category: "Google 账号",
    group: "account",
    status: "available",
    difficulty: "简单",
    riskLevel: "低",
    updatedAt: "2026-05-11",
    duration: "3-5 分钟",
    targetUsers: [
      "第一次注册 Google 账号的新手用户",
      "不知道从哪里进入 Google 注册入口的用户",
      "更习惯通过手机 App 操作的用户",
      "需要 Gmail 邮箱作为海外服务基础账号的用户"
    ],
    summary: "通过 Gmail 移动应用进入 Google 账号创建流程，适合新手按截图一步一步操作。",
    notices: [
      { type: "note", text: "App Store 搜索页可能出现广告应用，操作时应认准官方 Gmail 应用，开发者应显示为 Google。" },
      { type: "info", text: "注册流程可能因设备、地区、网络环境、Google 页面版本不同而略有变化。本教程只介绍正常账号注册流程，不提供异常注册、异常验证或违反平台规则的操作指导。" }
    ],
    steps: [
      {
        id: "step-01",
        number: "01",
        title: "下载并打开 Gmail 官方应用",
        description: "在 App Store 搜索 Gmail，认准开发者为 Google 的官方应用，点击获取或打开。",
        image: "assets/tutorial-images/google/步骤01.png",
        imageFallback: "assets/tutorial-images/google/步骤01.jpg",
        imageAlt: "在 App Store 搜索 Gmail 官方应用",
        imageCaption: "搜索结果中可能会出现广告应用，正式操作时应选择 “Gmail - Email by Google”。",
        tips: [
          "如果已经安装 Gmail，可以直接点击打开。",
          "注意不要误点广告应用。",
          "官方 Gmail 应用开发者应显示为 Google。"
        ]
      },
      {
        id: "step-02",
        number: "02",
        title: "打开账号管理入口",
        description: "进入 Gmail 后，点击右上角头像，进入账号管理和切换页面。",
        image: "assets/tutorial-images/google/步骤02.png",
        imageFallback: "assets/tutorial-images/google/步骤02.jpg",
        imageAlt: "点击 Gmail 右上角头像进入账号管理入口",
        imageCaption: "如果设备里已经登录过其他 Google 账号，会先看到账号列表。",
        tips: [
          "这是进入“添加账号”的上一步。"
        ]
      },
      {
        id: "step-03",
        number: "03",
        title: "添加其他账号",
        description: "点击“添加其他账号”，在邮箱类型列表中选择 Google。",
        image: "assets/tutorial-images/google/步骤03.png",
        imageFallback: "assets/tutorial-images/google/步骤03.jpg",
        imageAlt: "在 Gmail 中添加其他账号并选择 Google",
        imageCaption: "这里是从 Gmail App 进入 Google 登录或注册流程的关键入口。",
        tips: [
          "不要选择 iCloud、Outlook、Yahoo 或其他 IMAP。",
          "注册 Google 账号应选择 Google 入口。"
        ]
      },
      {
        id: "step-04",
        number: "04",
        title: "创建账号并选择个人用途",
        description: "进入 Google 登录页后，点击“创建账号”，再选择“个人用途”。",
        image: "assets/tutorial-images/google/步骤04.png",
        imageFallback: "assets/tutorial-images/google/步骤04.jpg",
        imageAlt: "在 Google 登录页选择创建账号和个人用途",
        imageCaption: "如果页面默认是登录状态，不要直接输入邮箱，应先进入“创建账号”流程。",
        tips: [
          "个人用户一般选择“个人用途”。",
          "如果没有特殊需求，不要选择工作或业务用途。"
        ]
      },
      {
        id: "step-05",
        number: "05",
        title: "填写姓名",
        description: "按照页面提示填写姓氏和名字，建议使用英文或拼音格式，方便后续使用。",
        image: "assets/tutorial-images/google/步骤05.png",
        imageFallback: "assets/tutorial-images/google/步骤05.jpg",
        imageAlt: "填写 Google 账号姓名信息",
        imageCaption: "这是 Google 账号注册的基础信息填写步骤。",
        tips: [
          "姓名尽量保持规范和稳定。",
          "不建议随意乱填。",
          "后续很多海外服务会直接读取 Google 账号名称。"
        ]
      },
      {
        id: "step-06",
        number: "06",
        title: "填写生日和性别",
        description: "继续填写出生年月日和性别信息，然后点击下一步。",
        image: "assets/tutorial-images/google/步骤06.png",
        imageFallback: "assets/tutorial-images/google/步骤06.jpg",
        imageAlt: "填写生日和性别信息",
        imageCaption: "Google 会根据这些信息进行账号基础设置和年龄相关判断。",
        tips: [
          "信息应尽量真实并符合实际使用需求。",
          "如果是未成年人账号，部分功能和权限可能受到限制。",
          "不建议为了绕开限制而虚构关键信息。"
        ]
      },
      {
        id: "step-07",
        number: "07",
        title: "选择 Gmail 地址",
        description: "系统通常会给出几个默认 Gmail 地址，也可以选择“创建您自己的 Gmail 邮箱”进行自定义。",
        image: "assets/tutorial-images/google/步骤07.png",
        imageFallback: "assets/tutorial-images/google/步骤07.jpg",
        imageAlt: "选择或自定义 Gmail 邮箱地址",
        imageCaption: "用户可以在默认推荐和自定义邮箱名之间进行选择。",
        tips: [
          "默认推荐地址可以直接使用。",
          "如果想更好记，可以自定义邮箱名。",
          "建议避免过度暴露个人隐私信息。"
        ]
      },
      {
        id: "step-08",
        number: "08",
        title: "设置密码",
        description: "输入密码并再次确认，建议使用包含字母、数字和符号的强密码。",
        image: "assets/tutorial-images/google/步骤08.png",
        imageFallback: "assets/tutorial-images/google/步骤08.jpg",
        imageAlt: "设置 Google 账号密码",
        imageCaption: "密码设置完成后即可继续后续验证流程。",
        tips: [
          "不要设置过于简单的密码。",
          "不要和其他网站完全共用密码。",
          "可以结合密码管理器保存。"
        ]
      }
    ],
    followUps: {
      title: "后续可能出现的步骤",
      description: "完成密码设置后，后续页面可能还会出现以下步骤，具体是否出现取决于设备、地区、网络环境和 Google 当前策略。",
      items: [
        {
          title: "手机号验证",
          description: "如果页面要求手机号验证，请填写自己常用的手机号，并输入收到的验证码。",
          tip: "验证码属于敏感信息，截图时必须隐藏。"
        },
        {
          title: "添加恢复邮箱",
          description: "恢复邮箱可用于找回密码并提升账号安全性。"
        },
        {
          title: "同意服务条款",
          description: "阅读服务条款和隐私政策后，点击同意。"
        },
        {
          title: "完成创建并检查安全设置",
          description: "账号创建完成后，建议进入 Google 账号安全设置页面，检查手机号、恢复邮箱以及登录设备。"
        }
      ]
    }
  },
  {
    id: "apple-id-region",
    title: "2026最新外区Apple ID注册全指南（免信用卡/免翻墙）",
    description: "面向新手的外区 Apple ID 注册与 App Store 首次使用教程，覆盖 iCloud 官网注册、App Store 登录、地区检查、账单地址补全、None 支付方式验证，以及最容易导致封号或锁机的登录注意事项。",
    cover: "assets/tutorial-images/apple-id/封面.jpg",
    coverFallback: "assets/placeholder.svg",
    category: "Apple ID",
    group: "region",
    status: "available",
    difficulty: "中等",
    riskLevel: "中",
    updatedAt: "2026-05-12",
    duration: "10-20 分钟",
    targetUsers: [
      "需要下载国区 App Store 没有的应用的新手用户",
      "需要使用 ChatGPT、Gemini 等海外 AI 应用的用户",
      "需要下载特定海外游戏或工具类 App 的用户",
      "需要使用港区、台区或美区 App Store 的用户",
      "希望避免信用卡绑定和常见注册风控的新手用户"
    ],
    summary: "这篇教程以新注册外区 Apple ID 为主线，整理 iCloud 官网注册、UU 加速器准备、App Store 登录、地区与账单地址检查，以及通过下载免费外区 App 触发账户验证并选择 None 支付方式。适用于任意目标地区的 Apple ID，关键是地区、地址和登录路径保持一致。",
    notices: [
      { type: "warning", text: "千万不要在 iPhone 的“设置”里登录刚注册的外区 Apple ID。正确方式是只在 App Store 里退出原账号后登录外区 ID。" },
      { type: "warning", text: "注册阶段建议关闭代理、加速器、科学上网软件，使用真实稳定的网络环境。进入 App Store 首次验证前，再按教程开启 UU 加速器的 App Store 加速。" },
      { type: "note", text: "本方法适用于任意目标地区 Apple ID。后续账单地址必须与注册时选择的国家或地区一致，不要把美国地址填到土区、港区或台区账号里。" },
      { type: "info", text: "本教程只用于正常注册、地区切换和 App Store 使用说明。请遵守 Apple 服务条款、应用商店规则和所在地法律法规。" }
    ],
    links: [
      {
        title: "App Store 官网文档",
        url: "https://developer.apple.com/cn/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store/"
      },
      {
        title: "iCloud 官网地址",
        url: "https://www.icloud.com/"
      },
      {
        title: "Apple 官网地址",
        url: "https://account.apple.com/"
      },
      {
        title: "地址生成器示例",
        url: "https://www.meiguodizhi.com/"
      }
    ],
    steps: [
      {
        id: "apple-step-01",
        number: "01",
        title: "打开 iCloud 官网并进入创建账户",
        navTitle: "进入注册入口",
        description: "在浏览器打开 iCloud 官网，点击登录入口，再选择“创建你的 Apple 账户”。新手优先使用 iCloud 官网入口，路径更直观，也方便后续继续完成邮箱和手机验证。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤01-01.jpg",
            alt: "在海外服务使用指南中找到 iCloud 官网地址",
            caption: "先从教程里的相关链接进入 iCloud 官网，避免手动搜索误进广告页或相似页面。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤01-02.jpg",
            alt: "打开 iCloud 官网首页",
            caption: "进入 iCloud 官网后，先找到页面上的登录入口。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤01-03.jpg",
            alt: "在 Apple 账户登录页选择创建你的 Apple 账户",
            caption: "在登录页点击“创建你的 Apple 账户”，进入新账号注册流程。"
          }
        ],
        tips: [
          "注册前建议关闭代理、加速器和科学上网软件，使用真实稳定的国内网络。",
          "如果浏览器已经登录过其他 Apple 账户，可以先退出，或者换一个干净浏览器环境。",
          "不要在短时间内反复刷新、反复提交注册信息。"
        ]
      },
      {
        id: "apple-step-02",
        number: "02",
        title: "填写姓名、地区、生日、邮箱和密码",
        navTitle: "填写基础资料",
        description: "按照页面提示填写姓名、国家或地区、出生日期、邮箱和密码。这里的国家或地区就是你要注册的目标区，例如土耳其、美国、香港或台湾。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤02-01.jpg",
            alt: "填写 Apple 账户姓名地区生日邮箱和密码",
            caption: "填写基础资料时，地区、生日、邮箱和密码都建议保持长期稳定。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤02-02.jpg",
            alt: "填写手机号并选择短信验证",
            caption: "手机号可以使用 +86 中国大陆手机号，验证方式一般选择短信。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤02-03.jpg",
            alt: "填写验证码并确认营销通知选项",
            caption: "按页面要求填写图形验证码，营销通知选项可按个人需要保留或取消。"
          }
        ],
        tips: [
          "邮箱建议使用自己长期可用的邮箱，不要使用临时邮箱。",
          "出生年份建议保证账号为成年人状态，避免后续遇到年龄限制。",
          "密码不要和其他网站完全共用，最好用密码管理器保存。"
        ]
      },
      {
        id: "apple-step-03",
        number: "03",
        title: "验证电子邮件地址",
        navTitle: "邮箱验证",
        description: "提交基础信息后，Apple 会向你填写的邮箱发送验证码。打开邮箱查看邮件，把收到的 6 位验证码填回页面。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤03-01.jpg",
            alt: "验证 Apple 账户电子邮件地址",
            caption: "邮箱验证码通常为 6 位数字，输入后继续下一步。"
          }
        ],
        tips: [
          "验证码不要发给任何人。",
          "如果收不到邮件，先检查垃圾邮件或广告邮件文件夹。",
          "短时间内不要频繁点击重新发送验证码。"
        ]
      },
      {
        id: "apple-step-04",
        number: "04",
        title: "验证手机号码",
        navTitle: "手机验证",
        description: "完成邮箱验证后，继续输入手机短信验证码。手机号可以使用国内 +86 手机号，只要能正常接收短信即可。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤04-01.jpg",
            alt: "验证 Apple 账户手机号码",
            caption: "收到短信后填写验证码，完成手机号验证。"
          }
        ],
        tips: [
          "如果收不到短信，可以等待一段时间再试。",
          "不要频繁更换手机号、网络和设备重新提交。",
          "手机号是后续找回账号的重要凭据，建议使用自己长期持有的号码。"
        ]
      },
      {
        id: "apple-step-05",
        number: "05",
        title: "同意 iCloud 条款并完成账户创建",
        navTitle: "同意条款",
        description: "邮箱和手机验证完成后，页面会显示 iCloud 条款与条件。确认无误后点击“同意”，完成 Apple 账户创建。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤05-01.jpg",
            alt: "同意 iCloud 条款与条件",
            caption: "点击“同意”后，Apple 账户注册流程基本完成。"
          }
        ],
        tips: [
          "如果页面提示无法创建账户，优先检查是否开了代理、网络是否异常。",
          "如果卡在验证环节，不要连续高频提交，可以稍后再试。",
          "注册成功后先保存好邮箱、手机号和密码，再进行 App Store 登录。"
        ]
      },
      {
        id: "apple-step-06",
        number: "06",
        title: "确认注册成功并保存账号信息",
        navTitle: "注册成功",
        description: "完成条款确认后，看到注册成功或进入 Apple 账户页面，就说明新账号已经创建完成。先保存好注册邮箱、绑定手机号、密码和目标地区信息，再进入后面的 App Store 首次使用流程。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/注册成功.jpg",
            alt: "Apple 账户注册成功",
            caption: "看到注册成功后，先保存账号信息，再继续 App Store 首次使用流程。"
          }
        ],
        tips: [
          "注册邮箱、手机号和密码是后续找回账号的重要凭据。",
          "记住注册时选择的国家或地区，后面账单地址必须与这个地区一致。",
          "到这里账号注册已经完成，后面的步骤是为了让它能在 App Store 正常下载免费外区 App。"
        ]
      },
      {
        id: "apple-step-07",
        number: "07",
        title: "先准备 UU 加速器的 App Store 加速",
        navTitle: "准备 UU 加速",
        description: "进入 App Store 首次登录和验证前，建议先打开 UU 加速器，搜索 App Store 并开启加速，这样后续登录和账户验证更顺，不用反复清缓存重试。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤06-01.jpg",
            alt: "在 UU 加速器中搜索 App Store",
            caption: "在 UU 加速器里搜索 App Store，找到对应的加速入口。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤06-02.jpg",
            alt: "UU 加速器实名认证提示",
            caption: "如果 UU 加速器提示实名认证或海外用户登记，按自身情况处理后再继续。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤06-03.jpg",
            alt: "开启 App Store 加速",
            caption: "开启 App Store 加速后，再回到 App Store 登录新注册的外区账号。"
          },
        ],
        tips: [
          "这里不是让你在注册阶段开加速，注册阶段仍建议保持真实稳定网络。",
          "UU 加速器的作用主要是帮助 App Store 首次登录、检查地区和触发 None 支付方式验证。",
          "不要在系统设置里的 iCloud 登录外区 ID，只进入 App Store 操作。"
        ]
      },
      {
        id: "apple-step-08",
        number: "08",
        title: "只在 App Store 登录，并检查国家或地区",
        navTitle: "登录 App Store",
        description: "打开 App Store，点击右上角头像，先退出当前商店账号，再登录新注册的外区 Apple ID。登录成功后进入账户页面，优先检查 Country/Region 是否为你注册时选择的目标地区。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤07-01退出登录.jpg",
            alt: "在 App Store 退出当前账号",
            caption: "在 App Store 账号页滑到底部，退出当前账号。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-02登录成功.jpg",
            alt: "外区 Apple ID 登录成功",
            caption: "登录成功后进入 Account 页面，继续检查账号设置。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-03检查账单地址.jpg",
            alt: "进入 App Store 账户设置",
            caption: "在 Account Settings 中检查 Country/Region 是否为目标地区。"
          },
          {
            src: "assets/tutorial-images/apple-id/无法登录.jpg",
            alt: "App Store 登录提示无法验证",
            caption: "如果登录出现 Authentication Failed，可以先去 iCloud 网页登录验证，再退出 App Store、清除缓存后重新登录。"
          }
        ],
        tips: [
          "App Store 登录只影响应用商店下载，不会替换你的 iCloud 主账号。",
          "如果登录提示无法验证，先到 iCloud 官网登录一次完成验证，再回到 App Store 重试。",
          "必要时退出 App Store，清除 App Store 缓存后重新登录。"
        ]
      },
      {
        id: "apple-step-09",
        number: "09",
        title: "进入管理支付方式，先补全账单地址",
        navTitle: "补全账单地址",
        description: "进入 Manage Payments 后，如果暂时没有看到 None 或提示 Cannot verify this payment method，不要慌。先点进账单地址，把街道、邮编、城市、电话等必填项补全，地址必须与账号国家或地区一致。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤07-03检查账单地址.jpg",
            alt: "进入 Account Settings 的 Manage Payments",
            caption: "在 Account Settings 中进入 Manage Payments。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-04检查账单地址.jpg",
            alt: "查看账单地址",
            caption: "如果已有 Billing Address，先点进去检查信息是否完整。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-05编辑地址.jpg",
            alt: "编辑账单地址",
            caption: "看到必填项缺失时，点击 Edit 后补全地址。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-06地址生成器.jpg",
            alt: "使用地址生成器生成地址",
            caption: "地址生成器只作格式参考，实际要选择与 Apple ID 国家或地区一致的地址。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤07-07保存地址.jpg",
            alt: "保存完整账单地址",
            caption: "街道、邮编、城市和电话补全后，点击 Done 保存。"
          }
        ],
        tips: [
          "没有 None 时先不要硬填信用卡，也不要急着换账号。",
          "地址必须匹配账号地区，例如土区账号填土耳其地址，美区账号填美国地址。",
          "保存地址后再去下载免费外区 App，很多时候 None 会在首次验证流程里出现。"
        ]
      },
      {
        id: "apple-step-10",
        number: "10",
        title: "下载免费外区 App，触发首次账户验证并选择 None",
        navTitle: "选择 None",
        description: "账单地址保存后，去下载任意一款免费的外区 App，例如 ChatGPT。第一次下载时通常会弹出 Review 或 Complete your Apple Account，根据提示进入账户验证页面，选择 None 作为支付方式，并确认刚才保存的账单地址。",
        images: [
          {
            src: "assets/tutorial-images/apple-id/步骤08-01下载应用校验.jpg",
            alt: "下载免费 App 时触发 Review 验证",
            caption: "首次下载免费 App 时，点击 Review 进入账户信息验证。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤08-02 支付方式none.jpg",
            alt: "选择 None 支付方式",
            caption: "在 Payment Method 中选择 None，然后确认账单地址。"
          },
          {
            src: "assets/tutorial-images/apple-id/步骤08-02 下载应用.jpg",
            alt: "开始下载免费外区 App",
            caption: "验证完成后，免费 App 就可以正常下载。"
          }
        ],
        tips: [
          "如果这里仍然没有 None，优先检查 UU 加速器的 App Store 加速是否已经开启。",
          "不要为了跳过验证随便填不可靠的信用卡资料。",
          "不同地区界面语言可能不同，但核心逻辑都是先 Review，再选择 None，再保存地址。"
        ]
      },
      {
        id: "apple-step-11",
        number: "11",
        title: "备用方法：先注册国区账号，再改成外区",
        navTitle: "备用改区",
        description: "如果你直接注册目标地区账号一直失败，可以先正常注册一个中国大陆 Apple ID，登录后再进入个人信息页面，把国家或地区改成目标地区。这个方法放在最后，只作为注册失败时的备用方案。",
        tips: [
          "主线仍然推荐直接注册目标地区账号，再按前面流程完成 App Store 首次验证。",
          "改区前请确认账号没有未完成订单、未用完余额或仍在生效的订阅。",
          "改区过程中最容易卡在付款方式和账单地址，仍可参考前面的 UU、地址补全和 None 验证思路。"
        ]
      }
    ],
    followUps: {
      title: "使用外区 Apple ID 的长期注意事项",
      description: "外区 ID 创建成功后，真正容易出问题的不是下载应用，而是错误登录、地区和地址不一致、频繁切区以及安全升级弹窗处理不当。",
      items: [
        {
          title: "只用于 App Store",
          description: "外区 ID 建议只在 App Store 中登录，用来下载应用；iCloud 主账号继续使用你原来的常用账号。"
        },
        {
          title: "不要频繁切换国家地区",
          description: "频繁改区、频繁更换付款方式或账单地址，都可能增加账号风控概率。"
        },
        {
          title: "谨慎处理安全升级弹窗",
          description: "如果提示升级账户安全，先不要一路确认，优先选择“其他选项”并选择“不升级”。"
        },
        {
          title: "保存好邮箱和手机号",
          description: "注册邮箱和绑定手机号是后续找回账号的重要凭据，建议长期保留。"
        }
      ]
    }
  },
  {
    id: "turkey-gpt-subscription",
    title: "土区 Apple 礼品卡充值订阅 ChatGPT Plus：流程说明与风险提示",
    description: "通过外区 Apple ID 和土区 iTunes Gift Card 订阅 ChatGPT Plus 的流程说明，并重点提醒余额、改区、支付和账号风控风险。",
    cover: "assets/tutorial-images/chatgpt-subscription-tr/cover.png",
    coverFallback: "assets/placeholder.svg",
    coverMode: "cover",
    category: "ChatGPT 订阅",
    group: "subscription",
    status: "high-risk",
    difficulty: "中等",
    riskLevel: "高",
    updatedAt: "2026-05-12",
    duration: "10-15 分钟",
    targetUsers: [
      "已经拥有外区 Apple ID 的用户",
      "想了解 iTunes Gift Card 充值和 App Store 订阅流程的用户",
      "想评估土区订阅风险的用户",
      "不建议完全新手直接操作"
    ],
    summary: "本教程介绍通过外区 Apple ID、iTunes Gift Card 礼品卡充值，并在 App Store 内订阅 ChatGPT Plus 的基本流程。同时说明改区、余额、支付、账号风控等常见风险，适合已经了解外区 Apple ID 基础操作的用户阅读。",
    topSections: [
      {
        type: "risk",
        title: "先看风险，再决定是否操作",
        description: "这类订阅方式涉及外区 Apple ID、礼品卡充值、App Store 订阅、余额处理和账号风控。礼品卡通常购买后不易退款，订阅是否成功也可能受到 Apple ID 地区、支付环境、网络环境、账号状态等因素影响。本文只做正常流程说明和风险提示，不保证一定成功，也不提供违反平台规则或异常规避风险控制的做法。"
      }
    ],
    notices: [
      { type: "warning", text: "本文只做正常流程说明和风险提示，不保证任何平台、账号、支付方式一定可用。" },
      { type: "warning", text: "用户需要自行承担礼品卡不可退、账号风控、订阅失败、余额残留等风险。不建议在主力 Apple ID 上进行高风险尝试。" },
      { type: "note", text: "礼品卡价格、汇率、手续费、库存、支付方式和 ChatGPT Plus 订阅价格都可能变化，最终以平台、App Store 和 ChatGPT App 内实际显示为准。" },
      { type: "info", text: "不提供异常支付、异常注册、违反平台规则或规避风险控制的操作指导。请遵守 Apple、OpenAI、礼品卡平台及所在地法律法规。" }
    ],
    links: [
      {
        title: "外区 Apple ID 注册教程",
        url: "#/article/apple-id-region"
      },
      {
        title: "Oyunfor",
        url: "https://www.oyunfor.com/"
      },
      {
        title: "SEAGM",
        url: "https://www.seagm.com/zh-cn"
      },
      {
        title: "Apple 中国大陆技术支持",
        url: "https://support.apple.com/zh-cn"
      }
    ],
    platforms: [
      {
        name: "Oyunfor",
        url: "https://www.oyunfor.com/",
        features: [
          "可以购买土区 iTunes Gift Card。",
          "价格通常按实时汇率或平台报价变化。",
          "不支持国内银行卡。",
          "可能支持 MasterCard / Visa 等国际卡，或平台页面展示的其他支付方式。",
          "是否可用、手续费和到账速度以平台实际页面为准。"
        ]
      },
      {
        name: "SEAGM",
        url: "https://www.seagm.com/zh-cn",
        features: [
          "可以购买土区 iTunes Gift Card。",
          "支持支付宝、微信等多种支付方式。",
          "支付方式更适合国内用户。",
          "可能会产生额外手续费。",
          "手续费、汇率和最终价格以付款页面为准。"
        ]
      }
    ],
    extraSections: [
      {
        type: "warning",
        title: "为什么不建议频繁修改 Apple ID 地区？",
        description: "不建议为了订阅临时把主力 Apple ID 改到土耳其区。原因是 Apple ID 一旦存在余额，切换地区会受到限制。比如账号里残留 1 土耳其里拉余额，也可能导致无法直接转回国区。遇到这种情况，通常需要联系 Apple 客服处理余额问题，可能需要放弃余额后才能切回原地区。Apple 中国大陆客服电话：400-666-8800。",
        items: [
          "长期订阅更建议使用单独注册的外区 Apple ID。",
          "不要用主力 Apple ID 频繁切换地区。",
          "改区前先确认是否还有余额、订阅、家庭共享、付款方式等限制。",
          "外区 Apple ID 注册教程可查看站内对应文章。"
        ]
      }
    ],
    steps: [
      {
        id: "turkey-gpt-step-01",
        number: "01",
        title: "准备外区 Apple ID",
        navTitle: "准备 Apple ID",
        description: "开始前需要准备一个可用于土耳其区 App Store 的 Apple ID。长期使用更建议新注册外区 Apple ID，而不是频繁修改主力账号地区。",
        relatedArticleId: "apple-id-region",
        tips: [
          "不建议频繁修改主力 Apple ID 地区。",
          "如果账号内有余额，后续切区会变麻烦。",
          "外区 Apple ID 注册方法请查看站内“外区 Apple ID 注册全指南”。"
        ]
      },
      {
        id: "turkey-gpt-step-02",
        number: "02",
        title: "选择礼品卡购买平台",
        navTitle: "选择平台",
        description: "可以在多个平台购买土耳其区 iTunes Gift Card。本文会把 SEAGM 和 Oyunfor 分开说明，也可以自行评估其他正规渠道。不同平台支付方式、手续费、到账速度和售后能力不同。",
        tips: [
          "Oyunfor 的价格和支付方式以平台页面为准，通常不支持国内银行卡。",
          "SEAGM 覆盖支付宝、微信等支付方式，但可能有额外手续费。",
          "价格、库存、手续费以平台实际页面为准。"
        ]
      },
      {
        id: "turkey-gpt-step-03",
        number: "03",
        title: "SEAGM 示例：登录并找到土耳其区礼品卡",
        navTitle: "SEAGM 购买",
        imageLayout: "wide",
        description: "如果选择 SEAGM，可以先登录账号，再搜索或进入土耳其区 iTunes Gift Card / Apple Gift Card 商品页。SEAGM 覆盖的支付方式较多，但最终价格、手续费和到账速度仍以结算页面为准。",
        images: [
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/01seagm登录.jpg",
            alt: "登录 SEAGM 账号",
            caption: "SEAGM 示例：登录后再搜索对应地区的 Apple 礼品卡。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/02seagm土耳其礼品卡.jpg",
            alt: "SEAGM 土耳其礼品卡商品",
            caption: "确认商品地区是土耳其区，再继续选择面值。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/03seagm立即购买.jpg",
            alt: "SEAGM 立即购买礼品卡",
            caption: "确认商品、面值和结算价格后，再进入购买流程。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/04seagm立即购买.jpg",
            alt: "SEAGM 确认购买",
            caption: "再次确认地区、面值和价格，不确定时先不要付款。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/05seagm立即支付（选择支付方式）.jpg",
            alt: "SEAGM 选择支付方式",
            caption: "SEAGM 示例：支付方式、手续费和最终价格以付款页面为准。"
          }
        ],
        tips: [
          "注册时请使用自己能正常接收邮件的邮箱。",
          "确认商品地区是 Turkey / Türkiye 后再付款。",
          "手续费、汇率和最终价格以付款页面为准。"
        ]
      },
      {
        id: "turkey-gpt-step-04",
        number: "04",
        title: "Oyunfor 示例：登录并选择土耳其区礼品卡",
        navTitle: "Oyunfor 参考",
        imageLayout: "wide",
        description: "如果你不使用 SEAGM，也可以参考 Oyunfor 的路径：按页面提示注册或登录账号，再选择土耳其区 iTunes Gift Card。Oyunfor 的支付方式对国内用户不一定方便，实际可用方式以平台页面为准。新手可以先看完 SEAGM 主线，再把这一节当作备选参考。",
        images: [
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/01oyunfor注册.jpg",
            alt: "Oyunfor 注册页面",
            caption: "Oyunfor 示例：按平台页面提示注册账号。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/02oyunfor登录.jpg",
            alt: "Oyunfor 登录页面",
            caption: "登录后再选择对应地区的 Apple 礼品卡商品。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/03oyunfor500面值.jpg",
            alt: "Oyunfor 土耳其区礼品卡面值",
            caption: "确认礼品卡地区和面值后再继续。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/04oyunfor按需添加购物车.jpg",
            alt: "Oyunfor 按需添加购物车",
            caption: "按实际需要选择数量和面值，不要超额充值。"
          }
        ],
        tips: [
          "不要买错国家或地区。",
          "Oyunfor 不一定支持国内银行卡，付款前先确认自己能否完成支付。",
          "购买前确认商品标题、地区、面值和到账方式。"
        ]
      },
      {
        id: "turkey-gpt-step-05",
        number: "05",
        title: "确认礼品卡地区、面值和用途",
        navTitle: "确认商品",
        imageLayout: "wide",
        description: "无论使用哪个平台，都要在付款前确认礼品卡地区是 Turkey / Türkiye，并确认可用于 App Store / iTunes 账户充值。不要只看价格，地区和用途比价格更重要。",
        image: "assets/tutorial-images/chatgpt-subscription-tr/02seagm土耳其礼品卡.jpg",
        imageFallback: "assets/placeholder.svg",
        imageAlt: "确认土耳其区礼品卡商品",
        imageCaption: "购买前确认商品地区是土耳其区，并确认可用于 App Store 兑换。",
        tips: [
          "商品地区非常重要。",
          "购买前检查是否支持 App Store 兑换。",
          "不确定时不要急着付款。"
        ]
      },
      {
        id: "turkey-gpt-step-06",
        number: "06",
        title: "选择合适面值",
        navTitle: "选择面值",
        imageLayout: "wide",
        description: "根据需要选择礼品卡面值。如果是为了订阅 ChatGPT Plus，需要保证余额足够覆盖 App Store 内显示的订阅价格。不要把某个金额当作长期固定价格，购买前以 App 内实际价格为准。",
        image: "assets/tutorial-images/chatgpt-subscription-tr/03oyunfor500面值.jpg",
        imageFallback: "assets/placeholder.svg",
        imageAlt: "选择礼品卡面值",
        imageCaption: "如果 ChatGPT Plus 显示为 499 土耳其里拉，通常可选择 500 面值礼品卡；最终以 App 内实际价格为准。",
        tips: [
          "订阅价格可能变化，最终以 ChatGPT App 或 App Store 实际显示为准。",
          "购买前要预留价格变化和税费差异风险。",
          "礼品卡购买后通常不容易退款。"
        ]
      },
      {
        id: "turkey-gpt-step-07",
        number: "07",
        title: "完成付款并获取兑换码",
        navTitle: "付款取码",
        imageLayout: "wide",
        description: "选择支付方式并完成付款后，在订单页面或邮箱中查看礼品卡兑换码。不同平台的支付方式不同，最终成本以付款页面为准。兑换码属于敏感信息，截图和转发时必须打码。",
        images: [
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/05seagm立即支付（选择支付方式）.jpg",
            alt: "SEAGM 选择支付方式",
            caption: "SEAGM 示例：支付方式、手续费和最终价格以付款页面为准。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/06oyunfor付款.jpg",
            alt: "Oyunfor 付款页面",
            caption: "Oyunfor 示例：确认付款方式和订单金额后再支付。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/05oyunfor发票.jpg",
            alt: "Oyunfor 订单发票",
            caption: "支付成功后保存订单、发票或邮件记录，便于后续售后沟通。"
          }
        ],
        tips: [
          "兑换码不要发给别人。",
          "支付成功后保存订单截图。",
          "如果长时间未到账，联系购买平台客服。"
        ]
      },
      {
        id: "turkey-gpt-step-08",
        number: "08",
        title: "进入 App Store 兑换礼品卡",
        navTitle: "兑换礼品卡",
        imageLayout: "phone",
        description: "打开 App Store，进入账户页面，选择兑换礼品卡或代码，将购买到的兑换码输入进去。兑换前确认当前 App Store 登录的是目标土区 Apple ID。",
        images: [
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/步骤八01兑换礼品卡.jpg",
            fallback: "assets/placeholder.svg",
            alt: "在 App Store 账户页面选择兑换礼品卡或代码",
            caption: "进入 App Store 账户页面后，选择兑换礼品卡或代码。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/步骤八02输入代码.jpg",
            fallback: "assets/placeholder.svg",
            alt: "输入 Apple 礼品卡兑换代码",
            caption: "输入礼品卡兑换码前，确认当前 App Store 登录的是目标外区 Apple ID。"
          }
        ],
        tips: [
          "一定要确认 Apple ID 地区和礼品卡地区一致。",
          "兑换码截图必须打码。",
          "礼品卡兑换后余额通常不能随意转移。"
        ]
      },
      {
        id: "turkey-gpt-step-09",
        number: "09",
        title: "确认 Apple ID 余额",
        navTitle: "确认余额",
        imageLayout: "phone",
        description: "兑换成功后，在 App Store 账户页面确认余额是否到账。余额到账后才建议继续订阅，不要在余额未显示时反复尝试付款。",
        image: "assets/tutorial-images/chatgpt-subscription-tr/步骤九01确认余额.jpg",
        imageFallback: "assets/placeholder.svg",
        imageAlt: "确认 Apple ID 余额",
        imageCaption: "余额到账后才可以继续订阅。",
        tips: [
          "如果余额没有及时显示，可以稍等后刷新。",
          "如果兑换失败，先检查地区是否一致。",
          "不要重复尝试错误兑换码。"
        ]
      },
      {
        id: "turkey-gpt-step-10",
        number: "10",
        title: "打开 ChatGPT App 订阅 Plus",
        navTitle: "订阅 Plus",
        imageLayout: "phone",
        description: "打开 ChatGPT App，登录自己的 ChatGPT 账号，在订阅页面选择 ChatGPT Plus，并通过 App Store 余额完成订阅。订阅价格和页面样式以 App 内实际显示为准。",
        images: [
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/步骤十 01升级plus.jpg",
            fallback: "assets/placeholder.svg",
            alt: "在 ChatGPT App 进入升级 Plus 页面",
            caption: "打开 ChatGPT App 后，进入 Plus 升级页面，价格以 App 内实际显示为准。"
          },
          {
            src: "assets/tutorial-images/chatgpt-subscription-tr/步骤十 02升级plus.jpg",
            fallback: "assets/placeholder.svg",
            alt: "通过 App Store 弹窗确认 ChatGPT Plus 订阅",
            caption: "订阅过程以 App Store 弹窗显示为准，确认余额和账号状态后再继续。"
          }
        ],
        tips: [
          "订阅前确认 Apple ID 余额足够。",
          "订阅过程以 App Store 弹窗显示为准。",
          "不要在不确定账号状态时反复尝试付款。"
        ]
      },
      {
        id: "turkey-gpt-step-11",
        number: "11",
        title: "订阅成功后检查状态",
        navTitle: "检查状态",
        imageLayout: "phone",
        description: "订阅完成后，回到 ChatGPT App 检查 Plus 状态是否生效。如果没有立即生效，可以重新打开 App、重新登录账号，或稍后再看。",
        image: "assets/tutorial-images/chatgpt-subscription-tr/步骤十一检查订阅.jpg",
        imageFallback: "assets/placeholder.svg",
        imageAlt: "检查 ChatGPT Plus 状态",
        imageCaption: "如果没有立即生效，可以重新登录或稍后再看。",
        tips: [
          "订阅状态可能需要短时间同步。",
          "如果付款成功但未生效，保留订单记录。",
          "必要时联系 Apple 或 OpenAI 支持。"
        ]
      },
      {
        id: "turkey-gpt-step-12",
        number: "12",
        title: "取消自动续订",
        navTitle: "取消续订",
        imageLayout: "phone",
        description: "如果不想下个月自动扣费，可以进入 App Store 的订阅管理页面，找到 ChatGPT 订阅并取消自动续订。取消自动续订后，已付费周期内通常仍可继续使用。",
        image: "assets/tutorial-images/chatgpt-subscription-tr/步骤十二 取消订阅.jpg",
        imageFallback: "assets/placeholder.svg",
        imageAlt: "取消 ChatGPT 自动续订",
        imageCaption: "取消自动续订后，已付费周期内通常仍可继续使用。",
        tips: [
          "取消自动续订不等于立即退款。",
          "订阅到期前仍可使用当前周期服务。",
          "建议订阅成功后立刻确认续订状态。"
        ]
      }
    ],
    riskWarnings: [
      {
        title: "礼品卡购买风险",
        description: "礼品卡价格、库存、到账速度、手续费都可能变化。购买后通常不容易退款，买错地区或买错面值都可能造成损失。"
      },
      {
        title: "Apple ID 地区和余额风险",
        description: "Apple ID 地区、余额、订阅、家庭共享、付款方式等都会影响改区和订阅。账号残留余额可能导致无法切回原地区。"
      },
      {
        title: "支付和手续费风险",
        description: "不同平台支付方式不同，部分平台可能支持国际卡或平台页面展示的其他支付方式，部分平台支持支付宝和微信，但可能有额外手续费。最终成本以付款页面为准。"
      },
      {
        title: "订阅价格变化风险",
        description: "ChatGPT Plus 在不同地区的 App Store 价格可能变化。页面中不承诺固定价格，最终以 App 内显示为准。"
      },
      {
        title: "ChatGPT 账号风控风险",
        description: "如果账号登录环境频繁变化、IP 状态不稳定、地区跳动明显、异常登录频繁，可能触发安全验证或风控。建议保持稳定、正常的使用环境。"
      },
      {
        title: "内容使用风险",
        description: "使用 ChatGPT 时应遵守平台规则。不要尝试违规、危险、违法或明显敏感的请求，避免因异常使用行为影响账号安全。"
      },
      {
        title: "售后风险",
        description: "如果礼品卡平台、Apple、OpenAI 三方之间出现问题，处理链路可能比较长。建议保留购买记录、兑换记录、付款记录和订阅记录。"
      }
    ],
    faq: [
      {
        question: "Oyunfor 和 SEAGM 应该如何选择？",
        answer: "不同平台的价格、库存、支付方式、手续费和到账速度都可能变化。Oyunfor 对国内银行卡用户不一定方便；SEAGM 覆盖支付宝、微信等支付方式，但可能有额外手续费。最终选择应以实际结算页面和个人风险承受能力为准。"
      },
      {
        question: "订阅 ChatGPT Plus 一定要买 500 面值吗？",
        answer: "不一定。要看 App 内实际显示价格。如果订阅价格是 499 土耳其里拉，500 面值通常够用；但价格可能变化，购买前应以实际页面为准。"
      },
      {
        question: "为什么不建议主力 Apple ID 改区？",
        answer: "因为改区会受到余额、订阅、家庭共享、付款方式等限制。一旦账号里有残留余额，可能无法直接切回国区，处理起来比较麻烦。"
      },
      {
        question: "余额剩 1 里拉怎么办？",
        answer: "一般需要联系 Apple 客服处理余额问题，可能需要放弃余额后才能切换地区。中国大陆 Apple 客服电话：400-666-8800。"
      },
      {
        question: "订阅成功后可以取消自动续订吗？",
        answer: "可以。进入 App Store 的订阅管理页面，找到 ChatGPT 订阅，取消自动续订即可。取消后通常仍可使用到当前付费周期结束。"
      },
      {
        question: "如果付款成功但 ChatGPT Plus 没生效怎么办？",
        answer: "先重新打开 ChatGPT App 或重新登录账号，等待同步。如果仍未生效，保留 App Store 订单记录，并联系 Apple 或 OpenAI 支持。"
      }
    ],
    followUps: {
      title: "再次提醒",
      description: "这篇教程不做价格承诺，也不保证任何地区、平台、支付方式或账号状态一定可用。操作前请确认自己能接受礼品卡不可退、余额残留、订阅失败和售后链路较长等风险。",
      items: [
        {
          title: "保留记录",
          description: "保留购买平台订单、兑换记录、App Store 订单和 ChatGPT 订阅状态截图。"
        },
        {
          title: "稳定使用",
          description: "尽量保持稳定的登录环境和正常使用习惯，避免频繁切换地区、设备和网络。"
        },
        {
          title: "理性判断",
          description: "如果平台价格、支付方式或账号状态看起来异常，不建议继续操作。"
        }
      ]
    }
  },
  {
    id: "google-ai-pro-pixel-offer",
    title: "Google AI Pro 12 个月 Pixel 活动说明：资格、领取方式与风险提醒",
    description: "整理 Google Pixel 设备可领取 Google AI Pro / Google One 试用的官方活动信息、正常领取路径、付款与取消续订注意事项，并说明第三方代认证和账号安全风险。",
    cover: "assets/tutorial-images/Gemini-sub-tr/封面.png",
    coverFallback: "assets/placeholder.svg",
    category: "Gemini 订阅",
    group: "subscription",
    status: "high-risk",
    difficulty: "中等",
    riskLevel: "高",
    hideRiskLevel: true,
    updatedAt: "2026-05-13",
    duration: "10-15 分钟",
    targetUsers: [
      "想了解 Pixel 设备 Google AI Pro 试用活动的用户",
      "已经拥有或准备购买 Pixel 设备的用户",
      "想评估 Gemini / Google One 订阅风险的用户",
      "不建议完全不了解账号安全的新手直接尝试第三方服务"
    ],
    summary: "本文以 Google 官方活动说明为基础，介绍 Pixel 用户领取 Google AI Pro / Google One 试用的正常路径，并提醒付款、续订、账号安全和第三方代认证风险。本站不提供绕过资格验证、机器人认证或提交账号密码的操作教程。",
    topSections: [
      {
        type: "risk",
        title: "先看清活动边界",
        description: "Google 官方说明中，Pixel 相关试用资格通常要求购买并激活指定 Pixel 设备，再通过 Gemini App 或 Google One App 检查资格并开始试用。网上存在第三方代认证、机器人认证等方式，但这类方式可能要求提交 Google 账号密码或二步验证密钥，存在账号被盗、支付风险、资格失效和违反活动要求的可能。本文只做活动说明、正常入口整理和风险提醒。"
      }
    ],
    notices: [
      { type: "warning", text: "不要把 Google 邮箱密码、二步验证密钥、备用验证码、支付卡信息交给不可信第三方。任何要求你提交完整账号凭据的服务，都应按高风险处理。" },
      { type: "warning", text: "本文不提供绕过 Pixel 设备资格验证、代认证机器人、异常注册、异常支付等操作指导。" },
      { type: "note", text: "Google 活动地区、设备型号、试用时长和截止时间会变化，最终以 Google 官方页面和 App 内实际显示为准。" }
    ],
    links: [
      {
        title: "Google 官方 Pixel 设备活动说明",
        url: "https://support.google.com/gemini/answer/13529884"
      },
      {
        title: "Gemini 官网",
        url: "https://gemini.google.com/"
      },
      {
        title: "Google One",
        url: "https://one.google.com/"
      },
      {
        title: "Roxy Browser",
        url: "https://roxybrowser.com/t/porter"
      },
      {
        title: "2FA 验证码工具",
        url: "https://2fa.kennygmail.com/"
      }
    ],
    extraSections: [
      {
        type: "info",
        title: "当前官方活动信息怎么理解？",
        description: "Google 官方页面显示，Pixel 10 Pro、Pixel 10 Pro XL 和 Pixel 10 Pro Fold 在部分国家或地区可获得 Google AI Pro 12 个月试用，活动时间为 2025-08-20 至 2026-10-31；Pixel 10 在部分地区是 Google One Premium 6 个月试用。Pixel 9 Pro 系列也曾有 Google AI Pro 12 个月活动，但官方页面显示其截止时间为 2025-11-15。不同设备、地区和账号状态可能对应不同权益。",
        items: [
          "12 个月 AI Pro 试用通常面向指定 Pro 系列 Pixel 设备。",
          "普通 Pixel 或 a 系列设备可能是 Google One Premium 或 Basic 试用，不一定是 AI Pro。",
          "活动是否出现，以 Gemini App / Google One App 内实际资格检查结果为准。"
        ]
      },
      {
        type: "warning",
        title: "关于第三方代认证",
        description: "市面上可能存在第三方代认证、认证网站或机器人服务。它们往往不是 Google 官方渠道，且可能要求提供账号密码、二步验证密钥或其他敏感信息。本站不公开此类入口，也不建议新手把主力 Google 账号交给第三方处理。即使认证成功，也不能代表账号长期安全或权益长期稳定。",
        items: [
          "不要使用主力 Google 账号测试高风险服务。",
          "不要把 2FA 密钥当成普通验证码随意复制给别人。",
          "绑定支付方式前，先确认账号登录设备、二步验证和恢复方式是否安全。"
        ]
      }
    ],
    steps: [
      {
        id: "gemini-pixel-step-01",
        number: "01",
        title: "确认自己要看的是什么活动",
        navTitle: "确认活动",
        description: "先打开 Google 官方 Pixel 活动说明页，确认当前设备型号、活动地区、试用时长和截止时间。不要只看网上截图或转述，因为 Google 会按设备、地区、账号状态调整资格。",
        tips: [
          "优先看 Google 官方页面和 App 内提示。",
          "Pixel 10 Pro 系列与普通 Pixel 10 的权益不同。",
          "Pixel 9 Pro 系列旧活动已经接近或超过官方截止时间，需以页面为准。"
        ]
      },
      {
        id: "gemini-pixel-step-02",
        number: "02",
        title: "准备 Google 账号与基础安全设置",
        navTitle: "账号准备",
        description: "建议使用长期可控的 Google 账号，并提前检查恢复邮箱、恢复手机号和二步验证。涉及订阅和付款的账号，不建议使用来路不明的成品号。",
        tips: [
          "恢复邮箱和手机号要能正常接收验证。",
          "如果开启身份验证器，要妥善保存密钥和备用码。",
          "不要把账号密码、2FA 密钥和备用码发给别人。"
        ]
      },
      {
        id: "gemini-pixel-step-03",
        number: "03",
        title: "使用官方路径检查资格",
        navTitle: "官方检查",
        description: "如果你有符合条件的 Pixel 设备，可以在 Pixel 手机上打开 Gemini App 或 Google One App，登录目标 Google 账号后检查是否出现试用权益。",
        tips: [
          "Gemini App 内通常会出现 Check eligibility、Start Trial 或升级入口。",
          "Google One App 可在设置中检查可用优惠。",
          "如果没有活动入口，说明账号、设备、地区或活动状态可能不满足条件。"
        ]
      },
      {
        id: "gemini-pixel-step-04",
        number: "04",
        title: "需要时使用独立浏览环境",
        navTitle: "浏览环境",
        description: "如果只是管理多个账号、隔离不同浏览环境，可以使用指纹浏览器或独立浏览器配置文件。它的作用是降低环境混杂带来的登录异常，不代表可以保证活动资格。",
        tips: [
          "Roxy Browser 可以作为浏览环境隔离工具了解。",
          "不要把环境工具理解为官方资格认证工具。",
          "登录 Google 账号时尽量保持网络、设备和操作节奏稳定。"
        ]
      },
      {
        id: "gemini-pixel-step-05",
        number: "05",
        title: "谨慎处理 2FA 密钥",
        navTitle: "2FA 安全",
        description: "二步验证密钥可以生成 6 位动态验证码，本质上是账号安全凭据。可以了解 2FA 验证码工具的工作方式，但不要在不可信网站或机器人里输入主力账号的密钥。",
        tips: [
          "2FA 密钥不是一次性验证码，泄露后风险很高。",
          "如果怀疑密钥泄露，应立刻重置身份验证器并检查登录设备。",
          "第三方 2FA 工具只适合在你完全理解风险时谨慎使用。"
        ]
      },
      {
        id: "gemini-pixel-step-06",
        number: "06",
        title: "绑定付款方式并开始试用",
        navTitle: "绑定付款",
        description: "如果 App 内出现试用权益，按页面提示绑定有效付款方式并开始试用。Google 可能会进行小额预授权或付款验证，最终以付款页面显示为准。",
        tips: [
          "确保付款方式归属、账单地址和账号地区尽量一致。",
          "不要反复尝试失败付款，避免触发支付风控。",
          "订阅价格、税费和试用结束后的收费以页面显示为准。"
        ]
      },
      {
        id: "gemini-pixel-step-07",
        number: "07",
        title: "订阅成功后检查并取消自动续订",
        navTitle: "取消续订",
        description: "试用开通后，进入 Google One 订阅管理页面确认权益状态。如果不想试用期结束后自动扣费，应在到期前取消自动续订。",
        tips: [
          "官方说明中，试用期内取消通常仍可使用到试用期结束。",
          "取消订阅不等于退款，具体以 Google 页面显示为准。",
          "建议截图保存订阅状态、到期时间和取消状态。"
        ]
      }
    ],
    riskWarnings: [
      {
        title: "活动资格风险",
        description: "Pixel 试用权益与设备型号、激活状态、账号地区、账号历史订阅状态有关。页面中不承诺任何账号一定能领取。"
      },
      {
        title: "第三方服务风险",
        description: "第三方认证网站或机器人不是 Google 官方渠道，可能带来账号被盗、密钥泄露、权益失效、支付风险和售后困难。"
      },
      {
        title: "2FA 密钥风险",
        description: "二步验证密钥一旦泄露，对方可能持续生成验证码。发现异常后应立即重置身份验证器、修改密码并检查登录设备。"
      },
      {
        title: "支付与续订风险",
        description: "试用通常需要绑定有效付款方式。试用期结束后可能自动按标准价格扣费，不想续费应提前取消自动续订。"
      },
      {
        title: "账号风控风险",
        description: "频繁切换地区、网络、设备或短时间多次尝试领取/付款，可能触发 Google 安全验证或支付风控。"
      }
    ],
    faq: [
      {
        question: "没有 Pixel 设备能不能领取？",
        answer: "Google 官方活动说明要求购买并激活指定 Pixel 设备。网上存在第三方代认证说法，但这不是官方路径，风险较高，本站不提供具体操作教程。"
      },
      {
        question: "Roxy Browser 是必须的吗？",
        answer: "不是。它只是浏览环境隔离工具，适合需要管理多个账号或减少环境混杂的人了解。它不能保证领取资格，也不是 Google 官方工具。"
      },
      {
        question: "2FA 验证码工具安全吗？",
        answer: "工具本身用于根据密钥生成动态验证码，但密钥属于敏感信息。不要把主力账号的密钥输入到不可信网站或机器人里。使用过第三方 2FA 工具后，建议及时回到 Google 账号安全设置中重新更换身份验证器密钥。"
      },
      {
        question: "试用成功后要不要取消自动续订？",
        answer: "如果不想试用期结束后自动扣费，建议进入 Google One 订阅管理页面确认到期时间，并按页面提示取消自动续订。"
      },
      {
        question: "可以用主力 Google 账号尝试第三方认证吗？",
        answer: "不建议。主力账号通常绑定邮箱、云盘、支付和其他重要服务，一旦被盗或风控，损失会远大于试用权益本身。"
      }
    ],
    followUps: {
      title: "更稳妥的做法",
      description: "如果你只是想使用 Gemini Advanced 或 Google AI Pro，更建议优先选择官方订阅、真实设备活动、家庭共享或可信促销渠道。第三方代认证只适合能完全理解账号和支付风险的人自行判断。",
      items: [
        {
          title: "先看官方",
          description: "活动是否存在、试用时长和地区支持，以 Google 官方页面和 App 内提示为准。"
        },
        {
          title: "保护账号",
          description: "不要把密码、2FA 密钥、备用码和支付信息交给不可信第三方。"
        },
        {
          title: "记录订阅",
          description: "开通后保存权益页面、扣费日期、取消续订状态和付款记录。"
        }
      ]
    }
  }
];
