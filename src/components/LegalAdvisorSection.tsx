import { useEffect } from "react";

const ORIGINAL_ID = "legal-advisor";
const DISPLAY_ID = "legal-advisor-before-map";

export function LegalAdvisorSection() {
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let retryTimer: number | null = null;
    let stopped = false;

    const placeCardBeforeMap = () => {
      if (stopped) return false;

      const originalCard = document.getElementById(ORIGINAL_ID) as HTMLElement | null;
      const mapSection = document.getElementById("map");

      if (!originalCard || !mapSection || !mapSection.parentElement) return false;

      let displayCard = document.getElementById(DISPLAY_ID) as HTMLElement | null;

      if (!displayCard) {
        displayCard = originalCard.cloneNode(true) as HTMLElement;
        displayCard.id = DISPLAY_ID;
        displayCard.removeAttribute("aria-hidden");
        displayCard.classList.remove("mb-14", "mt-14");
        displayCard.classList.add("mx-auto", "my-20", "max-w-7xl");
      }

      mapSection.parentElement.insertBefore(displayCard, mapSection);
      originalCard.style.display = "none";
      originalCard.setAttribute("aria-hidden", "true");

      return displayCard.nextElementSibling === mapSection;
    };

    const ensurePlacement = () => {
      if (placeCardBeforeMap()) {
        observer?.disconnect();
        observer = null;
        if (retryTimer !== null) {
          window.clearInterval(retryTimer);
          retryTimer = null;
        }
      }
    };

    requestAnimationFrame(() => {
      ensurePlacement();
      window.setTimeout(ensurePlacement, 250);
      window.setTimeout(ensurePlacement, 800);
      window.setTimeout(ensurePlacement, 1600);
    });

    observer = new MutationObserver(ensurePlacement);
    observer.observe(document.body, { childList: true, subtree: true });

    retryTimer = window.setInterval(ensurePlacement, 400);
    const stopRetries = window.setTimeout(() => {
      if (retryTimer !== null) {
        window.clearInterval(retryTimer);
        retryTimer = null;
      }
      observer?.disconnect();
      observer = null;
    }, 8000);

    return () => {
      stopped = true;
      window.clearTimeout(stopRetries);
      observer?.disconnect();
      if (retryTimer !== null) window.clearInterval(retryTimer);

      document.getElementById(DISPLAY_ID)?.remove();
      const originalCard = document.getElementById(ORIGINAL_ID) as HTMLElement | null;
      if (originalCard) {
        originalCard.style.removeProperty("display");
        originalCard.removeAttribute("aria-hidden");
      }
    };
  }, []);

  return null;
}
