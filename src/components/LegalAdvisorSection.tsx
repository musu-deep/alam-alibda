import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Building2, ExternalLink, Scale, ShieldCheck } from "lucide-react";

const LAW_FIRM_URL = "https://altamimilawfirm.com.sa/servicess/";
const QR_CODE = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB3aWR0aD0iMzdtbSIgaGVpZ2h0PSIzN21tIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNyAzNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCw0SDVWNUg0ek01LDRINlY1SDV6TTYsNEg3VjVINnpNNyw0SDhWNUg3ek04LDRIOVY1SDh6TTksNEgxMFY1SDl6TTEwLDRIMTFWNUgxMHpNMTMsNEgxNFY1SDEzek0xNCw0SDE1VjVIMTR6TTE4LDRIMTlWNUgxOHpNMTksNEgyMFY1SDE5ek0yMSw0SDIyVjVIMjF6TTIyLDRIMjNWNUgyMnpNMjMsNEgyNFY1SDIzek0yNiw0SDI3VjVIMjZ6TTI3LDRIMjhWNUgyN3pNMjgsNEgyOVY1SDI4ek0yOSw0SDMwVjVIMjl6TTMwLDRIMzFWNUgzMHpNMzEsNEgzMlY1SDMxek0zMiw0SDMzVjVIMzJ6TTQsNUg1VjZINHpNMTAsNUgxMVY2SDEwek0xMyw1SDE0VjZIMTN6TTE1LDVIMTZWNkgxNXpNMTcsNUgxOFY2SDE3ek0xOSw1SDIwVjZIMTl6TTIxLDVIMjJWNkgyMXpNMjIsNUgyM1Y2SDIyek0yNiw1SDI3VjZIMjZ6TTMyLDVIMzNWNkgzMnpNNCw2SDVWN0g0ek02LDZIN1Y3SDZ6TTcsNkg4VjdIN3pNOCw2SDlWN0g4ek0xMCw2SDExVjdIMTB6TTE0LDZIMTVWN0gxNHpNMTUsNkgxNlY3SDE1ek0xNiw2SDE3VjdIMTZ6TTE4LDZIMTlWN0gxOHpNMjAsNkgyMVY3SDIwek0yMSw2SDIyVjdIMjF6TTIzLDZIMjRWN0gyM3pNMjYsNkgyN1Y3SDI2ek0yOCw2SDI5VjdIMjh6TTI5LDZIMzBWN0gyOXpNMzAsNkgzMVY3SDMwek0zMiw2SDMzVjdIMzJ6TTQsN0g1VjhINHpNNiw3SDdWOEg2ek03LDdIOFY4SDd6TTgsN0g5VjhIOHpNMTAsN0gxMVY4SDEwek0xMyw3SDE0VjhIMTN6TTE1LDdIMTZWOEgxNXpNMTgsN0gxOVY4SDE4ek0yMyw3SDI0VjhIMjN6TTI0LDdIMjVWOEgyNHpNMjYsN0gyN1Y4SDI2ek0yOCw3SDI5VjhIMjh6TTI5LDdIMzBWOEgyOXpNMzAsN0gzMVY4SDMwek0zMiw3SDMzVjhIMzJ6TTQsOEg1VjlINHpNNiw4SDdWOUg2ek03LDhIOFY5SDd6TTgsOEg5VjlIOHpNMTAsOEgxMVY5SDEwek0xNCw4SDE1VjlIMTR6TTE3LDhIMThWOUgxN3pNMTgsOEgxOVY5SDE4ek0xOSw4SDIwVjlIMTl6TTIwLDhIMjFWOUgyMHpNMjEsOEgyMlY5SDIxek0yMiw4SDIzVjlIMjJ6TTI2LDhIMjdWOUgyNnpNMjgsOEgyOVY5SDI4ek0yOSw4SDMwVjlIMjl6TTMwLDhIMzFWOUgzMHpNMzIsOEgzM1Y5SDMyek00LDlINVYxMEg0ek0xMCw5SDExVjEwSDEwek0xMiw5SDEzVjEwSDEyek0xNCw5SDE1VjEwSDE0ek0xNSw5SDE2VjEwSDE1ek0xNiw5SDE3VjEwSDE2ek0xNyw5SDE4VjEwSDE3ek0xOSw5SDIwVjEwSDE5ek0yMSw5SDIyVjEwSDIxek0yMiw5SDIzVjEwSDIyek0yMyw5SDI0VjEwSDIzek0yNiw5SDI3VjEwSDI2ek0zMiw5SDMzVjEwSDMyek00LDEwSDVWMTFINHpNNSwxMEg2VjExSDV6TTYsMTBIN1YxMUg2ek03LDEwSDhWMTFIN3pNOCwxMEg5VjExSDh6TTksMTBIMTBWMTFIOXpNMTAsMTBIMTFWMTFIMTB6TTEyLDEwSDEzVjExSDEyek0xNCwxMEgxNVYxMUgxNHpNMTYsMTBIMTdWMTFIMTZ6TTE4LDEwSDE5VjExSDE4ek0yMCwxMEgyMVYxMUgyMHpNMjIsMTBIMjNWMTFIMjJ6TTI0LDEwSDI1VjExSDI0ek0yNiwxMEgyN1YxMUgyNnpNMjcsMTBIMjhWMTFIMjd6TTI4LDEwSDI5VjExSDI4ek0yOSwxMEgzMFYxMUgyOXpNMzAsMTBIMzFWMTFIMzB6TTMxLDEwSDMyVjExSDMxek0zMiwxMEgzM1YxMUgzMnpNMTMsMTFIMTRWMTJIMTN6TTE0LDExSDE1VjEySDE0ek0xOCwxMUgxOVYxMkgxOHpNMjEsMTFIMjJWMTJIMjF6TTQsMTJINVYxM0g0ek03LDEySDhWMTNIN3pNOSwxMkgxMFYxM0g5ek0xMCwxMkgxMVYxM0gxMHpNMTIsMTJIMTNWMTNIMTJ6TTEzLDEySDE0VjEzSDEzek0xNSwxMkgxNlYxM0gxNXpNMTYsMTJIMTdWMTNIMTZ6TTE3LDEySDE4VjEzSDE3ek0xOCwxMkgxOVYxM0gxOHpNMjMsMTJIMjRWMTNIMjN6TTI1LDEySDI2VjEzSDI1ek0yNywxMkgyOFYxM0gyN3pNNCwxM0g1VjE0SDR6TTgsMTNIOVYxNEg4ek0xMiwxM0gxM1YxNEgxMnpNMTUsMTNIMTZWMTRIMTV6TTE3LDEzSDE4VjE0SDE3ek0xOCwxM0gxOVYxNEgxOHpNMjAsMTNIMjFWMTRIMjB6TTIxLDEzSDIyVjE0SDIxek0yNCwxM0gyNVYxNEgyNHpNMjUsMTNIMjZWMTRIMjV6TTI2LDEzSDI3VjE0SDI2ek0yOSwxM0gzMFYxNEgyOXpNMzIsMTNIMzNWMTRIMzJ6TTQsMTRINVYxNUg0ek02LDE0SDdWMTVINnpNOSwxNEgxMFYxNUg5ek0xMCwxNEgxMVYxNUgxMHpNMTEsMTRIMTJWMTVIMTF6TTE1LDE0SDE2VjE1SDE1ek0xOCwxNEgxOVYxNUgxOHpNMjEsMTRIMjJWMTVIMjF6TTIyLDE0SDIzVjE1SDIyek0yMywxNEgyNFYxNUgyM3pNMjQsMTRIMjVWMTVIMjR6TTI1LDE0SDI2VjE1SDI1ek0yNiwxNEgyN1YxNUgyNnpNMjcsMTRIMjhWMTVIMjd6TTI4LDE0SDI5VjE1SDI4ek0yOSwxNEgzMFYxNUgyOXpNMzAsMTRIMzFWMTVIMzB6TTMxLDE0SDMyVjE1SDMxek00LDE1SDVWMTZINHpNNywxNUg4VjE2SDd6TTksMTVIMTBWMTZIOXpNMTEsMTVIMTJWMTZIMTF6TTEzLDE1SDE0VjE2SDEzek0xNCwxNUgxNVYxNkgxNHpNMTYsMTVIMTdWMTZIMTZ6TTE3LDE1SDE4VjE2SDE3ek0yMiwxNUgyM1YxNkgyMnpNMzAsMTVIMzFWMTZIMzB6TTMxLDE1SDMyVjE2SDMxek02LDE2SDdWMTdINnpNNywxNkg4VjE3SDd6TTksMTZIMTBWMTdIOXpNMTAsMTZIMTFWMTdIMTB6TTEzLDE2SDE0VjE3SDEzek0xNSwxNkgxNlYxN0gxNXpNMTYsMTZIMTdWMTdIMTZ6TTE3LDE2SDE4VjE3SDE3ek0yMSwxNkgyMlYxN0gyMXpNMjQsMTZIMjVWMTdIMjR6TTI1LDE2SDI2VjE3SDI1ek0yNiwxNkgyN1YxN0gyNnpNMjksMTZIMzBWMTdIMjl6TTMxLDE2SDMyVjE3SDMxek0zMiwxNkgzM1YxN0gzMnpNNSwxN0g2VjE4SDV6TTYsMTdIN1YxOEg2ek03LDE3SDhWMThIN3pNOCwxN0g5VjE4SDh6TTEyLDE3SDEzVjE4SDEyek0xNCwxN0gxNVYxOEgxNHpNMTUsMTdIMTZWMThIMTV6TTE4LDE3SDE5VjE4SDE4ek0yMywxN0gyNFYxOEgyM3pNMjQsMTdIMjVWMThIMjR6TTI1LDE3SDI2VjE4SDI1ek01LDE4SDZWMTlINXpNNiwxOEg3VjE5SDZ6TTksMThIMTBWMTlIOXpNMTAsMThIMTFWMTlIMTB6TTEyLDE4SDEzVjE5SDEyek0xNywxOEgxOFYxOUgxN3pNMjQsMThIMjVWMTlIMjR6TTI3LDE4SDI4VjE5SDI3ek0yOCwxOEgyOVYxOUgyOHpNMjksMThIMzBWMTlIMjl6TTMwLDE4SDMxVjE5SDMwek0zMSwxOEgzMlYxOUgzMXpNMzIsMThIMzNWMTlIMzJ6TTUsMTlINlYyMEg1ek02LDE5SDdWMjBINnpNNywxOUg4VjIwSDd6TTgsMTlIOVYyMEg4ek0xNSwxOUgxNlYyMEgxNXpNMTcsMTlIMThWMjBIMTd6TTE4LDE5SDE5VjIwSDE4ek0xOSwxOUgyMFYyMEgxOXpNMjAsMTlIMjFWMjBIMjB6TTIxLDE5SDIyVjIwSDIxek0yMiwxOUgyM1YyMEgyMnpNMjQsMTlIMjVWMjBIMjR6TTI5LDE5SDMwVjIwSDI5ek0zMSwxOUgzMlYyMEgzMXpNNiwyMEg3VjIxSDZ6TTgsMjBIOVYyMUg4ek05LDIwSDEwVjIxSDl6TTEwLDIwSDExVjIxSDEwek0xNCwyMEgxNVYyMUgxNHpNMTUsMjBIMTZWMjFIMTV6TTE4LDIwSDE5VjIxSDE4ek0yMSwyMEgyMlYyMUgyMXpNMjMsMjBIMjRWMjFIMjN6TTI1LDIwSDI2VjIxSDI1ek0yNywyMEgyOFYyMUgyN3pNMzEsMjBIMzJWMjFIMzF6TTksMjFIMTBWMjJIOXpNMTEsMjFIMTJWMjJIMTF6TTEzLDIxSDE0VjIySDEzek0xNCwyMUgxNVYyMkgxNHpNMTUsMjFIMTZWMjJIMTV6TTE2LDIxSDE3VjIySDE2ek0xOCwyMUgxOVYyMkgxOHpNMjAsMjFIMjFWMjJIMjB6TTIxLDIxSDIyVjIySDIxek0yNSwyMUgyNlYyMkgyNXpNMjYsMjFIMjdWMjJIMjZ6TTI3LDIxSDI4VjIySDI3ek0yOSwyMUgzMFYyMkgyOXpNMzIsMjFIMzNWMjJIMzJ6TTQsMjJINVYyM0g0ek02LDIySDdWMjNINnpNMTAsMjJIMTFWMjNIMTB6TTEyLDIySDEzVjIzSDEyek0xMywyMkgxNFYyM0gxM3pNMTQsMjJIMTVWMjNIMTR6TTE3LDIySDE4VjIzSDE3ek0yNSwyMkgyNlYyM0gyNXpNMjgsMjJIMjlWMjNIMjh6TTMxLDIySDMyVjIzSDMxek0zMiwyMkgzM1YyM0gzMnpNNywyM0g4VjI0SDd6TTEzLDIzSDE0VjI0SDEzek0xOCwyM0gxOVYyNEgxOHpNMjAsMjNIMjFWMjRIMjB6TTIxLDIzSDIyVjI0SDIxek0yMiwyM0gyM1YyNEgyMnpNMjYsMjNIMjdWMjRIMjZ6TTI4LDIzSDI5VjI0SDI4ek0zMSwyM0gzMlYyNEgzMXpNMzIsMjNIMzNWMjRIMzJ6TTQsMjRINVYyNUg0ek03LDI0SDhWMjVIN3pNOCwyNEg5VjI1SDh6TTksMjRIMTBWMjVIOXpNMTAsMjRIMTFWMjVIMTB6TTExLDI0SDEyVjI1SDExek0xMiwyNEgxM1YyNUgxMnpNMjIsMjRIMjNWMjVIMjJ6TTI0LDI0SDI1VjI1SDI0ek0yNSwyNEgyNlYyNUgyNXpNMjYsMjRIMjdWMjVIMjZ6TTI3LDI0SDI4VjI1SDI3ek0yOCwyNEgyOVYyNUgyOHpNMzAsMjRIMzFWMjVIMzB6TTEyLDI1SDEzVjI2SDEyek0xNCwyNUgxNVYyNkgxNHpNMTUsMjVIMTZWMjZIMTV6TTE2LDI1SDE3VjI2SDE2ek0yMCwyNUgyMVYyNkgyMHpNMjMsMjVIMjRWMjZIMjN6TTI0LDI1SDI1VjI2SDI0ek0yOCwyNUgyOVYyNkgyOHpNMzAsMjVIMzFWMjZIMzB6TTMxLDI1SDMyVjI2SDMxek0zMiwyNUgzM1YyNkgzMnpNNCwyNkg1VjI3SDR6TTUsMjZINlYyN0g1ek02LDI2SDdWMjdINnpNNywyNkg4VjI3SDd6TTgsMjZIOVYyN0g4ek05LDI2SDEwVjI3SDl6TTEwLDI2SDExVjI3SDEwek0xMywyNkgxNFYyN0gxM3pNMTQsMjZIMTVWMjdIMTR6TTE1LDI2SDE2VjI3SDE1ek0yMCwyNkgyMVYyN0gyMHpNMjEsMjZIMjJWMjdIMjF6TTI0LDI2SDI1VjI3SDI0ek0yNiwyNkgyN1YyN0gyNnpNMjgsMjZIMjlWMjdIMjh6TTMxLDI2SDMyVjI3SDMxek00LDI3SDVWMjhINHpNMTAsMjdIMTFWMjhIMTB6TTEyLDI3SDEzVjI4SDEyek0xNSwyN0gxNlYyOEgxNXpNMTYsMjdIMTdWMjhIMTZ6TTE4LDI3SDE5VjI4SDE4ek0yMCwyN0gyMVYyOEgyMHpNMjQsMjdIMjVWMjhIMjR6TTI4LDI3SDI5VjI4SDI4ek0yOSwyN0gzMFYyOEgyOXpNMzAsMjdIMzFWMjhIMzB6TTQsMjhINVYyOUg0ek02LDI4SDdWMjlINnpNNywyOEg4VjI5SDd6TTgsMjhIOVYyOUg4ek0xMCwyOEgxMVYyOUgxMHpNMTQsMjhIMTVWMjlIMTR6TTE5LDI4SDIwVjI5SDE5ek0yMCwyOEgyMVYyOUgyMHpNMjEsMjhIMjJWMjlIMjF6TTI0LDI4SDI1VjI5SDI0ek0yNSwyOEgyNlYyOUgyNXpNMjYsMjhIMjdWMjlIMjZ6TTI3LDI4SDI4VjI5SDI3ek0yOCwyOEgyOVYyOUgyOHpNNCwyOUg1VjMwSDR6TTYsMjlIN1YzMEg2ek03LDI5SDhWMzBIN3pNOCwyOUg5VjMwSDh6TTEwLDI5SDExVjMwSDEwek0xMiwyOUgxM1YzMEgxMnpNMTMsMjlIMTRWMzBIMTN6TTE0LDI5SDE1VjMwSDE0ek0yMCwyOUgyMVYzMEgyMHpNMjEsMjlIMjJWMzBIMjF6TTIyLDI5SDIzVjMwSDIyek0yNiwyOUgyN1YzMEgyNnpNMjcsMjlIMjhWMzBIMjd6TTI4LDI5SDI5VjMwSDI4ek0yOSwyOUgzMFYzMEgyOXpNMzAsMjlIMzFWMzB6TTMxLDI5SDMyVjMwSDMxek00LDMwSDVWMzFINHpNNiwzMEg3VjMxSDZ6TTcsMzBIOFYzMUg3ek04LDMwSDlWMzFIOHpNMTAsMzBIMTFWMzFIMTB6TTE1LDMwSDE2VjMxSDE1ek0yMiwzMEgyM1YzMUgyMnpNMjMsMzBIMjRWMzFIMjN6TTI0LDMwSDI1VjMxSDI0ek0yOCwzMEgyOVYzMUgyOHpNMjksMzBIMzBWMzFIMjl6TTMwLDMwSDMxVjMxSDMwek0zMiwzMEgzM1YzMUgzMnpNNCwzMUg1VjMySDR6TTEwLDMxSDExVjMySDEwek0xMywzMUgxNFYzMkgxM3pNMTksMzFIMjBWMzJIMTl6TTIxLDMxSDIyVjMySDIxek0yMiwzMUgyM1YzMkgyMnpNMjMsMzFIMjRWMzJIMjN6TTI0LDMxSDI1VjMySDI0ek0yNSwzMUgyNlYzMkgyNXpNMjYsMzFIMjdWMzJIMjZ6TTMxLDMxSDMyVjMySDMxek00LDMySDVWMzNINHpNNSwzMkg2VjMzSDV6TTYsMzJIN1YzM0g2ek03LDMySDhWMzNIN3pNOCwzMkg5VjMzSDh6TTksMzJIMTBWMzNIOXpNMTAsMzJIMTFWMzNIMTB6TTEyLDMySDEzVjMzSDEyek0xNCwzMkgxNVYzM0gxNHpNMTgsMzJIMTlWMzNIMTh6TTIxLDMySDIyVjMzSDIxek0yNCwzMkgyNVYzM0gyNHpNMjUsMzJIMjZWMzNIMjV6TTI4LDMySDI5VjMzSDI4ek0yOSwzMkgzMFYzM0gyOXpNMzEsMzJIMzJWMzNIMzF6IiBpZD0icXItcGF0aCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIvPjwvc3ZnPg==";

export function LegalAdvisorSection() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const hero = document.getElementById("home");
    if (!hero) return;

    const oldMount = document.getElementById("legal-advisor-section-mount");
    if (oldMount) oldMount.remove();

    const mount = document.createElement("div");
    mount.id = "legal-advisor-section-mount";
    hero.insertAdjacentElement("afterend", mount);
    setMountNode(mount);

    return () => {
      setMountNode(null);
      mount.remove();
    };
  }, []);

  if (!mountNode) return null;

  return createPortal(
    <section
      id="legal-advisor"
      aria-labelledby="legal-advisor-title"
      className="relative isolate overflow-hidden border-y border-white/5 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 12% 25%, rgba(212,168,79,.14), transparent 30%), radial-gradient(circle at 88% 75%, rgba(42,151,194,.12), transparent 32%), linear-gradient(135deg, #020817 0%, #071a2c 52%, #03111f 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-28 top-8 -z-10 h-80 w-80 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute -left-36 bottom-0 -z-10 h-96 w-96 rounded-full border border-cyan-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-bold text-gold backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              الثقة القانونية والمؤسسية
            </div>
            <h2 id="legal-advisor-title" className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              مستشارنا وممثلنا القانوني
              <span className="gradient-gold-text"> في المملكة العربية السعودية</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              تفخر شركة عالم الإبداع باعتماد مكتب ناصر التميمي محامون ومستشارون مستشاراً وممثلاً قانونياً لها في المملكة، بما يعزز سلامة أعمالها وشراكاتها وفق أعلى المعايير المهنية.
            </p>
          </div>

          <a
            href={LAW_FIRM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-bold text-gold transition hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/15"
          >
            زيارة موقع المكتب
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] p-3 shadow-[0_35px_100px_rgba(0,0,0,.38)] backdrop-blur-2xl sm:p-5">
          <div className="pointer-events-none absolute inset-x-24 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061426]/85 lg:grid-cols-[1fr_360px]">
            <div className="relative flex min-h-[430px] flex-col justify-center overflow-hidden px-7 py-12 sm:px-12 lg:px-16">
              <Scale className="absolute -left-12 bottom-0 h-72 w-72 text-gold/[0.06]" strokeWidth={1} aria-hidden="true" />
              <Building2 className="absolute right-8 top-8 h-28 w-28 text-white/[0.035]" strokeWidth={1} aria-hidden="true" />

              <p className="mb-5 text-sm font-semibold tracking-wide text-gold">عالم الإبداع | Ibdaa World</p>
              <h3 className="max-w-3xl text-3xl font-black leading-[1.45] text-white sm:text-4xl lg:text-[2.8rem]">
                المستشار القانوني لشركة عالم الإبداع في المملكة العربية السعودية
              </h3>

              <div className="my-8 h-px w-full max-w-3xl bg-gradient-to-l from-transparent via-gold/55 to-transparent" />

              <div className="w-fit rounded-2xl border border-gold/45 bg-black/20 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                <p className="text-xl font-black text-white sm:text-2xl">مكتب ناصر التميمي محامون ومستشارون</p>
              </div>
              <p className="mt-5 text-lg font-bold text-gold">الممثل القانوني للشركة</p>
              <p className="mt-4 max-w-2xl leading-8 text-white/65">خدمات قانونية واستشارية موثوقة باحترافية عالية.</p>
            </div>

            <a
              href={LAW_FIRM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="فتح موقع مكتب ناصر التميمي محامون ومستشارون"
              className="relative flex flex-col items-center justify-center border-t border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.025] p-8 transition lg:border-r lg:border-t-0 group-hover:bg-white/[0.075]"
            >
              <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,.35)]">
                <img src={QR_CODE} alt="رمز QR لموقع مكتب ناصر التميمي" className="h-56 w-56 sm:h-64 sm:w-64" />
              </div>
              <p className="mt-6 text-center text-base font-bold leading-7 text-white">للاطلاع على المكتب والخدمات<br />امسح رمز QR</p>
              <span dir="ltr" className="mt-5 max-w-full break-all text-center text-xs text-gold/90">altamimilawfirm.com.sa/servicess/</span>
            </a>
          </div>
        </div>
      </div>
    </section>,
    mountNode,
  );
}
