"use client";

import Image from "next/image";
import { motion } from "motion/react";

const tiles = [
  { seed: "aurora", title: "Aurora" },
  { seed: "canyon", title: "Canyon" },
  { seed: "harbor", title: "Harbor" },
  { seed: "forest", title: "Forest" },
  { seed: "dunes", title: "Dunes" },
  { seed: "summit", title: "Summit" },
];

export function ImageGrid() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-6 pb-32">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, i) => (
          <motion.figure
            key={tile.seed}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
          >
            <Image
              src={`https://picsum.photos/seed/${tile.seed}/800/600`}
              alt={`${tile.title} placeholder`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <figcaption className="absolute bottom-4 left-4 text-sm font-medium text-white">
              {tile.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
