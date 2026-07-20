import { useEffect } from "react";

export function LegalAdvisorSection() {
  useEffect(() => {
    const moveCardBeforeMap = () => {
      const legalAdvisorCard = document.getElementById("legal-advisor");
      const mapSection = document.getElementById("map");

      if (!legalAdvisorCard || !mapSection) return false;

      legalAdvisorCard.classList.remove("mt-14", "mb-14");
      legalAdvisorCard.classList.add("mx-auto", "my-20", "max-w-7xl");
      mapSection.insertAdjacentElement("beforebegin", legalAdvisorCard);
      return true;
    };

    if (moveCardBeforeMap()) return;

    const observer = new MutationObserver(() => {
      if (moveCardBeforeMap()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
