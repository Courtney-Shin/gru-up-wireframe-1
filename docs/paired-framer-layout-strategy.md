# Paired & Prepared — 사이트 구조 및 레이아웃 전략 문서
> Version 1.0 | 2026-05-08 | Framer 구현 전 설계 문서

---

# PART 1. 사이트의 핵심 컨셉 정의

## 1. 사이트 한 줄 정의
전략·디자인·데이터의 교차점에서 실제 프로젝트를 수행하고, 그 결과를 반기 단위 Issue로 구조화하여 축적하는 다학제적 리서치 아카이브 플랫폼.

## 2. 사이트의 핵심 경험 문장
"이 팀은 콘텐츠를 발행하는 곳이 아니라, 프로젝트를 수행하고 그것을 체계적으로 아카이빙하는 곳이다."

## 3. 방문자가 첫 5초 안에 이해해야 하는 것
- Paired는 전략·디자인·데이터를 다루는 팀이다
- 반기 단위로 Issue를 발간하며, 프로젝트 결과가 누적된다
- 대학원/연구실과 연결 가능한 장기 플랫폼이다
- 지금 보이는 것은 Issue 00이지만, 이 사이트는 앞으로도 계속 쌓인다

## 4. 브랜드 톤앤매너
- **Calm Authority**: 과장 없이 구조적으로 신뢰를 전달
- **Intellectual Rigour**: 주장에는 근거가 있고, 방법론이 드러남
- **Accumulative**: 한 번의 발간이 아니라 계속 쌓이는 플랫폼임이 느껴짐
- **Quietly Editorial**: 전체는 institutional하지만 Projects 내부에서는 편집감이 살아있음

## 5. 시각적 키워드 8개
1. Structured Grid
2. Sparse White Space
3. Strong Typographic Hierarchy
4. Muted Institutional Palette
5. Archive Depth
6. Disciplined Layout
7. Research-grade Data Blocks
8. Layered Navigation

## 6. 피해야 할 느낌 8개
1. 학생 동아리 블로그 — 임시적이고 개인적인 느낌
2. 카드뉴스 나열 — 콘텐츠 피드처럼 보이는 구조
3. 캐주얼 온라인 매거진 — 가볍고 트렌디한 편집감
4. 단체 소개 사이트 — 미션/비전/조직도만 있는 정적 구조
5. 포트폴리오 사이트 — "우리 작업물을 봐주세요"의 느낌
6. 딱딱한 기관 사이트 — 접근하기 어렵고 차가운 느낌
7. 이벤트/행사 사이트 — 일회성으로 보이는 구조
8. SaaS 랜딩 페이지 — 기능 설명과 CTA 나열

## 7. Framer에서 구현할 때 적합한 전체 스타일 방향
- **Base**: Off-white (#F7F6F2) 또는 White 배경, 강한 타이포그래피 위계
- **Grid**: 12-column, gutter 24px, max-width 1280px
- **Typography**: Serif for headlines (editorial), Sans-serif for body/UI
- **Motion**: Subtle, purposeful — fade-in on scroll, no decorative animation
- **CMS**: Framer CMS Collections 활용, 필터는 Framer native filter 또는 Radix 기반
- **Sections**: Main/People/About은 wider spacing + calmer hierarchy, Projects/Issue/Detail은 tighter editorial rhythm

## 8. 연구실/대학원형 사이트와 매거진형 사이트의 역할 분리 원칙

| 영역 | 스타일 | 이유 |
|------|--------|------|
| Main | Institutional / Research Lab Landing | 첫인상이 아카이브 플랫폼임을 전달 |
| Projects (List) | Archive + Light Editorial | 콘텐츠 브라우징이 가능하되 연구소 느낌 유지 |
| Issue Page | Full Editorial | 발간물 자체의 편집감을 최대로 |
| Article Detail | Research Article + Editorial | 기획기사/연구논문의 혼합 |
| People | Institutional / Lab Directory | 신뢰도와 네트워크 전달 |
| About | Institutional / Structural Explanation | 조직 구조와 연결성 설명 |

**핵심 규칙**: 매거진형 편집감은 Projects 네비게이션 아래에서만 허용된다. Main, People, About은 항상 institutional tone을 유지한다.

---

# PART 2. Information Architecture

## 상단 네비게이션
```
Main | Projects | People | About
```

## 페이지별 IA 테이블

| Page | Purpose | Primary Audience | Key Content | Layout Type | CTA | Framer Notes | CMS Dependency |
|------|---------|-----------------|-------------|-------------|-----|-------------|----------------|
| Main | 플랫폼 정체성 전달 + 입구 | 처음 방문자, 잠재 협업자, 대학원 관계자 | Hero identity, Featured Issue, Featured Projects, People preview, Structure diagram | Institutional Landing | Explore Projects / About Paired | Static sections + CMS-fed project cards | Issues, Projects, People |
| Projects | 전체 아카이브 브라우징 | 리서치 독자, 재방문자, 동료 연구자 | Issue browser, Article cards, Filter system | Archive + Editorial List | Read Issue / View Project | Framer CMS Collection list + filter | Issues, Projects, Categories |
| Issue 00 | 첫 번째 발간물 상세 | 모빌리티 관심 독자, 프로젝트 파트너 | Cover, Editor's note, Article sequence, Contributors | Full Editorial | Read Articles / Meet Contributors | CMS Issue + nested Articles | Issues, Projects, People |
| Article Detail | 개별 기사/프로젝트 상세 | 리서치 독자, 채용/협업 검토자 | Hero, Summary block, TOC, Body, Methodology, Related | Research Article Layout | Related Projects / Contact | CMS Project item + People reference | Projects, People, Methods |
| People | 팀/네트워크 디렉토리 | 협업자, 채용 검토자, 대학원 관계자 | Current, Alumni, Advisors | Lab Directory | View Projects / Contact | CMS People collection + filter | People, Projects |
| About | 조직 정체성과 구조 설명 | 잠재 협업자, 대학원 관계자, 미디어 | Origin, Structure, Linkage, Contact | Institutional Explainer | Collaborate / Get in Touch | Static page with diagram components | Organizations |

## 페이지별 Sub-section 구조

```
Main
├── 01. Institutional Hero
├── 02. Research Identity (Business × Design × Data)
├── 03. Current Featured Issue
├── 04. Featured Projects (mixed categories)
├── 05. People Preview
├── 06. Structure Diagram (GRU → Paired → Archive → Graduate)
└── 07. Collaboration CTA

Projects
├── 01. Archive Hero
├── 02. Latest Issue Feature (Issue 00: Mobility)
├── 03. Issue Browser (all issues)
├── 04. Category Filter (All / Issues / Research / Interview / Execution / Archive)
├── 05. Project / Article Cards Grid
├── 06. Methodology Block ("How We Work")
├── 07. Legacy Archive Preview
└── 08. Collaboration CTA

Issue 00: Mobility
├── 01. Issue Cover
├── 02. Editor's Note
├── 03. Reading Guide (article map)
├── 04. Article Sequence (A–F)
├── 05. Interview Section
├── 06. Data / Methodology Note
├── 07. Contributor List
└── 08. Related Issues / Next Issue Teaser

People
├── 01. Section Hero
├── 02. Current Members
├── 03. Alumni Network
└── 04. Advisors & Supervisors

About
├── 01. About Paired
├── 02. Why We Started
├── 03. From GRU
├── 04. Business × Design × Data
├── 05. Project / Issue / Archive Model
├── 06. Graduate School / Research Lab Linkage
└── 07. Collaboration / Contact
```

---

# PART 3. Main Page Layout

> **원칙**: 온라인 매거진 홈이 아니라 research lab landing page. 구조와 신뢰가 먼저, 콘텐츠 나열은 나중.

---

### Section 01. Institutional Hero

- **Headline**: `Paired & Prepared`
- **Sub-headline**: `A project-based research archive at the intersection of Business, Design, and Data.`
- **Supporting copy**: `We conduct, structure, and publish cross-disciplinary projects — semi-annually, cumulatively, and with institutional intent.`
- **Content elements**:
  - 풀-와이드 또는 65% 너비의 타이포그래피 중심 블록
  - 우측 하단 또는 별도 영역에 작은 텍스트로 "Issue 00: Mobility — Now Available"
  - CTA 2개: `[Explore Projects]` `[About Paired]`
- **Visual layout**: 좌측 정렬 대형 타이포그래피, 배경은 off-white 또는 clean white, 이미지 없음 또는 추상적인 grid/texture
- **Interaction**: Fade-in on load, CTA에 subtle underline hover
- **Framer note**: Static section, no CMS. Framer Text component + Button component. Full-viewport height 또는 80vh.

---

### Section 02. Research Identity Block

- **Headline**: `Where we operate`
- **Content elements**:
  - 3개의 discipline column: **Business** / **Design** / **Data & Engineering**
  - 각 column에 2–3줄의 설명 텍스트
  - 교차점 강조: "Paired operates where these three disciplines meet in practice."
  - 하단에 작은 텍스트: "Not a student club. Not a consulting firm. A structured project archive."
- **Visual layout**: 3-column equal grid, 얇은 divider line 또는 넉넉한 white space로 분리
- **Interaction**: 없음 또는 column별 subtle border highlight on hover
- **Framer note**: Static section, 3-column Framer Stack component.

---

### Section 03. Current Featured Issue

- **Label**: `Latest Issue`
- **Headline**: `Issue 00: Mobility`
- **Supporting copy**: `Examining the paradigm shift in mobility — from racing culture to EV economics, platform dynamics to AI optimization.`
- **Content elements**:
  - Issue 커버 이미지 또는 typographic cover (좌측 또는 상단)
  - 우측 또는 하단에 포함된 아티클 수, 기고자 수, 발행일
  - 주요 아티클 제목 3개 (small list)
  - CTA: `[Read Issue 00]`
- **Visual layout**: 2-column — 좌측 cover / 우측 메타데이터 + article list. 또는 풀-너비 editorial band.
- **Interaction**: Cover에 hover시 subtle scale (1.02). CTA underline.
- **Framer note**: CMS-connected (Issues collection). Featured item 수동 지정.

---

### Section 04. Featured Projects

- **Label**: `From the Archive`
- **Headline**: `Selected Projects`
- **Content elements**:
  - 3–4개 Project Card (Research / Interview / Execution 혼합)
  - 각 카드: Category tag / Issue / Title / One-line thesis / Author / Status
  - CTA: `[Browse All Projects]`
- **Visual layout**: 3-column card grid (desktop), 1-column (mobile)
- **Interaction**: Card hover — subtle lift (shadow or Y translate -4px)
- **Framer note**: CMS-connected (Projects collection), featured boolean 필드로 필터.

---

### Section 05. People Preview

- **Label**: `The Team`
- **Headline**: `Current Members · Alumni · Advisors`
- **Content elements**:
  - Current Members: 이름 + role을 compact하게 5–8명 나열
  - Alumni: "X alumni across graduate programs and industry" 한 줄 + 대표 이름 2–3개
  - Advisors: 이름 + affiliation 2–3명
  - CTA: `[Meet Everyone]`
- **Visual layout**: 좌측 People 리스트, 우측 짧은 설명 텍스트. 또는 3-row 수평 나열.
- **Framer note**: CMS-connected (People collection), role filter로 3그룹 분리.

---

### Section 06. Structure Diagram

- **Label**: `How Paired Works`
- **Headline**: `From community to archive to institution`
- **Content elements**:
  - 수평 흐름도 텍스트:
    `GRU Community → Paired → Projects & Issues → Archive → Graduate / Research Lab / Collaboration`
  - 각 노드 아래 1줄 설명
  - 이 섹션은 다이어그램이 메인, 텍스트는 보조
- **Visual layout**: 풀-너비 수평 step diagram, 노드 사이 화살표 또는 점선
- **Framer note**: Static custom component. SVG 또는 Framer Frame-based diagram.

---

### Section 07. Collaboration CTA

- **Headline**: `Work with Paired`
- **Supporting copy**: `We welcome collaboration, project inquiry, interview requests, and research partnerships.`
- **Content elements**:
  - 3개 링크/버튼: `Collaborate` / `Submit a Project Idea` / `Get in Touch`
  - 배경: 약간 다른 tone의 배경색 (mid-grey 또는 dark section)
- **Framer note**: Static CTA section, email mailto 또는 Typeform embed.

---

# PART 4. Projects Page Layout

> **원칙**: 이 사이트의 본체. 전체 아카이브가 여기에 쌓인다. 리스트는 archive처럼, 내부는 editorial처럼.

---

### Section 01. Archive Hero

- **Headline**: `Projects`
- **Sub-headline**: `A cumulative archive of research, analysis, and structured inquiry.`
- **Supporting copy**: `Every issue, article, interview, and project review lives here — organized, filterable, and growing.`
- **Visual layout**: 타이포그래피 중심. 배경 minimal. Issue count / Article count 숫자를 small stat으로 표시.
- **Framer note**: Static section. Animated counter optional.

---

### Section 02. Latest Issue Feature

- **Label**: `Current Issue`
- **Content**: Issue 00: Mobility editorial feature — cover + title + brief intro + article count
- **CTA**: `[Open Issue 00]`
- **Visual layout**: 풀-너비 editorial band. Magazine-like treatment 허용.
- **Framer note**: CMS-connected (Issues, featured=true).

---

### Section 03. Issue Browser

- **Headline**: `All Issues`
- **Content**: Issue 카드 나열 — Issue number / Theme / Date / Article count
- **Visual layout**: 수평 스크롤 또는 2-column grid
- **Framer note**: CMS-connected (Issues collection), sorted by date desc.

---

### Section 04. Category Filter

```
[All]  [Issues]  [Research]  [Interview]  [Execution]  [Archive]
```

- Framer native CMS filter 또는 JavaScript URL parameter 방식
- 선택된 필터 강조: underline 또는 filled pill

---

### Section 05. Project / Article Cards Grid

- **Layout**: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Card fields**:
  - Category tag (color-coded: Research=blue, Interview=green, Execution=orange, Archive=grey)
  - Issue label (e.g., "Issue 00")
  - Title
  - One-line thesis
  - Author
  - Reading time
  - Status badge: Published / In Progress / Archive
- **Interaction**: Hover lift, click → Article Detail page
- **Framer note**: CMS Collection List component, filterable.

---

### Section 06. Methodology Block ("How We Work")

- **Headline**: `Our Approach`
- **Content**:
  - Desk Research → Survey / Interview → Model / Simulation → Structured Output
  - 4-step horizontal flow
- **Visual**: Minimal icon + text columns
- **Framer note**: Static section.

---

### Section 07. Legacy Archive Preview

- **Label**: `Archive`
- **Headline**: `Past Issues & Projects`
- **Content**: 이전 Issue 카드들 (Issue 00 이후 Issue 01, 02가 생기면 여기 쌓임)
- **Framer note**: CMS filter (status = "Archive").

---

### Section 08. Collaboration CTA

- 동일한 global CTA section 재사용.

---

# PART 5. Issue 00: Mobility Layout

## 아티클 흐름 옵션 비교 및 선택

| Option | 흐름 논리 | 강점 | 약점 |
|--------|-----------|------|------|
| A. 시간 흐름 | Racing → Branding → EV → Platform → AI → Sustainability | 역사적 서사, 직관적 | 모빌리티 "산업 구조"보다 연대기에 치우침 |
| B. 산업 구조 흐름 | Culture → Product → Economics → Platform → AI → Sustainability | 분석적, 학술적, 각 아티클이 독립적으로도 읽힘 | 다소 건조할 수 있음 |
| C. 사용자 경험 흐름 | Desire → Buy → Move → Platform decides → AI optimizes → Future asks | 내러티브 강함, 독자 몰입 | Paired의 research-driven 정체성과 미스매치 가능 |

**선택: Option B — 산업 구조 흐름**

**이유**: Paired는 research-driven archive다. 각 아티클이 독립적인 분석 단위로 서야 하며, 독자가 순서 없이 진입해도 각 아티클이 완결성을 가져야 한다. 산업 구조 흐름은 6개 아티클을 하나의 지적 지형도처럼 배치하며, 연구소 발간물의 느낌을 가장 잘 살린다.

## Issue 00 내 아티클 배열

```
Chapter 1. Culture & Brand
→ A. 카레이싱이 자동차 산업 발전에 미친 영향
→ B. 자동차 기업의 럭셔리 브랜딩 방식과 미래 예측

Chapter 2. Product & Economics
→ C. 하이브리드 차량과 전기차의 경제성 비교

Chapter 3. Platform & Operation
→ D. 모빌리티 플랫폼 플레이어별 시간/비용/효율 구조

Chapter 4. AI & Data
→ E. 모빌리티 플랫폼 산업 내 AI의 활용

Chapter 5. Sustainability
→ F. 모빌리티 산업 내 친환경 트렌드
```

---

## Issue 00 Page Layout

### Section 01. Issue Cover

- **Visual**: 풀-뷰포트 또는 90vh editorial cover
- **Content**:
  - `Paired & Prepared` (small, top left)
  - `Issue 00` (small label)
  - `Mobility` (large display type — the issue theme)
  - `2026 · Vol. 1` (small meta)
  - Tagline: `Examining the paradigm shift in mobility — culture, economics, platforms, and the road ahead.`
- **Background**: 강한 타이포그래피 기반, 모빌리티 관련 추상 이미지 또는 모노크롬 처리
- **Framer note**: CMS (Issues) hero image field + text fields.

### Section 02. Editor's Note

- **Label**: `Editor's Note`
- **Content**: 400–600자. 이번 호를 왜 만들었는지, 모빌리티를 왜 다루는지, 어떤 방식으로 접근했는지.
- **Visual layout**: 넓은 single column (max-width 720px), serif font, generous line-height
- **Framer note**: CMS (Issues) rich text field.

### Section 03. Reading Guide

- **Label**: `In This Issue`
- **Content**: 5개 Chapter + 6개 Article을 시각적 지도로 표시
  - Chapter label / Article title / One-line thesis / Author / Reading time
- **Visual layout**: 수직 타임라인 또는 2-column index
- **Framer note**: CMS Collection List (Projects filtered by issue=00).

### Section 04–08. Article Sequence (Chapter별)

각 Chapter는 다음 구조:
- Chapter label (e.g., `01. Culture & Brand`)
- 해당 Chapter의 짧은 intro (2–3줄)
- Article card(s) — editorial treatment: large title + thesis + author + CTA

### Section 09. Data / Methodology Note

- **Label**: `How We Researched This Issue`
- **Content**: 이번 호 전반의 리서치 방법론 요약
- **Visual**: 4-column horizontal method steps

### Section 10. Contributor List

- **Label**: `Contributors`
- **Content**: 이번 호 기여자 이름 + role + affiliation
- **Framer note**: CMS People (filtered by issue=00 contribution).

### Section 11. Related Issues / Next Issue Teaser

- **Label**: `What's Next`
- **Content**: "Issue 01 — Coming [semester]" placeholder
- **Visual**: Simple typographic card

---

# PART 6. Article / Project Detail Template

### Section 01. Detail Hero

```
[Category Tag]          [Issue Label]
[Title — Large Serif]
[Subtitle]
[Thesis Statement — 1–2 lines, slightly larger than body]

By [Author Name]  ·  [Date]  ·  [Reading Time]  ·  [Tags]
[Related People links]
```

- **Visual**: White background + strong typography. No hero image required (optional).
- **Framer note**: CMS fields: category, issue (relation), title, subtitle, thesis, author (relation), date, reading_time, tags, related_people (relation).

### Section 02. Summary Block

```
┌─────────────────────────────────────────┐
│  Executive Summary (3 lines)            │
│  Key Question: ...                      │
│  Hypothesis: ...                        │
│  Method: ...                            │
│  Conclusion Preview: ...                │
└─────────────────────────────────────────┘
```

- **Visual**: Light grey background card, bordered or shadowed
- **Framer note**: CMS rich text fields (summary, key_question, hypothesis, method, conclusion_preview).

### Section 03. Sticky Table of Contents

- **Desktop**: 좌측 사이드 고정 (position: sticky, top: 80px). 현재 섹션 highlight.
- **Mobile**: 상단 접히는 accordion TOC
- **Framer note**: Custom TOC component with scroll tracking. Framer scroll events.

### Section 04. Body Layout

본문은 다음 블록 타입의 조합:

| Block Type | Description | Width |
|-----------|-------------|-------|
| Standard text | Regular body copy | 760px max |
| Wide section | Full-bleed editorial section | 100% |
| Data/chart block | Chart + caption + source | 760px or 100% |
| Quote block | Large pull quote | 100%, centered |
| Interview block | Q&A format, indented | 760px |
| Framework diagram | Custom diagram | 760px or 100% |
| Comparison table | Side-by-side comparison | 760px or 100% |
| Insight callout | Highlighted insight box | 760px, bordered left |

### Section 05. Methodology Section

```
Desk Research → Survey / Interview → Model / Simulation → Limitation
```

- 각 방법론 1–3줄 설명
- **Visual**: 4-column horizontal or 2×2 grid
- **Framer note**: CMS method field (relation to Methods collection).

### Section 06. Closing Insight

- **Label**: `So What?`
- **Content**:
  - Implication for Industry
  - Implication for Strategy / Design / Data
  - Open question for future research
- **Visual**: 배경 톤이 약간 다른 섹션 (light grey band)

### Section 07. Related Projects / Articles

- 같은 Issue 또는 같은 Category의 3개 카드
- **Framer note**: CMS Collection List (filtered by same issue or category, exclude current).

### Section 08. Author Profile

- 이름 / Role / Affiliation / Bio (2–3줄) / LinkedIn (optional)
- **Framer note**: CMS People relation.

### Section 09. Citation / Source Area

- 각주 또는 numbered reference list
- **Framer note**: CMS rich text field (sources).

---

# PART 7. People Page Layout

> **원칙**: 동아리 소개 페이지가 아니라 research lab directory. 신뢰와 네트워크가 목적.

### Section 01. Page Hero

- **Headline**: `People`
- **Sub-headline**: `The researchers, practitioners, and advisors behind Paired.`
- **Supporting copy**: `Paired is built on a network of current members, alumni, and academic advisors — connected by projects, not just affiliation.`

### Section 02. Current Members

| Field | Description |
|-------|-------------|
| Name | Full name |
| Role | Lead / Researcher / Designer / Analyst |
| Track / Interest | e.g., "Platform Strategy, AI" |
| Affiliation | University / Graduate program |
| Featured work | 최근 참여 프로젝트 1개 (relation) |
| Contact | Optional: LinkedIn / Email |

- **Layout**: 3-column card grid (desktop), 2-column (tablet), 1-column (mobile)
- **Card style**: Minimal — 이름 크게, role/track 작게, featured work link
- **Interaction**: Hover → project link 강조. Click → People detail page (optional, Phase 2)
- **Framer note**: CMS People (filter: role = current).

### Section 03. Alumni Network

- **Headline**: `Alumni Network`
- **Supporting copy**: `[X] alumni currently active in graduate programs, industry, and research — connected to Paired's ongoing archive.`
- **Layout**: 더 compact한 list 형태 — 이름 / current role / graduation year / 참여 Issue
- **Framer note**: CMS People (filter: role = alumni). List view, not card grid.

### Section 04. Advisors & Supervisors

- **Headline**: `Advisors & Supervisors`
- **Layout**: 2-column, larger individual blocks
- **Fields**: 이름 / Title / Affiliation / Research area / Connection to Paired (1줄)
- **Framer note**: CMS People (filter: role = advisor).

### People — CMS to Project Connection

- 각 People card의 "Featured work" 또는 "Projects" 필드 → Projects collection relation
- Issue 페이지 Contributor 섹션 → People relation
- 양방향 연결: People에서 Projects로 / Projects에서 People로

---

# PART 8. About Page Layout

> **원칙**: "우리는 누구인가"를 설명하되, 구조와 연결성이 시각적으로 드러나야 함.

### Section 01. About Paired

- **Headline**: `About Paired & Prepared`
- **Supporting copy** (2–3 문단):
  - Paired가 무엇인가 (리서치 아카이브 플랫폼)
  - 무엇을 하는가 (반기 발간, 프로젝트 수행, 아카이빙)
  - 어디로 가는가 (대학원, 연구실, 산학협력)

### Section 02. Why We Started

- **Headline**: `Why We Started`
- **Content**: 창립 배경, 문제의식, Paired가 존재해야 하는 이유
- **Visual**: Serif pull quote + body text. Editorial treatment.

### Section 03. From GRU

- **Headline**: `From GRU`
- **Content**: GRU 커뮤니티와의 관계, 어떻게 Paired가 파생되었는지
- **Visual**: Simple lineage diagram: `GRU Community → Paired`

### Section 04. Business × Design × Data

- **Headline**: `Our Three Axes`
- **Content**: 3개 discipline의 교차점 설명 (Main의 Research Identity보다 더 깊은 설명)
- **Visual**: Venn diagram 또는 3-axis diagram (Framer SVG)

### Section 05. Project / Issue / Archive Model

- **Headline**: `How We Work`
- **Content**: 프로젝트 선정 → 리서치 수행 → Issue 발간 → 아카이빙 사이클 설명
- **Visual**: Horizontal cycle diagram:
  ```
  Topic Selection → Research → Article Production → Issue Publication → Archive
  ```

### Section 06. Graduate School / Research Lab Linkage

- **Headline**: `Institutional Connections`
- **Content**: 대학원/연구실과의 연결 가능성, 현재 상태, 향후 방향
- **Visual**: Placeholder structure — 지금 당장 구체적 기관명 없이도 구조를 보여줌
- **Note**: 이 섹션은 초기에는 간략하게 유지. 나중에 별도 Research/Lab 페이지로 확장 가능.
- **Framer note**: 향후 Organizations collection 연결 가능하도록 CMS 구조 선제적 설계.

### Section 07. Collaboration / Contact

- **Headline**: `Work With Us`
- **Content**:
  - 협업 유형: Project collaboration / Interview / Advisory / Research partnership
  - Contact CTA: Email / Form link
- **Framer note**: Static CTA + Typeform or email link.

---

# PART 9. CMS / Data Structure Plan

## Collection 1: Issues

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| title | Text | Issue theme | "Mobility" |
| issue_number | Number | 00, 01, 02... | 0 |
| slug | Text | URL | "issue-00-mobility" |
| date | Date | 발행일 | 2026-05 |
| cover_image | Image | Issue cover | — |
| editor_note | Rich Text | 에디터 노트 | — |
| tagline | Text | 1줄 설명 | "Examining the paradigm shift..." |
| article_count | Number | 포함 아티클 수 | 6 |
| status | Enum | Published / Upcoming / Archive | Published |
| featured | Boolean | Main featured 여부 | true |

**Related**: Projects (one-to-many)

---

## Collection 2: Projects / Articles

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| title | Text | 아티클 제목 | "Racing Heritage and..." |
| slug | Text | URL | "racing-heritage" |
| subtitle | Text | 부제 | — |
| thesis | Text | 1줄 thesis | — |
| category | Enum | Research/Interview/Execution/Archive | Research |
| issue | Relation | → Issues | Issue 00 |
| author | Relation (multi) | → People | — |
| date | Date | 발행일 | — |
| reading_time | Number | 분 | 12 |
| tags | Multi-text | 태그 | ["EV", "Branding"] |
| status | Enum | Published/In Progress/Archive | Published |
| summary | Rich Text | Executive summary | — |
| key_question | Text | 핵심 질문 | — |
| hypothesis | Text | 가설 | — |
| method | Relation (multi) | → Methods | — |
| body | Rich Text | 본문 | — |
| sources | Rich Text | 참고문헌 | — |
| featured | Boolean | Main 노출 여부 | false |
| conclusion_preview | Text | 결론 미리보기 | — |

**Related**: Issues, People, Methods, Categories, Tags

---

## Collection 3: People

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | Text | 이름 | — |
| slug | Text | URL | — |
| role | Enum | Current/Alumni/Advisor | Current |
| position_title | Text | Lead / Researcher / Advisor | — |
| track | Text | 관심 분야 | "Platform Strategy, AI" |
| affiliation | Text | 소속 기관 | — |
| bio | Text | 2–3줄 소개 | — |
| featured_project | Relation | → Projects | — |
| linkedin | URL | optional | — |
| email | Email | optional | — |
| graduation_year | Number | Alumni용 | 2025 |
| issues_contributed | Relation (multi) | → Issues | — |

**Related**: Projects, Issues

---

## Collection 4: Methods

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | Text | 방법론 이름 | "Desk Research" |
| slug | Text | URL | — |
| description | Text | 설명 | — |
| icon | Image | 아이콘 | — |

**Related**: Projects

---

## Collection 5: Organizations / Partners

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | Text | 기관명 | "GRU" |
| type | Enum | Community/University/Lab/Partner | Community |
| description | Text | 관계 설명 | — |
| url | URL | 외부 링크 | — |
| logo | Image | 로고 | — |
| connection_type | Text | 어떤 방식으로 연결 | "Origin community" |

**Related**: People, Projects (Phase 2)

---

## Collection 연결 구조 요약

```
Issues ──────────────────→ Projects/Articles (one-to-many)
Projects/Articles ────────→ People (many-to-many)
Projects/Articles ────────→ Methods (many-to-many)
People ────────────────────→ Issues (many-to-many, contribution)
People ────────────────────→ Organizations (many-to-one, affiliation)
```

---

# PART 10. Article별 레이아웃 제안

## A. 카레이싱이 자동차 산업 발전에 미친 영향

- **Title**: `Racing as R&D: How Motorsport Built the Modern Automobile`
- **Subtitle**: `From lap times to showroom floors — the hidden transfer of technology, culture, and capital`
- **Thesis**: 카레이싱은 단순 스포츠가 아니라 자동차 산업의 기술·마케팅·브랜딩 발전을 이끈 핵심 R&D 플랫폼이었다.
- **Best layout**: Timeline-driven editorial. 연대기 섹션 + 사이드 데이터 callout.
- **Visual devices**: F1 시대별 기술 타임라인, 레이싱 → 양산차 기술 이전 다이어그램
- **Data block**: 레이싱 팀 예산 vs 양산차 R&D 예산 비교 차트
- **Interview/source block**: 자동차 공학자 또는 레이싱 역사가 인용
- **Key diagram**: "Track to Road" 기술 이전 플로우 다이어그램
- **Opening hook**: F1 영화 또는 대중적 레이싱 장면으로 시작, 역설 제시
- **Closing insight**: 앞으로 EV/SDV 시대에 레이싱의 역할이 어떻게 변화하는가

---

## B. 자동차 기업의 럭셔리 브랜딩 방식과 미래 예측

- **Title**: `The Luxury Pivot: How Automakers Are Redefining Premium in the SDV Era`
- **Subtitle**: `Genesis, Lexus, and the race to own the interior — when the cabin becomes the product`
- **Thesis**: SDV 전환으로 주행 성능의 차별화가 어려워지면서, 자동차 럭셔리의 중심은 차량 내부 경험과 소프트웨어 생태계로 이동하고 있다.
- **Best layout**: Brand comparison editorial. 브랜드별 column 비교 + 미래 예측 섹션.
- **Visual devices**: 브랜드 포지셔닝 매트릭스, 럭셔리 정의 변화 타임라인
- **Data block**: 브랜드별 프리미엄 가격대 vs 고객 인식 조사 데이터
- **Key diagram**: "Performance → Interior → Software" 럭셔리 축 이동 다이어그램
- **Opening hook**: "운전대를 잡지 않아도 되는 차가 더 비싸다" 역설
- **Closing insight**: SDV 시대 럭셔리 브랜딩의 새로운 battleground는 무엇인가

---

## C. 하이브리드 차량과 전기차의 경제성 비교

- **Title**: `The Real Math: Hybrid vs. EV Ownership Costs by Driver Profile`
- **Subtitle**: `Subsidies, depreciation, residual value, and fuel — a structured economic comparison`
- **Thesis**: "EV가 미래다"라는 담론과 달리, 실제 구매 경제성은 운전자 유형과 사용 패턴에 따라 하이브리드가 유리한 경우가 명확히 존재한다.
- **Best layout**: Data-heavy research article. 표와 차트 중심, 텍스트는 보조.
- **Visual devices**: TCO(Total Cost of Ownership) 비교 차트, 시나리오별 손익분기점 그래프
- **Data block**: 보조금 시나리오별 / 주행거리별 / 차종별 비교 테이블
- **Key diagram**: "Driver Profile × Vehicle Type → Economic Outcome" 매트릭스
- **Opening hook**: 실제 소비자 구매 결정 시나리오로 시작
- **Closing insight**: 어떤 운전자에게 무엇이 합리적인가 — 의사결정 프레임워크 제시

---

## D. 모빌리티 플랫폼 플레이어별 시간/비용/효율 구조

- **Title**: `The Three-Body Problem: Riders, Drivers, and Platforms in Mobility Markets`
- **Subtitle**: `Objective functions, revenue structures, and the hidden trade-offs in ride-hailing`
- **Thesis**: 카카오T, Uber 등 모빌리티 플랫폼은 탑승자·기사·플랫폼 세 주체의 목적함수가 충돌하는 구조 위에서 작동하며, 이 충돌이 수익 구조와 운영 방식의 차이를 만든다.
- **Best layout**: Structural analysis article. 3-actor 프레임 기반 섹션 구조.
- **Visual devices**: 3-actor 관계도, 플랫폼별 수수료/수익 구조 비교
- **Data block**: 플랫폼별 수익 모델 비교 테이블, 기사 실수령액 시뮬레이션
- **Key diagram**: "Platform Objective Function" 다이어그램
- **Opening hook**: 같은 경로, 다른 플랫폼 — 가격이 다른 이유
- **Closing insight**: MaaS 시대에 플랫폼 목적함수는 어떻게 재설계되어야 하는가

---

## E. 모빌리티 플랫폼 산업 내 AI의 활용

- **Title**: `Dispatch Intelligence: How AI Is Rewiring the Economics of Ride-Hailing`
- **Subtitle**: `Demand forecasting, dynamic pricing, and the retention-revenue trade-off`
- **Thesis**: AI 기반 배차 최적화와 다이내믹 프라이싱은 플랫폼 수익성을 높이지만, 동시에 운전자 이탈과 탑승자 WTP 한계라는 새로운 제약을 만들어낸다.
- **Best layout**: Technical research with business lens. 알고리즘 설명 + 비즈니스 임플리케이션.
- **Visual devices**: 수요 예측 모델 시각화, 다이내믹 프라이싱 메커니즘 다이어그램
- **Data block**: 서지 프라이싱 구간별 수요/공급 탄력성 차트
- **Key diagram**: "AI Input → Dispatch Output → Business Outcome" 플로우
- **Opening hook**: 비가 오는 날 밤 카카오T가 5배 요금을 제시하는 순간
- **Closing insight**: AI 최적화의 한계 — 알고리즘이 신뢰를 잃는 순간

---

## F. 모빌리티 산업 내 친환경 트렌드

- **Title**: `Green by Design or Green by Marketing? Sustainability in the Mobility Industry`
- **Subtitle**: `Materials, supply chains, and consumer perception — separating signal from noise`
- **Thesis**: 모빌리티 산업의 친환경 전환은 실제 기술/소재 혁신과 마케팅 내러티브 사이의 간극이 크며, 소비자 인식과 기업 전략은 종종 다른 방향을 가리킨다.
- **Best layout**: Investigative research article. 산업 구조 분석 + 소비자 인식 조사.
- **Visual devices**: 소재 공급망 다이어그램, 친환경 클레임 vs 실제 탄소발자국 비교
- **Data block**: 완성차 기업별 탄소 목표 vs 현재 배출량 비교 차트
- **Key diagram**: "Material → Manufacturing → Marketing → Consumer" 가치사슬 다이어그램
- **Opening hook**: "친환경 차"를 타도 탄소를 줄이지 못하는 아이러니
- **Closing insight**: 진짜 친환경 전환을 위해 산업, 정책, 소비자 각각에게 필요한 것

---

# PART 11. Reference Mapping

| Reference | What to Borrow | What NOT to Borrow | How to Adapt for Paired | Where It Applies |
|-----------|---------------|-------------------|------------------------|-----------------|
| CMU School of Design / IxD | 다학제 정체성 표현 방식, Program/Research/People 연결 구조, 신뢰감 있는 정보 위계 | 학교 홍보 특유의 행사 중심 구조, 입학 안내 CTA, 과도한 색상 사용 | Business × Design × Data 3축을 CMU처럼 명확히 구조화. 단, 학교가 아닌 프로젝트 아카이브로 포지셔닝. | Main Research Identity, About Page |
| Stanford Graduate Style | 큰 미션 문장, 넓은 여백, strong institutional tone, Discovery-Learning-Research-Community 묶음 방식 | 과도한 기부/입학 CTA, 대형 행사 피처링, 지나치게 밝고 화려한 컬러 | Paired의 Hero와 About에서 미션 문장을 Stanford처럼 크고 자신감 있게. 단, 더 compact하고 프로젝트 중심으로. | Main Hero, About Paired |
| Harvard GSD | Grid 기반 레이아웃, 디자인 담론 플랫폼 구조, article/feature/community 공존 방식, 아카이브 누적 로직 | 지나치게 학술적인 언어, 내부자용 행사 나열, 무거운 PDF 중심 콘텐츠 | Projects 페이지와 Issue 페이지에서 GSD처럼 editorial과 archive를 혼합. 단, 더 읽기 쉽고 접근 가능하게. | Projects Archive, Issue Page |
| Research Lab Archive | Research area 분류, Project cards, People cards, Publication/Archive logic, Advisor-Student-Alumni 구조 | 실험실 특유의 딱딱한 HTML 테이블, 논문 리스트 중심, 비주얼 부재 | People 페이지와 Projects 필터 구조에서 Lab Archive 로직 채택. 단, 시각적으로 훨씬 더 polish된 방식으로. | People Page, Projects Filter |
| Editorial Magazine / Design Research Archive | Issue cover, Article index, Editor's note, Interview, Project review, Reading flow, Related articles | 과도한 광고 공간, 가볍고 트렌디한 톤, 소셜 미디어 공유 중심 구조 | Issue 페이지와 Article Detail에서만 full editorial treatment 적용. 전체 사이트 톤에는 적용하지 않음. | Issue Page, Article Detail |

---

# PART 12. Visual System

## 1. Grid System
- **Desktop**: 12-column grid, gutter 24px, margin 80px, max-width 1280px
- **Tablet**: 8-column grid, gutter 20px, margin 40px
- **Mobile**: 4-column grid, gutter 16px, margin 20px
- **Article body**: max-width 760px (centered), side note column 200px (desktop only)

## 2. Typography Hierarchy

| Level | Usage | Font | Size (desktop) |
|-------|-------|------|----------------|
| Display | Issue theme, Hero headline | Serif (e.g., Playfair Display, Freight Display) | 72–96px |
| H1 | Page headline | Serif or Sans Bold | 48–56px |
| H2 | Section headline | Sans Bold | 32–40px |
| H3 | Sub-section, Card title | Sans SemiBold | 24–28px |
| Body | Article body | Sans Regular | 17–18px, line-height 1.7 |
| Caption | Tags, meta, labels | Sans Regular | 12–13px |
| Thesis | Article thesis statement | Serif Italic | 20–22px |

- **Serif font**: editorial sections (Issue, Article Detail, Editor's Note) 전용
- **Sans-serif font**: UI, navigation, labels, People, About 전반

## 3. Color Direction

| Token | Color | Usage |
|-------|-------|-------|
| Background | #F7F6F2 (Off-white) | 전체 기본 배경 |
| Surface | #FFFFFF | Card, modal 배경 |
| Text Primary | #1A1A1A | 주요 텍스트 |
| Text Secondary | #6B6B6B | Meta, caption |
| Accent | #2D3B8E (Deep Navy) 또는 #C8A96E (Muted Gold) | CTA, 강조 요소 |
| Category: Research | #3B5BDB (Deep Blue) | Research tag |
| Category: Interview | #2F9E44 (Forest Green) | Interview tag |
| Category: Execution | #E67700 (Amber) | Execution tag |
| Category: Archive | #868E96 (Grey) | Archive tag |
| Border | #E0DFDB | Divider, card border |

## 4. Card System

**Standard Project Card:**
```
┌────────────────────────────┐
│ [Category Tag] [Issue]     │
│                            │
│ Title (H3)                 │
│ One-line thesis            │
│                            │
│ Author · Reading time      │
│ [Status badge]             │
└────────────────────────────┘
```

**Featured Project Card (larger):**
- 카드 너비 2-column 또는 full-width
- 이미지 또는 visual element 포함 가능
- Thesis 2줄까지 표시

## 5. Tag System
- Category tag: filled color pill (Research/Interview/Execution/Archive)
- Issue tag: outlined pill (e.g., "Issue 00")
- Status badge: small dot + text (Published=green, In Progress=amber, Archive=grey)
- Methodology tag: text-only, understated

## 6. Issue Cover System
- Issue 커버는 강한 타이포그래피 기반
- 배경: 모노크롬 또는 추상 이미지 (사진 지양, 그래픽/텍스처 우선)
- Issue number + Theme이 primary hierarchy
- 이미지보다 타입이 먼저

## 7. Icon / Diagram Style
- Line-based minimal icons (no filled colorful icons)
- Diagrams: SVG 기반, 텍스트 레이블 중심
- Flow diagrams: 노드 + 화살표, 색상 최소화
- 수치 데이터는 별도 chart (Framer embed 또는 static image)

## 8. Image Treatment
- **Main / People / About**: 이미지 최소화. 있다면 흑백 처리 또는 duotone.
- **Projects (cards)**: 이미지 선택적. 없어도 타이포그래피로 충분.
- **Issue Cover**: 강한 editorial image 또는 typographic cover 허용.
- **Article Detail**: 데이터 시각화, 다이어그램, 차트 우선. 장식적 이미지 지양.

## 9. Motion / Interaction Principles
- **Global**: Fade-in on scroll (opacity 0→1, translateY 20px→0, duration 400ms ease-out)
- **Cards**: Hover lift (box-shadow increase + translateY -4px, duration 200ms)
- **Navigation**: Underline grow on hover
- **CTA buttons**: Background fill on hover
- **TOC**: Smooth scroll + active section highlight
- **No decorative animations**: 없음. 구조와 콘텐츠가 먼저.

## 10. Mobile Responsive Behavior
- Navigation: Hamburger menu → full-screen overlay nav
- Hero: 폰트 크기 50% 축소, 단일 컬럼
- Cards: 3-col → 2-col → 1-col
- TOC: Sticky sidebar → collapsible accordion at top
- Diagrams: 수평 → 수직 재배치
- Article body: max-width 해제, full-width, padding 20px

## 11. Institutional vs Editorial 분리 원칙

| 섹션 | Tone | Typography | Spacing | Image use |
|------|------|-----------|---------|-----------|
| Main Hero | Institutional | Large Sans Bold | Generous | Minimal |
| Main Sections | Institutional | Sans | Comfortable | None/minimal |
| People | Institutional | Sans | Comfortable | Photo optional |
| About | Institutional | Sans + some Serif | Generous | None |
| Projects List | Archive + light editorial | Sans | Medium | Optional |
| Issue Page | Full Editorial | Serif + Sans | Tighter | Cover image |
| Article Detail | Research + Editorial | Serif body, Sans UI | Research-standard | Data viz only |

---

# PART 13. Framer Component Plan

| Component | Purpose | Props / Fields | Used On | CMS-Connected | Notes |
|-----------|---------|---------------|---------|---------------|-------|
| GlobalHeader | 전체 상단 네비게이션 | Logo, Nav links (Main/Projects/People/About), Mobile menu | All pages | No | Sticky, hamburger on mobile |
| Footer | 전체 하단 | Logo, Nav, Copyright, Contact, Social | All pages | No | Simple, institutional |
| InstitutionalHero | Main 페이지 히어로 | Headline, Sub-headline, Supporting copy, CTA x2 | Main | No | Full-viewport, no image |
| ResearchIdentityBlock | 3축 설명 | 3 column content (label + description each) | Main | No | 3-col grid |
| StructureDiagram | GRU→Paired→Archive 흐름 | Nodes[], Arrows[], Labels[] | Main, About | No | SVG-based custom component |
| IssueHero | Issue 커버 | Issue number, Theme, Tagline, Cover image, Date | Issue pages | Issues CMS | Full editorial, magazine-like |
| IssueBrowser | 전체 Issue 브라우징 | Issue cards (number, theme, date, article count) | Projects | Issues CMS | Horizontal scroll or grid |
| ProjectCard | 표준 프로젝트 카드 | Category, Issue, Title, Thesis, Author, Reading time, Status | Projects, Main | Projects CMS | 3-col grid item |
| FeaturedProjectCard | 강조 프로젝트 카드 | + Image/visual, wider layout | Main, Projects | Projects CMS | 2-col or full-width |
| InterviewCard | 인터뷰 특화 카드 | Interviewee name, Role, Topic, Excerpt | Projects | Projects CMS | Distinct visual treatment |
| ProjectReviewCard | 프로젝트 리뷰 카드 | Project name, Outcome, Method tags, Status | Projects | Projects CMS | — |
| PeopleCard | 사람 카드 | Name, Role, Track, Affiliation, Featured project | People | People CMS | 3-col grid |
| CategoryFilter | 카테고리 필터 바 | Filter options[], Active state | Projects | No (filter logic) | Framer CMS filter or URL param |
| StickyTOC | 아티클 목차 | Sections[], Active section tracking | Article Detail | No | Sticky desktop, collapsible mobile |
| DataCallout | 데이터 강조 블록 | Value, Label, Source, Context | Article Detail | No | Bordered, within article body |
| InsightCallout | 인사이트 강조 | Icon (optional), Insight text | Article Detail | No | Left-bordered colored block |
| QuoteBlock | 풀 너비 인용 | Quote text, Attribution | Article Detail | No | Large serif, centered |
| MethodologyBlock | 방법론 설명 | Method steps (4-step) | Article Detail, Projects | No | Horizontal step flow |
| ContributorCard | 기고자 카드 | Name, Role, Bio, Photo (optional), LinkedIn | Issue, Article Detail | People CMS | Compact card |
| RelatedProjects | 관련 프로젝트 | Projects[] (3 items), Headline | Article Detail | Projects CMS | 3-col mini cards |
| ContactCTA | 협업/문의 CTA | Headline, Supporting, CTA options[] | Main, Projects, About | No | Dark or accent background section |
| ArticleSummaryBlock | 아티클 요약 박스 | Summary, Key question, Hypothesis, Method, Conclusion | Article Detail | Projects CMS | Bordered card, top of article |
| EditorNote | 에디터 노트 | Rich text content | Issue page | Issues CMS | Wide serif column |
| ReadingGuide | 이슈 목차/지도 | Articles list (title, author, reading time) | Issue page | Projects CMS (filtered by issue) | Visual index |

---

# PART 14. 페이지별 텍스트 기반 와이어프레임

---

## [MAIN PAGE]

```
┌──────────────────────────────────────────────────┐
│ GlobalHeader                                      │
│ Paired & Prepared    Main | Projects | People | About │
└──────────────────────────────────────────────────┘

Section 01. Institutional Hero
┌──────────────────────────────────────────────────┐
│                                                  │
│  Paired & Prepared                               │
│                                                  │
│  A project-based research archive at the         │
│  intersection of Business, Design, and Data.     │
│                                                  │
│  We conduct, structure, and publish              │
│  cross-disciplinary projects —                   │
│  semi-annually, cumulatively,                    │
│  and with institutional intent.                  │
│                                                  │
│  [Explore Projects]    [About Paired]            │
│                                                  │
│                    Issue 00: Mobility — Now Live →│
└──────────────────────────────────────────────────┘
- Interaction: Fade-in on load
- Notes: 100vh, no image, strong typographic hierarchy

Section 02. Research Identity Block
┌──────────────────────────────────────────────────┐
│ Where we operate                                 │
│ ─────────────────────────────────────────────── │
│ Business          Design          Data & Eng.    │
│ Strategy,         UX, Systems     Analytics,     │
│ Market analysis,  design,         modeling,      │
│ Org structure     Brand &         AI research    │
│                   Communication                  │
│                                                  │
│ "Not a student club. Not a consulting firm.      │
│  A structured project archive."                  │
└──────────────────────────────────────────────────┘
- Notes: 3-col equal grid, divider lines between cols

Section 03. Current Featured Issue
┌──────────────────────────────────────────────────┐
│ Latest Issue                                     │
│                                                  │
│ ┌─────────────┐  Issue 00: Mobility              │
│ │             │  2026 · Vol. 1                   │
│ │  MOBILITY   │                                  │
│ │   [Cover]   │  Examining the paradigm shift    │
│ │             │  in mobility...                  │
│ └─────────────┘                                  │
│                  ▸ Racing Heritage and Industry  │
│                  ▸ Luxury Branding in SDV Era    │
│                  ▸ EV vs Hybrid Economics        │
│                  ▸ + 3 more articles             │
│                                                  │
│                  [Read Issue 00 →]               │
└──────────────────────────────────────────────────┘
- Left: Issue cover (CMS image)
- Right: Meta + article list + CTA
- Notes: 2-col split layout

Section 04. Featured Projects
┌──────────────────────────────────────────────────┐
│ From the Archive                                 │
│ Selected Projects                                │
│                                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │ Research │ │Interview │ │Execution │          │
│ │ Issue 00 │ │ Issue 00 │ │ Issue 00 │          │
│ │          │ │          │ │          │          │
│ │ Title A  │ │ Title B  │ │ Title C  │          │
│ │ Thesis   │ │ Thesis   │ │ Thesis   │          │
│ │ Author   │ │ Author   │ │ Author   │          │
│ │ 12 min   │ │ 8 min    │ │ 10 min   │          │
│ └──────────┘ └──────────┘ └──────────┘          │
│                                                  │
│                    [Browse All Projects →]       │
└──────────────────────────────────────────────────┘
- Notes: CMS ProjectCard x3, featured=true filter

Section 05. People Preview
┌──────────────────────────────────────────────────┐
│ The Team                                         │
│ Current Members · Alumni · Advisors              │
│ ─────────────────────────────────────────────── │
│ Current: Name A, Name B, Name C, Name D, Name E  │
│ Alumni: X alumni in graduate programs & industry │
│ Advisors: Prof. X (Univ.), Prof. Y (Univ.)      │
│                                                  │
│                         [Meet Everyone →]        │
└──────────────────────────────────────────────────┘
- Notes: 3-row horizontal, CMS People filtered by role

Section 06. Structure Diagram
┌──────────────────────────────────────────────────┐
│ How Paired Works                                 │
│ From community to archive to institution         │
│                                                  │
│  GRU        Paired    Projects    Archive    Graduate/
│  Community  ──────→  & Issues  ──────────→  Research
│     ↓                                        Lab/Collab
│  Origin     ──────→  Research   ──────────→  Institutional
│  community           Output                  Linkage
└──────────────────────────────────────────────────┘
- Notes: Static SVG component, custom-built

Section 07. Collaboration CTA
┌──────────────────────────────────────────────────┐
│ [Dark background section]                        │
│                                                  │
│ Work with Paired                                 │
│ We welcome collaboration, project inquiry,       │
│ interview requests, and research partnerships.   │
│                                                  │
│ [Collaborate]  [Submit Project Idea]  [Contact]  │
└──────────────────────────────────────────────────┘
```

---

## [PROJECTS PAGE]

```
Section 01. Archive Hero
┌──────────────────────────────────────────────────┐
│ Projects                                         │
│ A cumulative archive of research,                │
│ analysis, and structured inquiry.                │
│                                                  │
│ 1 Issue  ·  6 Articles  ·  Growing              │
└──────────────────────────────────────────────────┘

Section 02. Latest Issue Feature
┌──────────────────────────────────────────────────┐
│ Current Issue                                    │
│ ┌────────────────────────────────────────────┐   │
│ │  Issue 00: Mobility                        │   │
│ │  6 articles · Published May 2026           │   │
│ │  [Open Issue 00 →]                         │   │
│ └────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘

Section 03. Issue Browser
┌──────────────────────────────────────────────────┐
│ All Issues  ──────────────────────────────────→  │
│ ┌──────┐ ┌──────┐ ┌──────┐                       │
│ │ 00   │ │ 01   │ │ 02   │                       │
│ │Mobil.│ │TBD   │ │TBD   │                       │
│ │2026  │ │2026  │ │2027  │                       │
│ └──────┘ └──────┘ └──────┘                       │
└──────────────────────────────────────────────────┘
- Notes: Horizontal scroll, CMS Issues collection

Section 04. Category Filter
┌──────────────────────────────────────────────────┐
│ [All] [Issues] [Research] [Interview] [Execution] [Archive] │
└──────────────────────────────────────────────────┘

Section 05. Project Cards Grid
┌──────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │[Research]│ │[Intervw] │ │[Execute] │          │
│ │Issue 00  │ │Issue 00  │ │Issue 00  │          │
│ │ Title    │ │ Title    │ │ Title    │          │
│ │ Thesis   │ │ Thesis   │ │ Thesis   │          │
│ │ Author · │ │ Author · │ │ Author · │          │
│ │ 12 min   │ │ 8 min    │ │ 10 min   │          │
│ │●Published│ │●Published│ │●Published│          │
│ └──────────┘ └──────────┘ └──────────┘          │
│ (repeat for all articles)                        │
└──────────────────────────────────────────────────┘

Section 06. Methodology Block
┌──────────────────────────────────────────────────┐
│ Our Approach                                     │
│                                                  │
│ Desk Research → Interview → Modeling → Output    │
└──────────────────────────────────────────────────┘

Section 07. Legacy Archive Preview
┌──────────────────────────────────────────────────┐
│ Archive                                          │
│ Past Issues & Projects                           │
│ (Empty placeholder — grows over time)            │
└──────────────────────────────────────────────────┘

Section 08. Collaboration CTA
[Same as Main Section 07]
```

---

## [ISSUE 00: MOBILITY PAGE]

```
Section 01. Issue Cover
┌──────────────────────────────────────────────────┐
│                                                  │
│  Paired & Prepared                               │
│  Issue 00                                        │
│                                                  │
│  MOBILITY                                        │
│                                                  │
│  Examining the paradigm shift in mobility —      │
│  culture, economics, platforms, and the          │
│  road ahead.                                     │
│                                                  │
│  2026 · Vol. 1                    [↓ Read]       │
└──────────────────────────────────────────────────┘
- Notes: 90–100vh, strong editorial typographic cover

Section 02. Editor's Note
┌──────────────────────────────────────────────────┐
│ Editor's Note                                    │
│                                                  │
│ [Serif body text, 400–600 words, max-width 720px]│
└──────────────────────────────────────────────────┘

Section 03. Reading Guide
┌──────────────────────────────────────────────────┐
│ In This Issue                                    │
│                                                  │
│ 01. Culture & Brand                              │
│    A. Racing Heritage → [Author] · 12 min        │
│    B. Luxury Branding → [Author] · 10 min        │
│                                                  │
│ 02. Product & Economics                          │
│    C. EV vs Hybrid → [Author] · 14 min           │
│                                                  │
│ 03. Platform & Operation                         │
│    D. Platform Players → [Author] · 11 min       │
│                                                  │
│ 04. AI & Data                                    │
│    E. AI in Mobility → [Author] · 13 min         │
│                                                  │
│ 05. Sustainability                               │
│    F. Green Trends → [Author] · 10 min           │
└──────────────────────────────────────────────────┘

Section 04–08. Article Sequence
┌──────────────────────────────────────────────────┐
│ 01. Culture & Brand                              │
│ ─────────────────                               │
│ [2-line chapter intro]                           │
│                                                  │
│ ┌────────────────────────────────────────────┐   │
│ │ Racing as R&D                              │   │
│ │ From lap times to showroom floors...       │   │
│ │ By [Author] · Issue 00 · 12 min            │   │
│ │                             [Read →]       │   │
│ └────────────────────────────────────────────┘   │
│                                                  │
│ ┌────────────────────────────────────────────┐   │
│ │ The Luxury Pivot                           │   │
│ │ How automakers are redefining premium...   │   │
│ │ By [Author] · Issue 00 · 10 min            │   │
│ │                             [Read →]       │   │
│ └────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
[Repeat for each Chapter]

Section 09. Methodology Note
┌──────────────────────────────────────────────────┐
│ How We Researched This Issue                     │
│ Desk Research → Interviews → Modeling → Output   │
└──────────────────────────────────────────────────┘

Section 10. Contributors
┌──────────────────────────────────────────────────┐
│ Contributors                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐                │
│ │Name A  │ │Name B  │ │Name C  │                │
│ │Lead    │ │Writer  │ │Writer  │                │
│ └────────┘ └────────┘ └────────┘                │
└──────────────────────────────────────────────────┘

Section 11. Next Issue
┌──────────────────────────────────────────────────┐
│ What's Next                                      │
│ Issue 01 — Coming [Fall 2026]                    │
│ Theme TBD                                        │
└──────────────────────────────────────────────────┘
```

---

## [ARTICLE / PROJECT DETAIL PAGE]

```
Section 01. Detail Hero
┌──────────────────────────────────────────────────┐
│ [Research]                        [Issue 00]     │
│                                                  │
│ Racing as R&D:                                   │
│ How Motorsport Built the Modern Automobile       │
│                                                  │
│ From lap times to showroom floors — the hidden   │
│ transfer of technology, culture, and capital     │
│                                                  │
│ Thesis: 카레이싱은 자동차 산업의 핵심 R&D        │
│ 플랫폼이었다.                                    │
│                                                  │
│ By [Author]  ·  May 2026  ·  12 min  ·  #Racing │
└──────────────────────────────────────────────────┘

Section 02. Summary Block
┌──────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────┐    │
│ │ Executive Summary                         │    │
│ │ [3-line summary]                          │    │
│ │                                           │    │
│ │ Key Question: ...                         │    │
│ │ Hypothesis: ...                           │    │
│ │ Method: Desk research + industry analysis │    │
│ │ Conclusion: ...                           │    │
│ └───────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘

Article Body (Desktop — 2-column layout):
┌────────────┬──────────────────────────────────────┐
│ TOC        │ Body Content (max 760px)             │
│ (sticky)   │                                      │
│            │ [Standard text block]                │
│ 1. Intro   │                                      │
│ 2. Racing  │ [Data/Chart block — full width]      │
│    as R&D  │                                      │
│ 3. Tech    │ [Quote block]                        │
│    Transfer│  "Racing is the world's greatest     │
│ 4. Brand   │   laboratory."                       │
│ 5. Future  │                                      │
│ 6. Insight │ [Framework diagram]                  │
│            │                                      │
│            │ [Insight callout]                    │
│            │ ▌ Key finding: ...                   │
└────────────┴──────────────────────────────────────┘

Section 05. Methodology
┌──────────────────────────────────────────────────┐
│ Desk Research  Interview  Modeling  Limitation   │
│ [1–3 lines]   [1–3 lines] [...]      [...]       │
└──────────────────────────────────────────────────┘

Section 06. Closing Insight
┌──────────────────────────────────────────────────┐
│ [Light grey background]                          │
│ So What?                                         │
│ Implication for Industry: ...                    │
│ Implication for Strategy/Design/Data: ...        │
│ Open question: ...                               │
└──────────────────────────────────────────────────┘

Section 07. Related Projects
┌──────────────────────────────────────────────────┐
│ Related in Issue 00                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │ Card     │ │ Card     │ │ Card     │          │
│ └──────────┘ └──────────┘ └──────────┘          │
└──────────────────────────────────────────────────┘

Section 08. Author + Section 09. Sources
┌──────────────────────────────────────────────────┐
│ [Author Name]  [Role]  [Affiliation]             │
│ [Bio 2–3줄]                                      │
│ ─────────────────────────────────────────────── │
│ Sources & Citations                              │
│ [1] ...                                          │
│ [2] ...                                          │
└──────────────────────────────────────────────────┘
```

---

## [PEOPLE PAGE]

```
Section 01. Page Hero
┌──────────────────────────────────────────────────┐
│ People                                           │
│ The researchers, practitioners, and advisors     │
│ behind Paired.                                   │
└──────────────────────────────────────────────────┘

Section 02. Current Members
┌──────────────────────────────────────────────────┐
│ Current Members                                  │
│ ─────────────────────────────────────────────── │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │ Name A   │ │ Name B   │ │ Name C   │          │
│ │ Lead     │ │ Researcher│ │ Designer │          │
│ │ Strategy │ │ Platform  │ │ UX/Brand │          │
│ │ Univ. X  │ │ Univ. Y  │ │ Univ. Z  │          │
│ │ →Project │ │ →Project │ │ →Project │          │
│ └──────────┘ └──────────┘ └──────────┘          │
│ (repeat, 3-col grid)                             │
└──────────────────────────────────────────────────┘

Section 03. Alumni Network
┌──────────────────────────────────────────────────┐
│ Alumni Network                                   │
│ X alumni across graduate programs and industry   │
│ ─────────────────────────────────────────────── │
│ Name A  · Current: [Role @ Org]  · Issue 00     │
│ Name B  · Current: [Graduate Student, Univ.]    │
│ Name C  · Current: [Industry]                   │
│ (list view, compact)                             │
└──────────────────────────────────────────────────┘

Section 04. Advisors & Supervisors
┌──────────────────────────────────────────────────┐
│ Advisors & Supervisors                           │
│ ─────────────────────────────────────────────── │
│ ┌─────────────────────┐ ┌─────────────────────┐ │
│ │ Prof. Name X        │ │ Prof. Name Y        │ │
│ │ Professor, Dept.    │ │ Researcher, Lab     │ │
│ │ Univ. A             │ │ Institute B         │ │
│ │ Research area: ...  │ │ Research area: ...  │ │
│ │ Connection: Advisor │ │ Connection: Mentor  │ │
│ └─────────────────────┘ └─────────────────────┘ │
└──────────────────────────────────────────────────┘
```

---

## [ABOUT PAGE]

```
Section 01. About Paired
┌──────────────────────────────────────────────────┐
│ About Paired & Prepared                          │
│                                                  │
│ [2–3 paragraphs: What / What we do / Where we go]│
└──────────────────────────────────────────────────┘

Section 02. Why We Started
┌──────────────────────────────────────────────────┐
│ Why We Started                                   │
│                                                  │
│ "Pull quote from founding context"               │
│                                                  │
│ [Body text explaining origin and motivation]     │
└──────────────────────────────────────────────────┘

Section 03. From GRU
┌──────────────────────────────────────────────────┐
│ From GRU                                         │
│                                                  │
│ GRU Community ──────→ Paired                    │
│                                                  │
│ [Explanation of relationship]                    │
└──────────────────────────────────────────────────┘

Section 04. Business × Design × Data
┌──────────────────────────────────────────────────┐
│ Our Three Axes                                   │
│                                                  │
│ [Venn diagram: Business / Design / Data]         │
│ Paired = intersection                            │
│                                                  │
│ [Deeper explanation than Main page]              │
└──────────────────────────────────────────────────┘

Section 05. Project / Issue / Archive Model
┌──────────────────────────────────────────────────┐
│ How We Work                                      │
│                                                  │
│ Topic → Research → Production → Issue → Archive  │
│ Selection                                        │
│                                                  │
│ [1–2 lines per step]                             │
└──────────────────────────────────────────────────┘

Section 06. Graduate School / Research Lab Linkage
┌──────────────────────────────────────────────────┐
│ Institutional Connections                        │
│                                                  │
│ [Placeholder structure]                          │
│ Connected to graduate programs and research labs │
│ through our alumni network and advisors.         │
│                                                  │
│ GRU → Paired → Alumni → Graduate / Research Lab  │
│                                                  │
│ [Expandable in Phase 2 as partnerships grow]     │
└──────────────────────────────────────────────────┘

Section 07. Collaboration / Contact
┌──────────────────────────────────────────────────┐
│ [Dark section]                                   │
│ Work With Us                                     │
│                                                  │
│ Project collaboration · Interview request        │
│ Advisory · Research partnership                  │
│                                                  │
│ [Get in Touch →]  [paired@email.com]             │
└──────────────────────────────────────────────────┘
```

---

# 다음 단계: Framer 구현을 위한 추가 질문 5가지

1. **CMS 실제 구현 방식**: Framer CMS만 사용할 것인가, 아니면 Notion/Airtable 등 외부 CMS와 연동을 고려하는가? 아티클 본문 길이와 서식 수준에 따라 Framer rich text의 한계를 넘을 수 있으므로, 초기부터 방향을 정해야 한다.

2. **도메인과 URL 구조**: URL은 어떻게 설계할 것인가? (예: `paired.kr/projects/issue-00/racing-rd` vs `paired.kr/issue/00/articles/racing`) URL 구조는 CMS slug 설계와 직결되므로 Framer 세팅 전에 확정해야 한다.

3. **Issue 커버 비주얼 방향**: Issue 00: Mobility의 커버를 타이포그래피 기반으로 만들 것인가, 실제 이미지/그래픽을 사용할 것인가? 그래픽 리소스 확보 여부에 따라 커버 시스템 설계가 달라진다.

4. **아티클 본문 편집 방식**: 아티클 본문은 누가 어떻게 작성/업로드하는가? Framer CMS에서 직접 rich text 편집을 할 것인가, 아니면 외부에서 작성 후 HTML/Markdown으로 임포트할 것인가? 이에 따라 본문 레이아웃의 블록 시스템 구성이 달라진다.

5. **People 사진/프로필 이미지 방침**: People 페이지의 각 카드에 사진을 포함할 것인가? 사진이 있을 경우 스타일 통일(흑백 처리, 동일 비율 크롭 등)을 어떻게 할 것인가? 사진 없이 이니셜/아이콘으로 대체할 것인가? 이 결정이 People 카드 컴포넌트 설계에 영향을 준다.
