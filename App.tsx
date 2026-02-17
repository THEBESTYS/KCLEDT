
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './constants';
import { Applicant, Module } from './types';

// --- UI Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-8 py-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/20">Y</div>
      <span className="text-sm tracking-[0.2em] font-light hidden md:block text-white">YONSEI FUTURE EDUCATION</span>
    </div>
    <div className="flex gap-8 text-xs font-medium tracking-widest text-white/70">
      <a href="#overview" className="hover:text-white transition-colors">OVERVIEW</a>
      <a href="#curriculum" className="hover:text-white transition-colors">CURRICULUM</a>
      <a href="#instructor" className="hover:text-white transition-colors">INSTRUCTOR</a>
      <a href="#apply" className="px-5 py-2 bg-white text-black rounded-sm hover:bg-stone-200 transition-all font-bold text-[10px] tracking-widest">APPLY NOW</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden k-gradient">
    <div className="absolute inset-0 opacity-30 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
       <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-7xl">
      <span className="text-xs tracking-[0.5em] text-blue-400 font-bold mb-8 block uppercase drop-shadow-sm">Yonsei University Professional Course</span>
      <h1 className="text-3xl md:text-7xl lg:text-8xl font-myeongjo leading-tight mb-8 gradient-text font-bold">
        AI로 빚어내는<br/>
        <span className="inline-block mt-2 whitespace-nowrap">K-Culture & Language 에듀테크</span>
      </h1>
      <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
        K-문화의 심장과 한국어 교육의 깊이가 기술의 혁신과 만납니다.<br/>
        생성형 AI로 대한민국을 넘어 세계를 향한 차세대 에듀테크 콘텐츠를 설계하십시오.
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <a href="#apply" className="px-12 py-5 bg-white text-black font-bold rounded-sm hover:scale-105 transition-all shadow-xl tracking-[0.2em]">지원하기</a>
        <a href="#curriculum" className="px-12 py-5 glass border border-white/20 text-white font-bold rounded-sm hover:bg-white/10 transition-all tracking-[0.2em]">커리큘럼 확인</a>
      </div>
    </div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
    </div>
  </section>
);

const ModuleCard: React.FC<{ module: Module }> = ({ module }) => (
  <div className="glass p-10 rounded-sm hover:border-blue-500/50 transition-all group flex flex-col h-full">
    <div className="flex justify-between items-start mb-8">
      <span className="text-5xl font-myeongjo text-blue-500/40 font-bold">0{module.id}</span>
      <span className="text-[10px] tracking-widest text-stone-400 bg-white/5 border border-white/10 px-3 py-1 uppercase">{module.range}</span>
    </div>
    <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors text-white font-myeongjo leading-snug">{module.name}</h3>
    <p className="text-sm text-stone-400 font-light leading-relaxed mb-10 flex-grow">{module.description}</p>
    <div className="space-y-6">
      {module.weeks.map((w) => (
        <div key={w.week} className="border-l border-blue-500/30 pl-5 py-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-stone-200">{w.week}주: {w.title}</span>
            <span className="text-[9px] text-stone-500 uppercase tracking-widest font-bold">{w.method}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {w.details.map((d: string, i: number) => (
              <span key={i} className="text-[10px] text-stone-500 leading-tight">• {d}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Admin Components ---

const AdminLogin: React.FC<{ onLogin: () => void, onClose: () => void }> = ({ onLogin, onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === 'one' && password === 'pass1234') {
      onLogin();
    } else {
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-6">
      <div className="glass max-w-md w-full p-12 rounded-sm border border-white/10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-myeongjo text-white mb-2">관리자 로그인</h2>
            <p className="text-[10px] tracking-[0.3em] text-stone-500 uppercase font-bold">Administrator Access</p>
          </div>
          <button onClick={onClose} className="text-stone-500 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <form onSubmit={handleLogin} className="space-y-10">
          <div>
            <label className="block text-[10px] tracking-[0.3em] text-stone-500 mb-3 uppercase font-bold">User ID</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600"
              value={userId}
              onChange={e => setUserId(e.target.value)}
              placeholder="Admin ID"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.3em] text-stone-500 mb-3 uppercase font-bold">Password</label>
            <input 
              type="password" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs font-medium bg-red-500/10 p-3 border border-red-500/20">{error}</p>}
          <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-[0.4em] transition-all rounded-sm shadow-lg shadow-blue-600/20">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('applicants') || '[]');
    setApplicants(data);
  }, []);

  const downloadCSV = () => {
    if (applicants.length === 0) return alert('다운로드할 데이터가 없습니다.');
    const headers = ['성함', '이메일', '연락처', '지원동기', '지원일시'];
    const rows = applicants.map(a => [
      a.name,
      a.email,
      a.phone,
      `"${a.motivation.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      new Date(a.appliedAt).toLocaleString('ko-KR')
    ]);
    const csvContent = "\uFEFF" + [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Yonsei_Applicants_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-stone-950 overflow-y-auto pt-32 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-8">
          <div>
            <h2 className="text-4xl font-myeongjo text-white mb-3">지원자 관리 시스템</h2>
            <p className="text-blue-500 text-xs tracking-[0.4em] font-bold uppercase">K-Culture & Language EdTech Pro Dashboard</p>
          </div>
          <div className="flex gap-5">
            <button 
              onClick={downloadCSV}
              className="px-8 py-4 bg-white text-black text-xs font-black tracking-widest hover:bg-stone-200 transition-all rounded-sm flex items-center gap-3 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              EXCEL DOWNLOAD
            </button>
            <button 
              onClick={onLogout}
              className="px-8 py-4 border border-white/20 text-white text-xs font-black tracking-widest hover:bg-white/10 transition-all rounded-sm uppercase"
            >
              LOGOUT
            </button>
          </div>
        </div>

        <div className="glass overflow-x-auto rounded-sm border border-white/10 shadow-3xl">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-stone-400 uppercase tracking-widest text-[10px] font-black">
                <th className="px-10 py-8 text-white">Name</th>
                <th className="px-10 py-8">Email</th>
                <th className="px-10 py-8">Phone</th>
                <th className="px-10 py-8">Date</th>
                <th className="px-10 py-8">Motivation Snippet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {applicants.length > 0 ? applicants.map((a) => (
                <tr key={a.id} className="hover:bg-white/10 transition-colors group">
                  <td className="px-10 py-8 font-bold text-white group-hover:text-blue-400 transition-colors">{a.name}</td>
                  <td className="px-10 py-8 text-stone-300 font-light">{a.email}</td>
                  <td className="px-10 py-8 text-stone-300 font-light">{a.phone}</td>
                  <td className="px-10 py-8 text-[11px] text-stone-500 font-mono">
                    {new Date(a.appliedAt).toLocaleDateString()}
                  </td>
                  <td className="px-10 py-8 text-xs text-stone-400 max-w-sm truncate italic group-hover:text-stone-200">
                    {a.motivation}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-10 py-40 text-center text-stone-600 font-myeongjo italic text-2xl">
                    아직 접수된 지원서가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-right">
          <p className="text-[10px] text-stone-500 tracking-[0.4em] font-bold uppercase">Total Registration: {applicants.length}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', motivation: '' });
  const [applied, setApplied] = useState(false);
  const [adminMode, setAdminMode] = useState<'none' | 'login' | 'dashboard'>('none');

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
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 selection:bg-blue-600/40 selection:text-white">
      <Navbar />
      <Hero />

      {/* Overview Section */}
      <section id="overview" className="py-48 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs tracking-[0.8em] text-blue-500 font-black mb-12 uppercase drop-shadow-sm">Course Philosophy</h2>
            <h3 className="text-4xl md:text-7xl font-myeongjo leading-tight mb-12 text-white font-bold">
              K-문화와 <span className="text-blue-500 whitespace-nowrap inline-block">한국어 교육</span>의<br/>미래를 재정의합니다
            </h3>
            <div className="space-y-10 text-stone-400 font-light text-lg md:text-xl leading-relaxed">
              <p>본 과정은 연세대학교 미래교육원이 제안하는 독보적인 'K-Culture & Language' 에듀테크 전문가 양성 트랙입니다. 한국어 교육의 특수성과 K-콘텐츠의 폭발력을 최첨단 AI 기술과 결합하여 글로벌 시장을 선점할 리더를 육성합니다.</p>
              <p>단순한 기술 습득을 넘어, 전 세계 한국어 학습자들이 열광할 수 있는 고품질 콘텐츠를 기획하고 데이터 기반으로 학습 효과를 입증하는 실전 제작자로 거듭나게 될 것입니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-20 pt-16 border-t border-white/10">
              <div>
                <p className="text-4xl font-myeongjo text-white mb-3 font-bold">20</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-black">정예 선발 인원</p>
              </div>
              <div>
                <p className="text-4xl font-myeongjo text-white mb-3 font-bold">15 WKS</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-black">집중 커리큘럼</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-8 border border-blue-600/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute -inset-12 border border-red-600/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
            <div className="relative aspect-square overflow-hidden rounded-full glass border-2 border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.2)]">
              {/* 3D 물결과 한국적 미가 결합된 예술적 이미지 */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Artistic Wave with Korean Motif" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-48 px-8 bg-[#070707] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-xs tracking-[1em] text-blue-500 font-black mb-8 uppercase drop-shadow-sm">Modules</h2>
            <h3 className="text-5xl md:text-6xl font-myeongjo text-white font-bold">K-콘텐츠 전문가 과정</h3>
            <div className="w-24 h-px bg-blue-600/50 mx-auto mt-12" />
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            {COURSE_MODULES.map(m => <ModuleCard key={m.id} module={m} />)}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-48 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 flex-shrink-0 relative">
            <div className="absolute -inset-10 border border-white/5 -rotate-6" />
            <div className="absolute -inset-4 border border-blue-600/30 rotate-12" />
            <div className="relative w-full h-full glass overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1000&auto=format&fit=crop" 
                alt="Instructor Back View" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90" 
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xs tracking-[0.8em] text-blue-500 font-black mb-8 uppercase drop-shadow-sm">Master Instructor</h2>
            <h3 className="text-4xl lg:text-5xl font-myeongjo text-white mb-10 italic font-bold underline decoration-blue-600/30 underline-offset-8 whitespace-nowrap">고 제 혁 <span className="text-xl lg:text-2xl font-sans not-italic text-stone-500 ml-6 tracking-widest font-light">Ko Je-hyuk</span></h3>
            <p className="text-stone-400 font-light text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl">
              "도구의 조작법을 배우는 시대는 지났습니다. 이제는 AI를 우리 문화적 자산과 한국어의 특수성에 결합하여 교육의 깊이를 더하는 '디지털 연금술사'가 필요합니다. 연세에서 그 첫 발을 떼십시오."
            </p>
            <ul className="space-y-5 text-sm lg:text-base text-stone-500 font-medium tracking-wider">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 연세대학교 미래교육원 강사</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 에듀포레 부회장 및 에듀테크 전략 고문</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 글로벌 에듀테크 비즈니스 모델링 전문가</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-48 px-8 relative overflow-hidden bg-[#0c0c0c]">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 -skew-y-3 origin-top-left" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-myeongjo text-white mb-8 font-bold tracking-tight">ENROLL NOW</h2>
            <p className="text-stone-500 tracking-[0.6em] font-black uppercase text-xs">Professional Course Application</p>
          </div>
          
          {applied ? (
            <div className="glass p-20 text-center rounded-sm border-blue-500/50 shadow-3xl">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(37,99,235,0.4)] animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-4xl font-myeongjo mb-8 text-white font-bold">접수 완료</h4>
              <p className="text-stone-300 font-light text-lg leading-relaxed mb-12">지원이 성공적으로 완료되었습니다.<br/>기재하신 이메일과 전화번호를 통해 향후 일정을 안내해 드립니다.</p>
              <button onClick={() => setApplied(false)} className="text-xs text-blue-500 border-b border-blue-500/50 pb-2 hover:text-blue-400 transition-all uppercase tracking-[0.3em] font-black">새 지원서 작성하기</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-stone-500 ml-2 font-black">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="성함을 입력하세요" 
                    className="w-full bg-white/5 border-b border-white/20 p-5 rounded-t-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600 text-lg"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-stone-500 ml-2 font-black">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@yonsei.ac.kr" 
                    className="w-full bg-white/5 border-b border-white/20 p-5 rounded-t-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600 text-lg"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] text-stone-500 ml-2 font-black">Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="010-0000-0000" 
                  className="w-full bg-white/5 border-b border-white/20 p-5 rounded-t-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600 text-lg"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] text-stone-500 ml-2 font-black">Statement of Purpose</label>
                <textarea 
                  placeholder="K-Culture & Language 에듀테크를 향한 비전을 자유롭게 기재해 주세요." 
                  rows={8}
                  className="w-full bg-white/5 border-b border-white/20 p-5 rounded-t-sm focus:outline-none focus:border-blue-500 text-white transition-all placeholder:text-stone-600 text-lg resize-none leading-relaxed"
                  required
                  value={formData.motivation}
                  onChange={e => setFormData({...formData, motivation: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full py-7 bg-white text-black font-black tracking-[0.5em] hover:bg-stone-200 transition-all rounded-sm shadow-2xl hover:translate-y-[-4px] active:translate-y-0 text-lg">
                SUBMIT APPLICATION
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-32 px-8 border-t border-white/5 text-center relative group bg-[#050505]">
        <div className="mb-16">
          <div className="w-16 h-16 border border-white/10 mx-auto flex items-center justify-center font-myeongjo text-stone-600 mb-10 group-hover:border-blue-500/50 transition-all duration-700 text-2xl font-bold">Y</div>
          <h5 className="text-[11px] tracking-[0.8em] text-stone-500 uppercase mb-10 font-black">Yonsei Future Education Center</h5>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-[10px] tracking-[0.4em] font-bold text-stone-700 uppercase mb-12">
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
        </div>
        <p className="text-[9px] text-stone-800 tracking-[0.3em] uppercase font-medium">&copy; 2024 YONSEI UNIVERSITY FUTURE EDUCATION CENTER. K-Culture & Language EdTech Course. ALL RIGHTS RESERVED.</p>
        
        {/* Subtle Admin Entry in Bottom Right */}
        <button 
          onClick={() => setAdminMode('login')}
          className="absolute right-12 bottom-12 opacity-5 hover:opacity-100 transition-all duration-1000 flex items-center gap-3 group/admin p-2"
        >
          <span className="text-[10px] tracking-[0.4em] text-stone-500 font-black group-hover/admin:text-blue-500">SYSTEM LOGIN</span>
          <div className="w-2 h-2 bg-stone-800 rounded-full group-hover/admin:bg-blue-600 transition-all shadow-[0_0_10px_rgba(37,99,235,0)] group-hover/admin:shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
        </button>
      </footer>

      {/* Modals for Admin Access */}
      {adminMode === 'login' && (
        <AdminLogin 
          onLogin={() => setAdminMode('dashboard')} 
          onClose={() => setAdminMode('none')} 
        />
      )}
      {adminMode === 'dashboard' && (
        <AdminDashboard 
          onLogout={() => setAdminMode('none')} 
        />
      )}
    </div>
  );
};

export default App;
