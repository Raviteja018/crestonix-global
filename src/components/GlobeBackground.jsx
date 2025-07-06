import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

export default function GlobeBackground() {
  const globeContainerRef = useRef(null);
  const globeInstanceRef = useRef(null);

  useEffect(() => {
    if (!globeContainerRef.current) return;

    // Initialize the globe
    const globeInstance = Globe()(globeContainerRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .backgroundColor("rgba(0,0,0,0)");

    globeInstance.controls().autoRotate = true;
    globeInstance.controls().autoRotateSpeed = 0.3;
    globeInstance.controls().enableZoom = false;

    globeInstanceRef.current = globeInstance;

    // Resize handler
    const handleResize = () => {
      if (globeContainerRef.current && globeInstanceRef.current) {
        globeInstanceRef.current
          .width(window.innerWidth)
          .height(window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    return () => {
      window.removeEventListener("resize", handleResize);
      if (globeContainerRef.current) {
        globeContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={globeContainerRef}
      className="fixed top-0 left-0 w-screen h-screen z-0"
    />
  );
}
