import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { Layout } from '../components/Layout';
import { Trophy, Frown, RotateCcw, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/ui';

export default function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get('status');
  const { score, hearts, resetHearts } = useQuizStore();
  const t = useTranslation();
  
  const isSuccess = status === 'success';

  const handleHome = () => {
    if (!isSuccess) resetHearts();
    navigate('/');
  };

  const handleRetry = () => {
    resetHearts();
    navigate('/quiz'); // This might need logic to restart current unit specifically
  };

  return (
    <Layout className="bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="mb-8"
        >
           {isSuccess ? (
             <div className="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center">
               <Trophy className="w-24 h-24 text-yellow-500" />
             </div>
           ) : (
             <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center">
               <Frown className="w-24 h-24 text-gray-400" />
             </div>
           )}
        </motion.div>

        <h2 className="text-3xl font-bold mb-2">
          {isSuccess ? t.unitCompleted : t.outOfHearts}
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          {isSuccess 
            ? `${t.xpEarned} ${score} XP.` 
            : t.dontWorry}
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-6">
           <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
              <div className="text-sm font-bold text-yellow-600 uppercase">{t.totalXp}</div>
              <div className="text-2xl font-bold text-yellow-700">{score}</div>
           </div>
           <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
              <div className="text-sm font-bold text-red-600 uppercase">{t.heartsLeft}</div>
              <div className="text-2xl font-bold text-red-700">{hearts}</div>
           </div>
        </div>

        <div className="w-full space-y-3">
          <button 
            onClick={handleHome}
            className="w-full py-3 rounded-xl font-bold text-lg bg-mdn-blue text-white shadow-[0_4px_0_0_#2b5dc2] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-5 h-5" />
            {t.backToHome}
          </button>
          
          {!isSuccess && (
            <button 
              onClick={handleRetry}
              className="w-full py-3 rounded-xl font-bold text-lg bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              {t.tryAgain}
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
