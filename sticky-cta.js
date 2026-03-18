class StickyBlogCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
        }

        /* ✅ WHOLE CTA STICKY */
        .sticky-blog-cta {
          position: sticky;
          top: 0;
          z-index: 999;

          width: 100%;
        }

        .sticky-blog-cta__image {
          height: 280px;
          background-image: url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789');
          background-size: cover;
          background-position: center;
        }

        .sticky-blog-cta__content {
          background: #f5f5f7;
          padding: 40px 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
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
      </style>

      <div class="sticky-blog-cta">
        <div class="sticky-blog-cta__image"></div>

        <div class="sticky-blog-cta__content">
          <h2 class="sticky-blog-cta__title">
            Ready to transform your Ecommerce business?
          </h2>

          <div>
            <div class="sticky-blog-cta__point">Not tech, but business & customer first approach</div>
            <div class="sticky-blog-cta__point">AI-Skilled & Agile</div>
            <div class="sticky-blog-cta__point">Transparent, Trustworthy & Vetted team</div>
          </div>

          <button class="sticky-blog-cta__button"
            onclick="window.open('https://calendly.com/punit-ecomm/consulting','_blank')">
            Book your FREE consultation
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('sticky-blog-cta', StickyBlogCTA);
