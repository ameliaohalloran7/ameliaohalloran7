(function () {
  const path = window.location.pathname;
  const onMain = path === "/" || path === "/index.html";

  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const links = [
    { label: "Home",       href: onMain ? null : "/"           , tab: "home"       },
    { label: "Experience", href: onMain ? null : "/#experience" , tab: "experience" },
    { label: "Contact",    href: onMain ? null : "/#contact"    , tab: "contact"    },
    { label: "Blog",       href: "/blog/"                       , tab: null         },
  ];

  const blogActive = path.startsWith("/blog");

  links.forEach(({ label, href, tab }) => {
    if (onMain && tab) {
      // Render as tab-switching button on the main page
      const btn = document.createElement("button");
      btn.className = "tab-button" + (tab === "home" ? " active" : "");
      btn.dataset.tab = tab;
      btn.textContent = label;
      nav.appendChild(btn);
    } else {
      const a = document.createElement("a");
      a.className = "nav-link" + (label === "Blog" && blogActive ? " active" : "");
      a.href = href;
      a.textContent = label;
      nav.appendChild(a);
    }
  });
})();
