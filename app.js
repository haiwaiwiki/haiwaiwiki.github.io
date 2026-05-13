const articles = window.GUIDE_ARTICLES || [];

const groupNames = {
  account: "账号注册",
  region: "地区与商店",
  subscription: "订阅与支付"
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

const state = {
  query: "",
  filter: "all",
  view: "grid"
};

let tocObserver = null;

const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const cardGrid = document.querySelector("#card-grid");
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");
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

function isMatchFilter(article) {
  if (state.filter === "all") return true;
  if (state.filter === "available") return article.status === "available" || article.status === "high-risk";
  if (state.filter === "draft" || state.filter === "not-recommended") return article.status === state.filter;
  return article.group === state.filter;
}

function isMatchQuery(article) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;

  const text = [
    article.title,
    article.description,
    article.summary,
    article.category,
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

function getFilteredArticles() {
  return articles.filter((article) => isMatchFilter(article) && isMatchQuery(article));
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

function renderHome() {
  const filtered = getFilteredArticles();
  resultCount.textContent = `${filtered.length} 篇`;
  cardGrid.classList.toggle("card-grid", state.view === "grid");
  cardGrid.classList.toggle("guide-list", state.view === "list");

  if (!filtered.length) {
    cardGrid.innerHTML = `<div class="empty-state">没有找到匹配教程。</div>`;
    return;
  }

  cardGrid.innerHTML = filtered.map((article) => `
    <a class="guide-card ${article.coverMode === "cover" ? "cover-fill" : ""}" href="#/article/${article.id}">
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
        <div class="card-foot">
          <span>${article.category} · ${article.updatedAt}</span>
          <b>查看详情</b>
        </div>
      </div>
    </a>
  `).join("");
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
    <a class="related-article-card" href="#/article/${article.id}">
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
            <a href="${link.url}" ${link.url.startsWith("#") ? "" : 'target="_blank" rel="noopener noreferrer"'}>点击跳转</a>
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
        <a class="back-button" href="#/">返回首页</a>
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
          ${renderRiskWarnings(article.riskWarnings)}
          ${renderFaq(article.faq)}
        </div>
      </div>
    </div>
  `;
  setupTocObserver();
  setupGalleries();
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

function route() {
  const hash = decodeURIComponent(window.location.hash || "#/");
  const match = hash.match(/^#\/article\/(.+)$/);

  if (match) {
    const article = articles.find((item) => item.id === match[1]);
    if (article) {
      document.body.classList.add("article-open");
      homeView.hidden = true;
      detailView.hidden = false;
      renderDetail(article);
      window.scrollTo(0, 0);
      return;
    }
  }

  document.body.classList.remove("article-open");
  homeView.hidden = false;
  detailView.hidden = true;
  detailView.classList.remove("has-floating-toc");
  cleanupTocObserver();
  renderHome();
  window.scrollTo(0, 0);
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderHome();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderHome();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.view = button.dataset.view;
    renderHome();
  });
});

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

imagePreview.addEventListener("click", (event) => {
  if (event.target === imagePreview || event.target.closest(".image-preview-close")) {
    closeImagePreview();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imagePreview.hidden) closeImagePreview();
});

window.addEventListener("hashchange", route);

route();
