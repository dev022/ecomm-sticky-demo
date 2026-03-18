class StickyBlogCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .cta-wrapper {
          width: 100%;
        }

        .cta-image {
          height: 280px;
          background-image: url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789');
          background-size: cover;
          background-position: center;
        }

        .cta-content {
          position: relative;
          background: #f5f5f7;
          padding: 40px 20px;
          transition: all 0.3s ease;
        }

        .cta-content.fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .cta-title {
          color: #6c3cff;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .cta-point {
          margin-bottom: 10px;
        }

        .cta-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(90deg, #6c3cff, #8e4dff);
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 6px;
        }
      </style>

      <div class="cta-wrapper">
        <div class="cta-image"></div>

        <div class="cta-content" id="ctaBox">
          <h2 class="cta-title">
            Ready to transform your Ecommerce business?
          </h2>

          <div>
            <div class="cta-point">Not tech, but business & customer first approach</div>
            <div class="cta-point">AI-Skilled & Agile</div>
            <div class="cta-point">Transparent, Trustworthy & Vetted team</div>
          </div>

          <button class="cta-btn" id="ctaBtn">
            Book your FREE consultation
          </button>
        </div>
      </div>
    `;

    const cta = this.querySelector('#ctaBox');
    const offsetTop = this.offsetTop;

    // Scroll logic INSIDE element (no Wix Velo needed)
    window.addEventListener('scroll', () => {
      if (window.scrollY >= offsetTop) {
        cta.classList.add('fixed');
      } else {
        cta.classList.remove('fixed');
      }
    });

    // Button click
    this.querySelector('#ctaBtn').addEventListener('click', () => {
      window.open('https://calendly.com/punit-ecomm/consulting', '_blank');

      // if (typeof window.gtag === 'function') {
      //   window.gtag('event', 'sticky_blog_cta_click', {
      //     event_category: 'Sticky Blog CTA',
      //     event_label: 'Consultation Button'
      //   });
      // }
    });
  }
}

customElements.define('sticky-blog-cta', StickyBlogCTA);
