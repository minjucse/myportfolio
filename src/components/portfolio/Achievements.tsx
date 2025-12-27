
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const education = [
    {
      date: "June 15, 2013 - 2016",
      title: "Master in Computer Engineering",
      sub: "First Class",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
    {
      date: "June 12, 2010 - 2013",
      title: "Bachelor in Computer Engineering",
      sub: "First Class",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
    {
      date: "June 1, 2009 - 2010",
      title: "Higher Secondary",
      sub: "(A+)",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
  ];

  const experience = [
    {
      date: "March 12, 2020",
      title: "Envato",
      sub: "Team Leader",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
    {
      date: "January 23, 2018 - 2020",
      title: "Facebook Company",
      sub: "Sr. Developer",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
    {
      date: "July 23, 2016 - 2018",
      title: "Twitter Company",
      sub: "Jr. Developer",
      desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-[#f6f8ff] overflow-hidden">
      {/* --- Background Shapes (Exact CSS Implementation) --- */}
      {/* Top Background Shape */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-[url('/assets/images/achievements/bg-shape.png')] bg-top bg-no-repeat bg-contain pointer-events-none" />
      
      {/* Shape 1: Right Icon & Left Circle */}
      <div className="absolute top-[20%] right-[10%] w-[50px] h-[50px] bg-[url('/assets/images/achievements/shape-1.png')] bg-center bg-no-repeat bg-contain hidden lg:block" />
      <div className="absolute top-[20%] left-[10%] w-[50px] h-[50px] bg-[#f1c7a1] rounded-full shadow-md hidden lg:block" />
      
      {/* Shape 2: Left Icon & Right Icon */}
      <div className="absolute bottom-[20%] left-[10%] w-[50px] h-[50px] bg-[url('/assets/images/achievements/shape-2.png')] bg-center bg-no-repeat bg-contain hidden lg:block" />
      <div className="absolute bottom-[20%] right-[10%] w-[50px] h-[50px] bg-[url('/assets/images/about/shape-2.png')] bg-center bg-no-repeat bg-contain hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-slate-400 uppercase tracking-[3px] text-sm font-semibold">qualification</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My <span className="text-[#7963e0]">achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* EDUCATION COLUMN */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-slate-800 ml-4 mb-6">Education</h4>
            <div className="relative border-l-2 border-slate-200 ml-6 space-y-6">
              {education.map((item, idx) => (
                <TimelineCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* EXPERIENCE COLUMN */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-slate-800 ml-4 mb-6 uppercase">Experience</h4>
            <div className="relative border-l-2 border-slate-200 ml-6 space-y-6">
              {experience.map((item, idx) => (
                <TimelineCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for the Timeline Cards
const TimelineCard = ({ item }: { item: any }) => (
  <div className="relative pl-10 pb-2 group">
    {/* --- Timeline Marker (Double Circle Effect from your CSS) --- */}
    <div className="absolute -left-[9px] top-4 z-20">
      {/* Inner Dot */}
      <div className="w-4 h-4 rounded-full border-2 border-[#7963e0] bg-[#f6f8ff]" />
      {/* Outer Connecting Line/Marker (The 'after' logic in your CSS) */}
      <div className="absolute top-[7px] left-[16px] w-5 h-5 border border-[#7963e0] rounded-full bg-[#f6f8ff] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <Card className="border-none shadow-sm rounded-xl bg-white hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <span className="text-xs font-semibold text-slate-400 block mb-2">{item.date}</span>
        <h5 className="text-lg font-bold text-[#7963e0] leading-tight">
          {item.title} 
          <span className="text-slate-500 font-medium text-sm ml-1">- {item.sub}</span>
        </h5>
        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Achievements;