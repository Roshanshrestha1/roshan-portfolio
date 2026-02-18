const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');

const closeMobileMenu = () => {
  if (!menuToggle || !mobileNav) {
    return;
  }

  menuToggle.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('is-open');
};

const openMobileMenu = () => {
  if (!menuToggle || !mobileNav) {
    return;
  }

  menuToggle.setAttribute('aria-expanded', 'true');
  mobileNav.classList.add('is-open');
};

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
      closeMobileMenu();
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    closeMobileMenu();
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('in-view'));
}
