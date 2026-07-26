export default function sitemap() {
  const baseUrl = "https://vaishnodevikatra.in";

  // List of all pages in the app
  const routes = [
    // Core pages
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.9, changeFrequency: "weekly" },
    
    // Core SEO targeted pages
    { path: "/trek", priority: 1.0, changeFrequency: "weekly" },
    
    // Travel guides
    { path: "/travel/how-to-reach", priority: 0.9, changeFrequency: "monthly" },
    { path: "/travel/packing-guide", priority: 0.8, changeFrequency: "monthly" },
    { path: "/travel/weather", priority: 0.9, changeFrequency: "daily" },
    
    // Services
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/yatra-registration", priority: 1.0, changeFrequency: "monthly" },
    { path: "/services/helicopter", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/room-booking", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/battery-car", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ropeway", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/atka-aarti", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/palki-pony", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/prasad", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/donation", priority: 0.8, changeFrequency: "monthly" },
    
    // Blogs & News
    { path: "/blogs/yatra-resume", priority: 0.9, changeFrequency: "daily" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
