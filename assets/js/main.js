// ── Scroll reveal ────────────────────────────────────
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

      // ── Active nav link on scroll ─────────────────────────
      const sections = document.querySelectorAll('section[id], div.hero');
      const navLinks = document.querySelectorAll('.nav-inner a');
      const sectionIds = ['abstract', 'architecture', 'demo', 'results'];
      window.addEventListener('scroll', () => {
        let cur = '';
        document.querySelectorAll('section[id]').forEach(sec => {
          if (window.scrollY >= sec.offsetTop - 80) cur = sec.id;
        });
        navLinks.forEach(a => {
          const href = a.getAttribute('href').replace('#', '');
          a.style.color = href === cur ? 'var(--accent)' : '';
        });
      });
