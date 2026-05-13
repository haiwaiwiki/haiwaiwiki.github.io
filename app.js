const articles = window.GUIDE_ARTICLES || [];

const groupNames = {
  account: "账号注册",
  region: "地区与商店",
  subscription: "订阅与支付",
  ai: "AI 工具",
  security: "安全与找回",
  benefits: "活动与福利",
  risk: "风险说明"
};

const statusNames = {
  available: "可用",
  draft: "待完善",
  "high-risk": "高风险提示",
  "not-recommended": "不推荐"
};

const riskNames = {
  "低": "低风险",
  "中": "中风险",
  "高": "高风险"
};

const articleOrder = [
  "gmail-app-google-account-register-mainland",
  "google-account-settings-checklist",
  "apple-id-region",
  "turkey-gpt-subscription",
  "google-ai-pro-pixel-offer"
];

const categoryEntries = [
  { key: "account", title: "账号注册", description: "Google、Apple ID 等基础账号创建与准备。" },
  { key: "region", title: "地区与商店", description: "外区账号、商店地区、账单资料和使用边界。" },
  { key: "subscription", title: "订阅与支付", description: "礼品卡、App Store 订阅和续订管理。" },
  { key: "ai", title: "AI 工具", description: "ChatGPT、Gemini、AI Studio 等工具相关教程。" },
  { key: "security", title: "安全与找回", description: "账号体检、恢复方式、两步验证和排查清单。" },
  { key: "benefits", title: "活动与福利", description: "官方活动、试用资格和领取注意事项。" },
  { key: "risk", title: "风险说明", description: "高风险流程、第三方平台和账号安全提醒。" }
];

const state = {
  query: "",
  filter: "all",
  category: "all",
  sort: "latest",
  view: "grid"
};

let tocObserver = null;

const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const cardGrid = document.querySelector("#card-grid");
const searchInputs = document.querySelectorAll(".search-input");
const resultCount = document.querySelector("#result-count");
const categoryGrid = document.querySelector("#category-grid");
const recommendedGrid = document.querySelector("#recommended-grid");
const sortSelect = document.querySelector("#sort-select");
const viewButtons = document.querySelectorAll(".view-button");
const imagePreview = document.createElement("div");

imagePreview.className = "image-preview";
imagePreview.hidden = true;
imagePreview.innerHTML = `
  <button class="image-preview-close" type="button" aria-label="关闭图片预览">关闭</button>
  <figure>
    <img src="" alt="">
    <figcaption></figcaption>
  </figure>
`;
document.body.appendChild(imagePreview);

function uniqueList(items) {
  return [...new Set((items || []).filter(Boolean))];
}

function articleIndex(article) {
  const index = Number.isFinite(article.order) ? article.order : articleOrder.indexOf(article.id);
  return index === -1 ? 999 : index;
}

function getArticleTags(article) {
  return uniqueList([
    ...(article.tags || []),
    article.category,
    groupNames[article.group],
    article.difficulty,
    article.status === "high-risk" ? "高风险提示" : "",
    article.riskLevel === "高" ? "高风险" : ""
  ]).slice(0, 5);
}

function getArticleKeywords(article) {
  return uniqueList([
    ...(article.keywords || []),
    ...(article.tags || []),
    article.category,
    groupNames[article.group]
  ]);
}

function getArticleCategories(article) {
  const text = [
    article.id,
    article.title,
    article.description,
    article.category,
    article.group,
    ...(article.tags || []),
    ...(article.keywords || [])
  ].join(" ").toLowerCase();

  const categories = new Set();
  if (article.group) categories.add(article.group);
  if (text.includes("google") || text.includes("账号注册") || text.includes("apple id")) categories.add("account");
  if (article.group === "region" || text.includes("地区") || text.includes("商店") || text.includes("app store")) categories.add("region");
  if (article.group === "subscription" || text.includes("订阅") || text.includes("支付") || text.includes("礼品卡")) categories.add("subscription");
  if (text.includes("ai") || text.includes("gpt") || text.includes("gemini") || text.includes("chatgpt") || text.includes("studio") || text.includes("antigravity")) categories.add("ai");
  if (text.includes("安全") || text.includes("找回") || text.includes("排查") || text.includes("恢复") || text.includes("两步验证")) categories.add("security");
  if (text.includes("活动") || text.includes("福利") || text.includes("pixel") || text.includes("试用")) categories.add("benefits");
  if (article.status === "high-risk" || article.riskLevel === "高" || text.includes("风险")) categories.add("risk");
  return [...categories];
}

function isRecommended(article) {
  return article.recommended === true || article.featured === true || [
    "gmail-app-google-account-register-mainland",
    "google-account-settings-checklist",
    "apple-id-region",
    "turkey-gpt-subscription"
  ].includes(article.id);
}

function riskRank(article) {
  return { "高": 3, "中": 2, "低": 1 }[article.riskLevel] || 0;
}

function isMatchFilter(article) {
  if (state.category !== "all" && !getArticleCategories(article).includes(state.category)) return false;
  if (state.filter === "all") return true;

  const [type, value] = state.filter.split(":");
  if (type === "status") return article.status === value;
  if (type === "difficulty") return article.difficulty === value;
  if (type === "risk") return article.riskLevel === value;
  return getArticleCategories(article).includes(state.filter);
}

function isMatchQuery(article) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;

  const text = [
    article.title,
    article.description,
    article.summary,
    article.category,
    ...(article.tags || []),
    ...(article.keywords || []),
    article.status,
    article.difficulty,
    article.riskLevel,
    article.updatedAt,
    ...(article.targetUsers || []),
    ...(article.notices || []).map((notice) => notice.text),
    ...(article.topSections || []).flatMap((section) => [
      section.title,
      section.description,
      ...(section.items || [])
    ]),
    ...(article.platforms || []).flatMap((platform) => [
      platform.name,
      platform.url,
      ...(platform.features || [])
    ]),
    ...(article.extraSections || []).flatMap((section) => [
      section.title,
      section.description,
      ...(section.items || [])
    ]),
    ...(article.riskWarnings || []).flatMap((risk) => [risk.title, risk.description]),
    ...(article.faq || []).flatMap((item) => [item.question, item.answer]),
    article.quickChecklist?.title,
    article.quickChecklist?.description,
    ...(article.quickChecklist?.items || []),
    ...(article.steps || []).flatMap((step) => [
      step.title,
      step.description,
      step.imageCaption,
      ...(step.images || []).flatMap((image) => [
        image.caption,
        image.alt
      ]),
      ...(step.tips || [])
    ])
  ].join(" ").toLowerCase();

  return text.includes(query);
}

function sortArticles(list) {
  return list.sort((a, b) => {
    if (state.sort === "recommended") {
      const recDiff = Number(isRecommended(b)) - Number(isRecommended(a));
      if (recDiff) return recDiff;
      return articleIndex(a) - articleIndex(b);
    }
    if (state.sort === "risk") {
      const diff = riskRank(b) - riskRank(a);
      if (diff) return diff;
      return articleIndex(a) - articleIndex(b);
    }
    if (state.sort === "category") {
      const diff = String(a.category || "").localeCompare(String(b.category || ""), "zh-Hans-CN");
      if (diff) return diff;
      return articleIndex(a) - articleIndex(b);
    }
    const dateDiff = new Date(b.updatedAt) - new Date(a.updatedAt);
    if (dateDiff) return dateDiff;
    return articleIndex(a) - articleIndex(b);
  });
}

function getFilteredArticles() {
  return sortArticles(articles.filter((article) => isMatchFilter(article) && isMatchQuery(article)));
}

function articleUrl(id) {
  return `?article=${encodeURIComponent(id)}`;
}

function webpSrc(src) {
  if (!src || src.includes("placeholder.svg") || src.endsWith(".webp")) return src;
  return src.replace(/\.(png|jpe?g)$/i, ".webp");
}

function imageAttrs(src, fallback, loading = "lazy", defer = false) {
  const safeFallback = fallback || "assets/placeholder.svg";
  const originalSrc = src || safeFallback;
  const finalFallback = safeFallback;
  const displaySrc = webpSrc(src) || webpSrc(safeFallback) || safeFallback;
  const loadAttrs = loading ? ` loading="${loading}"` : "";
  const previewSrc = originalSrc;
  const firstFallback = displaySrc !== originalSrc ? originalSrc : finalFallback;
  if (defer) {
    return `src="${firstFallback}" data-src="${displaySrc}" data-preview-src="${previewSrc}" data-original-src="${originalSrc}" data-original-fallback="${finalFallback}" data-fallback="${firstFallback}" decoding="async"${loadAttrs} onerror="handleImageError(this)"`;
  }
  return `src="${displaySrc}" data-preview-src="${previewSrc}" data-original-src="${originalSrc}" data-original-fallback="${finalFallback}" data-fallback="${firstFallback}" decoding="async"${loadAttrs} onerror="handleImageError(this)"`;
}

window.handleImageError = function handleImageError(img) {
  const fallback = img.dataset.fallback;
  if (fallback && img.src.indexOf(encodeURI(fallback)) === -1) {
    const visual = img.closest(".step-visual");
    if (visual && fallback.includes("placeholder.svg")) visual.classList.add("is-missing");
    img.src = fallback;
    if (img.dataset.originalFallback) {
      img.dataset.originalSrc = img.dataset.originalFallback;
      img.dataset.previewSrc = img.dataset.originalFallback;
    }
    img.dataset.fallback = "assets/placeholder.svg";
    return;
  }

  const visual = img.closest(".step-visual");
  if (visual) visual.classList.add("is-missing");
  img.src = "assets/placeholder.svg";
  img.dataset.previewSrc = "assets/placeholder.svg";
};

function renderArticleCard(article) {
  const tags = getArticleTags(article);
  return `
    <a class="guide-card ${article.coverMode === "cover" ? "cover-fill" : ""}" href="${articleUrl(article.id)}">
      <div class="card-cover">
        <img ${imageAttrs(article.cover, article.coverFallback)} alt="${article.title}">
      </div>
      <div class="card-body">
        <div class="meta-row">
          <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
          <span class="badge category-badge">${article.category}</span>
          <span class="badge">${article.difficulty}</span>
          ${article.hideRiskLevel ? "" : `<span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>`}
        </div>
        <h2>${article.title}</h2>
        <p>${article.description || article.summary}</p>
        ${tags.length ? `<div class="tag-row">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>` : ""}
        <div class="card-foot">
          <span>${article.category} · ${article.updatedAt}</span>
          <b>查看详情</b>
        </div>
      </div>
    </a>
  `;
}

function renderCategoryGrid() {
  if (!categoryGrid) return;
  categoryGrid.innerHTML = categoryEntries.map((category) => {
    const count = articles.filter((article) => getArticleCategories(article).includes(category.key)).length;
    return `
      <button class="category-card ${state.category === category.key ? "active" : ""}" type="button" data-category="${category.key}">
        <span>${category.title}</span>
        <strong>${count} 篇</strong>
        <p>${category.description}</p>
      </button>
    `;
  }).join("");
}

function renderRecommended() {
  if (!recommendedGrid) return;
  const recommended = articles
    .filter((article) => isRecommended(article) && isMatchQuery(article))
    .sort((a, b) => articleIndex(a) - articleIndex(b))
    .slice(0, 6);
  recommendedGrid.innerHTML = recommended.length
    ? recommended.map(renderArticleCard).join("")
    : `<div class="empty-state">没有找到匹配的推荐教程。</div>`;
}

function renderHome() {
  renderCategoryGrid();
  renderRecommended();

  const filtered = getFilteredArticles();
  resultCount.textContent = `${filtered.length} 篇`;
  cardGrid.classList.toggle("card-grid", state.view === "grid");
  cardGrid.classList.toggle("guide-list", state.view === "list");

  if (!filtered.length) {
    cardGrid.innerHTML = `<div class="empty-state">没有找到匹配教程。</div>`;
    return;
  }

  cardGrid.innerHTML = filtered.map(renderArticleCard).join("");
}

function renderNotice(notice) {
  return `<div class="notice ${notice.type || "info"}">${notice.text}</div>`;
}

function renderHighRiskNotice(article) {
  if (article.status !== "high-risk") return "";
  return `
    <section class="high-risk-card">
      <h2>高风险提示</h2>
      <p>本教程涉及账号地区、订阅支付、礼品卡或第三方平台信息，可能受到平台政策、账号状态、支付环境和地区限制影响。本站只做公开流程说明和风险避坑参考，不保证任何账号、付款方式或第三方服务一定可用。</p>
      <p>请勿把密码、验证码、二步验证密钥、支付信息、订单信息或礼品卡兑换码交给不可信第三方；操作前请自行判断风险，并以相关平台官方页面和实际政策为准。</p>
    </section>
  `;
}

function renderRelatedArticleCard(articleId) {
  const article = articles.find((item) => item.id === articleId);
  if (!article) return "";

  return `
    <a class="related-article-card" href="${articleUrl(article.id)}">
      <div class="related-cover">
        <img ${imageAttrs(article.cover, article.coverFallback)} alt="${article.title}">
      </div>
      <div class="related-copy">
        <div class="meta-row">
          <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
          <span class="badge">${article.difficulty}</span>
          ${article.hideRiskLevel ? "" : `<span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>`}
        </div>
        <h3>${article.title}</h3>
        <p>${article.description || article.summary}</p>
        <span>${article.category} · ${article.updatedAt}</span>
      </div>
    </a>
  `;
}

function getStepImages(step) {
  const defaultLayout = step.imageLayout || "phone";
  if (step.images?.length) {
    return step.images.map((image) => ({
      ...image,
      layout: image.layout || defaultLayout
    }));
  }
  if (step.image || step.imageFallback) {
    return [{
      src: step.image,
      fallback: step.imageFallback,
      alt: step.imageAlt || step.title,
      caption: step.imageCaption || step.imageAlt || step.title,
      layout: defaultLayout
    }];
  }
  return [];
}

function renderStep(step) {
  const images = getStepImages(step);
  const hasImage = images.length > 0;
  const hasGallery = images.length > 1;
  const galleryLayout = step.imageLayout || images[0]?.layout || "phone";
  const galleryId = `${step.id}-gallery`;
  return `
    <section class="step-card layout-${galleryLayout} ${hasImage ? "" : "text-only"} ${hasGallery ? "has-gallery" : ""}" id="${step.id}">
      <div class="step-copy">
        <div class="step-head">
          <span>${step.number}</span>
          <div>
            <h2>${step.title}</h2>
            <p>${step.description}</p>
          </div>
        </div>
        ${step.tips?.length ? `
          <div class="tip-box">
            <strong>提示</strong>
            <ul>${step.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
          </div>
        ` : ""}
        ${step.relatedArticleId ? renderRelatedArticleCard(step.relatedArticleId) : ""}
      </div>
      ${hasImage ? `
        <div class="step-gallery ${hasGallery ? "multi is-carousel" : "single"} layout-${galleryLayout}" data-gallery-id="${galleryId}" data-active-index="0">
          ${hasGallery ? `
            <div class="gallery-toolbar">
              <span>${images.length} 张图</span>
              <div>
                <button type="button" class="gallery-control" data-gallery-action="prev" aria-label="上一张">上一张</button>
                <button type="button" class="gallery-control" data-gallery-action="next" aria-label="下一张">下一张</button>
              </div>
            </div>
          ` : ""}
          <div class="gallery-stage">
          ${images.map((image, index) => `
            <figure class="step-visual layout-${image.layout || galleryLayout} ${hasGallery ? "gallery-slide" : ""}">
              <img ${imageAttrs(image.src, image.fallback, "lazy", hasGallery && index > 0)} alt="${image.alt || step.title}" data-preview-caption="${image.caption || image.alt || step.title}" title="点击放大预览">
              <div>
                <figcaption>${image.caption || image.alt || step.title}</figcaption>
              </div>
            </figure>
          `).join("")}
          </div>
          ${hasGallery ? `
            <div class="gallery-dots" aria-label="图片切换">
              ${images.map((_, index) => `<button type="button" class="gallery-dot ${index === 0 ? "active" : ""}" data-gallery-index="${index}" aria-label="第 ${index + 1} 张"></button>`).join("")}
            </div>
          ` : ""}
        </div>
      ` : ""}
    </section>
  `;
}

function setGalleryIndex(gallery, nextIndex) {
  const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
  if (!slides.length) return;

  const normalized = (nextIndex + slides.length) % slides.length;
  gallery.dataset.activeIndex = String(normalized);
  slides.forEach((slide, index) => slide.classList.toggle("active", index === normalized));
  const activeImage = slides[normalized]?.querySelector("img[data-src]");
  if (activeImage) {
    activeImage.src = activeImage.dataset.src;
    activeImage.removeAttribute("data-src");
  }
  gallery.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === normalized);
  });
}

function setupGalleries() {
  detailView.querySelectorAll(".step-gallery.is-carousel").forEach((gallery) => {
    setGalleryIndex(gallery, Number(gallery.dataset.activeIndex || 0));
  });
}

function renderFollowUps(followUps) {
  if (!followUps) return "";
  return `
    <section class="follow-up-box">
      <h2>${followUps.title}</h2>
      <p>${followUps.description}</p>
      <div class="follow-up-list">
        ${followUps.items.map((item, index) => `
          <div class="follow-up-item">
            <span>${index + 1}</span>
            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              ${item.tip ? `<small>${item.tip}</small>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLinks(links) {
  if (!links?.length) return "";
  return `
    <section class="links-section">
      <h2>相关链接</h2>
      <ul>
        ${links.map((link) => `
          <li>
            <strong>${link.title}：</strong>
            <a href="${link.url}" ${link.url.startsWith("#") || link.url.startsWith("?") ? "" : 'target="_blank" rel="noopener noreferrer"'}>点击跳转</a>
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}

function renderPlatforms(platforms) {
  if (!platforms?.length) return "";
  return `
    <section class="platform-section">
      <h2>礼品卡购买平台说明</h2>
      <div class="platform-grid">
        ${platforms.map((platform) => `
          <article class="platform-card">
            <div>
              <h3>${platform.name}</h3>
              <a href="${platform.url}" target="_blank" rel="noopener noreferrer">${platform.url}</a>
            </div>
            <ul>${platform.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderExtraSections(sections) {
  if (!sections?.length) return "";
  return sections.map((section) => `
    <section class="extra-section ${section.type || "info"}">
      <h2>${section.title}</h2>
      <p>${section.description}</p>
      ${section.items?.length ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    </section>
  `).join("");
}

function renderRiskWarnings(risks) {
  if (!risks?.length) return "";
  return `
    <section class="risk-section">
      <h2>风险说明</h2>
      <div class="risk-list">
        ${risks.map((risk, index) => `
          <article class="risk-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${risk.title}</h3>
              <p>${risk.description}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderQuickChecklist(checklist) {
  if (!checklist?.items?.length) return "";
  return `
    <section class="checklist-section">
      <h2>${checklist.title}</h2>
      ${checklist.description ? `<p>${checklist.description}</p>` : ""}
      <div class="checklist-grid">
        ${checklist.items.map((item) => `
          <div class="checklist-item">
            <span aria-hidden="true">✓</span>
            <p>${item}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFaq(faq) {
  if (!faq?.length) return "";
  return `
    <section class="faq-section">
      <h2>常见问题</h2>
      <div class="faq-list">
        ${faq.map((item) => `
          <details>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function cleanupTocObserver() {
  if (tocObserver) {
    tocObserver.disconnect();
    tocObserver = null;
  }
}

function setActiveStep(stepId) {
  detailView.querySelectorAll(".toc-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.stepId === stepId);
  });
}

function setupTocObserver() {
  cleanupTocObserver();

  const scroller = detailView.querySelector(".article-scroll");
  const steps = Array.from(detailView.querySelectorAll(".step-card[id]"));
  if (!steps.length) return;

  setActiveStep(steps[0].id);

  tocObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible[0]) setActiveStep(visible[0].target.id);
  }, {
    root: scroller || null,
    rootMargin: "-18% 0px -58% 0px",
    threshold: [0.12, 0.25, 0.5, 0.75]
  });

  steps.forEach((step) => tocObserver.observe(step));
}

function renderDetail(article) {
  detailView.classList.toggle("has-floating-toc", Boolean(article.steps?.length));
  detailView.innerHTML = `
    ${article.steps?.length ? `
      <nav class="floating-toc" aria-label="步骤导航">
        <strong>步骤导航</strong>
        ${article.steps.map((step) => `<button type="button" class="toc-link" data-step-id="${step.id}">${step.number} ${step.navTitle || step.title}</button>`).join("")}
      </nav>
    ` : ""}
    <div class="article-shell">
      <div class="reading-titlebar">
        <div class="reading-titlecopy">
          <span>正在阅读</span>
          <strong>${article.title}</strong>
        </div>
        <a class="back-button" href="./">返回首页</a>
      </div>
      <div class="article-scroll">
        <header class="tutorial-hero">
          <div class="tutorial-intro">
            <div class="meta-row">
              <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
              <span class="badge">${article.category}</span>
              <span class="badge">${article.difficulty}</span>
              ${article.hideRiskLevel ? "" : `<span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>`}
            </div>
            <h1>${article.title}</h1>
            <p>${article.description}</p>
            <div class="info-grid">
              <div class="info-item"><span>更新时间</span><b>${article.updatedAt}</b></div>
              <div class="info-item"><span>预计耗时</span><b>${article.duration || "-"}</b></div>
              <div class="info-item"><span>步骤数量</span><b>${article.steps?.length || 0} 步</b></div>
            </div>
          </div>
        </header>

        <div class="article-content">
          ${renderExtraSections(article.topSections)}
          ${renderHighRiskNotice(article)}

          ${article.targetUsers?.length ? `
            <section class="plain-section">
              <h2>适用人群</h2>
              <ul>${article.targetUsers.map((user) => `<li>${user}</li>`).join("")}</ul>
            </section>
          ` : ""}

          ${article.notices?.length ? `
            <section class="notice-stack">
              ${article.notices.map(renderNotice).join("")}
            </section>
          ` : ""}

          ${renderLinks(article.links)}
          ${renderPlatforms(article.platforms)}
          ${renderExtraSections(article.extraSections)}

          ${article.steps?.length ? `
            <section class="steps-section">
              ${article.steps.map(renderStep).join("")}
            </section>
          ` : `<div class="empty-state">这篇教程还在整理中。</div>`}

          ${renderFollowUps(article.followUps)}
          ${renderQuickChecklist(article.quickChecklist)}
          ${renderRiskWarnings(article.riskWarnings)}
          ${renderFaq(article.faq)}
        </div>
      </div>
    </div>
  `;
  setupTocObserver();
  setupGalleries();
}

function emitRouteChange(detail) {
  window.dispatchEvent(new CustomEvent("haiwaiwiki:route-change", {
    detail
  }));
}

function openImagePreview(img) {
  const previewImg = imagePreview.querySelector("img");
  const caption = imagePreview.querySelector("figcaption");
  const fallbackSrc = img.currentSrc || img.src;
  previewImg.onerror = () => {
    if (previewImg.src !== fallbackSrc) previewImg.src = fallbackSrc;
  };
  previewImg.src = img.dataset.previewSrc || fallbackSrc;
  previewImg.alt = img.alt || "教程截图";
  caption.textContent = img.dataset.previewCaption || img.alt || "";
  imagePreview.hidden = false;
  document.body.classList.add("preview-open");
}

function closeImagePreview() {
  imagePreview.hidden = true;
  document.body.classList.remove("preview-open");
}

function homeUrl() {
  return window.location.pathname || "./";
}

function getRouteArticleId() {
  const queryArticleId = new URLSearchParams(window.location.search).get("article");
  if (queryArticleId) return queryArticleId;

  const hash = decodeURIComponent(window.location.hash || "");
  const hashMatch = hash.match(/^#\/article\/([^/?#]+)$/);
  return hashMatch?.[1] || "";
}

function getArticleById(articleId) {
  return articles.find((item) => item.id === articleId);
}

function showHome() {
  document.body.classList.remove("article-open");
  homeView.hidden = false;
  detailView.hidden = true;
  detailView.innerHTML = "";
  detailView.classList.remove("has-floating-toc");
  cleanupTocObserver();
  renderHome();
  emitRouteChange({
    type: "home",
    path: window.location.pathname + window.location.search + window.location.hash,
    title: "海外服务使用指南"
  });
  window.scrollTo(0, 0);
}

function showArticle(article) {
  document.body.classList.add("article-open");
  homeView.hidden = true;
  detailView.hidden = false;
  renderDetail(article);
  emitRouteChange({
    type: "article",
    path: window.location.pathname + window.location.search + window.location.hash,
    title: article.title,
    articleId: article.id
  });
  window.scrollTo(0, 0);
}

function route() {
  const articleId = getRouteArticleId();

  if (articleId) {
    const article = getArticleById(articleId);
    if (article) {
      showArticle(article);
      return;
    }

    window.history.replaceState({}, "", homeUrl());
  }

  showHome();
}

function navigateHome(options = {}) {
  const method = options.replace ? "replaceState" : "pushState";
  window.history[method]({}, "", homeUrl());
  showHome();
}

function navigateArticle(articleId) {
  const article = getArticleById(articleId);
  if (!article) {
    navigateHome({ replace: true });
    return;
  }

  const url = `${homeUrl()}?article=${encodeURIComponent(article.id)}`;
  window.history.pushState({}, "", url);
  showArticle(article);
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderHome();
  });
});

searchInputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    state.query = event.target.value;
    searchInputs.forEach((item) => {
      if (item !== event.target) item.value = state.query;
    });
    renderHome();
  });
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.view = button.dataset.view;
    renderHome();
  });
});

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderHome();
  });
}

if (categoryGrid) {
  categoryGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-category]");
    if (!card) return;
    state.category = state.category === card.dataset.category ? "all" : card.dataset.category;
    renderHome();
    document.querySelector(".all-guides-block")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

detailView.addEventListener("click", (event) => {
  const control = event.target.closest("[data-gallery-action]");
  if (control) {
    const gallery = control.closest(".step-gallery");
    const current = Number(gallery.dataset.activeIndex || 0);
    setGalleryIndex(gallery, control.dataset.galleryAction === "next" ? current + 1 : current - 1);
    return;
  }

  const dot = event.target.closest("[data-gallery-index]");
  if (dot) {
    const gallery = dot.closest(".step-gallery");
    setGalleryIndex(gallery, Number(dot.dataset.galleryIndex));
    return;
  }

  const image = event.target.closest(".step-visual img");
  if (image) {
    openImagePreview(image);
    return;
  }

  const button = event.target.closest("[data-step-id]");
  if (!button) return;

  const target = detailView.querySelector(`#${button.dataset.stepId}`);
  if (target) {
    setActiveStep(button.dataset.stepId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;

  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return;

  const isHomeLink = link.classList.contains("brand") || link.classList.contains("back-button");
  const queryArticleId = url.searchParams.get("article");
  const hashMatch = decodeURIComponent(url.hash || "").match(/^#\/article\/([^/?#]+)$/);
  const articleId = queryArticleId || hashMatch?.[1] || "";

  if (!articleId && !isHomeLink) return;

  event.preventDefault();
  if (isHomeLink) {
    navigateHome({ replace: true });
    return;
  }

  navigateArticle(articleId);
});

imagePreview.addEventListener("click", (event) => {
  if (event.target === imagePreview || event.target.closest(".image-preview-close")) {
    closeImagePreview();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imagePreview.hidden) closeImagePreview();
});

window.addEventListener("hashchange", route);
window.addEventListener("popstate", route);

route();
