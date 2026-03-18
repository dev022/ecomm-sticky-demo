class StickyBlogCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .sticky-blog-cta {
          width: 100%;
          position: relative;
        }

        .sticky-blog-cta__image {
          height: 280px;
          background-image: url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789');
          background-size: cover;
          background-position: center;
        }

        .sticky-blog-cta__content {
          position: relative;
          background: #f5f5f7;
          padding: 40px 20px;
          transition: all 0.3s ease;
        }

        /* ✅ STICKY ACTIVE */
        .sticky-blog-cta__content.fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .sticky-blog-cta__title {
          color: #6c3cff;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .sticky-blog-cta__point {
          margin-bottom: 12px;
          font-size: 16px;
        }

        .sticky-blog-cta__button {
          width: 100%;
          padding: 16px;
          font-size: 18px;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          background: linear-gradient(90deg, #6c3cff, #8e4dff);
        }

        /* 👇 Prevent layout jump */
        .sticky-blog-cta__placeholder {
          display: none;
          height: 0;
        }

        .sticky-blog-cta__placeholder.active {
          display: block;
        }
      </style>

      <div class="sticky-blog-cta">
        <div class="sticky-blog-cta__image"></div>

        <div class="sticky-blog-cta__placeholder" id="placeholder"></div>

        <div class="sticky-blog-cta__content" id="ctaContent">
          <h2 class="sticky-blog-cta__title">
            Ready to transform your Ecommerce business?
          </h2>

          <div>
            <div class="sticky-blog-cta__point">Not tech, but business & customer first approach</div>
            <div class="sticky-blog-cta__point">AI-Skilled & Agile</div>
            <div class="sticky-blog-cta__point">Transparent, Trustworthy & Vetted team</div>
          </div>

          <button class="sticky-blog-cta__button" id="ctaBtn">
            Book your FREE consultation
          </button>
        </div>
      </div>
    `;

    const cta = this.querySelector('#ctaContent');
    const placeholder = this.querySelector('#placeholder');

    // Wait for Wix layout to stabilize
    setTimeout(() => {
      const triggerPoint = this.getBoundingClientRect().top + window.scrollY;
      const ctaHeight = cta.offsetHeight;

      placeholder.style.height = ctaHeight + 'px';

      window.addEventListener('scroll', () => {
        if (window.scrollY >= triggerPoint) {
          cta.classList.add('fixed');
          placeholder.classList.add('active');
        } else {
          cta.classList.remove('fixed');
          placeholder.classList.remove('active');
        }
      });
    }, 500);

    // Button click
    this.querySelector('#ctaBtn').addEventListener('click', () => {
      window.open('https://calendly.com/punit-ecomm/consulting', '_blank');

      // Google Analytics tracking
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'sticky_blog_cta_click', {
          event_category: 'Sticky Blog CTA',
          event_label: 'Consultation Button'
        });
      }
    });
  }
}

customElements.define('sticky-blog-cta', StickyBlogCTA);
