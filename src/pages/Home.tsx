import { useQuizStore } from '../store/quizStore';
import { courses } from '../data/index';
import { Layout } from '../components/Layout';
import { 
  Book, ChevronRight, Check, Heart, 
  FileCode2, Globe, Layout as LayoutIcon, Palette,
  Settings, Zap, Terminal, Network, Cpu,
  Coffee, Leaf, Database, ScrollText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/ui';

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileCode2': return <FileCode2 className="w-5 h-5" />;
    case 'Globe': return <Globe className="w-5 h-5" />;
    case 'Layout': return <LayoutIcon className="w-5 h-5" />;
    case 'Palette': return <Palette className="w-5 h-5" />;
    case 'Terminal': return <Terminal className="w-5 h-5" />;
    case 'Network': return <Network className="w-5 h-5" />;
    case 'Cpu': return <Cpu className="w-5 h-5" />;
    case 'Coffee': return <Coffee className="w-5 h-5" />;
    case 'Leaf': return <Leaf className="w-5 h-5" />;
    case 'Database': return <Database className="w-5 h-5" />;
    case 'ScrollText': return <ScrollText className="w-5 h-5" />;
    default: return <Book className="w-5 h-5" />;
  }
};

export default function Home() {
  const navigate = useNavigate();
  const { 
    startUnit, startRandomQuiz, completedUnits, hearts, 
    currentCourseId, setCourse, getCurrentCourse, preferences,
    setHomeScrollPosition
  } = useQuizStore();
  const t = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure content is rendered and scrollable
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const { homeScrollPositions } = useQuizStore.getState();
        const savedPos = homeScrollPositions[currentCourseId] || 0;
        scrollRef.current.scrollTop = savedPos;
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [currentCourseId]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setHomeScrollPosition(currentCourseId, scrollRef.current.scrollTop);
    }
  };

  const currentCourse = getCurrentCourse();

  const handleStart = (unitId: string) => {
    startUnit(unitId);
    navigate('/quiz');
  };
  
  const handleRandom = () => {
    startRandomQuiz();
    navigate('/quiz');
  };

  return (
    <Layout>
      {/* Header */}
      <header className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="p-4 border-b flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-mdn-black text-white rounded flex items-center justify-center font-bold text-sm">MDN</div>
             <h1 className="font-bold text-lg">Quiz</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/settings')} className="text-gray-400 hover:text-gray-600">
               <Settings className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 text-quiz-error">
              <Heart className="w-6 h-6 fill-current" />
              <span className="font-bold">{hearts}</span>
            </div>
          </div>
        </div>
        
        {/* Course Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b bg-gray-50">
          {courses.filter(c => c.role === preferences.jobRole).map((course) => {
             const isActive = course.id === currentCourseId;
             return (
               <button
                 key={course.id}
                 onClick={() => setCourse(course.id)}
                 className={clsx(
                   "flex-1 min-w-[80px] py-3 flex flex-col items-center gap-1 relative transition-colors",
                   isActive ? "text-mdn-blue font-bold bg-white" : "text-gray-500 hover:bg-gray-100"
                 )}
               >
                 {getIcon(course.icon)}
                 <span className="text-xs uppercase tracking-wide">
                    {course.title_ko || course.title}
                 </span>
                 {isActive && (
                   <motion.div 
                     layoutId="activeTab"
                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-mdn-blue" 
                   />
                 )}
               </button>
             );
          })}
        </div>
      </header>

      {/* Content List */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto pb-20 bg-gray-50 p-4 space-y-8"
      >
        {/* Random Quiz Button */}
        <button
          onClick={handleRandom}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl shadow-lg flex items-center gap-4 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
             <Zap className="w-6 h-6 text-yellow-300 fill-current" />
          </div>
          <div className="text-left">
             <h3 className="font-bold text-lg">{t.quickPractice}</h3>
             <p className="text-white/80 text-sm">{t.randomDesc}</p>
          </div>
          <ChevronRight className="w-6 h-6 ml-auto opacity-80" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCourseId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {currentCourse?.chapters.map((chapter) => {
              const totalUnits = chapter.units.length;
              const completedCount = chapter.units.filter(u => completedUnits.includes(u.id)).length;
              
              return (
                <div key={chapter.id}>
                  <div className="flex justify-between items-center mb-3 ml-1 mr-1">
                    <h3 className="text-gray-500 font-bold uppercase text-sm tracking-wider">
                      {chapter.title_ko || chapter.title}
                    </h3>
                    <span className={clsx(
                      "text-xs font-bold px-2 py-1 rounded-full",
                      completedCount === totalUnits ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    )}>
                      {completedCount} / {totalUnits}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {chapter.units.map((unit) => {
                    const isCompleted = completedUnits.includes(unit.id);
                    
                    // Logic for locking removed: All units accessible

                    return (
                      <button
                        key={unit.id}
                        onClick={() => handleStart(unit.id)}
                        className={clsx(
                          "w-full text-left rounded-2xl border-2 p-4 transition-all relative overflow-hidden group shadow-sm",
                          isCompleted 
                            ? "bg-yellow-50 border-mdn-yellow" 
                            : "bg-white border-gray-200 hover:border-mdn-blue hover:shadow-md hover:-translate-y-0.5"
                        )}
                      >
                        <div className="flex items-start gap-4 z-10 relative">
                          <div className={clsx(
                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                            isCompleted 
                              ? "bg-mdn-yellow text-mdn-black" 
                              : "bg-mdn-blue text-white"
                          )}>
                            {isCompleted ? <Check className="w-6 h-6" /> : <Book className="w-6 h-6" />}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg mb-1 truncate">
                              {unit.title_ko || unit.title}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                              {unit.description_ko || unit.description}
                            </p>
                          </div>

                          <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity -ml-2">
                            <ChevronRight className="w-5 h-5 text-mdn-blue" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
            
            {/* Bottom Padding for visual comfort */}
            <div className="h-12" />
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
