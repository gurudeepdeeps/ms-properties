/* ===================================================
   M S Properties - Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky Header ----
  const header = document.querySelector('.header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ---- Mobile Hamburger Menu ----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ---- Mobile Dropdown Toggle ----
  document.querySelectorAll('.nav-dropdown > a').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        trigger.parentElement.classList.toggle('open');
      }
    });
  });

  // ---- Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Scroll Animations (IntersectionObserver) ----
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    animatedElements.forEach(el => el.classList.add('animated'));
  }

  // ---- Counter Animation ----
  const counters = document.querySelectorAll('.counter-number');

  const animateCounter = (el) => {
    const target = el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    const targetNum = parseInt(target);
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(easeProgress * targetNum);

      el.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = targetEl.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Form Submit Handlers ----
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"], .btn');
      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        emailjs.sendForm('service_25042003', 'template_msproperties', form)
          .then(() => {
            btn.textContent = 'Sent Successfully!';
            btn.style.background = '#27ae60';

            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
              btn.disabled = false;
              form.reset();
            }, 3000);
          }, (error) => {
            console.log('FAILED...', error);
            btn.textContent = 'Failed to Send';
            btn.style.background = '#e74c3c';

            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
              btn.disabled = false;
            }, 3000);
          });
      }
    });
  });

});
