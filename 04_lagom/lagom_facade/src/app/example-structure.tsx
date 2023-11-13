import { SessionProvider } from "next-auth/react";
import { FC } from "react";

const BrowserExample: FC = () => {
  return (
    // START: layout.tsx /src/app/layout.tsx
    <html>
      <body>
        <SessionProvider>
          {/* START: Header-Component src/components/header/header.tsx */}
          <header>
            <div>
              {/* START: Navigation src/components/navigation/navigation.tsx */}
              <nav>
                <ul>
                  <li>About</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                  <li>Profile</li>
                </ul>
              </nav>
              {/* End: Navigation src/components/navigation/navigation.tsx */}
              <div>
                <a href='/'>L</a>
              </div>
              {/* START: Sub-Navigation src/components/navigation/sub-navigation.tsx */}
              <nav>
                <ul>
                  <li>Search</li>
                  <li>Cart</li>
                  <li>Profile</li>
                </ul>
              </nav>
              {/* End: Sub-Navigation src/components/navigation/sub-navigation.tsx */}
            </div>
          </header>
          {/* END: Header-Component src/components/header/header.tsx */}
          {/* START: Blogs-Component src/app/blogs/page.tsx */}
          {/* START: Main-Component src/components/pages/mainge-page.tsx */}
          <main>
            <div>
              {/* START: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              <div>
                {/* START: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
                <div onClick={() => console.log("click me")}>
                  {/* START: Lagom-Image src/components/common/lagom-image.tsx */}
                  <div>
                    <image />
                  </div>
                  {/* END: Lagom-Image src/components/common/lagom-image.tsx */}
                  {/* START: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                  <div>
                    <h1> blog title</h1>
                    <div>
                      <p>blog content</p>
                      <p>blog content</p>
                      <p>blog content</p>
                    </div>
                  </div>
                  {/* END: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                </div>
                {/* END: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
              </div>
              {/* END: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              {/* START: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              <div>
                {/* START: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
                <div onClick={() => console.log("click me")}>
                  {/* START: Lagom-Image src/components/common/lagom-image.tsx */}
                  <div>
                    <image />
                  </div>
                  {/* END: Lagom-Image src/components/common/lagom-image.tsx */}
                  {/* START: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                  <div>
                    <h1> blog title</h1>
                    <div>
                      <p>blog content</p>
                      <p>blog content</p>
                      <p>blog content</p>
                    </div>
                  </div>
                  {/* END: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                </div>
                {/* END: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
              </div>
              {/* END: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              {/* START: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              <div>
                {/* START: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
                <div onClick={() => console.log("click me")}>
                  {/* START: Lagom-Image src/components/common/lagom-image.tsx */}
                  <div>
                    <image />
                  </div>
                  {/* END: Lagom-Image src/components/common/lagom-image.tsx */}
                  {/* START: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                  <div>
                    <h1> blog title</h1>
                    <div>
                      <p>blog content</p>
                      <p>blog content</p>
                      <p>blog content</p>
                    </div>
                  </div>
                  {/* END: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                </div>
                {/* END: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
              </div>
              {/* END: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              {/* START: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
              <div>
                {/* START: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
                <div onClick={() => console.log("click me")}>
                  {/* START: Lagom-Image src/components/common/lagom-image.tsx */}
                  <div>
                    <image />
                  </div>
                  {/* END: Lagom-Image src/components/common/lagom-image.tsx */}
                  {/* START: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                  <div>
                    <h1> blog title</h1>
                    <div>
                      <p>blog content</p>
                      <p>blog content</p>
                      <p>blog content</p>
                    </div>
                  </div>
                  {/* END: Blog-Overview-Content src/components/blog/blog-overview-content.tsx */}
                </div>
                {/* END: Blog-Client-Wrapper src/components/blog/blog-client-wrapper.tsx */}
              </div>
              {/* END: Blog-Post-Card-Component src/components/blog/blog-post-card.tsx */}
            </div>
          </main>
          {/* END: Main-Component src/components/pages/mainge-page.tsx */}
          {/* END: Blogs-Component src/app/blogs/page.tsx */}
        </SessionProvider>
      </body>
    </html>
    // END: layout.tsx /src/app/layout.tsx
  );
};

export default BrowserExample;
