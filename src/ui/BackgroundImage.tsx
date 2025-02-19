"use client";
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/CA-en-20250203-TRIFECTA-perspective_219648ef-70c0-4366-bec5-f9dae73ccf74_large.jpg"
        alt="default-bg-image"
        fill
        unoptimized
        style={{ objectFit: "cover" }}
        className="absolute inset-0 brightness-50 z-0"
      />
    </>
  );
};

export default BackgroundImage;
