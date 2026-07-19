import { useEffect } from "react";

const LAW_FIRM_URL = "https://altamimilawfirm.com.sa/servicess/";
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data=${encodeURIComponent(LAW_FIRM_URL)}`;

function buildLegalAdvisorSection() {
  const section = document.createElement("section");
  section.id = "legal-advisor";
  section.setAttribute("aria-labelledby", "legal-advisor-title");
  section.style.cssText = `
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 88px 24px;
    border-top: 1px solid rgba(255,255,255,.07);
    border-bottom: 1px solid rgba(255,255,255,.07);
    background:
      radial-gradient(circle at 12% 20%, rgba(212,168,79,.17), transparent 30%),
      radial-gradient(circle at 88% 76%, rgba(50,164,210,.13), transparent 32%),
      linear-gradient(135deg, #020817 0%, #071a2c 52%, #03111f 100%);
  `;

  section.innerHTML = `
    <div style="max-width:1280px;margin:0 auto;direction:rtl;font-family:Cairo,Tajawal,sans-serif;">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:38px;">
        <div style="max-width:820px;">
          <div style="display:inline-flex;align-items:center;gap:8px;padding:9px 15px;border:1px solid rgba(212,168,79,.28);border-radius:999px;background:rgba(212,168,79,.1);color:#e7b74a;font-size:12px;font-weight:800;backdrop-filter:blur(18px);">
            <span aria-hidden="true">◆</span>
            الثقة القانونية والمؤسسية
          </div>
          <h2 id="legal-advisor-title" style="margin:18px 0 0;color:#fff;font-size:clamp(30px,4vw,52px);line-height:1.35;font-weight:900;">
            مستشارنا وممثلنا القانوني
            <span style="color:#e7b74a;"> في المملكة العربية السعودية</span>
          </h2>
          <p style="margin:18px 0 0;max-width:760px;color:rgba(255,255,255,.7);font-size:clamp(15px,1.6vw,18px);line-height:2;">
            تفخر شركة عالم الإبداع باعتماد مكتب ناصر التميمي محامون ومستشارون مستشاراً وممثلاً قانونياً لها في المملكة، بما يعزز سلامة أعمالها وشراكاتها وفق أعلى المعايير المهنية.
          </p>
        </div>
        <a href="${LAW_FIRM_URL}" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;gap:9px;padding:13px 20px;border:1px solid rgba(212,168,79,.38);border-radius:13px;background:rgba(212,168,79,.11);color:#e7b74a;text-decoration:none;font-size:14px;font-weight:800;">
          زيارة موقع المكتب
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div style="position:relative;padding:14px;border:1px solid rgba(255,255,255,.16);border-radius:32px;background:rgba(255,255,255,.055);box-shadow:0 35px 100px rgba(0,0,0,.4);backdrop-filter:blur(26px);">
        <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,360px);overflow:hidden;border:1px solid rgba(255,255,255,.11);border-radius:24px;background:rgba(6,20,38,.88);">
          <div style="position:relative;display:flex;min-height:430px;flex-direction:column;justify-content:center;padding:48px clamp(28px,5vw,68px);">
            <div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 14% 86%,rgba(212,168,79,.1),transparent 26%);"></div>
            <p style="position:relative;margin:0 0 18px;color:#e7b74a;font-size:14px;font-weight:700;">عالم الإبداع | Ibdaa World</p>
            <h3 style="position:relative;margin:0;max-width:820px;color:#fff;font-size:clamp(28px,4vw,46px);line-height:1.55;font-weight:900;">
              المستشار القانوني لشركة عالم الإبداع في المملكة العربية السعودية
            </h3>
            <div style="position:relative;width:100%;height:1px;margin:28px 0;background:linear-gradient(90deg,transparent,rgba(212,168,79,.65),transparent);"></div>
            <div style="position:relative;width:fit-content;padding:15px 22px;border:1px solid rgba(212,168,79,.48);border-radius:16px;background:rgba(0,0,0,.22);">
              <p style="margin:0;color:#fff;font-size:clamp(20px,2.5vw,28px);font-weight:900;">مكتب ناصر التميمي محامون ومستشارون</p>
            </div>
            <p style="position:relative;margin:19px 0 0;color:#e7b74a;font-size:19px;font-weight:800;">الممثل القانوني للشركة</p>
            <p style="position:relative;margin:12px 0 0;color:rgba(255,255,255,.68);font-size:16px;line-height:1.9;">خدمات قانونية واستشارية موثوقة باحترافية عالية.</p>
          </div>

          <a href="${LAW_FIRM_URL}" target="_blank" rel="noreferrer" aria-label="فتح موقع مكتب ناصر التميمي محامون ومستشارون" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:34px;border-right:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.025));text-decoration:none;">
            <div style="padding:14px;border-radius:21px;background:#fff;box-shadow:0 20px 70px rgba(0,0,0,.38);">
              <img src="${QR_CODE_URL}" alt="رمز QR لموقع مكتب ناصر التميمي" width="256" height="256" loading="lazy" style="display:block;width:min(256px,68vw);height:auto;aspect-ratio:1;" />
            </div>
            <p style="margin:22px 0 0;color:#fff;text-align:center;font-size:16px;font-weight:800;line-height:1.8;">للاطلاع على المكتب والخدمات<br />امسح رمز QR</p>
            <span dir="ltr" style="margin-top:14px;max-width:100%;overflow-wrap:anywhere;color:#e7b74a;font-size:12px;text-align:center;">altamimilawfirm.com.sa/servicess/</span>
          </a>
        </div>
      </div>
    </div>
  `;

  const responsiveStyle = document.createElement("style");
  responsiveStyle.textContent = `
    @media (max-width: 900px) {
      #legal-advisor > div > div:nth-child(2) > div {
        grid-template-columns: 1fr !important;
      }
      #legal-advisor > div > div:nth-child(2) > div > a {
        border-right: 0 !important;
        border-top: 1px solid rgba(255,255,255,.1) !important;
      }
    }
    @media (max-width: 640px) {
      #legal-advisor { padding: 64px 16px !important; }
      #legal-advisor > div > div:nth-child(2) { padding: 8px !important; border-radius: 24px !important; }
    }
  `;
  section.appendChild(responsiveStyle);

  return section;
}

export function LegalAdvisorSection() {
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let section: HTMLElement | null = null;

    const mount = () => {
      const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
      if (pathname !== "/" && pathname !== "/index.html") return false;

      const hero = document.getElementById("home");
      if (!hero) return false;

      document.getElementById("legal-advisor")?.remove();
      section = buildLegalAdvisorSection();
      hero.insertAdjacentElement("afterend", section);
      return true;
    };

    if (!mount()) {
      observer = new MutationObserver(() => {
        if (mount()) observer?.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer?.disconnect();
      section?.remove();
    };
  }, []);

  return null;
}
