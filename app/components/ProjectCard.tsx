"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  tags = [],
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="group relative rounded-lg transition-all duration-200 h-full"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-start p-6 hover:bg-neutral-300/70 dark:hover:bg-neutral-900/70 rounded-lg border border-neutral-300/70 dark:border-neutral-900/70 transition-colors ease-in-out duration-100">
          <div>
            <h3 className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--color-accent)] transition-colors">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs ${GeistMono.className} text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
            →
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
