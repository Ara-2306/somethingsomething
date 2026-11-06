(() => {
  const knownRoutes = new Set(["arcade", "chat", "index.html", "arcade.html", "chat.html", "404.html"]);
  const segments = location.pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";
  const base = !first || knownRoutes.has(first) ? "" : `/${segments.shift()}`;
  const route = `/${segments.join("/")}${location.search}`;
  location.replace(`${base}/?restore=${encodeURIComponent(route)}`);
})();
