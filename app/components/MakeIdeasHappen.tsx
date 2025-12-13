"use client";
import React, { useEffect, useRef } from "react";

const MakeIdeasHappen = () => {
  const videoRefHorizontal = useRef<HTMLVideoElement>(null);
  const videoRefVertical = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoHorizontal = videoRefHorizontal.current;
    const videoVertical = videoRefVertical.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoHorizontal) {
      observer.observe(videoHorizontal);
    }
    if (videoVertical) {
      observer.observe(videoVertical);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRefHorizontal.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Se reproduce cuando el 50% del video es visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <video
        ref={videoRefHorizontal}
        className="w-full hidden md:block scale-[1.02] origin-center"
        preload="metadata"
        loop
        muted
        playsInline
      >
        <source src="/landing/horizontal.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video
        ref={videoRefVertical}
        className="block w-full md:hidden scale-[1.02] origin-center"
        preload="metadata"
        loop
        muted
        playsInline
      >
        <source src="/landing/vertical.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
};

export default MakeIdeasHappen;
