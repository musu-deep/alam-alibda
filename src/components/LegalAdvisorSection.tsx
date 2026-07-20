import { useEffect } from "react";

export function LegalAdvisorSection() {
  useEffect(() => {
    const moveCardAfterServices = () => {
      const servicesSection = document.getElementById("services");
      const servicesContainer = servicesSection?.firstElementChild;
      const legalAdvisorCard = document.getElementById("legal-advisor");

      if (!servicesContainer || !legalAdvisorCard) return false;

      const servicesGrid = Array.from(servicesContainer.children).find((element) =>
        element.classList.contains("grid"),
      );

      if (!servicesGrid) return false;

      legalAdvisorCard.classList.remove("mb-14");
      legalAdvisorCard.classList.add("mt-14");
      servicesGrid.insertAdjacentElement("afterend", legalAdvisorCard);
      return true;
    };

    if (moveCardAfterServices()) return;

    const observer = new MutationObserver(() => {
      if (moveCardAfterServices()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
