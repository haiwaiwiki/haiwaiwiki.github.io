(function () {
  const config = window.HAIWAIWIKI_ANALYTICS || {};
  const provider = config.provider || "cloudflare";
  const token = (config.cloudflareToken || "").trim();
  const loaded = {
    cloudflare: false
  };

  function isEnabled() {
    return config.enabled === true && provider === "cloudflare" && token && token !== "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN";
  }

  function loadCloudflare() {
    if (!isEnabled() || loaded.cloudflare || document.querySelector("script[data-cf-beacon]")) return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({ token });
    document.head.appendChild(script);
    loaded.cloudflare = true;
  }

  function recordRoute(detail) {
    if (!isEnabled()) return;

    window.HAIWAIWIKI_ANALYTICS.currentRoute = {
      path: detail?.path || window.location.hash || "#/",
      title: detail?.title || document.title,
      type: detail?.type || "page"
    };
  }

  window.HAIWAIWIKI_ANALYTICS = {
    ...config,
    load: loadCloudflare,
    recordRoute
  };

  window.addEventListener("haiwaiwiki:route-change", (event) => {
    recordRoute(event.detail);
  });

  loadCloudflare();
})();
