
import { Module } from './types';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    name: "Foundations & Interactive Core",
    range: "1-4주",
    description: "에듀테크 트렌드 분석과 인터랙티브 수업 설계를 위한 기초 역량 강화",
    weeks: [
      { week: 1, title: "에듀테크 트렌드 및 K-Culture 전략", details: ["CES 혁신상 사례 분석", "국내 에듀테크 3사 전략 비교", "K-Culture EdTech 시사점 도출"], method: "강의+워크숍" },
      { week: 2, title: "AI 인터랙티브 실전 워크숍", details: ["Padlet 기반 디지털 ID 생성", "NotebookLM 텍스트 시각화", "Gemini 기반 미니 학습 앱 제작"], method: "실습+워크숍" },
      { week: 3, title: "Padlet Master I: 서식 활용", details: ["4대 핵심 서식 구조 분석", "시나리오별 최적 서식 선택", "개인 포트폴리오(Shelf) 구축"], method: "실습" },
      { week: 4, title: "Padlet Master II: 프롬프트 설계", details: ["맞춤형 프롬프트 설계 기법", "AI 이미지 생성 실습", "문화적 정확성 검증 워크플로우"], method: "실습" }
    ]
  },
  {
    id: 2,
    name: "AI Creative Content Production",
    range: "5-8주",
    description: "생성형 AI를 활용한 고품질 시청각 교육 콘텐츠 제작 및 프로젝트 개시",
    weeks: [
      { week: 5, title: "AI 이미지/영상 생성 전략", details: ["DALL-E 3 & Midjourney 활용", "Vrew 기반 대화 영상 제작", "맞춤형 듣기 자료(TTS) 제작"], method: "실습" },
      { week: 6, title: "AI 음성/발음 코칭 시스템", details: ["Speak & Clova Voice 활용 진단", "최소대립쌍 카드 제작 실습", "ChatGPT 음성 모드 시나리오 설계"], method: "실습+워크숍" },
      { week: 7, title: "AI 평가 도구 및 데이터 분석", details: ["말하기/쓰기 AI 평가 프롬프트", "Padlet 참여도 데이터 수집", "오류 데이터 취합 및 시각화"], method: "실습+분석" },
      { week: 8, title: "실전 프로젝트 Kick-off", details: ["K-Pop/K-Drama 특정 주제 선정", "종합 콘텐츠 패키지 기획", "1-7주차 기술 통합 적용"], method: "프로젝트" }
    ]
  },
  {
    id: 3,
    name: "Data Intelligence & Analytics",
    range: "9-12주",
    description: "학습자 행동 데이터 기반의 교육 효과성 측정 및 AI 모델 최적화",
    weeks: [
      { week: 9, title: "학습자 행동 데이터 분석", details: ["클릭 스트림 분석 기법", "온라인 학습 시간 패턴 파악", "이탈 징후 데이터 추출"], method: "강의+실습" },
      { week: 10, title: "교육 효과성 KPI 개발", details: ["핵심 성과 지표 개발 워크숍", "데이터 기반 수업 개선 계획", "종합 포트폴리오 중간 점검"], method: "강의+워크숍" },
      { week: 11, title: "AI 예측 모델 성과 최적화", details: ["학습 성취도 예측 모델 평가", "예측 오차 분석 및 모델 튜닝", "데이터 기반 개인화 경로 설계"], method: "실습" },
      { week: 12, title: "종합 프로젝트 고도화", details: ["콘텐츠 패키지 개발 지속", "진행 상황 중간 발표", "동료 피드백 및 상호 평가"], method: "프로젝트" }
    ]
  },
  {
    id: 4,
    name: "Global Strategy & Graduation",
    range: "13-15주",
    description: "글로벌 시장 진출 전략 수립 및 최종 성과물 발표",
    weeks: [
      { week: 13, title: "현장 피드백 및 고도화", details: ["잠재 학습자 대상 베타 테스트", "현장 전문가 피드백 수렴", "프로젝트 최종 수정 및 보완"], method: "토론+피드백" },
      { week: 14, title: "글로벌 시장 진출 전략", details: ["에듀테크 비즈니스 모델 수립", "글로벌 현지화 마케팅 전략", "IP 보호 및 유통 전략"], method: "워크숍" },
      { week: 15, title: "최종 발표 및 네트워킹", details: ["최종 성과물 공개 발표", "전문가 초청 심사 및 피드백", "에듀테크 업계 인맥 형성"], method: "발표+네트워킹" }
    ]
  }
];
