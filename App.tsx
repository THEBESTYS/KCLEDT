
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './constants';
import { Applicant, Module } from './types';

// Components
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-8 py-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-bold">Y</div>
      <span className="text-sm tracking-[0.2em] font-light hidden md:block">YONSEI FUTURE EDUCATION</span>
    </div>
    <div className="flex gap-8 text-xs font-medium tracking-widest text-white/60">
      <a href="#overview" className="hover:text-white transition-colors">OVERVIEW</a>
      <a href="#curriculum" className="hover:text-white transition-colors">CURRICULUM</a>
      <a href="#instructor" className="hover:text-white transition-colors">INSTRUCTOR</a>
      <a href="#apply" className="px-4 py-2 bg-white text-black rounded-sm hover:bg-stone-200 transition-colors">APPLY NOW</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden k-gradient">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <span className="text-xs tracking-[0.4em] text-blue-400 font-semibold mb-6 block uppercase">Yonsei University Professional Course</span>
      <h1 className="text-5xl md:text-8xl font-myeongjo architecture leading-tight mb-8 gradient-text">
        AI로 빚어내는<br/>K-Culture 에듀테크
      </h1>
      <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
        전통의 깊이와 기술의 혁신이 만나는 지점.<br/>
        생성형 AI와 데이터 분석으로 K-문화 콘텐츠의 새로운 미래를 설계합니다.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="#apply" className="px-10 py-4 bg-white text-black font-semibold rounded-sm hover:scale-105 transition-transform">지원하기</a>
        <a href="#curriculum" className="px-10 py-4 glass border border-white/20 font-semibold rounded-sm hover:bg-white/10 transition-colors">커리큘럼 확인</a>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
    </div>
  </section>
);

// Fix: Use React.FC and the Module interface to correctly type props and avoid 'key' property errors
const ModuleCard: React.FC<{ module: Module }> = ({ module }) => (
  <div className="glass p-8 rounded-sm hover:border-blue-500/50 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <span className="text-4xl font-myeongjo text-blue-500/40">0{module.id}</span>
      <span className="text-xs tracking-widest text-stone-500 bg-stone-900 px-3 py-1">{module.range}</span>
    </div>
    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{module.name}</h3>
    <p className="text-sm text-stone-400 font-light leading-relaxed mb-8">{module.description}</p>
    <div className="space-y-4">
      {module.weeks.map((w) => (
        <div key={w.week} className="border-l border-white/10 pl-4 py-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-white/80">{w.week}주: {w.title}</span>
            <span className="text-[10px] text-stone-500 uppercase">{w.method}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {w.details.map((d: string, i: number) => (
              <span key={i} className="text-[10px] text-stone-500">• {d}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', motivation: '' });
  const [applied, setApplied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('applicants') || '[]');
    const newApplicant: Applicant = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      appliedAt: new Date().toISOString()
    };
    localStorage.setItem('applicants', JSON.stringify([...existing, newApplicant]));
    setApplied(true);
    setFormData({ name: '', email: '', phone: '', motivation: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Overview */}
      <section id="overview" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs tracking-[0.5em] text-blue-500 font-bold mb-8 uppercase">Course Overview</h2>
            <h3 className="text-4xl md:text-5xl font-myeongjo leading-tight mb-8">
              미래 교육의 기준을 세우는<br/>15주간의 실전 마스터 클래스
            </h3>
            <div className="space-y-6 text-stone-400 font-light leading-relaxed">
              <p>본 과정은 최신 AI 기술을 활용하여 K-Culture와 한국어를 융합한 혁신적인 교육 콘텐츠를 기획, 제작, 평가하는 전 과정을 다루는 전문가 양성 과정입니다.</p>
              <p>2026년 최신 에듀테크 트렌드 분석을 시작으로 AI 이미지/영상 생성, 음성 코칭, 그리고 데이터 기반 학습 분석까지 22주(실습 포함)의 체계적인 워크숍을 제공합니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-2xl font-bold text-white mb-1">20명</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">정원 (선착순)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">15주</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">교육 기간</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 glass rounded-full animate-pulse" />
            <img src="https://picsum.photos/id/1011/800/800" alt="Culture Tech" className="rounded-full object-cover w-full h-full p-4 grayscale" />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-32 px-8 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs tracking-[0.5em] text-blue-500 font-bold mb-4 uppercase">Curriculum</h2>
            <h3 className="text-4xl font-myeongjo">4단계 커리큘럼 모듈</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSE_MODULES.map(m => <ModuleCard key={m.id} module={m} />)}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="py-32 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-64 h-64 flex-shrink-0 relative">
            <div className="absolute inset-0 border border-blue-500/30 -m-4 translate-x-2 translate-y-2" />
            <img src="https://picsum.photos/id/1005/400/400" alt="Ko Je-hyuk" className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <h2 className="text-xs tracking-[0.5em] text-blue-500 font-bold mb-4 uppercase">Lead Instructor</h2>
            <h3 className="text-3xl font-myeongjo mb-6">고 제 혁 (Ko Je-hyuk)</h3>
            <p className="text-stone-300 font-light mb-8 leading-relaxed">
              에듀포레 부회장 | 에듀테크 전략 전문가<br/>
              연세대학교 미래교육원 강사<br/><br/>
              "도구의 사용법을 넘어, 그 도구로 무엇을 가르칠 것인가에 집중합니다. AI는 단순한 유행이 아닌, 교육의 본질을 강화하는 가장 강력한 수단이 될 것입니다."
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-stone-500 border border-white/10 px-3 py-1">에듀테크 15년</span>
              <span className="text-xs text-stone-500 border border-white/10 px-3 py-1">AI 콘텐츠 기획</span>
              <span className="text-xs text-stone-500 border border-white/10 px-3 py-1">PBL 전문가</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-32 px-8 bg-stone-900/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-myeongjo mb-4">지금 지원하세요</h2>
            <p className="text-stone-400 font-light">글로벌 에듀테크 전문가로의 도약, 연세대학교가 함께합니다.</p>
          </div>
          
          {applied ? (
            <div className="glass p-12 text-center rounded-sm">
              <h4 className="text-2xl font-myeongjo mb-4 text-blue-400">지원이 완료되었습니다</h4>
              <p className="text-stone-400 mb-8">기입해주신 이메일로 안내 문자가 발송될 예정입니다.</p>
              <button onClick={() => setApplied(false)} className="text-sm border-b border-white/20 pb-1">다른 지원서 작성</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="성함" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="이메일" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <input 
                type="tel" 
                placeholder="연락처 (010-0000-0000)" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              <textarea 
                placeholder="지원 동기 및 기대하는 바" 
                rows={5}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
                required
                value={formData.motivation}
                onChange={e => setFormData({...formData, motivation: e.target.value})}
              />
              <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-widest transition-colors rounded-sm">
                SUBMIT APPLICATION
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5 text-center text-xs text-stone-600 tracking-widest uppercase">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>&copy; 2024 YONSEI UNIVERSITY FUTURE EDUCATION CENTER. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;
