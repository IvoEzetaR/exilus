// === IDE Agency Design System ===
// Shared animations, layouts, and typography presets for all client projects.

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

// Section wrapper padding
export const sectionPadding = "px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24";

// Max width container
export const maxWidth = "max-w-7xl mx-auto";

// Heading hierarchy
export const headings = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold tracking-tight",
  h3: "text-xl sm:text-2xl font-semibold",
  subtitle: "text-lg sm:text-xl text-muted-foreground",
  body: "text-base text-muted-foreground leading-relaxed",
};
