import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useQuizStore } from '../store/quizStore';
import { ChevronLeft, Check } from 'lucide-react';
import { useTranslation } from '../i18n/ui';
import clsx from 'clsx';

export default function Settings() {
  const navigate = useNavigate();
  const { preferences, setFontSize, setJobRole } = useQuizStore();
  const t = useTranslation();

  return (
    <Layout>
      <header className="p-4 border-b flex items-center gap-4 bg-white sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2 text-gray-500">
           <ChevronLeft className="w-8 h-8" />
        </button>
        <h1 className="font-bold text-xl">{t.settings}</h1>
      </header>

      <div className="p-6 space-y-8">
        {/* Job Role Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-gray-700">{t.jobRole}</h2>
          <div className="flex flex-col gap-3">
             <button
               onClick={() => setJobRole('frontend')}
               className={clsx(
                 "p-4 rounded-xl border-2 flex items-center justify-between transition-all",
                 preferences.jobRole === 'frontend' 
                   ? "border-mdn-blue bg-blue-50 text-mdn-blue font-bold"
                   : "border-gray-200 hover:bg-gray-50"
               )}
             >
               <span>{t.frontendDev}</span>
               {preferences.jobRole === 'frontend' && <Check className="w-5 h-5" />}
             </button>
             <button
               onClick={() => setJobRole('backend')}
               className={clsx(
                 "p-4 rounded-xl border-2 flex items-center justify-between transition-all",
                 preferences.jobRole === 'backend' 
                   ? "border-mdn-blue bg-blue-50 text-mdn-blue font-bold"
                   : "border-gray-200 hover:bg-gray-50"
               )}
             >
               <span>{t.backendDev}</span>
               {preferences.jobRole === 'backend' && <Check className="w-5 h-5" />}
             </button>
             <button
               onClick={() => setJobRole('infra')}
               className={clsx(
                 "p-4 rounded-xl border-2 flex items-center justify-between transition-all",
                 preferences.jobRole === 'infra' 
                   ? "border-mdn-blue bg-blue-50 text-mdn-blue font-bold"
                   : "border-gray-200 hover:bg-gray-50"
               )}
             >
               <span>{t.infraEng}</span>
               {preferences.jobRole === 'infra' && <Check className="w-5 h-5" />}
             </button>
          </div>
        </section>

        {/* Font Size Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-gray-700">{t.fontSize}</h2>
          <div className="grid grid-cols-3 gap-3">
             {(['small', 'medium', 'large'] as const).map((size) => (
               <button
                 key={size}
                 onClick={() => setFontSize(size)}
                 className={clsx(
                   "p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all",
                   preferences.fontSize === size 
                     ? "border-mdn-blue bg-blue-50 text-mdn-blue font-bold"
                     : "border-gray-200 hover:bg-gray-50"
                 )}
               >
                 <span className={clsx(
                    "font-serif",
                    size === 'small' ? "text-sm" : size === 'medium' ? "text-base" : "text-xl"
                 )}>
                   Aa
                 </span>
                 <span className="text-sm">{t[size]}</span>
               </button>
             ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
