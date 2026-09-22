export const portfolioData = {
  personal: {
    name: "김철호",
    nameEn: "Kim Cheolho",
    title: "프론트엔드 개발자",
    tagline: "사용자가 편하게 사용할 수 있는 웹 경험을 만듭니다.",
    bio: "사용자가 편하게 사용할 수 있는 웹 경험을 만드는 프론트엔드 개발자입니다. 최신 기술을 무조건 따르기보다는 팀이 실제로 잘 다룰 수 있는지, 현실적으로 관리할 수 있는지, 앞으로 유지보수하기 좋은지를 먼저 고려합니다. 개인의 전문성만큼 팀과의 협업을 소중하게 여기며, 코드 리뷰와 지식 공유를 통해 함께 성장하려 노력합니다.",
    email: "v567v202@gmail.com",
    blog: "",
    linkedin: "",
  },

  strengths: [
    {
      title: "사용자 중심 개발",
      description:
        "빠른 로딩 속도, 직관적인 인터페이스, 누구나 쉽게 사용할 수 있는 구조 같은 작은 개선들이 모여 사용자 경험에 큰 차이를 만든다고 믿습니다. 아무리 훌륭한 코드도 사용자 입장에서 불편하면 그 가치를 제대로 전달할 수 없습니다.",
      icon: "💻",
    },
    {
      title: "실용적 기술 선택",
      description:
        "2년간 다양한 프로젝트를 경험하면서 기술 선택의 중요성을 깨달았습니다. 최신 기술을 무조건 따르기보다는 팀이 실제로 잘 다룰 수 있는지, 현실적으로 관리할 수 있는지를 먼저 고려하는 의사결정을 지향합니다.",
      icon: "⚡",
    },
    {
      title: "협업 & 커뮤니케이션",
      description:
        "기술 논의에서는 항상 '이것이 사용자와 팀에게 어떤 영향을 미칠까'를 가장 먼저 생각하며, 코드 리뷰와 지식 공유를 통해 함께 성장하려 노력합니다.",
      icon: "🤝",
    },
  ],

  skills: {
    "Front-End": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MUI",
    ],
    "상태 & 데이터": ["Redux Toolkit", "React Query", "RTK Query"],
    "Back-End & DB": ["Node.js", "Express", "Prisma", "AWS DynamoDB"],
    "Cloud & Infra": ["AWS Amplify", "Cognito", "AppSync"],
    "Tools & Collaboration": ["Git", "GitHub", "Slack", "Figma"],
    "Real-time": ["Socket.IO"],
  },

  experiences: [
    {
      company: "유니바 (Univa)",
      type: "정규직",
      role: "프론트엔드 개발자",
      period: "2023.05 – 2026.03",
      location: "대구 달성군",
      description: "다양한 사내외 웹 플랫폼 및 서비스의 프론트엔드 영역을 전담하여 개발하고 관리했습니다.",
      achievements: [
        "Zephy (AI Agent 채팅 플랫폼): 사용자 질문부터 AI 답변까지 자연스러운 스트리밍 채팅 화면 구현",
        "Socket.IO를 활용해 채팅 상태, 파일 업로드 진행률, 문서 편집 진행 상황을 실시간 동기화",
        "음성 대화, RAG 기반 문서 참조 하이라이팅, 인라인 문서 편집 등 에이전트 기능 개발",
        "다양한 파일 형식을 지원하는 웹 문서뷰어 개발로 사용자 경험 향상",
        "문제G (AI 문제 생성 플랫폼): AI가 자동 생성한 지문과 객관식 문제를 즉시 확인·수정 가능한 인터페이스 구축",
        "생성된 문제를 시험지 형식으로 조합하여 조회 및 PDF 다운로드 기능 제공",
        "AWS Amplify를 활용한 인증, 데이터베이스 연동으로 안정적인 인프라 구축",
        "AI플랫폼: LLM, TTS, STT, OCR 등 다양한 AI 기능 체험 통합 플랫폼 FE 개발",
        "라벨벅스 (멀티미디어 데이터 라벨링 플랫폼): 이미지, 음성 등 다양한 미디어 파일 라벨링 인터페이스 구현",
      ],
      stacks: ["React", "Next.js", "TypeScript", "Socket.IO", "MUI", "Redux Toolkit", "React Query", "AWS Amplify"],
    },
    {
      company: "한국생산성본부",
      type: "인턴",
      role: "공공데이터 청년인턴",
      period: "2020.09 – 2021.02",
      location: "대구",
      description: "공공데이터 청년인턴으로 근무하였습니다.",
      achievements: [],
      stacks: [],
    },
  ],

  projects: [
    {
      title: "PokoBook - 포코피아 비공식 팬 가이드",
      description:
        "포코피아 관련 정보를 한곳에서 탐색할 수 있도록 정리한 웹페이지. 포코피아 정보 아카이빙, 탐색 중심 UI, 참고 자료 기반 데이터 정리를 중심으로 구성한 비공식 팬 프로젝트입니다.",
      period: "2026.09 – 진행 중",
      team: "개인 프로젝트",
      stacks: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      demo: "https://pokopia-db.vercel.app/",
      status: "서비스 중" as const,
    },
    {
      title: "Zephy - AI Agent 채팅 플랫폼",
      description:
        "AI 챗봇과 대화할 수 있는 에이전트 플랫폼. 스트리밍 채팅, 실시간 파일 업로드 진행률, 음성 대화, RAG 기반 문서 참조 하이라이팅, 인라인 문서 편집 등 다양한 에이전트 기능을 포함합니다.",
      period: "2025.09 – 2026.03",
      team: "팀 프로젝트",
      stacks: ["React", "TypeScript", "Socket.IO", "MUI"],
      demo: "https://zephy.univa.ai/",
      status: "서비스 중" as const,
    },
    {
      title: "문제G - AI 문제 생성 플랫폼",
      description:
        "AI를 활용한 국어 및 영어 문제 자동 생성 서비스. 글감 입력 시 AI가 자동으로 생성한 지문과 객관식 문제를 즉시 확인·수정하고, 시험지 형식으로 조합하여 PDF 다운로드할 수 있습니다.",
      period: "2024.12 – 2025.09",
      team: "팀 프로젝트",
      stacks: ["React", "TypeScript", "AWS Amplify", "Redux Toolkit", "React Query", "MUI"],
      demo: "https://www.moonjeg.com/",
      status: "서비스 중" as const,
    },
    {
      title: "AI플랫폼 - AI 기능 체험 플랫폼",
      description:
        "LLM, TTS, STT, OCR 등 다양한 AI 기능을 사용자가 직관적으로 체험할 수 있는 통합 플랫폼. 각 AI 기능별 실시간 결과 확인 UI와 GitBook 연동 가이드 문서를 제공합니다.",
      period: "2024.06 – 2024.12",
      team: "팀 프로젝트",
      stacks: ["Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "MUI"],
      demo: null,
      status: "서비스 중단" as const,
    },
    {
      title: "라벨벅스 - 멀티미디어 데이터 라벨링 플랫폼",
      description:
        "회사 내부 라벨링 도구로 사용되는 웹 기반 플랫폼. 이미지, 음성 등 다양한 미디어 파일을 직관적으로 라벨링하고, 데이터 검증 및 품질 관리, 진행 상황 추적 기능을 제공합니다.",
      period: "2023.05 – 2024.06",
      team: "팀 프로젝트",
      stacks: ["React", "TypeScript", "AWS Amplify", "Redux Toolkit"],
      demo: null,
      status: "서비스 중단" as const,
    },
  ],

  education: [
    {
      school: "경북대학교",
      degree: "중어중문학과",
      period: "2010.03 – 2018.02",
      gpa: "",
    },
  ],
};
