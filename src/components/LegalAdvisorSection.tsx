import { useEffect } from "react";

const LAW_FIRM_URL = "https://altamimilawfirm.com.sa/servicess/";
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=12&data=${encodeURIComponent(LAW_FIRM_URL)}`;

function buildLegalAdvisorCard() {
  const wrapper = document.createElement("div");
  wrapper.id = "legal-advisor";
  wrapper.setAttribute("aria-labelledby", "legal-advisor-title");
  wrapper.style.cssText = "margin:0 0 48px;";

  wrapper.innerHTML = `
    <div class="legal-advisor-glass" style="position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:28px;background:linear-gradient(135deg,rgba(7,20,39,.97),rgba(11,29,53,.96) 55%,rgba(8,17,31,.98));box-shadow:0 30px 85px rgba(0,0,0,.38);">
      <div aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 12% 22%,rgba(212,168,79,.18),transparent 31%),radial-gradient(circle at 90% 80%,rgba(49,154,201,.13),transparent 29%);"></div>
      <div class="legal-advisor-grid" style="position:relative;display:grid;grid-template-columns:minmax(0,1fr) 310px;direction:rtl;font-family:Cairo,Tajawal,sans-serif;">
        <div style="padding:clamp(30px,4.5vw,54px);display:flex;flex-direction:column;justify-content:center;">
          <div style="display:inline-flex;width:fit-content;align-items:center;gap:8px;padding:8px 14px;border:1px solid rgba(212,168,79,.3);border-radius:999px;background:rgba(212,168,79,.1);color:#e7b74a;font-size:12px;font-weight:800;">
            <span aria-hidden="true">◆</span>
            الثقة القانونية والمؤسسية
          </div>

          <h3 id="legal-advisor-title" style="margin:18px 0 0;color:#fff;font-size:clamp(26px,3.2vw,42px);line-height:1.48;font-weight:900;">
            المستشار القانوني لشركة عالم الإبداع
            <span style="display:block;color:#e7b74a;">في المملكة العربية السعودية</span>
          </h3>

          <p style="margin:16px 0 0;max-width:820px;color:rgba(255,255,255,.7);font-size:clamp(14px,1.5vw,17px);line-height:2;">
            تفخر شركة عالم الإبداع باعتماد <strong style="color:#fff;">مكتب ناصر التميمي محامون ومستشارون</strong> مستشاراً وممثلاً قانونياً لها في المملكة، بما يعزز موثوقية أعمالها وشراكاتها وفق أعلى المعايير المهنية.
          </p>

          <div style="margin-top:24px;width:fit-content;padding:14px 19px;border:1px solid rgba(212,168,79,.38);border-radius:15px;background:rgba(255,255,255,.045);">
            <div style="color:#fff;font-size:clamp(17px,2vw,22px);font-weight:900;">مكتب ناصر التميمي محامون ومستشارون</div>
            <div style="margin-top:4px;color:#e7b74a;font-size:14px;font-weight:800;">الممثل القانوني للشركة</div>
          </div>

          <div style="margin-top:26px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
            <a href="${LAW_FIRM_URL}" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:12px 19px;border-radius:12px;background:linear-gradient(135deg,#e9bc55,#c9912c);color:#08111f;text-decoration:none;font-size:14px;font-weight:900;box-shadow:0 12px 32px rgba(212,168,79,.2);">
              زيارة موقع المكتب <span aria-hidden="true">↗</span>
            </a>
            <span style="color:rgba(255,255,255,.58);font-size:13px;">خدمات قانونية واستشارية موثوقة باحترافية عالية</span>
          </div>
        </div>

        <a class="legal-advisor-qr" href="${LAW_FIRM_URL}" target="_blank" rel="noreferrer" aria-label="فتح موقع مكتب ناصر التميمي محامون ومستشارون" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px;border-right:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.02));text-decoration:none;">
          <div style="padding:12px;border-radius:19px;background:#fff;box-shadow:0 18px 55px rgba(0,0,0,.4);">
            <img src="${QR_CODE_URL}" alt="رمز QR لموقع مكتب ناصر التميمي" width="220" height="220" loading="lazy" style="display:block;width:min(220px,64vw);height:auto;aspect-ratio:1;" />
          </div>
          <p style="margin:17px 0 0;color:#fff;text-align:center;font-size:14px;font-weight:800;line-height:1.8;">للاطلاع على المكتب والخدمات<br />امسح رمز QR</p>
          <span dir="ltr" style="margin-top:10px;max-width:100%;overflow-wrap:anywhere;color:#e7b74a;font-size:11px;text-align:center;">altamimilawfirm.com.sa/servicess/</span>
        </a>
      </div>
    </div>
    <style>
      @media (max-width: 820px) {
        #legal-advisor .legal-advisor-grid { grid-template-columns: 1fr !important; }
        #legal-advisor .legal-advisor-qr { border-right: 0 !important; border-top: 1px solid rgba(255,255,255,.1) !important; }
      }
      @media (max-width: 640px) {
        #legal-advisor { margin-bottom: 34px !important; }
        #legal-advisor .legal-advisor-glass { border-radius: 22px !important; }
      }
    </style>
  `;

  return wrapper;
}

export function LegalAdvisorSection() {
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let card: HTMLElement | null = null;

    const mount = () => {
      const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
      if (pathname !== "/" && pathname !== "/index.html") return false;

      const services = document.getElementById("services");
      const servicesContainer = services?.firstElementChild;
      const servicesHeading = servicesContainer?.firstElementChild;

      if (!servicesContainer || !servicesHeading) return false;

      document.getElementById("legal-advisor")?.remove();
      card = buildLegalAdvisorCard();
      servicesHeading.insertAdjacentElement("afterend", card);
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
      card?.remove();
    };
  }, []);

  return null;
}
