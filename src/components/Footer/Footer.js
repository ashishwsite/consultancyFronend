import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <div style={{ position: "relative", width: "100%", bottom: "0" }}>
      <div
        style={{
          color: "yellow",
          textAlign: "center",
          fontSize: "20px",
          background: "black",
        }}
      >
        E'Tax Consultancy-Self Service Portal, an initiative to fill Gst online
        by expert CA/Accountant
        <div className="icons">
          <div>
            <a
              href="https://www.youtube.com/@accountingarena1591"
              target="_balank"
            >
              <img src="https://tax2win.in/assets-new/img/new-theme/youtube.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#insta" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/insta.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#twitter" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/twiter.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#facebok" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/fb.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#linkdin" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/linkdin.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#whatapps" target="_balank">
              <img
                style={{ width: "25px", height: "25px" }}
                src="https://i.pinimg.com/originals/a7/5a/a1/a75aa10146a2b8c058959ce77e37f13a.png"
              />
            </a>{" "}
          </div>
        </div>
        <div
          className="mobile_email"
          style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop:'2px'}}
        >
          <div>
            <a href="#calllink">
              {" "}
              <img
                src="https://tax2win.in/assets-new/img/new-theme/call.svg"
                alt="Call Now"
              />{" "}
              +91 8178569324
            </a>
          </div>
          <div>
            <a href="#emaillink">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/mail.svg"
                alt="Call Now"
                width="32"
                height="32"
              />
              support@etaxconsultancey.in
            </a>
          </div>
        </div>
        {/* <h3>Contact</h3> */}
        {/* <div
          className="continer d-flex"
          style={{ alignItems: "center", justifyContent: "center", gap:"2em" }}
        >
        
          <li>
            Mobile <strong>+918178569324</strong>
          </li>
          <a href="https://youtube.com/@accountingarena1591?si=N-QQ5tNhcpcLQ2ci" ><img src={insta} style={{height:"0.7cm" ,width:"0.7cm"}}></img></a>
  
        </div> */}
        {/* <footer class="new_footer">
        <div class="top_panel">
          <div class="container-fluid">
            <div class="wrapper">
              <aside class="left">
                <h3>Need support?</h3>
                <span class="support">
                  <a href="callto:91166 84439">
                    {" "}
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/call.svg"
                      alt="Call Now"
                    />{" "}
                    +91 91166 84439
                  </a>{" "}
                </span>
                <span
                  class="support"
                  data-ctid="email-link-support-tax2win-in-37ad9c1d10"
                >
                  <a href="mailto:support@tax2win.in">
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/mail.svg"
                      alt="Call Now"
                      width="32"
                      height="32"
                    />
                    support@tax2win.in
                  </a>{" "}
                </span>
              </aside>
              <aside class="right">
                <div class="social-icons">
                  <a
                    href="https://www.facebook.com/tax2win"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.facebook.com/tax2win', '_blank', 'width=800,height=600,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0'); return false;"
                    rel="nofollow"
                    title="Facebook"
                    data-ctid="button-facebook-9370312f43"
                  >
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/fb.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://twitter.com/tax2win"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://twitter.com/tax2win', '_blank', 'width=800,height=600,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0'); return false;"
                    rel="nofollow"
                    title="Twitter"
                    data-ctid="button-twitter-8ffd1b0186"
                  >
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/twiter.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tax2win"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.linkedin.com/company/tax2win', '_blank', 'width=800,height=600,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0'); return false;"
                    rel="nofollow"
                    title="Linkedin"
                    data-ctid="button-linkedln-d19ec7fcd1"
                  >
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/linkdin.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCI5JZW94yuU6pxH6yKTwuOw/featured"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.youtube.com/channel/UCI5JZW94yuU6pxH6yKTwuOw/featured', '_blank', 'width=800,height=600,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0'); return false;"
                    rel="nofollow"
                    title="Youtube"
                    data-ctid="button-youtube-9fa10f2b36"
                  >
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/youtube.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/tax2win/"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.instagram.com/tax2win/', '_blank', 'width=800,height=600,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0'); return false;"
                    rel="nofollow"
                    title="Instagram"
                    data-ctid="button-instagram-7b14684650"
                  >
                    <img
                      src="https://tax2win.in/assets-new/img/new-theme/insta.svg"
                      alt=""
                    />
                  </a>{" "}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </footer> */}
      </div>
    </div>
  );
}

export default Footer;
