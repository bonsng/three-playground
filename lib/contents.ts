export interface ContentItem {
  id: number;
  title: string;
  url: string;
  description: string;
}

export const contents: ContentItem[] = [
  {
    id: 1,
    title: "Basics",
    url: "/",
    description:
      "An overview of the 3D Playground project and how to explore Three.js features interactively.",
  },
  {
    id: 2,
    title: "Basic Geometry",
    url: "/geometry",
    description:
      "Learn how basic geometries are created and rendered using Three.js and React Three Fiber.",
  },
  {
    id: 3,
    title: "Materials & Textures",
    url: "/materials",
    description:
      "Explore different materials and texture techniques, including performance considerations.",
  },
  {
    id: 4,
    title: "Lighting & Shadows",
    url: "/lighting",
    description:
      "Understand how lighting and shadows work in Three.js and how they affect realism and performance.",
  },
  {
    id: 5,
    title: "Camera & Controls",
    url: "/camera",
    description:
      "Dive into camera systems and user controls for navigating 3D scenes effectively.",
  },
  {
    id: 6,
    title: "Post Processing",
    url: "/post-processing",
    description:
      "Apply post-processing effects and learn how to balance visual quality with performance.",
  },
  {
    id: 7,
    title: "Performance Optimization",
    url: "/performance",
    description:
      "Analyze rendering performance and discover optimization strategies for real-world projects.",
  },
];
