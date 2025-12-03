import React, { useState } from "react";
import { Link } from "react-router-dom";

// بيانات المشاريع
const projectsData = [
  {
    id: 1,
    title: "FreshCart App",
    image: "/images/project1.png",
    demoLink: "https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app",
    codeLink: "https://github.com/BasemSaid1/FreshCart-App/tree/main",
    category: "ecommerce",
    description: "تطبيق عربة تسوق متكامل",
    aosDelay: "100",
  },
  {
    id: 2,
    title: "Restaurant",
    image: "/images/project2.png",
    demoLink: "https://restaurant-ashen-five.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/restaurant",
    category: "website",
    description: "موقع مطعم تفاعلي",
    aosDelay: "200",
  },
  {
    id: 3,
    title: "My Movies",
    image: "/images/project3.png",
    demoLink: "https://my-movies-nu-teal.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/My_Movies",
    category: "entertainment",
    description: "منصة أفلام وتقييمات",
    aosDelay: "400",
  },
  {
    id: 4,
    title: "Recipe",
    image: "/images/project4.png",
    demoLink: "https://recipe-food-amber.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/Recipe-food",
    category: "food",
    description: "موقع وصفات طعام",
    aosDelay: "600",
  },
  {
    id: 5,
    title: "Quran App",
    image: "/images/project5.png",
    demoLink: "https://quran-app2-peach.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/Quran-App2",
    category: "religious",
    description: "تطبيق القرآن الكريم",
    aosDelay: "1100",
  },
  {
    id: 6,
    title: "Educational-platform",
    image: "/images/project6.png",
    demoLink: "https://adsamy2.vercel.app/",
    codeLink: "#",
    category: "education",
    description: "منصة تعليمية",
    aosDelay: "1100",
  },
  {
    id: 7,
    title: "Rashid Yachts",
    image: "/images/project7.png",
    demoLink: "https://rashid-yachts-sooty.vercel.app/",
    codeLink: "#",
    category: "business",
    description: "موقع يخوت فاخرة",
    aosDelay: "1100",
  },
  {
    id: 8,
    title: "furniture-showroom",
    image: "/images/project8.png",
    demoLink: "https://furniture-showroom-silk.vercel.app/",
    codeLink: "#",
    category: "ecommerce",
    description: "معرض أثاث",
    aosDelay: "1100",
  },
  {
    id: 9,
    title: "beauty-clinic",
    image: "/images/project9.png",
    demoLink: "https://beauty-clinic-gilt.vercel.app/",
    codeLink: "#",
    category: "health",
    description: "عيادة تجميل",
    aosDelay: "1100",
  },
  {
    id: 10,
    title: "cafe",
    image: "/images/project10.png",
    demoLink: "https://caffee-swart.vercel.app/",
    codeLink: "#",
    category: "business",
    description: "موقع مقهى",
    aosDelay: "1100",
  },
  {
    id: 11,
    title: "GlobalNews",
    image: "/images/project11.jpg",
    demoLink: "https://news-app-nine-pi.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/News-App",
    category: "news",
    description: "منصة أخبار عالمية",
    aosDelay: "300",
  },
  {
    id: 12,
    title: "La-collection",
    image: "/images/project12.png",
    demoLink: "https://la-collection-e-commerce-ruby.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/La-collection-E-commerce",
    category: "ecommerce",
    description: "متجر إلكتروني للملابس",
    aosDelay: "500",
  },
  {
    id: 13,
    title: "Dashboard",
    image: "/images/project13.png",
    demoLink: "https://dashboard-two-woad-66.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/dashboard",
    category: "dashboard",
    description: "لوحة تحكم إدارية",
    aosDelay: "1700",
  },
  {
    id: 14,
    title: "Quiz App",
    image: "/images/project14.png",
    demoLink: "https://quiz-app-eta-ten-63.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/Quiz-App",
    category: "education",
    description: "تطبيق اختبارات",
    aosDelay: "1800",
  },
  {
    id: 15,
    title: "Weather App",
    image: "/images/project15.png",
    demoLink: "https://basemsaid1.github.io/weather-app/",
    codeLink: "https://github.com/BasemSaid1/weather-app",
    category: "utility",
    description: "تطبيق حالة الطقس",
    aosDelay: "700",
  },
  {
    id: 16,
    title: "Login App",
    image: "/images/project16.png",
    demoLink: "https://basemsaid1.github.io/Login-JS-LocalStorage/",
    codeLink: "https://github.com/BasemSaid1/Login-JS-LocalStorage",
    category: "utility",
    description: "نظام تسجيل دخول",
    aosDelay: "800",
  },
  {
    id: 17,
    title: "Todo List",
    image: "/images/project17.png",
    demoLink: "https://basemsaid1.github.io/Todo-list/",
    codeLink: "https://github.com/BasemSaid1/Todo-list",
    category: "productivity",
    description: "قائمة مهام تفاعلية",
    aosDelay: "900",
  },
  {
    id: 18,
    title: "BookMark",
    image: "/images/project18.png",
    demoLink: "https://basemsaid1.github.io/BookMark/",
    codeLink: "https://github.com/BasemSaid1/BookMark",
    category: "productivity",
    description: "مدير العلامات المرجعية",
    aosDelay: "1300",
  },
  {
    id: 19,
    title: "Calculator App",
    image: "/images/project19.png",
    demoLink: "https://basemsaid1.github.io/Calculator-app/",
    codeLink: "https://github.com/BasemSaid1/Calculator-app",
    category: "utility",
    description: "آلة حاسبة",
    aosDelay: "1000",
  },
  {
    id: 20,
    title: "Currency Converter",
    image: "/images/project20.png",
    demoLink: "https://basemsaid1.github.io/Currency-Converter/",
    codeLink: "https://github.com/BasemSaid1/Currency-Converter",
    category: "utility",
    description: "محول عملات",
    aosDelay: "1900",
  },
  {
    id: 21,
    title: "Daniels-Template",
    image: "/images/project21.png",
    demoLink: "https://basemsaid1.github.io/Daniels-Template/",
    codeLink: "https://github.com/BasemSaid1/Daniels-Template.git",
    category: "website",
    description: "قالب موقع شخصي",
    aosDelay: "1200",
  },
  {
    id: 22,
    title: "Random Quote Generator",
    image: "/images/project22.png",
    demoLink: "https://basemsaid1.github.io/Random-Quote-Generator/",
    codeLink: "https://github.com/BasemSaid1/Random-Quote-Generator",
    category: "entertainment",
    description: "مولد اقتباسات عشوائية",
    aosDelay: "1400",
  },
  {
    id: 23,
    title: "Slider JS",
    image: "/images/project23.png",
    demoLink: "https://basemsaid1.github.io/slider-js/",
    codeLink: "https://github.com/BasemSaid1/slider-js",
    category: "utility",
    description: "سلايدر تفاعلي",
    aosDelay: "1500",
  },
  {
    id: 24,
    title: "First Framework",
    image: "/images/project24.png",
    demoLink: "https://first-framework-mu.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/first-framework",
    category: "framework",
    description: "إطار عمل CSS",
    aosDelay: "1600",
  },
  {
    id: 25,
    title: "Rock Paper Scissors",
    image: "/images/project25.png",
    demoLink: "https://rock-paper-scissors-tan-six.vercel.app/",
    codeLink: "https://github.com/BasemSaid1/Rock-Paper-Scissors",
    category: "game",
    description: "لعبة حجر ورقة مقص",
    aosDelay: "1900",
  },
];

// مكون البطاقة
const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
      data-aos="fade-up"
      data-aos-delay={project.aosDelay}
    >
      <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6 h-full">
        <div className="relative overflow-hidden rounded-lg">
          <Link to={project.demoLink} target="_blank">
            <img
              className="w-full h-[200px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x200/1f2937/ffffff?text=Project+Image";
              }}
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm text-left">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-xl font-bold tracking-wide min-h-[56px] flex items-center justify-center">
            {project.title}
          </h2>

          <div className="mt-2">
            <span className="inline-block bg-emerald-900/50 text-emerald-300 text-xs px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <div className="mt-6 flex space-x-4">
            <Link to={project.demoLink} target="_blank" className="w-1/2">
              <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                <span className="relative z-10">DEMO</span>
                <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
              </button>
            </Link>
            <Link to={project.codeLink} target="_blank" className="w-1/2">
              <button
                className={`relative text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button ${
                  project.codeLink === "#"
                    ? "bg-gray-600 cursor-not-allowed opacity-70"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
                disabled={project.codeLink === "#"}
              >
                <span className="relative z-10">CODE</span>
                <span
                  className={`absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300 ${
                    project.codeLink === "#" ? "bg-gray-500" : "bg-emerald-500"
                  }`}
                ></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // استخراج التصنيفات الفريدة
  const categories = [
    "all",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  // فلترة المشاريع
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="py-12 md:py-20 px-4 md:px-6 mt-6">
          {/* العنوان */}
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Explore My
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 ml-3">
                Projects
              </span>
            </h1>
          </div>

          {/* فلتر البحث */}
          <div className="max-w-6xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* شريط البحث */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>

              {/* عدد المشاريع المعروضة */}
              <div className="text-gray-400">
                Showing{" "}
                <span className="text-emerald-400 font-bold">
                  {filteredProjects.length}
                </span>{" "}
                of {projectsData.length} projects
              </div>

              {/* زر إعادة التعيين */}
              {(activeFilter !== "all" || searchTerm) && (
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchTerm("");
                  }}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* تصنيفات الفلتر */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* عرض المشاريع */}
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  No projects found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
