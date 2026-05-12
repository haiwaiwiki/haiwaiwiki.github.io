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
    duration: "10-20 分钟",
    targetUsers: [
      "第一次注册 Google 账号的新手用户",
      "不知道从哪里进入 Google 注册入口的用户",
      "更习惯通过手机 App 操作的用户",
      "需要 Gmail 邮箱作为海外服务基础账号的用户"
    ],
    summary: "通过 Gmail 移动应用进入 Google 账号创建流程，适合新手按截图一步一步操作。",
    notices: [
      { type: "note", text: "App Store 搜索页可能出现广告应用，操作时应认准官方 Gmail 应用，开发者应显示为 Google。" },
      { type: "info", text: "注册流程可能因设备、地区、网络环境、Google 页面版本不同而略有变化。本教程只介绍正常账号注册流程，不提供绕过风控、规避平台规则、异常注册等内容。" }
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
    duration: "20-40 分钟",
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
    title: "土区 GPT 订阅流程与风险说明",
    description: "后续可补充土区订阅前提、支付方式、订阅路径、失败原因、退款与账号风险说明。",
    cover: "assets/placeholder.svg",
    category: "GPT 订阅",
    group: "subscription",
    status: "draft",
    difficulty: "进阶",
    riskLevel: "高",
    updatedAt: "待补充",
    duration: "20-40 分钟",
    targetUsers: ["需要了解订阅路径、价格差异、支付限制和账号风险的用户"],
    summary: "占位教程。后续可补充土区订阅前提、支付方式、订阅路径、失败原因、退款与账号风险说明。",
    notices: [
      { type: "warning", text: "订阅、地区和支付资料需遵守 OpenAI、应用商店及支付机构规则。价格区差和地区切换可能存在服务限制或账号风险。" }
    ],
    steps: [],
    followUps: null
  }
];
