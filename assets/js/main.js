(() => {
  // 帮你把项目标签也改成了运维专属标签
  const PROJECT_TAG_LIBRARY = {
    LINUX: 'Linux',
    SHELL: 'Shell Script',
    AUTOMATION: 'Automation',
    MONITORING: '监控运维',
    DOCKER: 'Docker',
    HOMELAB: 'Homelab',
    CLOUD_NATIVE: '云原生基础',
    NETWORK: '网络配置',
    IT_INFRA: 'IT Infrastructure',
    DESKTOP: '桌面技术',
    STANDARDIZATION: '标准化流程',
    TROUBLESHOOTING: '网络排障',
    KNOWLEDGE_BASE: 'Knowledge Base',
    MARKDOWN: 'Markdown',
    TECH_NOTES: '技术沉淀',
    CONTINUOUS_LEARNING: '持续学习'
  };

  const PROJECTS = [
    {
      img: 'assets/images/Data-center.jpg',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tags: [PROJECT_TAG_LIBRARY.LINUX, PROJECT_TAG_LIBRARY.SHELL, PROJECT_TAG_LIBRARY.AUTOMATION, PROJECT_TAG_LIBRARY.MONITORING],
      link: 'pages/projects/project1.html',
    },
    {
      img: 'assets/images/robocon-cover.png',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tags: [PROJECT_TAG_LIBRARY.DOCKER, PROJECT_TAG_LIBRARY.HOMELAB, PROJECT_TAG_LIBRARY.CLOUD_NATIVE, PROJECT_TAG_LIBRARY.NETWORK],
      link: 'pages/projects/project2.html',
    },
    {
      img: 'assets/images/lobster-cover.png',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tags: [PROJECT_TAG_LIBRARY.IT_INFRA, PROJECT_TAG_LIBRARY.DESKTOP, PROJECT_TAG_LIBRARY.STANDARDIZATION, PROJECT_TAG_LIBRARY.TROUBLESHOOTING],
      link: 'pages/projects/project3.html',
    },
    {
      img: 'assets/images/agri-cover.png',
      titleKey: 'projects.item4.title',
      descKey: 'projects.item4.desc',
      tags: [PROJECT_TAG_LIBRARY.KNOWLEDGE_BASE, PROJECT_TAG_LIBRARY.MARKDOWN, PROJECT_TAG_LIBRARY.TECH_NOTES, PROJECT_TAG_LIBRARY.CONTINUOUS_LEARNING],
      link: 'pages/projects/project4.html',
    },
  ];

  // 这里修改为只有4个知识库项目，彻底解决乱码问题！
  const OPEN_SOURCE_ITEMS = [
    { key: 'opensource.item1', linkCode: null, linkDoc: '#' },
    { key: 'opensource.item2', linkCode: null, linkDoc: '#' },
    { key: 'opensource.item3', linkCode: null, linkDoc: '#' },
    { key: 'opensource.item4', linkCode: null, linkDoc: '#' },
  ];

  const TIMELINE_EVENTS = [
    'timeline.event6',
    'timeline.event5',
    'timeline.event4',
    'timeline.event3',
    'timeline.event2',
    'timeline.event1',
  ];

  // 这里替换为你专属的系统运维技术栈！
  const TECH_STACK = [
    {
      category: 'skills.os',
      items: [
        { name: 'Linux (CentOS/Ubuntu)', icon: 'fab fa-linux' },
        { name: 'Windows Server', icon: 'fab fa-windows' },
        { name: 'Shell Script', icon: 'fas fa-terminal' },
        { name: 'Python', icon: 'fab fa-python' },
      ],
    },
    {
      category: 'skills.infrastructure',
      items: [
        { name: 'TCP/IP & DNS', icon: 'fas fa-network-wired' },
        { name: 'Nginx / Apache', icon: 'fas fa-server' },
        { name: 'MySQL / Redis', icon: 'fas fa-database' },
        { name: 'Active Directory', icon: 'fas fa-users-cog' },
      ],
    },
    {
      category: 'skills.cloud',
      items: [
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'VMware / ESXi', icon: 'fas fa-layer-group' },
        { name: 'PXE / Kickstart', icon: 'fas fa-shipping-fast' },
      ],
    },
    {
      category: 'skills.tools',
      items: [
        { name: 'Zabbix / Prometheus', icon: 'fas fa-chart-line' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Wireshark', icon: 'fas fa-search-location' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fab fa-bilibili', key: 'contact.bilibili', link: 'https://space.bilibili.com/385516781/upload/video' },
    { icon: 'fab fa-github', key: 'contact.github', link: 'https://github.com/Lain-Ego0' },
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function t(key) {
    return window.i18n?.get ? window.i18n.get(key) : key;
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`[Theme] Switched to ${newTheme}`);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      const next = current === 'en' ? 'zh' : 'en';
      console.log(`[Lang] Switching to ${next}...`);
      window.i18n.changeLang(next);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tagsHtml = renderProjectTags(project.tags);

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${tagsHtml}
          <a href="${project.link}" class="project-link">${t('projects.viewDetail')}</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initOpenSource() {
    const grid = qs('.opensource-grid');
    if (!grid) return;
    clear(grid);

    OPEN_SOURCE_ITEMS.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];
      const tagsHtml = renderSpanTags(tags, 'os-tag');

      let buttonsHtml = '';
      if (item.linkCode) {
        buttonsHtml += `<a href="${item.linkCode}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fab fa-github"></i> ${t('opensource.btnCode')}</a>`;
      }
      if (item.linkDoc) {
        buttonsHtml += `<a href="${item.linkDoc}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fas fa-book"></i> ${t('opensource.btnDoc')}</a>`;
      }

      const card = document.createElement('div');
      card.className = 'os-card';
      card.innerHTML = `
        <div class="os-header">
          <div class="os-title">${t(`${item.key}.title`)}</div>
          <i class="fas fa-code-branch" style="color:var(--primary); opacity:0.5;"></i>
        </div>
        <p class="os-desc">${t(`${item.key}.desc`)}</p>
        <div class="os-tags">${tagsHtml}</div>
        <div class="os-actions">${buttonsHtml}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${t(`${key}.date`)}</span>
        <div class="timeline-content">
          <h3>${t(`${key}.title`)}</h3>
          <p>${t(`${key}.desc`)}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${s.name}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const label = t(contact.key);
      const item = document.createElement('a');
      item.className = 'intro-contact-link';
      item.href = contact.link;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.title = label;
      item.setAttribute('aria-label', label);
      item.innerHTML = `<i class="${contact.icon}"></i>`;
      container.appendChild(item);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        let target;
        try {
          target = qs(href);
        } catch {
          return;
        }

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.project-detail-card'),
      ...qsa('.projects-grid .card'),
      ...qsa('.opensource-grid .os-card'),
      ...qsa('.timeline-container .timeline-item'),
      ...qsa('.skills-wrapper .skill-category'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
  });

  window.addEventListener('i18nLoaded', () => {
    console.log('[main] i18n loaded, rendering content...');
    initProjects();
    initOpenSource();
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
