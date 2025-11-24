import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Brain, 
  Server, 
  Terminal, 
  ExternalLink,
  GraduationCap,
  Cpu,
  Globe,
  Sparkles,
  Menu,
  X,
  FileText,
  Download,
  ChevronRight
} from 'lucide-react';

// UNCOMMENT THESE LINES IN YOUR LOCAL PROJECT:
import profilePic from './assets/photo.jpeg';
import resumeDe from './assets/CV_VijayDoba_DE.pdf';
import resumeEn from './assets/Vijay_Doba_CV1.pdf';



const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getTransformClass = () => {
    switch (direction) {
      case 'left': return '-translate-x-20';
      case 'right': return 'translate-x-20';
      case 'down': return '-translate-y-10';
      case 'up': default: return 'translate-y-20';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : `opacity-0 ${getTransformClass()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2 relative z-50">
            <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-mono">V</span>
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Vijay Doba</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-indigo-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-700 hover:border-indigo-500/50 transition-all text-xs font-bold tracking-wide uppercase"
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-bold text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            
            <div className="relative group shrink-0 animate-in fade-in zoom-in duration-1000">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800 flex items-center justify-center">
                    <img 
                        src={profilePic} 
                        alt="Vijay Doba" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            <div className="max-w-2xl text-center md:text-left">
              <Reveal direction="down">
                <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium tracking-widest text-indigo-300 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20 backdrop-blur-sm">
                  <Sparkles size={12} className="mr-2" /> AI Specialist & Web Developer
                </div>
              </Reveal>
              
              <Reveal direction="left" delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Intelligent</span><br />
                  Web Solutions
                </h1>
              </Reveal>
              
              <Reveal direction="left" delay={400}>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                  M.Sc. Artificial Intelligence student at <span className="text-slate-200 font-medium">FAU Erlangen-Nürnberg</span>. 
                  Bridging the gap between scalable web architecture and advanced machine learning models.
                </p>
              </Reveal>
              
              <Reveal direction="up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  
                  <div className="relative z-20">
                    <button 
                      onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                      className={`px-8 py-3.5 rounded-full font-bold transition-all transform flex items-center gap-2 text-sm shadow-xl ${
                        resumeMenuOpen 
                        ? 'bg-slate-800 text-white border border-slate-700' 
                        : 'bg-white text-slate-900 hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-indigo-500/20'
                      }`}
                    >
                      {resumeMenuOpen ? <X size={18} /> : <FileText size={18} />}
                      RESUME
                    </button>

                    {resumeMenuOpen && (
                      <div className="absolute top-full mt-3 left-0 w-full sm:w-64 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 shadow-2xl">
                         <a 
                           href={resumeEn}
                           download="Vijay_Doba_CV_EN.pdf"
                           className="flex items-center justify-between px-4 py-3 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg transition-colors text-sm text-slate-300 group"
                           onClick={() => setResumeMenuOpen(false)}
                         >
                           <div className="flex items-center gap-3">
                             <span className="font-mono text-xs border border-slate-600 px-1.5 py-0.5 rounded text-slate-400 group-hover:border-indigo-500/50 group-hover:text-indigo-400">EN</span>
                             <span>English Version</span>
                           </div>
                           <Download size={14} />
                         </a>
                         <div className="h-px bg-slate-800 mx-2" />
                         <a 
                           href={resumeDe}
                           download="Vijay_Doba_CV_DE.pdf"
                           className="flex items-center justify-between px-4 py-3 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg transition-colors text-sm text-slate-300 group"
                           onClick={() => setResumeMenuOpen(false)}
                         >
                           <div className="flex items-center gap-3">
                             <span className="font-mono text-xs border border-slate-600 px-1.5 py-0.5 rounded text-slate-400 group-hover:border-indigo-500/50 group-hover:text-indigo-400">DE</span>
                             <span>German Version</span>
                           </div>
                           <Download size={14} />
                         </a>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 justify-center">
                    <SocialLink href="https://github.com/vijaydoba" icon={<Github size={20} />} />
                    <SocialLink href="https://www.linkedin.com/in/vijaydoba/" icon={<Linkedin size={20} />} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <Reveal direction="right" className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Brain className="text-indigo-400" /> Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { title: "Machine Learning", desc: "OOD Detection, Prompt Learning", color: "border-purple-500/50" },
                      { title: "Web Development", desc: "React, Node.js, WebSockets", color: "border-indigo-500/50" },
                      { title: "Federated Learning", desc: "Privacy-preserving AI", color: "border-pink-500/50" },
                    ].map((item, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${item.color} bg-slate-950/50 backdrop-blur-sm`}>
                        <div className="font-bold text-slate-200">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal direction="left" className="order-2 md:order-1">
              <div>
                <SectionTitle number="01" title="About Me" />
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    I sit at the intersection of <span className="text-indigo-400 font-medium">software engineering</span> and <span className="text-purple-400 font-medium">artificial intelligence</span>. 
                    Currently pursuing my Master's at FAU, I focus on how robust software systems can enable and scale advanced AI capabilities.
                  </p>
                  <p>
                    My journey started with a strong foundation in Computer Engineering, leading to professional experience building real-time web applications. Now, I'm diving deep into research topics like Out-of-Distribution detection and Federated Learning.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Badge>📍 Erlangen, Germany</Badge>
                    <Badge>🗣 English (B2)</Badge>
                    <Badge>🗣 German (A2)</Badge>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section id="experience" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <SectionTitle number="02" title="Experience" />
          </Reveal>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <Reveal direction="left">
              <TimelineItem 
                role="Web Developer"
                company="Freelance / Contract"
                period="May 2022 – May 2023"
                tech={['Flutter', 'Web', 'Quality Assurance']}
              >
                Delivered custom web solutions tailored to client needs. Focused on modular architecture, comprehensive documentation, and performance optimization to ensure high-quality deliverables.
              </TimelineItem>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <TimelineItem 
                role="Backend Intern"
                company="Spider Technology"
                period="Jan 2022 – Apr 2022"
                tech={['Laravel', 'PHP', 'MySQL', 'REST API']}
              >
                Engineered backend systems for sales automation. Integrated REST APIs for workflow synchronization and optimized database queries for faster reporting.
              </TimelineItem>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <SectionTitle number="03" title="Featured Work" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal direction="up" delay={0}>
              <ProjectCard 
                title="ID-like Prompt Learning"
                subtitle="OOD Detection Research"
                tags={['PyTorch', 'CLIP', 'Python', 'Research']}
                icon={<Brain className="w-6 h-6" />}
                color="group-hover:border-purple-500/50"
              >
                Reproduced a CVPR 2023 study on OOD detection. Achieved 98.63 AUROC on Places dataset by adapting ImageNet training. Implemented mixed-precision training and context optimization.
              </ProjectCard>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <ProjectCard 
                title="FedAS Learning"
                subtitle="Federated Learning Framework"
                tags={['PyTorch', 'NumPy', 'CUDA', 'Algorithmic']}
                icon={<Cpu className="w-6 h-6" />}
                color="group-hover:border-pink-500/50"
              >
                Conducted robustness studies on FedAS vs FedAvg/FedProx. Solved non-IID data challenges using Dirichlet distribution and implemented individualized fine-tuning strategies.
              </ProjectCard>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <ProjectCard 
                title="Chatrio"
                subtitle="Realtime Anonymous Chat"
                tags={['React', 'Node.js', 'Socket.IO', 'TypeScript']}
                icon={<Globe className="w-6 h-6" />}
                color="group-hover:border-indigo-500/50"
              >
                Full-stack messaging platform featuring WebSocket communication, responsive dark/light modes, interest matching, typing indicators, and image compression algorithms.
              </ProjectCard>
            </Reveal>

            <Reveal direction="up" delay={600}>
              <ProjectCard 
                title="E-Commerce Platform"
                subtitle="Scalable Architecture"
                tags={['Java', 'MySQL', 'Node.js', 'Microservices']}
                icon={<Server className="w-6 h-6" />}
                color="group-hover:border-blue-500/50"
              >
                Complex server-side architecture with Java. Designed schemas for persistent carts and multi-step checkouts. Implemented a Node.js microservice for real-time status updates.
              </ProjectCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <SectionTitle number="04" title="Technical Arsenal" />
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Reveal direction="up" delay={0}>
              <SkillBox title="Languages" items={['Python', 'JavaScript/TS', 'Java', 'C/C++', 'SQL']} icon={<Code />} />
            </Reveal>
            <Reveal direction="up" delay={200}>
              <SkillBox title="AI / ML" items={['PyTorch', 'NumPy', 'Hugging Face', 'CLIP', 'Pandas']} icon={<Brain />} />
            </Reveal>
            <Reveal direction="up" delay={400}>
              <SkillBox title="Web" items={['React', 'Node.js', 'Express', 'Laravel', 'Socket.IO']} icon={<Globe />} />
            </Reveal>
            <Reveal direction="up" delay={600}>
              <SkillBox title="Infrastructure" items={['Git', 'Linux', 'Docker', 'CUDA', 'Rest APIs']} icon={<Terminal />} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="education" className="py-32">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <SectionTitle number="05" title="Education" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
             <Reveal direction="left">
               <EducationCard 
                 degree="M.Sc. Artificial Intelligence"
                 school="FAU Erlangen-Nürnberg"
                 period="2023 – Present"
                 desc="Focus on Advanced Programming, HCI, Machine Learning, Business Intelligence, and Data Science."
               />
             </Reveal>
             <Reveal direction="right">
               <EducationCard 
                 degree="B.E. Computer Engineering"
                 school="Gujarat Technological University"
                 period="2018 – 2022"
                 desc="GPA: 7.76/10.0. Core studies in Algorithms, DB Systems, OOP, Networks, IT Security."
               />
             </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 text-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
              Let's Work <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Together.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              I'm currently looking for new opportunities in AI and Web Development. 
              Whether you have a project in mind or just want to discuss the latest in tech, I'd love to hear from you.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <a 
              href="mailto:vijaydoba0011@gmail.com"
              className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              Say Hello <Mail className="ml-3 w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800/50 bg-slate-950 text-slate-500 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Vijay Doba. Built with React & Tailwind.</p>
          <div className="flex gap-6">
            <a href="https://github.com/vijaydoba" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/vijaydoba/" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:vijaydoba0011@gmail.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="font-mono text-indigo-500 text-xl font-bold">{number}.</span>
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    <div className="h-px bg-slate-800 flex-grow max-w-xs ml-4" />
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-slate-900 border border-slate-800 text-slate-400 rounded-full hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
  >
    {icon}
  </a>
);

const TimelineItem = ({ role, company, period, children, tech }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-l border-slate-800 pl-8 md:pl-0 relative pb-12 last:pb-0">
    <div className="hidden md:block absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
    <div className="md:w-1/4 pt-1">
      <span className="font-mono text-sm text-indigo-400 block mb-1">{period}</span>
      <h4 className="text-white font-bold">{company}</h4>
    </div>
    <div className="md:w-3/4">
      <h3 className="text-xl font-bold text-white mb-4">{role}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">
        {children}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, subtitle, tags, icon, children, color }) => (
  <div className={`group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 ${color}`}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
        {icon}
      </div>
      <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors cursor-pointer" />
    </div>
    
    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{title}</h3>
    <p className="text-sm font-mono text-indigo-500 mb-4">{subtitle}</p>
    
    <p className="text-slate-400 leading-relaxed mb-6 text-sm">
      {children}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-mono text-slate-500">
          #{tag}
        </span>
      ))}
    </div>
  </div>
);

const SkillBox = ({ title, items, icon }) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-colors group">
    <div className="flex items-center gap-3 mb-4 text-indigo-400 group-hover:text-white transition-colors">
      {icon}
      <h3 className="font-bold text-slate-200">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((skill) => (
        <li key={skill} className="text-sm text-slate-400 flex items-center gap-2 group-hover:text-slate-300 transition-colors">
          <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const EducationCard = ({ degree, school, period, desc }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col h-full hover:border-indigo-500/30 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
        <GraduationCap size={24} />
      </div>
      <span className="font-mono text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded-full">{period}</span>
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{degree}</h3>
    <h4 className="text-indigo-400 text-sm mb-4">{school}</h4>
    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
      {desc}
    </p>
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
    {children}
  </span>
);

export default Portfolio;