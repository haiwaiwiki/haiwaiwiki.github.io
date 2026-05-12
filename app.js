const articles = window.GUIDE_ARTICLES || [];

const groupNames = {
  account: "账号注册",
  region: "地区与商店",
  subscription: "订阅与支付"
};

const statusNames = {
  available: "可用",
  draft: "待完善"
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
  if (state.filter === "available" || state.filter === "draft") return article.status === state.filter;
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

function imageAttrs(src, fallback) {
  const safeFallback = fallback || "assets/placeholder.svg";
  return `src="${src || safeFallback}" data-fallback="${safeFallback}" onerror="handleImageError(this)"`;
}

window.handleImageError = function handleImageError(img) {
  const fallback = img.dataset.fallback;
  if (fallback && img.src.indexOf(encodeURI(fallback)) === -1) {
    img.src = fallback;
    img.dataset.fallback = "assets/placeholder.svg";
    return;
  }

  const visual = img.closest(".step-visual");
  if (visual) visual.classList.add("is-missing");
  img.src = "assets/placeholder.svg";
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
    <a class="guide-card" href="#/article/${article.id}">
      <div class="card-cover">
        <img ${imageAttrs(article.cover, article.coverFallback)} alt="${article.title}">
      </div>
      <div class="card-body">
        <div class="meta-row">
          <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
          <span class="badge category-badge">${article.category}</span>
          <span class="badge">${article.difficulty}</span>
          <span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>
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

function getStepImages(step) {
  if (step.images?.length) return step.images;
  if (step.image || step.imageFallback) {
    return [{
      src: step.image,
      fallback: step.imageFallback,
      alt: step.imageAlt || step.title,
      caption: step.imageCaption || step.imageAlt || step.title
    }];
  }
  return [];
}

function renderStep(step) {
  const images = getStepImages(step);
  const hasImage = images.length > 0;
  const hasGallery = images.length > 1;
  return `
    <section class="step-card ${hasImage ? "" : "text-only"} ${hasGallery ? "has-gallery" : ""}" id="${step.id}">
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
      </div>
      ${hasImage ? `
        <div class="step-gallery ${hasGallery ? "multi" : "single"}">
          ${images.map((image) => `
            <figure class="step-visual">
              <img ${imageAttrs(image.src, image.fallback)} alt="${image.alt || step.title}" data-preview-caption="${image.caption || image.alt || step.title}" title="点击放大预览">
              <div>
                <figcaption>${image.caption || image.alt || step.title}</figcaption>
              </div>
            </figure>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `;
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
            <a href="${link.url}" target="_blank" rel="noopener noreferrer">点击跳转</a>
          </li>
        `).join("")}
      </ul>
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
              <span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>
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

          ${article.steps?.length ? `
            <section class="steps-section">
              ${article.steps.map(renderStep).join("")}
            </section>
          ` : `<div class="empty-state">这篇教程还在整理中。</div>`}

          ${renderFollowUps(article.followUps)}
        </div>
      </div>
    </div>
  `;
  setupTocObserver();
}

function openImagePreview(img) {
  const previewImg = imagePreview.querySelector("img");
  const caption = imagePreview.querySelector("figcaption");
  previewImg.src = img.currentSrc || img.src;
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
