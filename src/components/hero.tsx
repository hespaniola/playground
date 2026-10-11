"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-widest text-indigo-300 uppercase"
        >
          Playground
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
        >
          Build something worth looking at.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-pretty text-neutral-400 sm:text-xl"
        >
          A minimal starter with Next.js, Tailwind CSS and Motion. Swap in your
          own words and images and you&apos;re off.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            View gallery
          </a>
          <a
            href="https://motion.dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 text-sm font-semibold text-neutral-300 ring-1 ring-white/15 transition hover:bg-white/5"
          >
            Learn Motion
          </a>
        </motion.div>
      </div>
    </section>
  );
}
