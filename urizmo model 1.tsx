import React, { useState, useEffect } from 'react';
import { 
  Trophy, Flame, Zap, Award, Sparkles, BookOpen, Calculator, DollarSign, 
  QrCode, Smartphone, Upload, CheckCircle2, XCircle, ArrowRight, RotateCcw, 
  Volume2, Play, Lock, User, Shield, HelpCircle, Mail, Phone, ExternalLink, 
  ChevronRight, RefreshCw, Layers, Star, Clock, AlertCircle, Download, 
  Check, Eye, EyeOff, BarChart2, PieChart, Feather, Moon, Sun, Settings,
  GraduationCap, Globe, Send, Share2, FileText, FastForward, Heart,
  Calendar, CheckSquare, Plus, Trash2, Grid, Lightbulb,
  TrendingUp, PiggyBank, ShieldCheck, Target, Briefcase, Compass,
  Crown, FlameKindling, Repeat, VolumeX
} from 'lucide-react';

// ==========================================
// CENTRAL CONFIGURATION & CREATOR ATTRIBUTION
// ==========================================
const siteConfig = {
  name: "Urizmo",
  tagline: "Fast, Fun, Flashcard-Driven Mastery",
  creator: {
    name: "Mark Uriel A. Tabalan",
    title: "Founder & Lead Developer",
    email: "markurielatabalan@gmail.com",
    phone: "09127299214",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczMj3i3N2vS9R4v2L7aL4V1Wz5gH4m9kS5pL7qR0uE8sJ1tB8cK3vM5N2P=w800-h800-no",
    bio: "Full-stack engineer and visionary educator passionate about building high-impact learning tools that make math, language, strategy, and self-mastery intuitive, fast, and fun.",
    copyrightYear: new Date().getFullYear()
  }
};

if (typeof window !== 'undefined') {
  console.log(
    `%c Urizmo %c Designed & Developed by ${siteConfig.creator.name} (${siteConfig.creator.email}) `,
    'background: #F59E0B; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #1F2937; color: #F59E0B; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
}

// Helper: Format Currency
const formatCurrency = (amount, currencyCode = 'PHP') => {
  const symbols = { PHP: '₱', USD: '$', EUR: '€', GBP: '£' };
  const symbol = symbols[currencyCode] || '₱';
  return `${symbol}${amount.toLocaleString()}`;
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // dashboard, english, math, finance, laws, habits, scan, planner, about, contact
  const [currency, setCurrency] = useState('PHP');
  const [dyslexicFont, setDyslexicFont] = useState(false);

  // User Stats & Persistence
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('urizmo_user');
    return saved ? JSON.parse(saved) : {
      name: "Uriel Tabalan",
      level: 5,
      xp: 1420,
      streak: 7,
      streakFreeze: true,
      cefrLevel: 'A0',
      englishStage: 1, // Stage 1 (Absolute Zero A0) up to Stage 10 (Mastery C2+)
      mathStage: 1,    // Starts at Stage 1 (1-10 x 1)
      financeModule: 1, // Module 1 to 10
      lawsStage: 1,     // 48 Laws of Power
      habitsStage: 1    // Breaking Bad Habits
    };
  });

  // Daily & Monthly Study Planner State
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('urizmo_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: "Master Stage 1 English (Alphabet & Phonics)", track: "english", date: "2026-10-15", completed: true },
      { id: 2, title: "Practice Stage 1 Math Drills", track: "math", date: "2026-10-22", completed: false },
      { id: 3, title: "Study Law 1: Never Outshine the Master", track: "laws", date: "2026-10-22", completed: false },
      { id: 4, title: "Break Habit #1: Procrastination & Phone Addiction", track: "habits", date: "2026-10-28", completed: false },
      { id: 5, title: "Complete Asset vs. Liability Simulator", track: "finance", date: "2026-11-05", completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('urizmo_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('urizmo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Toast Notification System
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Add XP Function
  const addXP = (amount, reason) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 300) + 1;
      if (newLevel > prev.level) {
        showToast(`🎉 Level Up! You reached Level ${newLevel}!`, 'success');
      } else {
        showToast(`+${amount} XP: ${reason}`, 'success');
      }
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-gray-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black ${dyslexicFont ? 'font-mono' : ''}`}>
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-gray-800 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('dashboard')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Urizmo
                </span>
                <span className="text-[10px] uppercase tracking-widest bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20 font-bold">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium hidden sm:block">
                Mastery Platform by <span className="text-amber-400">{siteConfig.creator.name}</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'dashboard' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button 
              onClick={() => setActiveTab('english')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'english' ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>English Zero-to-Master</span>
            </button>

            <button 
              onClick={() => setActiveTab('math')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'math' ? 'bg-violet-500/15 text-violet-400 border-violet-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <Calculator className="w-4 h-4 text-violet-400" />
              <span>Math</span>
            </button>

            <button 
              onClick={() => setActiveTab('finance')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'finance' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Finance</span>
            </button>

            <button 
              onClick={() => setActiveTab('laws')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'laws' ? 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>48 Laws</span>
            </button>

            <button 
              onClick={() => setActiveTab('habits')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'habits' ? 'bg-orange-500/15 text-orange-400 border-orange-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <FlameKindling className="w-4 h-4 text-orange-400" />
              <span>Break Habits</span>
            </button>

            <button 
              onClick={() => setActiveTab('planner')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${activeTab === 'planner' ? 'bg-rose-500/15 text-rose-400 border-rose-500/30' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'}`}
            >
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>Planner</span>
            </button>
          </nav>

          {/* Gamification Stats & Profile */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 px-3 py-1.5 rounded-full" title="Daily Streak">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-xs font-bold text-orange-400">{user.streak} d</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full" title="Total Experience Points">
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-amber-300">{user.xp} XP</span>
            </div>

            <button 
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`p-2 rounded-lg border transition-all ${dyslexicFont ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-gray-800/60 border-gray-700 text-gray-400 hover:text-white'}`}
              title="Toggle Dyslexia Friendly Font"
            >
              <Feather className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setActiveTab('about')} 
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 p-0.5 relative hover:scale-105 transition-transform"
              title="Meet the Creator"
            >
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center font-bold text-xs text-white overflow-hidden">
                <img 
                  src={siteConfig.creator.photo} 
                  alt={siteConfig.creator.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE / RESPONSIVE BOTTOM NAV */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-[#0B0F17]/95 backdrop-blur-lg border-t border-gray-800 z-50 px-2 py-2 flex justify-around items-center overflow-x-auto">
        <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'dashboard' ? 'text-amber-400' : 'text-gray-400'}`}>
          <BarChart2 className="w-4 h-4"/>
          <span className="mt-0.5">Home</span>
        </button>
        <button onClick={() => setActiveTab('english')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'english' ? 'text-cyan-400' : 'text-gray-400'}`}>
          <Globe className="w-4 h-4"/>
          <span className="mt-0.5">English</span>
        </button>
        <button onClick={() => setActiveTab('math')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'math' ? 'text-violet-400' : 'text-gray-400'}`}>
          <Calculator className="w-4 h-4"/>
          <span className="mt-0.5">Math</span>
        </button>
        <button onClick={() => setActiveTab('finance')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'finance' ? 'text-emerald-400' : 'text-gray-400'}`}>
          <DollarSign className="w-4 h-4"/>
          <span className="mt-0.5">Finance</span>
        </button>
        <button onClick={() => setActiveTab('laws')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'laws' ? 'text-yellow-400' : 'text-gray-400'}`}>
          <Crown className="w-4 h-4"/>
          <span className="mt-0.5">Laws</span>
        </button>
        <button onClick={() => setActiveTab('habits')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'habits' ? 'text-orange-400' : 'text-gray-400'}`}>
          <FlameKindling className="w-4 h-4"/>
          <span className="mt-0.5">Habits</span>
        </button>
        <button onClick={() => setActiveTab('planner')} className={`flex flex-col items-center justify-center p-1 text-[9px] font-medium ${activeTab === 'planner' ? 'text-rose-400' : 'text-gray-400'}`}>
          <Calendar className="w-4 h-4"/>
          <span className="mt-0.5">Planner</span>
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 pb-24 md:pb-12">
        {activeTab === 'dashboard' && <DashboardView user={user} setActiveTab={setActiveTab} addXP={addXP} tasks={tasks} setTasks={setTasks} />}
        {activeTab === 'english' && <EnglishTrackView user={user} setUser={setUser} addXP={addXP} showToast={showToast} />}
        {activeTab === 'math' && <MathTrackView user={user} setUser={setUser} addXP={addXP} showToast={showToast} />}
        {activeTab === 'finance' && <FinanceTrackView user={user} setUser={setUser} currency={currency} setCurrency={setCurrency} addXP={addXP} showToast={showToast} />}
        {activeTab === 'laws' && <LawsOfPowerView user={user} setUser={setUser} addXP={addXP} showToast={showToast} />}
        {activeTab === 'habits' && <HabitBreakerView user={user} setUser={setUser} addXP={addXP} showToast={showToast} />}
        {activeTab === 'planner' && <PlannerView tasks={tasks} setTasks={setTasks} showToast={showToast} addXP={addXP} />}
        {activeTab === 'scan' && <ScanAndLearnView addXP={addXP} showToast={showToast} />}
        {activeTab === 'about' && <AboutView setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <ContactView showToast={showToast} />}
      </main>

      {/* GLOBAL TOAST NOTIFICATION */}
      {toast && (
        <div className={`fixed bottom-20 md:bottom-6 right-6 z-50 px-5 py-3 rounded-xl border shadow-2xl flex items-center space-x-3 transition-all transform animate-bounce ${
          toast.type === 'success' 
            ? 'bg-amber-500/20 border-amber-500/50 text-amber-200' 
            : 'bg-indigo-500/20 border-indigo-500/50 text-indigo-200'
        }`}>
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-[#0B0F17] py-8 px-4 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="font-bold text-gray-300">Urizmo Mastery Platform</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span>
              Designed & Developed by{' '}
              <button 
                onClick={() => setActiveTab('about')}
                className="text-amber-400 hover:underline font-semibold"
              >
                {siteConfig.creator.name}
              </button>
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span>© {siteConfig.creator.copyrightYear} All Rights Reserved</span>
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <button onClick={() => setActiveTab('about')} className="hover:text-amber-400 transition-colors">Meet Creator</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-amber-400 transition-colors">Contact Developer</button>
            <a href={`mailto:${siteConfig.creator.email}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /> Email
            </a>
            <a href={`tel:${siteConfig.creator.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DashboardView({ user, setActiveTab, addXP, tasks, setTasks }) {
  const pendingTasks = tasks.filter(t => !t.completed);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HERO BANNER */}
      <div className="relative rounded-3xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-rose-500/10 border border-gray-800 p-6 sm:p-8 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">Welcome Back</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Hello, <span className="text-amber-400">{user.name}</span>!
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Step-by-step flashcard mastery: Start English from zero phonics to fluency, master power dynamics, eliminate bad habits, and unlock infinite math.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setActiveTab('english')}
              className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center space-x-2"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>English Stage {user.englishStage}</span>
            </button>
            <button 
              onClick={() => setActiveTab('laws')}
              className="px-5 py-3 rounded-2xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-extrabold text-xs border border-yellow-500/40 transition-all flex items-center space-x-2"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>48 Laws</span>
            </button>
          </div>
        </div>
      </div>

      {/* TRACK PROGRESS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* ENGLISH TRACK */}
        <div className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                Stage {user.englishStage} / 10
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">English: Zero to Master</h3>
              <p className="text-xs text-gray-400">A0 Phonics to C2+ Native Eloquence</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400 font-semibold">
                <span>Progress</span>
                <span className="text-cyan-400">{user.englishStage * 10}%</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${user.englishStage * 10}%` }} />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('english')}
            className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
          >
            <span>Learn English Path</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 48 LAWS OF POWER TRACK */}
        <div className="bg-[#111827] border border-yellow-500/20 rounded-3xl p-6 space-y-4 hover:border-yellow-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
                <Crown className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300">
                Law {user.lawsStage || 1} / 48
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">48 Laws of Power</h3>
              <p className="text-xs text-gray-400">Strategic Wisdom & Social Intelligence</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400 font-semibold">
                <span>Laws Learned</span>
                <span className="text-yellow-400">{user.lawsStage || 1} of 48</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${Math.min(((user.lawsStage || 1) / 48) * 100, 100)}%` }} />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('laws')}
            className="w-full py-2.5 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
          >
            <span>Master 48 Laws</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* BREAKING BAD HABITS TRACK */}
        <div className="bg-[#111827] border border-orange-500/20 rounded-3xl p-6 space-y-4 hover:border-orange-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <FlameKindling className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300">
                Module {user.habitsStage || 1} / 10
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">Break Bad Habits</h3>
              <p className="text-xs text-gray-400">Dopamine Reset & Habit Deconstruction</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400 font-semibold">
                <span>Habit Reprogramming</span>
                <span className="text-orange-400">{(user.habitsStage || 1) * 10}%</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                <div className="bg-orange-400 h-full rounded-full" style={{ width: `${(user.habitsStage || 1) * 10}%` }} />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('habits')}
            className="w-full py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
          >
            <span>Reset Dopamine</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* MATH TRACK */}
        <div className="bg-[#111827] border border-violet-500/20 rounded-3xl p-6 space-y-4 hover:border-violet-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                Stage {user.mathStage} (x{user.mathStage})
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">Infinite Multiplication</h3>
              <p className="text-xs text-gray-400">100% Timed Memorization Gate</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400 font-semibold">
                <span>Active Table</span>
                <span className="text-violet-400">1 to 10 x {user.mathStage}</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                <div className="bg-violet-400 h-full rounded-full" style={{ width: `${Math.min((user.mathStage / 12) * 100, 100)}%` }} />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('math')}
            className="w-full py-2.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
          >
            <span>Practice Drills</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* FINANCE TRACK */}
        <div className="bg-[#111827] border border-emerald-500/20 rounded-3xl p-6 space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                Module {user.financeModule} / 10
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">Financial Literacy</h3>
              <p className="text-xs text-gray-400">Assets, Cash Flow & Money Mindset</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400 font-semibold">
                <span>Completion</span>
                <span className="text-emerald-400">{user.financeModule * 10}% Mastered</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${user.financeModule * 10}%` }} />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('finance')}
            className="w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
          >
            <span>Learn Money Mindset</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

function EnglishTrackView({ user, setUser, addXP, showToast }) {
  const [activeStage, setActiveStage] = useState(user.englishStage || 1);
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [autoPlayMode, setAutoPlayMode] = useState(false);

  // 10 Comprehensive Stages: From Absolute Zero (A0 Phonics) to Native C2 Mastery
  const stages = [
    { 
      level: 'A0 Stage 1', 
      title: 'Alphabet & Basic Phonics', 
      desc: 'For complete beginners with zero English. Learn sounds, vowels, and core letter combinations.',
      cards: [
        { front: 'A - Apple (/æ/)', sound: 'Apple', back: 'Word: Apple. Meaning: A red or green fruit.', context: 'An apple a day keeps the doctor away.' },
        { front: 'B - Ball (/b/)', sound: 'Ball', back: 'Word: Ball. Meaning: A round object used in games.', context: 'Bounce the rubber ball.' },
        { front: 'C - Cat (/k/)', sound: 'Cat', back: 'Word: Cat. Meaning: A small domesticated furry animal.', context: 'The cat sleeps on the mat.' },
        { front: 'Vowel Sounds (A, E, I, O, U)', sound: 'A E I O U', back: 'Vowels form the backbone of all English words.', context: 'Cat (A), Bed (E), Sit (I), Hot (O), Sun (U).' }
      ]
    },
    { 
      level: 'A0 Stage 2', 
      title: 'Essential Sight Words & Survival Terms', 
      desc: 'The top 10 most critical words used to identify basic needs and people.',
      cards: [
        { front: 'Yes / No', sound: 'Yes and No', back: 'Yes = Affirmative / Agree. No = Negative / Disagree.', context: 'Yes, please. / No, thank you.' },
        { front: 'Water', sound: 'Water', back: 'Liquid essential for human life.', context: 'I need water.' },
        { front: 'Food', sound: 'Food', back: 'Anything eaten to keep alive.', context: 'Where is the food?' },
        { front: 'Help', sound: 'Help', back: 'Assistance in danger or emergency.', context: 'Help me, please!' }
      ]
    },
    { 
      level: 'A1 Stage 3', 
      title: 'Daily Greetings & Introductions', 
      desc: 'Introducing yourself, greeting friends, and polite expressions.',
      cards: [
        { front: 'Hello, my name is...', sound: 'Hello my name is', back: 'Used to introduce your identity to others.', context: 'Hello, my name is Uriel.' },
        { front: 'How are you?', sound: 'How are you', back: 'Polite inquiry about someone’s health or state.', context: 'How are you today? I am fine.' },
        { front: 'Thank you very much', sound: 'Thank you very much', back: 'Polite expression of gratitude.', context: 'Thank you very much for your kindness.' }
      ]
    },
    { 
      level: 'A1 Stage 4', 
      title: 'Numbers, Time & Basic Directions', 
      desc: 'Counting, telling the hour, and finding places.',
      cards: [
        { front: 'Where is the...?', sound: 'Where is the', back: 'Used to ask for directions to a location.', context: 'Where is the bathroom?' },
        { front: 'Clock / Hour', sound: 'Clock and Hour', back: 'Units used to measure daily time.', context: 'What time is it right now?' },
        { front: 'Left / Right / Straight', sound: 'Left Right Straight', back: 'Navigation directional terms.', context: 'Turn left, then go straight.' }
      ]
    },
    { 
      level: 'A2 Stage 5', 
      title: 'Elementary Sentence Building', 
      desc: 'Constructing basic Subject-Verb-Object sentences.',
      cards: [
        { front: 'Subject Pronouns (I, You, He, She, They)', sound: 'I You He She They', back: 'Words replacing nouns in sentences.', context: 'She likes reading books.' },
        { front: 'Present Simple Tense', sound: 'Present Simple', back: 'Expresses habits, facts, and truths.', context: 'The sun rises in the east.' }
      ]
    },
    { 
      level: 'B1 Stage 6', 
      title: 'Intermediate Conversational Skills', 
      desc: 'Expressing opinions, agreement, and simple stories.',
      cards: [
        { front: 'In my opinion...', sound: 'In my opinion', back: 'Used to share your personal perspective polite and clear.', context: 'In my opinion, learning daily is crucial.' },
        { front: 'Furthermore / However', sound: 'Furthermore However', back: 'Transition words to connect ideas.', context: 'It is raining; however, we will go out.' }
      ]
    },
    { 
      level: 'B2 Stage 7', 
      title: 'Upper Intermediate & Professional English', 
      desc: 'Workplace interactions, email etiquette, and discussions.',
      cards: [
        { front: 'Collaborate', sound: 'Collaborate', back: 'To work jointly on an activity or project.', context: 'Let us collaborate on this new venture.' },
        { front: 'Prioritize', sound: 'Prioritize', back: 'Treat something as more important than other things.', context: 'Prioritize high-impact tasks first.' }
      ]
    },
    { 
      level: 'C1 Stage 8', 
      title: 'Advanced Vocabulary & Nuance', 
      desc: 'Sophisticated expressions, complex metaphors, and precise diction.',
      cards: [
        { front: 'Articulate', sound: 'Articulate', back: 'Expressing thoughts fluently and coherently.', context: 'He gave an articulate speech at the summit.' },
        { front: 'Meticulous', sound: 'Meticulous', back: 'Showing extreme care and precision.', context: 'She is meticulous about code structure.' }
      ]
    },
    { 
      level: 'C2 Stage 9', 
      title: 'Native Fluency & Idiomatic Mastery', 
      desc: 'Cultural idioms, subtle humor, and effortless expression.',
      cards: [
        { front: 'Blessing in disguise', sound: 'Blessing in disguise', back: 'An misfortune that eventually yields a good result.', context: 'Losing that job was a blessing in disguise.' },
        { front: 'Hit the nail on the head', sound: 'Hit the nail on the head', back: 'Describe exactly what is causing a situation.', context: 'You hit the nail on the head with that analysis.' }
      ]
    },
    { 
      level: 'C2+ Stage 10', 
      title: 'Public Speaking & Rhetoric Mastery', 
      desc: 'Persuasive speaking, debate, and oratorical techniques.',
      cards: [
        { front: 'Eloquent', sound: 'Eloquent', back: 'Fluent, persuasive, and graceful in speaking or writing.', context: 'Her eloquent delivery captivated the entire audience.' },
        { front: 'Quintessential', sound: 'Quintessential', back: 'Representing the most perfect embodiment of a quality.', context: 'He is the quintessential modern entrepreneur.' }
      ]
    }
  ];

  const currentStageData = stages[activeStage - 1] || stages[0];
  const activeCard = currentStageData.cards[cardIdx] || currentStageData.cards[0];

  // Speech Simulation / Audio Pronunciation
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      showToast(`📢 Audio Pronunciation: "${text}"`, "info");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Zero-to-Master English Pathway</span>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Globe className="w-6 h-6 text-cyan-400" />
            <span>Stage {activeStage}: {currentStageData.title}</span>
          </h1>
          <p className="text-xs text-gray-400">{currentStageData.desc}</p>
        </div>

        <div className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-extrabold text-cyan-300">Level: {currentStageData.level}</span>
        </div>
      </div>

      {/* 10-STAGE HORIZONTAL SCROLLER */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {stages.map((s, idx) => (
          <button
            key={s.level}
            onClick={() => {
              setActiveStage(idx + 1);
              setCardIdx(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
              activeStage === idx + 1 
                ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20' 
                : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
            }`}
          >
            Stage {idx + 1}: {s.level.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* FLASHCARD CARD CONTAINER */}
      <div 
        className="bg-[#111827] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center min-h-[320px] flex flex-col items-center justify-between cursor-pointer hover:border-cyan-400/50 transition-all shadow-2xl relative group overflow-hidden"
      >
        <div className="w-full flex justify-between items-center text-xs text-gray-400">
          <span className="uppercase font-bold text-cyan-400 tracking-wider text-[10px]">
            {isFlipped ? 'Translation / Meaning (Back)' : 'Front (Click center to Flip)'}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              speakText(activeCard.sound || activeCard.front);
            }}
            className={`p-2 rounded-xl border transition-all flex items-center space-x-1 ${
              isPlayingAudio ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-gray-900 border-gray-800 text-cyan-400 hover:bg-gray-800'
            }`}
            title="Listen to American Pronunciation"
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-[10px] font-bold">Listen</span>
          </button>
        </div>

        {/* CARD MAIN CONTENT */}
        <div onClick={() => setIsFlipped(!isFlipped)} className="my-auto py-6 space-y-4 w-full">
          <div className="text-3xl sm:text-4xl font-black text-white max-w-xl mx-auto leading-tight">
            {isFlipped ? activeCard.back : activeCard.front}
          </div>

          {activeCard.context && (
            <div className="p-3 bg-gray-900/80 rounded-2xl border border-gray-800/80 max-w-md mx-auto text-xs text-cyan-300 font-mono italic">
              "{activeCard.context}"
            </div>
          )}
        </div>

        <div className="w-full flex justify-between items-center text-[11px] text-gray-500 border-t border-gray-800/60 pt-3">
          <span>Card {cardIdx + 1} of {currentStageData.cards.length}</span>
          <span>Click anywhere on card to flip</span>
        </div>
      </div>

      {/* CARD NAV CONTROLS */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={() => {
            setIsFlipped(false);
            setCardIdx(prev => Math.max(prev - 1, 0));
          }}
          disabled={cardIdx === 0}
          className="px-5 py-3 rounded-xl bg-gray-900 border border-gray-800 text-xs font-bold text-gray-300 disabled:opacity-40 hover:bg-gray-800 transition-colors"
        >
          Previous Card
        </button>

        <button
          onClick={() => {
            addXP(25, `English Stage ${activeStage} Mastered`);
            setIsFlipped(false);
            if (cardIdx < currentStageData.cards.length - 1) {
              setCardIdx(prev => prev + 1);
            } else {
              const nextS = Math.min(activeStage + 1, 10);
              setUser(prev => ({ ...prev, englishStage: nextS }));
              showToast(`🎉 Mastered Stage ${activeStage}! Unlocked Stage ${nextS}!`, "success");
            }
          }}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center space-x-2"
        >
          <span>Mark Mastered & Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function LawsOfPowerView({ user, setUser, addXP, showToast }) {
  const [activeLaw, setActiveLaw] = useState(user.lawsStage || 1);
  const [isFlipped, setIsFlipped] = useState(false);

  // Complete 48 Laws of Power Database
  const lawsData = [
    { law: 1, title: "Never Outshine the Master", summary: "Always make those above you feel comfortably superior. In your desire to please or impress them, do not go too far in displaying your talents or you might accomplish the opposite – inspire fear and insecurity.", keyPoint: "Reassure authority figures of their wisdom." },
    { law: 2, title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies", summary: "Be wary of friends – they will betray you more quickly, for they are easily aroused to envy. But hire a former enemy and he will be more loyal than a friend, because he has more to prove.", keyPoint: "Gratitude dies quickly; self-interest lasts forever." },
    { law: 3, title: "Conceal Your Intentions", summary: "Keep people off-balance and in the dark by never revealing the purpose behind your actions. If they have no clue what you are up to, they cannot prepare a defense.", keyPoint: "Use decoy goals and smokescreens." },
    { law: 4, title: "Always Say Less Than Necessary", summary: "When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Powerful people impress and intimidate by saying less.", keyPoint: "Silence creates aura and prevents careless slips." },
    { law: 5, title: "So Much Depends on Reputation – Guard It with Your Life", summary: "Reputation is the cornerstone of power. Through reputation alone you can intimidate and win; once it slips, however, you are vulnerable, and will be attacked on all sides.", keyPoint: "Build a single, unassailable positive trait." },
    { law: 6, title: "Court Attention at All Costs", summary: "Everything is judged by its appearance; what is unseen counts for nothing. Never let yourself get lost in the crowd. Stand out. Be conspicuous, at all cost.", keyPoint: "Sustain mystery and visual impact." },
    { law: 7, title: "Get Others to Do the Work for You, but Always Take the Credit", summary: "Use the wisdom, knowledge, and legwork of other people to further your own cause. Not only will such assistance save you valuable time and energy, it will give you a godlike aura of efficiency.", keyPoint: "Leverage other people's labor to scale your output." },
    { law: 8, title: "Make Other People Come to You – Use Bait if Necessary", summary: "When you force the other person to act, you are the one in control. It is always better to make your opponent come to you, abandoning his own plans in the process.", keyPoint: "Force others to react to your terms." },
    { law: 9, title: "Win Through Your Actions, Never Through Argument", summary: "Any momentary triumph you think you gained through argument is really a Pyrrhic victory: The resentment and ill will you stir up is stronger and lasts longer than any momentary change of opinion.", keyPoint: "Demonstrate, do not explicate." },
    { law: 10, title: "Infection: Avoid the Unhappy and Unlucky", summary: "You can die from someone else’s misery – emotional states are as infectious as diseases. You may feel you are rescuing the drowning man, but you are only precipitating your own disaster.", keyPoint: "Associate only with the positive and fortunate." },
    { law: 11, title: "Learn to Keep People Dependent on You", summary: "To maintain your independence you must always be needed and wanted. The more you are relied on, the more freedom you have. Make people depend on you for their happiness and prosperity.", keyPoint: "Be the indispensable source of value." },
    { law: 12, title: "Use Selective Honesty and Generosity to Disarm Your Victim", summary: "One sincere and honest move will cover over dozens of dishonest ones. Open-hearted gestures of honesty and generosity bring down the guard of even the most suspicious people.", keyPoint: "A strategic gift can neutralize opposition." },
    { law: 13, title: "When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude", summary: "If you need to turn to an ally for help, do not bother to remind him of your past assistance and good deeds. He will find a way to ignore you. Instead, uncover something in your request that will benefit him.", keyPoint: "Align your requests with their incentives." },
    { law: 14, title: "Pose as a Friend, Work as a Spy", summary: "Knowing about your rival is critical. Use spies to gather valuable information that will keep you a step ahead. Better still: Play the spy yourself.", keyPoint: "Gather intelligence through quiet observation." },
    { law: 15, title: "Crush Your Enemy Totally", summary: "All great leaders since Moses have known that a feared enemy must be crushed completely. If one ember is left alight, no matter how dimly it smolders, a fire will eventually break out.", keyPoint: "Eliminate options for rival retaliation." },
    { law: 16, title: "Use Absence to Increase Respect and Honor", summary: "Too much circulation makes the price go down: The more you are seen and heard from, the more common you appear. Create value through scarcity.", keyPoint: "Withdraw briefly to heighten your perceived value." },
    { law: 17, title: "Keep Others in First-Hand Terror: Cultivate an Aura of Unpredictability", summary: "Humans are creatures of habit with an insatiable need to see familiarity in other people’s actions. Behavior that seems to have no consistency or purpose will keep them off-balance.", keyPoint: "Unpredictability disrupts tactical countermeasures." },
    { law: 18, title: "Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous", summary: "The world is dangerous and enemies are everywhere – everyone has to protect themselves. A fortress seems the safest. But isolation exposes you to more dangers than it protects you from.", keyPoint: "Circulate to stay informed and protected." },
    { law: 19, title: "Know Who You're Dealing With – Do Not Offend the Wrong Person", summary: "There are many different kinds of people in the world, and you can never assume that everyone will react to your strategies in the same way. Choose your victims and opponents carefully.", keyPoint: "Tailor your strategy to specific personalities." },
    { law: 20, title: "Do Not Commit to Anyone", summary: "It is the fool who always rushes to take a side. Do not commit yourself to any side or cause but yourself. By maintaining your independence, you become the master of others.", keyPoint: "Play opposing sides against each other." },
    { law: 21, title: "Play a Sucker to Catch a Sucker – Seem Dumber Than Your Mark", summary: "No one likes feeling dumber than the next person. Make your victims feel smart – and not just smart, but smarter than you are.", keyPoint: "Conceal your sharpness behind modesty." },
    { law: 22, title: "Use the Surrender Tactic: Transform Weakness into Power", summary: "When you are weaker, never fight for honor’s sake; choose surrender instead. Surrender gives you time to recover, time to torment and irritate your conqueror.", keyPoint: "Yielding preserves your energy for later counterattacks." },
    { law: 23, title: "Concentrate Your Forces", summary: "Conserve your forces and energies by keeping them concentrated at their strongest point. You gain more by finding a rich mine and mining it deeper than by flitting from one shallow mine to another.", keyPoint: "Focus intensity yields compound success." },
    { law: 24, title: "Play the Perfect Courtier", summary: "The courtier thrives in a world where everything revolves around power and political dexterity. He has mastered the art of indirection; he flatters, yields to superiors, and asserts power over others in the most graceful manner.", keyPoint: "Grace, discretion, and tact yield power." },
    { law: 25, title: "Re-Create Yourself", summary: "Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience.", keyPoint: "Master your public image and stage presence." },
    { law: 26, title: "Keep Your Hands Clean", summary: "You must seem a paragon of civility and efficiency: Your hands are never soiled by mistakes and nasty deeds. Maintain such a spotless appearance by using others as scapegoats.", keyPoint: "Delegate risky maneuvers to third parties." },
    { law: 27, title: "Play on People's Need to Believe to Create a Cultlike Following", summary: "People have an overwhelming desire to believe in something. Become the focal point of such desire by offering them a cause, a new faith to follow.", keyPoint: "Offer simplified solutions paired with strong rituals." },
    { law: 28, title: "Enter Action with Boldness", summary: "If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Enter with boldness.", keyPoint: "Boldness masks flaws and commands respect." },
    { law: 29, title: "Plan All the Way to the End", summary: "The ending is everything. Plan all the way to it, taking into account all the possible consequences, obstacles, and twists of fortune that might reverse your hard work.", keyPoint: "Envision the exact conclusion before moving." },
    { law: 30, title: "Make Your Accomplishments Seem Effortless", summary: "Your actions must seem natural and executed with ease. All the toil and practice that go into them, and also all the clever tricks, must be concealed.", keyPoint: "Conceal practice to heighten perceived talent." },
    { law: 31, title: "Control the Options: Get Others to Play with the Cards You Deal", summary: "The best deceptions are the ones that seem to give the other person a choice: Your victims feel they are in control, but are actually your puppets.", keyPoint: "Provide options where every outcome favors you." },
    { law: 32, title: "Play to People's Fantasies", summary: "The truth is often avoided because it is ugly and unpleasant. Never appeal to truth and reality unless you are prepared for the anger that comes from disillusionment.", keyPoint: "Offer inspiring visions over harsh realities." },
    { law: 33, title: "Discover Each Man's Thumbscrew", summary: "Everyone has a weakness, a gap in the castle wall. That weakness is usually an insecurity, an uncontrollable emotion or need; it can also be a small secret pleasure.", keyPoint: "Identify the hidden emotional leverage point." },
    { law: 34, title: "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One", summary: "The way you carry yourself will often determine how you are treated: In the long run, appearing vulgar or common will make people disrespect you.", keyPoint: "Dignity and self-belief command deference." },
    { law: 35, title: "Master the Art of Timing", summary: "Never seem to be in a hurry – hurrying betrays a lack of control over yourself and over time. Always seem patient, as if you know that everything will come to you eventually.", keyPoint: "Anticipate trends and strike at the decisive moment." },
    { law: 36, title: "Disdain Things You Cannot Have: Ignoring Them is the Best Revenge", summary: "By acknowledging a petty problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him.", keyPoint: "Indifference neutralizes minor provocations." },
    { law: 37, title: "Create Compelling Spectacles", summary: "Striking imagery and grand symbolic gestures create the aura of power – everyone responds to them. Stage spectacles for those around you to heighten your presence.", keyPoint: "Use visual drama to captivate attention." },
    { law: 38, title: "Think as You Like But Behave Like Others", summary: "If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them.", keyPoint: "Blend in outwardly while holding private views." },
    { law: 39, title: "Stir Up Waters to Catch Fish", summary: "Anger and emotion are strategically counterproductive. You must always stay calm and objective. But if you can make your enemies angry while staying calm yourself, you gain an advantage.", keyPoint: "Provoke emotional overreaction in rivals." },
    { law: 40, title: "Despise the Free Lunch", summary: "What is offered for free is often dangerous – it usually involves either a trick or a hidden obligation. What has worth is worth paying for.", keyPoint: "Pay full price to preserve independence." },
    { law: 41, title: "Avoid Stepping into a Great Man's Shoes", summary: "What happens first always appears better and more original than what comes after. If you succeed a great man or have a famous parent, you will have to accomplish double their achievements to outshine them.", keyPoint: "Forge an entirely new path and identity." },
    { law: 42, title: "Strike the Shepherd and the Sheep Will Scatter", summary: "Trouble can often be traced to a single strong individual – the stirrer, the arrogant underling, the poisoner of goodwill. Neutralize their influence before it spreads.", keyPoint: "Isolate the root source of disruption." },
    { law: 43, title: "Work on the Hearts and Minds of Others", summary: "Coercion creates a reaction that will eventually work against you. You must seduce others into wanting to move in your direction.", keyPoint: "Win emotional buy-in rather than forcing compliance." },
    { law: 44, title: "Disarm and Infuriate with the Mirror Effect", summary: "The mirror reflects reality, but it is also the perfect tool for deception. When you mirror your enemies, doing exactly as they do, they cannot figure out your strategy.", keyPoint: "Reflect their behavior to confuse their planning." },
    { law: 45, title: "Preach the Need for Change, But Never Reform Too Much at Once", summary: "Everyone understands the need for change in the abstract, but on the day-to-day level people are creatures of habit. Too much innovation is traumatic and will lead to revolt.", keyPoint: "Mask radical reform with traditional forms." },
    { law: 46, title: "Never Appear Too Perfect", summary: "Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies.", keyPoint: "Display occasional flaws to deflect envy." },
    { law: 47, title: "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop", summary: "The moment of victory is often the moment of greatest danger. In the heat of victory, arrogance and overconfidence can push you past the goal you had aimed for.", keyPoint: "Set a clear objective and stop when reached." },
    { law: 48, title: "Assume Formlessness", summary: "By taking a form, by having a visible plan, you open yourself to attack. Instead of taking a form for your enemy to grasp, keep yourself adaptable and on the move.", keyPoint: "Remain fluid, adaptable, and ungraspable." }
  ];

  const currentLawObj = lawsData.find(l => l.law === activeLaw) || lawsData[0];

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Robert Greene Mastery Series</span>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-400" />
            <span>Law {currentLawObj.law}: {currentLawObj.title}</span>
          </h1>
          <p className="text-xs text-gray-400">Master human dynamics, strategic foresight, and self-possession.</p>
        </div>

        <div className="flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1.5 rounded-full">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-extrabold text-yellow-300">Law {activeLaw} of 48</span>
        </div>
      </div>

      {/* ALL 48 LAWS GRID / SCROLLER */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Quick Select Law (1 to 48):</span>
          <span className="font-mono text-yellow-400 font-bold">{activeLaw} / 48 Active</span>
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {lawsData.map((l) => (
            <button
              key={l.law}
              onClick={() => {
                setActiveLaw(l.law);
                setIsFlipped(false);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                activeLaw === l.law 
                  ? 'bg-yellow-500 text-black border-yellow-400 shadow-md shadow-yellow-500/20' 
                  : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              Law {l.law}
            </button>
          ))}
        </div>
      </div>

      {/* INTERACTIVE STRATEGY CARD */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="bg-[#111827] border border-yellow-500/30 rounded-3xl p-8 sm:p-10 text-center min-h-[320px] flex flex-col items-center justify-between cursor-pointer hover:border-yellow-400/50 transition-all shadow-2xl relative"
      >
        <span className="text-[10px] uppercase font-bold text-yellow-400 tracking-wider absolute top-4 left-6">
          {isFlipped ? 'Strategic Key Principle (Back)' : 'Law Core Text (Front - Click to Flip)'}
        </span>

        <div className="my-auto py-4 space-y-4 max-w-2xl">
          {!isFlipped ? (
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-white">{currentLawObj.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed font-serif italic">"{currentLawObj.summary}"</p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-widest block">Actionable Key Principle</span>
              <p className="text-xl font-bold text-white leading-relaxed">{currentLawObj.keyPoint}</p>
            </div>
          )}
        </div>

        <div className="text-[11px] text-gray-500 border-t border-gray-800/80 w-full pt-3">
          Click card to toggle principle breakdown
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setActiveLaw(prev => Math.max(prev - 1, 1));
            setIsFlipped(false);
          }}
          disabled={activeLaw === 1}
          className="px-5 py-3 rounded-xl bg-gray-900 border border-gray-800 text-xs font-bold text-gray-300 disabled:opacity-40 hover:bg-gray-800 transition-colors"
        >
          Previous Law
        </button>

        <button
          onClick={() => {
            addXP(30, `Mastered Law ${activeLaw}`);
            const nextL = Math.min(activeLaw + 1, 48);
            setUser(prev => ({ ...prev, lawsStage: nextL }));
            setActiveLaw(nextL);
            setIsFlipped(false);
            showToast(`✨ Completed Law ${activeLaw}! Moving to Law ${nextL}.`, "success");
          }}
          className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs shadow-lg shadow-yellow-500/20 transition-all flex items-center space-x-2"
        >
          <span>Mark Mastered & Advance</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function HabitBreakerView({ user, setUser, addXP, showToast }) {
  const [activeModule, setActiveModule] = useState(user.habitsStage || 1);
  const [loggedTriggers, setLoggedTriggers] = useState([]);
  const [newTrigger, setNewTrigger] = useState('');

  // Complete 10 Behavioral Reprogramming Modules
  const modules = [
    { id: 1, title: "Dopamine & Habit Loops", rule: "Trigger -> Craving -> Response -> Reward", fix: "Identify the exact cue causing automatic behavior." },
    { id: 2, title: "Phone & Screen Addiction", rule: "Constant notifications fragment focus and spike anxiety.", fix: "Turn screen to Grayscale & place phone in another room." },
    { id: 3, title: "Procrastination Decoupling", rule: "Procrastination is emotional regulation, not laziness.", fix: "Use 2-Minute Rule to start without friction." },
    { id: 4, title: "Impulse Spending & Shopping", rule: "Instant retail dopamine leads to long-term wealth erosion.", fix: "Implement a mandatory 24-hour cooling delay." },
    { id: 5, title: "Junk Food & Sugar Binging", rule: "Ultra-processed foods hijack ancestral survival neurochemistry.", fix: "Clear your immediate environment; store healthy food at eye level." },
    { id: 6, title: "Late-Night Doomscrolling", rule: "Blue light suppresses melatonin, compromising willpower tomorrow.", fix: "Establish an absolute digital curfew 60 minutes before sleep." },
    { id: 7, title: "Negative Self-Talk & Rumination", rule: "Internal criticism reinforces neural stress pathways.", fix: "Reframe statements using objective 3rd-person observer language." },
    { id: 8, title: "Chronic Multitasking", rule: "Task-switching creates attention residue and lowers cognitive capacity.", fix: "Work in dedicated single-task focus blocks (Pomodoro)." },
    { id: 9, title: "People-Pleasing & Saying Yes", rule: "Automatic compliance sacrifices your own primary goals.", fix: "Default to: 'Let me check my calendar and get back to you.'" },
    { id: 10, title: "Master Lifestyle Reset", rule: "Identity change is the ultimate goal of habit transformation.", fix: "Focus on who you want to become rather than what you want to achieve." }
  ];

  const currentMod = modules.find(m => m.id === activeModule) || modules[0];

  const handleAddTrigger = (e) => {
    e.preventDefault();
    if (!newTrigger.trim()) return;
    setLoggedTriggers(prev => [{ id: Date.now(), text: newTrigger.trim(), date: new Date().toLocaleTimeString() }, ...prev]);
    setNewTrigger('');
    addXP(15, "Logged Habit Trigger");
    showToast("Habit trigger logged! Awareness is 80% of the cure.", "success");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400">Behavioral Reprogramming Track</span>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <FlameKindling className="w-6 h-6 text-orange-400" />
            <span>Module {currentMod.id}: {currentMod.title}</span>
          </h1>
          <p className="text-xs text-gray-400">Deconstruct bad habits and engineer unshakeable willpower.</p>
        </div>

        <div className="flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-3 py-1.5 rounded-full">
          <FlameKindling className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-extrabold text-orange-300">Stage {activeModule} of 10</span>
        </div>
      </div>

      {/* FULL 10 MODULE SELECTOR GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveModule(m.id)}
            className={`p-3 rounded-2xl border text-left transition-all ${
              activeModule === m.id
                ? 'bg-orange-500/20 border-orange-500 text-orange-300 font-bold'
                : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
            }`}
          >
            <span className="text-[10px] block font-mono text-orange-400">Mod {m.id}</span>
            <span className="text-xs truncate block font-extrabold text-white">{m.title}</span>
          </button>
        ))}
      </div>

      {/* ACTION PLAN CARD */}
      <div className="bg-[#111827] border border-orange-500/30 rounded-3xl p-6 space-y-6 shadow-2xl">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Neurological Mechanics</span>
          <h3 className="text-xl font-black text-white">{currentMod.rule}</h3>
        </div>

        <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 space-y-1">
          <span className="text-xs font-extrabold text-orange-400 uppercase">Scientific Protocol Fix:</span>
          <p className="text-sm text-gray-200 font-medium">{currentMod.fix}</p>
        </div>

        {/* LOG TRIGGER INTERACTIVE TOOL */}
        <div className="border-t border-gray-800 pt-4 space-y-4">
          <h4 className="text-xs font-bold text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-orange-400" />
            <span>Real-time Trigger Logger Tool</span>
          </h4>

          <form onSubmit={handleAddTrigger} className="flex gap-2">
            <input
              type="text"
              required
              value={newTrigger}
              onChange={(e) => setNewTrigger(e.target.value)}
              placeholder="What triggered your urge? (e.g. Boredom, Stress)"
              className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs shadow-lg shadow-orange-500/20"
            >
              Log Cue
            </button>
          </form>

          {loggedTriggers.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-gray-500">Logged Cues Today:</span>
              <div className="flex flex-wrap gap-2">
                {loggedTriggers.map((t) => (
                  <span key={t.id} className="text-xs bg-gray-900 border border-gray-800 text-orange-300 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <span>{t.text}</span>
                    <span className="text-[9px] text-gray-500">{t.date}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MODULE COMPLETION ACTION */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => {
              addXP(30, `Mastered Habit Module ${activeModule}`);
              const nextM = Math.min(activeModule + 1, 10);
              setUser(prev => ({ ...prev, habitsStage: nextM }));
              setActiveModule(nextM);
              showToast(`🎉 Completed Module ${activeModule}! Advanced to Module ${nextM}.`, "success");
            }}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs shadow-lg shadow-orange-500/20 transition-all flex items-center space-x-2"
          >
            <span>Mark Module Complete</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MathTrackView({ user, setUser, addXP, showToast }) {
  const currentStage = user.mathStage || 1; // Stage N = x N
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHelper, setShowHelper] = useState(false);

  const problems = Array.from({ length: 10 }, (_, i) => ({
    num1: i + 1,
    num2: currentStage,
    answer: (i + 1) * currentStage
  }));

  const activeProblem = problems[currentProblemIdx];

  const handleCheckAnswer = (e) => {
    e.preventDefault();
    const parsed = parseInt(userAnswer, 10);

    if (parsed === activeProblem.answer) {
      showToast("✨ Correct! Speed & accuracy confirmed.", "success");
      addXP(15, "Math Drill Success");
      setShowHelper(false);
      setUserAnswer('');

      if (currentProblemIdx < problems.length - 1) {
        setCurrentProblemIdx(i => i + 1);
      } else {
        const nextStage = currentStage + 1;
        setUser(prev => ({ ...prev, mathStage: nextStage }));
        addXP(100, `Unlocked Stage ${nextStage}!`);
        setCurrentProblemIdx(0);
        showToast(`🎉 Mastery Achieved! Unlocked Stage ${nextStage} (x${nextStage})!`, "success");
      }
    } else {
      showToast("❌ Incorrect. Study the visual memorization helper below!", "info");
      setShowHelper(true);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-400">Infinite Memorization Track</span>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Calculator className="w-6 h-6 text-violet-400" />
            <span>Stage {currentStage}: The ×{currentStage} Table</span>
          </h1>
          <p className="text-xs text-gray-400">Master 1×{currentStage} through 10×{currentStage} with 100% accuracy to unlock Stage {currentStage + 1}!</p>
        </div>

        <div className="flex items-center space-x-2 bg-violet-500/10 border border-violet-500/30 px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-extrabold text-violet-300">Progress: {currentProblemIdx + 1} / 10</span>
        </div>
      </div>

      {/* DRILL FLASHCARD */}
      <div className="bg-[#111827] border border-violet-500/30 rounded-3xl p-8 space-y-6 text-center shadow-2xl relative overflow-hidden">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Problem {currentProblemIdx + 1} of 10</span>
          <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-wider">
            {activeProblem.num1} × {activeProblem.num2} = ?
          </div>
        </div>

        {/* INPUT FORM */}
        <form onSubmit={handleCheckAnswer} className="max-w-xs mx-auto space-y-4">
          <input
            type="number"
            required
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type answer..."
            className="w-full bg-gray-900 border-2 border-violet-500/40 rounded-2xl p-4 text-center text-2xl font-black font-mono text-white focus:outline-none focus:border-violet-400"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-black font-extrabold text-xs shadow-lg shadow-violet-500/20 transition-all"
            >
              Check Answer
            </button>
            <button
              type="button"
              onClick={() => setShowHelper(!showHelper)}
              className="px-4 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-violet-300 font-bold text-xs border border-gray-700 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* VISUAL MEMORIZATION HELPER & RULE */}
        {showHelper && (
          <div className="bg-gray-900 border border-violet-500/30 rounded-2xl p-5 text-left space-y-4 animate-fadeIn">
            <div className="flex items-center space-x-2 text-violet-400 font-bold text-xs">
              <Lightbulb className="w-4 h-4" />
              <span>Memorization Rule & Helper</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">{activeProblem.num1} × {activeProblem.num2}</strong> means adding <strong className="text-violet-400">{activeProblem.num2}</strong> exactly <strong className="text-violet-400">{activeProblem.num1} times</strong>.
            </p>

            {/* VISUAL DOT ARRAY GRID */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-gray-400">Visual Grid ({activeProblem.num1} rows of {activeProblem.num2}):</span>
              <div className="p-3 bg-[#0B0F17] rounded-xl border border-gray-800 flex flex-col gap-1.5 items-center justify-center overflow-x-auto">
                {Array.from({ length: activeProblem.num1 }).map((_, rIdx) => (
                  <div key={rIdx} className="flex gap-1.5">
                    {Array.from({ length: activeProblem.num2 }).map((_, cIdx) => (
                      <div key={cIdx} className="w-3 h-3 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-violet-300 bg-violet-500/10 p-3 rounded-xl border border-violet-500/20 font-mono text-center">
              Correct Answer: <strong>{activeProblem.answer}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FinanceTrackView({ user, setUser, currency, setCurrency, addXP, showToast }) {
  const [activeModule, setActiveModule] = useState(user.financeModule || 1);
  const [assetItems, setAssetItems] = useState([
    { id: 1, name: 'Rental Real Estate', type: 'asset', classified: false },
    { id: 2, name: 'Credit Card Debt', type: 'liability', classified: false },
    { id: 3, name: 'Dividend Stocks', type: 'asset', classified: false },
    { id: 4, name: 'High-Interest Car Loan', type: 'liability', classified: false }
  ]);

  const modules = [
    { id: 1, title: "Mindset & Money Basics", desc: "Understanding cash flow, assets, and liabilities." },
    { id: 2, title: "Assets vs. Liabilities", desc: "Acquiring cash-flowing assets over consumer debt." },
    { id: 3, title: "Income Types & Cash Flow", desc: "Earned vs. Passive vs. Portfolio income." },
    { id: 4, title: "Smart Budgeting Systems", desc: "50/30/20 rule and zero-based budgeting." },
    { id: 5, title: "Emergency Funds & Safety", desc: "Building 3-6 months of liquid reserves." },
    { id: 6, title: "Debt Elimination Strategy", desc: "Snowball vs. Avalanche payoff methods." },
    { id: 7, title: "Investing & Compound Growth", desc: "Index funds, compounding interest, and time." },
    { id: 8, title: "Business & Side Cash Flow", desc: "Building side hustles and digital assets." },
    { id: 9, title: "Protecting Your Wealth", desc: "Insurance, security, and scam prevention." },
    { id: 10, title: "Master Financial Freedom Plan", desc: "Designing long-term passive income flow." }
  ];

  const handleClassify = (id, chosenType) => {
    const targetItem = assetItems.find(item => item.id === id);
    if (!targetItem || targetItem.classified) return;

    const isCorrect = targetItem.type === chosenType;
    setAssetItems(prev => prev.map(item => item.id === id ? { ...item, classified: true } : item));

    if (isCorrect) {
      addXP(15, "Correct Classification");
      showToast(`✨ Correct! ${targetItem.name} is indeed an ${chosenType}!`, "success");
    } else {
      showToast(`❌ Not quite! ${targetItem.name} is an ${targetItem.type}.`, "info");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Financial Mastery Track</span>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-400" />
            <span>Module {activeModule}: {modules[activeModule - 1]?.title}</span>
          </h1>
          <p className="text-xs text-gray-400">{modules[activeModule - 1]?.desc}</p>
        </div>

        {/* CURRENCY SELECTOR */}
        <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 p-1.5 rounded-2xl">
          <span className="text-[10px] font-bold text-gray-400 pl-2">Currency:</span>
          {['PHP', 'USD', 'EUR', 'GBP'].map(c => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all ${
                currency === c ? 'bg-emerald-500 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* MODULE PROGRESS SELECTOR */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveModule(m.id)}
            className={`p-3 rounded-2xl border text-left transition-all ${
              activeModule === m.id
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
            }`}
          >
            <span className="text-[10px] block font-mono text-emerald-400">Mod {m.id}</span>
            <span className="text-xs truncate block font-extrabold text-white">{m.title}</span>
          </button>
        ))}
      </div>

      {/* INTERACTIVE ASSET VS LIABILITY SIMULATOR */}
      <div className="bg-[#111827] border border-emerald-500/30 rounded-3xl p-6 space-y-6 shadow-2xl">
        <div className="border-b border-gray-800 pb-3">
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <PiggyBank className="w-5 h-5 text-emerald-400" />
            <span>Asset vs. Liability Classifier Tool</span>
          </h3>
          <p className="text-xs text-gray-400">An asset puts money IN your pocket. A liability takes money OUT.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {assetItems.map((item) => (
            <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-3">
              <span className="text-sm font-bold text-white block">{item.name}</span>
              
              {item.classified ? (
                <div className={`p-2 rounded-xl text-xs font-bold text-center uppercase ${
                  item.type === 'asset' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  Classified as {item.type}
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleClassify(item.id, 'asset')}
                    className="flex-1 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors"
                  >
                    + Asset
                  </button>
                  <button
                    onClick={() => handleClassify(item.id, 'liability')}
                    className="flex-1 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold transition-colors"
                  >
                    - Liability
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlannerView({ tasks, setTasks, showToast, addXP }) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState(9);
  const [selectedDateStr, setSelectedDateStr] = useState("2026-10-22");
  
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTrack, setNewTaskTrack] = useState('math');

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();

  const monthPrefix = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}`;
  const monthlyTasks = tasks.filter(t => t.date && t.date.startsWith(monthPrefix));
  const completedMonthlyTasks = monthlyTasks.filter(t => t.completed);
  const monthlyProgress = monthlyTasks.length > 0 ? Math.round((completedMonthlyTasks.length / monthlyTasks.length) * 100) : 0;

  const selectedDayTasks = tasks.filter(t => t.date === selectedDateStr);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      track: newTaskTrack,
      date: selectedDateStr,
      completed: false
    };

    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
    showToast(`✨ Task added for ${selectedDateStr}!`, "success");
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextState = !t.completed;
        if (nextState) addXP(25, "Planner Goal Completed");
        return { ...t, completed: nextState };
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    showToast("Task deleted.", "info");
  };

  const changeMonth = (delta) => {
    let newM = selectedMonth + delta;
    let newY = selectedYear;
    if (newM < 0) {
      newM = 11;
      newY -= 1;
    } else if (newM > 11) {
      newM = 0;
      newY += 1;
    }
    setSelectedMonth(newM);
    setSelectedYear(newY);
    setSelectedDateStr(`${newY}-${String(newM + 1).padStart(2, '0')}-01`);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-rose-400" />
            <span>Interactive Calendar & Monthly Planner</span>
          </h1>
          <p className="text-xs text-gray-400">Select any month, pick a date on the interactive calendar, and track your completion goal!</p>
        </div>

        {/* MONTH CONTROLLER */}
        <div className="flex items-center space-x-3 bg-gray-900 border border-gray-800 p-1.5 rounded-2xl">
          <button 
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>

          <span className="text-sm font-extrabold text-white px-2 min-w-[130px] text-center">
            {monthNames[selectedMonth]} {selectedYear}
          </span>

          <button 
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MONTHLY PROGRESS BAR CARD */}
      <div className="bg-[#111827] border border-rose-500/30 rounded-3xl p-6 space-y-3 shadow-xl">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>{monthNames[selectedMonth]} {selectedYear} Goal Progress</span>
          </span>
          <span className="text-gray-300 font-mono">
            {completedMonthlyTasks.length} of {monthlyTasks.length} Tasks Completed ({monthlyProgress}%)
          </span>
        </div>

        <div className="w-full bg-gray-900 rounded-full h-3.5 overflow-hidden border border-gray-800 p-0.5">
          <div 
            className="bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 h-full rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${monthlyProgress}%` }}
          />
        </div>
      </div>

      {/* CALENDAR + TASK BOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* INTERACTIVE CALENDAR GRID */}
        <div className="lg:col-span-7 bg-[#111827] border border-gray-800 rounded-3xl p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>Select Date ({monthNames[selectedMonth]})</span>
            </h3>
            <span className="text-[11px] text-gray-400">Click a date to manage tasks</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-extrabold text-gray-500 uppercase">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
              <div key={`empty-${idx}`} className="h-12 rounded-xl bg-gray-900/20 border border-transparent"></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const dayNum = idx + 1;
              const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const isSelected = selectedDateStr === dateStr;
              const dayTasks = tasks.filter(t => t.date === dateStr);
              const hasTasks = dayTasks.length > 0;
              const allDone = hasTasks && dayTasks.every(t => t.completed);

              return (
                <button
                  key={dayNum}
                  onClick={() => setSelectedDateStr(dateStr)}
                  className={`h-12 rounded-2xl border text-left p-1.5 flex flex-col justify-between transition-all relative ${
                    isSelected 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-black shadow-lg shadow-rose-500/10' 
                      : 'bg-gray-900 border-gray-800 hover:border-gray-700 text-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold leading-none">{dayNum}</span>

                  {hasTasks && (
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${allDone ? 'bg-emerald-400' : 'bg-rose-400 animate-pulse'}`} />
                      <span className="text-[9px] font-bold text-gray-400 hidden sm:inline">{dayTasks.length} task{dayTasks.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* TASK MANAGEMENT PANEL */}
        <div className="lg:col-span-5 bg-[#111827] border border-gray-800 rounded-3xl p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400">Active Selected Date</span>
              <h3 className="text-lg font-black text-white">{selectedDateStr}</h3>
            </div>

            <form onSubmit={handleAddTask} className="space-y-3">
              <input
                type="text"
                required
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="What task do you need to do?"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-rose-500"
              />

              <div className="flex gap-2">
                <select
                  value={newTaskTrack}
                  onChange={(e) => setNewTaskTrack(e.target.value)}
                  className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2.5 text-xs text-gray-300 focus:outline-none focus:border-rose-500"
                >
                  <option value="english">English Track</option>
                  <option value="laws">48 Laws of Power</option>
                  <option value="habits">Break Habits</option>
                  <option value="math">Math Track</option>
                  <option value="finance">Finance Track</option>
                </select>

                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-black font-extrabold text-xs shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center space-x-1"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add</span>
                </button>
              </div>
            </form>

            <div className="space-y-2 pt-2 max-h-[260px] overflow-y-auto scrollbar-none">
              {selectedDayTasks.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-xs">
                  No tasks scheduled for {selectedDateStr}. Add one above!
                </div>
              ) : (
                selectedDayTasks.map(task => (
                  <div
                    key={task.id}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      task.completed ? 'bg-gray-900/40 border-gray-800/60 opacity-60' : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 cursor-pointer flex-1" onClick={() => toggleTask(task.id)}>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
                        task.completed ? 'bg-rose-500 border-rose-500 text-black' : 'border-gray-700 hover:border-rose-400'
                      }`}>
                        {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className={`text-xs font-semibold block truncate ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                          {task.title}
                        </span>
                        <span className="uppercase text-[9px] font-bold text-rose-300">
                          {task.track}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-gray-500 hover:text-rose-400 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ScanAndLearnView({ addXP, showToast }) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center animate-fadeIn">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-white flex items-center justify-center gap-2">
          <QrCode className="w-6 h-6 text-amber-400" />
          <span>QR Scan & Learn</span>
        </h1>
        <p className="text-xs text-gray-400">Scan this QR code with your phone camera to upload PPTX, PDF, or notes images directly into flashcards.</p>
      </div>

      <div className="bg-[#111827] border border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
        <div className="w-48 h-48 bg-white rounded-2xl mx-auto p-3 flex items-center justify-center shadow-lg">
          <QrCode className="w-full h-full text-black" />
        </div>

        <div className="text-xs text-gray-400 space-y-1">
          <p>Session ID: <span className="text-amber-400 font-mono">URI-8839-X9</span></p>
          <p>Expires in 9:59 minutes</p>
        </div>

        <button
          onClick={() => {
            addXP(50, "Document Scanned & Learned");
            showToast("✨ AI extracted 12 new study flashcards!", "success");
          }}
          className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
        >
          Simulate Phone Upload & Processing
        </button>
      </div>
    </div>
  );
}

function AboutView({ setActiveTab }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold">Meet the Creator & Programmer</span>
        <h1 className="text-3xl font-black text-white">{siteConfig.creator.name}</h1>
        <p className="text-sm text-gray-400">{siteConfig.creator.title} of Urizmo</p>
      </div>

      <div className="bg-[#111827] border border-amber-500/30 rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-amber-500 via-yellow-400 to-indigo-600 p-1 flex-shrink-0 shadow-2xl overflow-hidden group">
            <img 
              src={siteConfig.creator.photo} 
              alt={siteConfig.creator.name} 
              className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-black text-white">{siteConfig.creator.name}</h2>
              <p className="text-xs text-amber-400 font-bold tracking-wide uppercase">{siteConfig.creator.title}</p>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {siteConfig.creator.bio}
            </p>

            <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-xs space-y-1 text-gray-400">
              <p><strong className="text-gray-200">Email:</strong> {siteConfig.creator.email}</p>
              <p><strong className="text-gray-200">Contact Number:</strong> {siteConfig.creator.phone}</p>
              <p><strong className="text-gray-200">Platform Ownership:</strong> Founder & Sole Developer</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <a 
                href={`mailto:${siteConfig.creator.email}`}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shadow-lg shadow-amber-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
              <a 
                href={`tel:${siteConfig.creator.phone}`}
                className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border border-gray-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{siteConfig.creator.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactView({ showToast }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    showToast(`Message sent directly to ${siteConfig.creator.email}!`, 'success');
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-black text-white">Contact Mark Uriel A. Tabalan</h1>
        <p className="text-xs text-gray-400">Direct channel to the creator and lead programmer of Urizmo.</p>
      </div>

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 space-y-6">
        {sent ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h2 className="text-lg font-bold text-white">Message Delivered</h2>
            <p className="text-xs text-gray-400">Thank you for reaching out! Mark Uriel will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-gray-300 block mb-1">Your Name</label>
              <input 
                required 
                type="text"
                placeholder="Student Name" 
                className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="font-bold text-gray-300 block mb-1">Recipient Email</label>
              <input 
                disabled 
                value={siteConfig.creator.email}
                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-amber-400 font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-gray-300 block mb-1">Message</label>
              <textarea 
                required 
                rows={4}
                placeholder="Ask a question or request a custom mastery feature..."
                className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm rounded-xl transition-all"
            >
              Send Direct Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}