import { useEffect } from "react";
import { PiEyesFill } from "react-icons/pi";
import { GiRaven } from "react-icons/gi";

export default function DynamicFavicon() {
  useEffect(() => {
    // 1. Favicon Logic
    const iconElements = document.querySelectorAll(".favicon-icon-source");
    if (iconElements.length === 0) return;

    let currentIcon = 0;
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/svg+xml";
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);

    const updateFavicon = () => {
      const svgElement = iconElements[currentIcon].querySelector("svg");
      if (svgElement) {
        const svgString = new XMLSerializer().serializeToString(svgElement);
        link.href = `data:image/svg+xml;base64,${btoa(svgString)}`;
      }
      currentIcon = (currentIcon + 1) % iconElements.length;
    };

    updateFavicon();
    // Favicon interval set to 3 seconds (3000ms)
    const faviconInterval = setInterval(updateFavicon,8000);

    // 2. Title Animation Logic
    const titles = ["BrainBuddy's", "Here's Your Sign",  "Going out in Style"];
    let currentTitleIndex = 0;

    // Title interval set to 5 seconds (5000ms)
    const titleInterval = setInterval(() => {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      document.title = titles[currentTitleIndex];
    }, 15000);

    // Cleanup both intervals on unmount
    return () => {
      clearInterval(faviconInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div style={{ display: "none" }} aria-hidden="true">
      <div className="favicon-icon-source">
        <PiEyesFill color="#a1ecf8" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className="favicon-icon-source">
        <PiEyesFill color="#a1ecf8" style={{ transform: "scaleX(-1)" }} />
        <PiEyesFill color="#a1ecf8" />
      </div>
    </div>
  );
}
