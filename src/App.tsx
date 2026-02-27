import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Target, 
  TrendingUp, 
  Mail, 
  Phone, 
  Linkedin, 
  Award, 
  Users, 
  Lightbulb, 
  Rocket, 
  ExternalLink, 
  X,
  MapPin,
  Database,
  Code,
  BrainCircuit,
  BarChart3,
  Cloud,
  CheckCircle2,
  Download
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({ forecasting: 0, reporting: 0, automation: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate statistics on load
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        forecasting: Math.round(15 * progress),
        reporting: Math.round(18 * progress),
        automation: Math.round(12 * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Senior Data Analyst with 4+ years of experience delivering business intelligence, advanced analytics, and statistical modeling using SQL, Python, R, and Power BI/Tableau to solve complex business problems. Improved forecasting accuracy by 15%, increased reporting efficiency by 18%, and automated analytical workflows to save 12 hours per week by building scalable dashboards, KPI frameworks, and data quality validation processes. Translate complex analysis (A/B testing, hypothesis testing, regression, cohort analysis, forecasting) into executive-ready insights, partnering with cross-functional stakeholders to drive decision-making across operations, research, and healthcare analytics.";

  const experience = [
    {
      company: "Florida Atlantic University",
      role: "Data Research Analyst",
      location: "Boca Raton, FL",
      dates: "Sep. 2024 – May. 2025",
      highlights: [
        "Increased forecasting accuracy by 15% by developing predictive models in Python and R, executing feature engineering, cross-validation, and error analysis on large-scale behavioral datasets.",
        "Strengthened analytical accuracy by 20% by building hypothesis testing and data integrity workflows in SQL, Python, and Tableau, enforcing standardized verification checks across reporting inputs.",
        "Delivered decision-ready insights by executing regression, cohort analysis, and statistical testing, translating results into actionable recommendations for cross-functional stakeholders via executive-ready reports and presentations.",
        "Accelerated insight delivery by developing interactive Tableau dashboards for longitudinal analysis, delivering decision-ready KPI views for non-technical audiences and recurring stakeholder reviews.",
        "Boosted model stability by implementing evaluation and monitoring controls, including baseline benchmarking, performance tracking, and drift checks to validate forecasting consistency across iterations."
      ]
    },
    {
      company: "Accenture",
      role: "Business Intelligence Analyst",
      location: "Hyderabad, India",
      dates: "Jul. 2021 – Aug. 2023",
      highlights: [
        "Increased reporting efficiency by 18% by designing and optimizing BI reporting solutions using SQL, Power BI, and Excel, enabling faster decision-making across enterprise operations.",
        "Automated recurring analysis and reporting by building SQL stored procedures, Python scripts, and VBA workflows, saving 12 hours/week of manual effort across concurrent projects.",
        "Analyzed 500K+ daily records using A/B testing, hypothesis testing, trend analysis, and statistical methods to identify business drivers, improving process accuracy by 12% and strengthening evidence-based recommendations.",
        "Built executive-level Power BI dashboards using advanced DAX, Power Query, and custom visuals, delivering performance visibility across 5 business units and supporting multi-million dollar investment decisions.",
        "Developed cross-source analytical frameworks using R and SQL to standardize KPI definitions and measurement logic, improving consistency of insights across stakeholder reports and strategic initiatives.",
        "Presented technical findings to non-technical client stakeholders through structured storytelling and executive-ready decks, translating analytics into actionable recommendations that improved adoption and strengthened client outcomes."
      ]
    },
    {
      company: "SV Infratech Engineers Pvt. Ltd",
      role: "Operations Data Analyst",
      location: "Nellore, India",
      dates: "May. 2020 – Jun. 2021",
      highlights: [
        "Built SQL- and Excel-based KPI analytics models for plant performance tracking, driving a 9% improvement in operational efficiency through targeted trend and variance analysis.",
        "Validated real-time SCADA sensor data across 50+ monitoring points and applied statistical process control to detect anomalies early, reducing unplanned downtime by 11%.",
        "Automated recurring operational reporting using Excel VBA and SQL queries, eliminating 6 hours/week of manual work and establishing a centralized analytics repository as a single source of truth.",
        "Executed root-cause analysis using SQL queries and statistical testing, delivering data-backed recommendations that improved process throughput by 10% through targeted interventions."
      ]
    }
  ];

  const projects = [
    {
      title: "Predictive Behavioral Analytics Platform",
      subtitle: "Python & R Forecasting Models",
      category: "Advanced Analytics",
      introduction: "Developed sophisticated predictive models to analyze large-scale behavioral datasets, implementing machine learning pipelines that improved forecasting reliability.",
      problem: "Research teams struggled with inconsistent forecasting accuracy when analyzing complex behavioral patterns across longitudinal studies.",
      objective: "Build robust predictive models with automated validation frameworks to ensure consistent, accurate forecasting for research decision-making.",
      methodology: [
        "Implemented feature engineering pipelines in Python and R to extract meaningful patterns from raw behavioral data.",
        "Designed cross-validation frameworks with error analysis protocols to validate model performance across different data segments.",
        "Created automated monitoring controls including drift detection and baseline benchmarking to maintain model stability over time."
      ],
      results: [
        "Achieved 15% improvement in forecasting accuracy through advanced feature engineering and model optimization.",
        "Established standardized validation workflows that strengthened analytical accuracy by 20% across all research projects.",
        "Delivered executive-ready insights through automated reporting pipelines, accelerating decision-making cycles."
      ],
      conclusion: "Demonstrated end-to-end capability in building production-grade predictive analytics solutions with rigorous validation frameworks."
    },
    {
      title: "Enterprise BI Automation Suite",
      subtitle: "Power BI & SQL Integration",
      category: "Business Intelligence",
      introduction: "Architected comprehensive BI automation solutions combining Power BI dashboards with SQL stored procedures to transform enterprise reporting capabilities.",
      problem: "Manual reporting processes consumed 12+ hours weekly, creating bottlenecks and increasing risk of human error in critical business decisions.",
      objective: "Eliminate manual reporting overhead through intelligent automation while maintaining data integrity and enabling real-time insights.",
      methodology: [
        "Engineered SQL stored procedures with parameterized inputs to automate data extraction and transformation workflows.",
        "Developed advanced DAX measures and Power Query transformations to enable dynamic, self-service reporting capabilities.",
        "Integrated Python scripts for advanced statistical analysis and anomaly detection within automated pipelines."
      ],
      results: [
        "Reduced manual reporting effort by 12 hours per week through comprehensive automation implementation.",
        "Improved reporting efficiency by 18% enabling faster decision-making across 5 business units.",
        "Processed and analyzed 500K+ daily records with automated quality checks and statistical validation."
      ],
      conclusion: "Showcased ability to deliver enterprise-scale automation solutions that balance technical sophistication with business practicality."
    },
    {
      title: "Real-Time Operations Monitoring",
      subtitle: "SCADA & Statistical Process Control",
      category: "IoT Analytics",
      introduction: "Implemented real-time monitoring and anomaly detection systems for industrial operations, leveraging SCADA data integration with statistical process control methodologies.",
      problem: "Unplanned equipment downtime was causing significant operational losses due to lack of early warning systems for equipment anomalies.",
      objective: "Create proactive monitoring capabilities that detect anomalies early and enable predictive maintenance scheduling.",
      methodology: [
        "Integrated real-time SCADA sensor data from 50+ monitoring points into centralized analytics repository.",
        "Applied statistical process control techniques to establish dynamic thresholds for anomaly detection.",
        "Developed automated alerting workflows that notify operations teams of potential issues before critical failure."
      ],
      results: [
        "Reduced unplanned downtime by 11% through early anomaly detection and proactive intervention.",
        "Improved operational efficiency by 9% via data-driven performance optimization recommendations.",
        "Established centralized analytics repository serving as single source of truth for operational decision-making."
      ],
      conclusion: "Proven expertise in industrial IoT analytics and operational technology integration with measurable business impact."
    }
  ];

  const skillCategories = [
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      skills: ['Power BI (DAX, Power Query, Row-Level Security)', 'Tableau', 'Looker', 'Sigma Computing', 'Excel (VBA, Power Pivot, Statistical Functions)', 'KPI Development', 'Dashboard Design']
    },
    {
      icon: Database,
      title: 'SQL & Databases',
      skills: ['SQL (JOINs, CTEs, Window Functions, PIVOT)', 'T-SQL (Stored Procedures, Views)', 'Query Optimization', 'Data Warehousing', 'Slowly Changing Dimensions (SCD)', 'Snowflake', 'Azure SQL', 'Data Modeling']
    },
    {
      icon: BrainCircuit,
      title: 'Statistics & Advanced Analytics',
      skills: ['Exploratory Data Analysis (EDA)', 'Descriptive Statistics', 'Hypothesis Testing', 'A/B Testing', 'Regression Analysis', 'Cohort Analysis', 'Trend Analysis', 'Forecasting (ARIMA)', 'Predictive Modeling', 'Feature Engineering', 'Econometrics', 'Operations Research']
    },
    {
      icon: Code,
      title: 'Programming & Tools',
      skills: ['Python (Pandas, NumPy)', 'R', 'SAS', 'Stata', 'Java', 'VBA', 'JSON', 'XML', 'Git', 'GitHub', 'VS Code', 'Postman', 'Jira', 'Confluence', 'Trello']
    },
    {
      icon: Cloud,
      title: 'Cloud & Data Engineering',
      skills: ['Microsoft Fabric (Lakehouse, Pipelines)', 'Azure (Data Factory, Synapse, Azure DevOps)', 'AWS (S3, Glue, Redshift, SageMaker)', 'ETL/ELT Pipelines', 'Hadoop Ecosystem']
    },
    {
      icon: Users,
      title: 'Healthcare & Business',
      skills: ['Healthcare Data Analysis', 'EHR/EMR Analytics', 'HIPAA Awareness', 'Claims Data Analysis', 'Population Health Analytics', 'Healthcare KPIs (Readmissions, Length of Stay, Patient Outcomes)', 'HL7/FHIR Standards', 'Healthcare Reporting', 'Patient Journey Analytics', 'Stakeholder Management', 'Requirements Gathering (BRD/FRD)', 'Root Cause Analysis', 'UAT', 'Agile/Scrum', 'SDLC', 'Release Management', 'Strategic Decision Support', 'Project Status Reporting', 'Client Communication']
    }
  ];

  const certifications = [
    'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
    'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
    'SnowPro Associate - Snowflake Platform Certification',
    'Oracle Analytics Cloud 2025 Certified Professional'
  ];

  const stats = [
    { label: 'Forecasting Accuracy', value: `+${animatedStats.forecasting}%`, detail: 'Python & R Models' },
    { label: 'Reporting Efficiency', value: `+${animatedStats.reporting}%`, detail: 'BI Automation' },
    { label: 'Hours Saved Weekly', value: `${animatedStats.automation}h`, detail: 'Process Automation' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C241B] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#8B7355]/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-2xl font-serif text-[#2C241B] tracking-wide cursor-pointer hover:text-[#8B7355] transition-colors"
              onClick={() => scrollToSection('hero')}
            >
              PAVAN KUMAR
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#2C241B] font-medium border-b-2 border-[#8B7355]' : 'text-[#8B7355] hover:text-[#2C241B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Profile Photo Space */}
            <div className="mb-12">
              <div className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-[#8B7355]/30 shadow-lg bg-[#F5F1E8] flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image - replace src with actual image path */}
                <img 
                  src="images/image.png"
                  alt="Pavan Kumar Thirumalasetti"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // If image fails to load, show initials
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl font-serif text-[#8B7355]">PK</div>';
                  }}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif text-[#2C241B] mb-4 tracking-wide">
              PAVAN KUMAR THIRUMALASETTI
            </h1>
            
            <div className="text-lg text-[#8B7355] mb-2 font-light tracking-widest">
              Senior Data Analyst | Business Intelligence & Advanced Analytics
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-[#8B7355]/80 mb-1">
              FORT LAUDERDALE, FL · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-[#8B7355] mx-auto mb-10"></div>
            
            <p className="text-lg text-[#5C4D3C] mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-[#2C241B] text-[#FDFBF7] px-10 py-4 font-light tracking-wide hover:bg-[#5C4D3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-[#2C241B] text-[#2C241B] px-10 py-4 font-light tracking-wide hover:bg-[#2C241B] hover:text-[#FDFBF7] transition-all duration-300"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                CONTACT
              </button>
              <button 
                className="border border-[#8B7355] text-[#8B7355] px-10 py-4 font-light tracking-wide hover:bg-[#8B7355] hover:text-[#FDFBF7] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                RESUME
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-[#8B7355]/10 hover:border-[#8B7355]/30 transition-all duration-300 hover:shadow-md">
                  <div className="text-xs tracking-widest text-[#8B7355]/70 mb-2 uppercase">{stat.label}</div>
                  <div className="text-4xl font-serif text-[#2C241B] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#8B7355] font-light">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-[#8B7355]/60 mx-auto animate-bounce cursor-pointer hover:text-[#2C241B] transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">SUMMARY</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-lg text-[#8B7355] max-w-3xl mx-auto font-light">
              Translating complex data into strategic business value through advanced analytics, statistical modeling, and business intelligence solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: BrainCircuit,
                title: 'Advanced Analytics',
                detail: 'Expert in predictive modeling, statistical testing, and machine learning using Python and R. Improved forecasting accuracy by 15% through sophisticated feature engineering and cross-validation frameworks.'
              },
              {
                icon: BarChart3,
                title: 'Business Intelligence',
                detail: 'Architected enterprise BI solutions using Power BI, Tableau, and SQL. Increased reporting efficiency by 18% and automated workflows saving 12 hours weekly through stored procedures and Python automation.'
              },
              {
                icon: Target,
                title: 'Strategic Impact',
                detail: 'Partnered with cross-functional stakeholders to deliver executive-ready insights. Analyzed 500K+ daily records to drive multi-million dollar investment decisions and operational improvements.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-[#FDFBF7] p-8 rounded-sm shadow-sm border border-[#8B7355]/10 text-center hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-[#2C241B] mx-auto mb-6 flex items-center justify-center rounded-sm">
                  <card.icon className="w-7 h-7 text-[#FDFBF7]" />
                </div>
                <h3 className="text-xl font-serif text-[#2C241B] mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-[#5C4D3C] leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-lg text-[#8B7355] max-w-3xl mx-auto font-light">
              4+ years delivering data-driven insights across research, enterprise consulting, and industrial operations.
            </p>
          </div>
          
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-[#8B7355]/10 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-[#2C241B] tracking-wide">{role.role}</h3>
                    <p className="text-[#8B7355] font-medium text-lg">{role.company}</p>
                  </div>
                  <div className="text-sm text-[#8B7355]/80 font-light mt-2 md:mt-0 text-right">
                    <div>{role.location}</div>
                    <div>{role.dates}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-[#5C4D3C] leading-relaxed font-light flex items-start">
                      <span className="text-[#8B7355] mr-3 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto font-light">
              Deep-dive case studies showcasing advanced analytics, BI automation, and IoT monitoring solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-[#FDFBF7] p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-[#8B7355]/10"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-[#8B7355] bg-white px-3 py-1 tracking-wide border border-[#8B7355]/20 rounded-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-[#2C241B] mb-2 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8B7355] mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-[#5C4D3C] leading-relaxed font-light text-sm line-clamp-3 mb-4">
                  {project.introduction}
                </p>
                <div className="flex items-center text-[#8B7355] hover:text-[#2C241B] transition-colors text-sm font-medium">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#8B7355] font-light">
              Interested in detailed implementation breakdowns?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#2C241B] ml-1 font-regular italic hover:underline"
              >
                Reach out for technical architecture details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-[#2C241B]/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#FDFBF7] max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border border-[#8B7355]/20">
            <div className="sticky top-0 bg-[#FDFBF7] border-b border-[#8B7355]/20 p-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-[#8B7355] bg-white px-3 py-1 tracking-wide border border-[#8B7355]/20 rounded-sm">
                  {projects[selectedProject].category}
                </span>
                <h2 className="text-2xl font-serif text-[#2C241B] tracking-wide mt-2">
                  {projects[selectedProject].title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-[#8B7355] hover:text-[#2C241B] transition-colors p-2 hover:bg-[#8B7355]/10 rounded-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              <div>
                <p className="text-[#8B7355] font-light italic">{projects[selectedProject].subtitle}</p>
              </div>

              <div>
                <h3 className="text-lg font-serif text-[#2C241B] mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-[#5C4D3C] leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-[#8B7355]/10">
                  <h3 className="text-lg font-serif text-[#2C241B] mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                  <p className="text-[#5C4D3C] leading-relaxed font-light">
                    {projects[selectedProject].problem}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-[#8B7355]/10">
                  <h3 className="text-lg font-serif text-[#2C241B] mb-3 tracking-wide">OBJECTIVE</h3>
                  <p className="text-[#5C4D3C] leading-relaxed font-light">
                    {projects[selectedProject].objective}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif text-[#2C241B] mb-4 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-3">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-[#5C4D3C] leading-relaxed font-light flex items-start">
                      <span className="w-6 h-6 bg-[#2C241B] text-[#FDFBF7] flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0 rounded-sm">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2C241B] text-[#FDFBF7] p-6 rounded-sm">
                <h3 className="text-lg font-serif mb-4 tracking-wide text-[#FDFBF7]">KEY RESULTS</h3>
                <ul className="space-y-3">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="leading-relaxed font-light flex items-start text-[#FDFBF7]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#8B7355] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-serif text-[#2C241B] mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-[#5C4D3C] leading-relaxed font-light border-l-4 border-[#8B7355] pl-4 italic">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto font-light">
              Comprehensive toolkit spanning analytics, engineering, cloud platforms, and business domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-sm shadow-sm border border-[#8B7355]/10 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-[#2C241B] mx-auto mb-6 flex items-center justify-center rounded-sm">
                  <category.icon className="w-8 h-8 text-[#FDFBF7]" />
                </div>
                <h3 className="text-lg font-serif text-[#2C241B] mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-2 text-left">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-[#5C4D3C] font-light flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mr-2 mt-1.5 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto font-light">
              Industry-recognized credentials in cloud analytics, data engineering, and business intelligence platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-[#FDFBF7] p-6 rounded-sm border border-[#8B7355]/10 shadow-sm hover:shadow-md transition-all duration-300">
                <Award className="w-6 h-6 text-[#8B7355] mr-4 flex-shrink-0" />
                <span className="text-[#2C241B] font-medium text-sm leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-[#2C241B] mb-8 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#8B7355]/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif text-[#2C241B] tracking-wide">Florida Atlantic University</h3>
                  <p className="text-[#8B7355] font-medium">Master of Science in Computer Science</p>
                </div>
                <div className="text-sm text-[#8B7355]/80 font-light mt-2 md:mt-0 text-right">
                  <div>Boca Raton, FL</div>
                  <div>Aug. 2023 – May. 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#8B7355] text-sm font-medium bg-[#FDFBF7] p-3 rounded-sm border border-[#8B7355]/10">
                <Award className="w-4 h-4" />
                <span>Academic Achievement Award, Florida Atlantic University (Fall 2024)</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#8B7355]/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif text-[#2C241B] tracking-wide">GITAM University</h3>
                  <p className="text-[#8B7355] font-medium">Bachelor of Technology in Computer Science</p>
                </div>
                <div className="text-sm text-[#8B7355]/80 font-light mt-2 md:mt-0 text-right">
                  <div>Visakhapatnam, India</div>
                  <div>May. 2017 – Jun. 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#2C241B] text-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>
            <p className="text-xl text-[#FDFBF7]/80 max-w-3xl mx-auto font-light">
              Ready to transform your data into actionable insights? Let's discuss how advanced analytics and BI can drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <a 
              href="tel:+19408437904"
              className="flex items-center justify-center gap-3 p-6 bg-[#FDFBF7]/5 rounded-sm border border-[#8B7355]/30 hover:bg-[#FDFBF7]/10 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-[#8B7355] group-hover:scale-110 transition-transform" />
              <span className="text-[#FDFBF7]/80 font-light">+1 (940) 843-7904</span>
            </a>
            
            <a 
              href="mailto:pavan.k.thirumalasetti@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-[#FDFBF7]/5 rounded-sm border border-[#8B7355]/30 hover:bg-[#FDFBF7]/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-[#8B7355] group-hover:scale-110 transition-transform" />
              <span className="text-[#FDFBF7]/80 font-light text-sm">pavan.k.thirumalasetti@gmail.com</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/pavan-kumar-thirumalasetti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-[#FDFBF7]/5 rounded-sm border border-[#8B7355]/30 hover:bg-[#FDFBF7]/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-[#8B7355] group-hover:scale-110 transition-transform" />
              <span className="text-[#FDFBF7]/80 font-light">LinkedIn</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 p-6 bg-[#FDFBF7]/5 rounded-sm border border-[#8B7355]/30">
              <MapPin className="w-5 h-5 text-[#8B7355]" />
              <span className="text-[#FDFBF7]/80 font-light">Fort Lauderdale, FL</span>
            </div>
          </div>

          <div className="text-center text-[#FDFBF7]/60 text-sm font-light">
            Open to hybrid and remote opportunities across the United States
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1612] text-[#FDFBF7]/60 py-8 border-t border-[#8B7355]/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide text-sm">
            © 2025 Pavan Kumar Thirumalasetti · Senior Data Analyst & Business Intelligence Professional.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;