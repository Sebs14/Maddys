import React from "react";
import CircularGallery from "./ui/CircularGallery";
import { getProjectsFromPayload } from "@/lib/payload";

const OurWork = async () => {
  // Obtener datos de Payload (Pages, Media o fallback)
  const items = await getProjectsFromPayload();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center flex-col space-y-4">
      <h2 className="text-4xl font-bold">Mi Trabajo</h2>
      <p className="text-center">
        Aquí puedes ver algunos de mis proyectos destacados.
      </p>
      {/* Projects loaded from Payload CMS (Pages/Media) or fallback data */}
      <div className=" h-[600px] w-screen relative">
        <CircularGallery
          items={items}
          bend={5}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
          font="bold 32px Inter, system-ui, sans-serif"
        />
      </div>
    </div>
  );
};

export default OurWork;
