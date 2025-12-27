import { Code2, Database, Rocket, Server, Smartphone, Target } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Backend",
      icon: Server,
      techs: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Database",
      icon: Database,
      techs: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "SQL Server"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      techs: ["Expo", "PWA", "Responsive Design"],
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
     
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN: Narrative & Personality */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="text-[#7963e0] font-bold uppercase tracking-[3px] text-xs mb-2">Discovery</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
                About <span className="bg-gradient-to-r from-[#7963e0] to-[#9b87f5] bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-[#7963e0] rounded-full" />
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                I am a passionate Full-Stack Developer with over 2 years of experience.
                I specialize in building high-performance web applications that bridge
                the gap between complex backend logic and elegant user interfaces.
              </p>
            </div>

            {/* Feature Mini-Cards with hover effects */}
            <div className="space-y-4">
              {[
                { icon: Target, title: "My Goal", desc: "Creating functional and visually stunning digital solutions." },
                { icon: Rocket, title: "My Vision", desc: "Leading innovation through clean code and scalable architecture." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[#f6f8ff] dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:shadow-[#7963e0]/5 transition-all duration-300 group">
                  <div className="mt-1 p-2.5 bg-white dark:bg-slate-700 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-[#7963e0]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Skill Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-[#f6f8ff]/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Technical Expertise</h3>
                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                {skills.map((skill) => (
                  <div key={skill.category} className="group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-white dark:bg-slate-700 rounded-2xl shadow-md shadow-slate-200/50 dark:shadow-none group-hover:bg-[#7963e0] group-hover:text-white transition-all duration-300">
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 tracking-tight">{skill.category}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {skill.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 bg-white dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-[13px] font-semibold rounded-lg border border-slate-200 dark:border-slate-600 hover:border-[#7963e0] hover:text-[#7963e0] dark:hover:text-[#7963e0] transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};