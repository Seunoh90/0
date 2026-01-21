import { Character, PalaceInfo } from './types';

export const LOGO_URL = "https://i.postimg.cc/P5TKpsvC/gung(0)-processed.png";
export const MAP_URL = "https://i.postimg.cc/HLPthrZp/gung(3)-processed.png";

export const PALACE_LOCATIONS: PalaceInfo[] = [
  { name: "태화전 (太和殿)", desc: "황제(User)의 거처." },
  { name: "청운당 (靑雲堂)", desc: "백류하의 처소. 태화전과 가장 가까우며 격식 있고 웅장함. 붉은색 포인트와 흑단나무 가구." },
  { name: "수정각 (水精閣)", desc: "하연의 처소. 인공 호수 중앙의 누각. 사방이 물이라 몽환적이며 하얀 실크와 간접 조명으로 장식됨." },
  { name: "무영재 (無影齋)", desc: "한무명의 처소. 깊숙한 대나무 숲 근처. 장식 없이 삭막할 정도로 단정하며 마당에 수련 도구가 있음." },
  { name: "희락원 (喜樂院)", desc: "서백하의 처소. 소주방과 가까운 남쪽. 현대적인 팬시 용품과 게임기, 쿠션이 가득한 개방적 구조." },
];

export const CHARACTERS: Character[] = [
  {
    id: 'baek',
    name: '백류하',
    age: 28,
    height: '188cm',
    shortDesc: '첫번째 후궁. 명문가 장손. 화려한 미인.',
    themeColor: 'bg-red-900',
    images: [
      "https://i.postimg.cc/x155LxLR/gung(11)-processed.png",
      "https://i.postimg.cc/1zYKj8Cn/gung(10)-processed.png",
      "https://i.postimg.cc/8Cnb07KW/gung(5)-processed.png",
      "https://i.postimg.cc/xdFP4Xxm/gung(9)-processed.png",
      "https://i.postimg.cc/x155LxLZ/gung(6)-processed.png",
    ],
    description: [
      "긴 흑발, 청록색 눈의 화려한 미인형.",
      "붉은 계열의 옷을 즐겨 입음.",
      "힘 있는 가문인 백씨 집안의 장손. 어릴 때부터 황제의 남편감으로 키워짐.",
      "무예, 예술, 학문, 정치력, 가사 등 모든 분야에 능함.",
      "눈치가 빠르고 총명하며 영리함."
    ],
    roomName: "청운당 (靑雲堂)",
    roomDesc: "황제의 침전과 가장 가까운 곳."
  },
  {
    id: 'ha',
    name: '하연',
    age: 26,
    height: '187cm',
    shortDesc: '두번째 후궁. 천민 출신. 긴 은발과 다정함.',
    themeColor: 'bg-slate-300',
    images: [
      "https://i.postimg.cc/YSS3R63v/gung(19)-processed.png",
      "https://i.postimg.cc/d00B62BF/gung(21)-processed.png",
      "https://i.postimg.cc/LssTDtTX/gung(20)-processed.png",
      "https://i.postimg.cc/s20JNM6s/gung(18)-processed.png",
      "https://i.postimg.cc/W1880W0H/gung(4)-processed.png",
    ],
    description: [
      "긴 은발에 흰색 눈. 성이 없는 천민 출신.",
      "과거 노비였으나 태도가 아름답고 귀해 후궁이 됨.",
      "자존감이 매우 낮음.",
      "교육을 받지 못해 특기가 없는 것을 아쉬워함.",
      "성품이 곱고 착하며 다정함."
    ],
    roomName: "수정각 (水精閣)",
    roomDesc: "연못 위 고립된 누각. 몽환적 분위기."
  },
  {
    id: 'han',
    name: '한무명',
    age: 24,
    height: '195cm',
    shortDesc: '세번째 후궁. 흑발흑안. 자존감 낮은 무인.',
    themeColor: 'bg-gray-900',
    images: [
      "https://i.postimg.cc/jjkhFDg5/gung(14)-processed.png",
      "https://i.postimg.cc/N0PxzKJj/gung(16)-processed.png",
      "https://i.postimg.cc/mr6S5PXc/gung(13)-processed.png",
      "https://i.postimg.cc/hG305Xyh/gung(15)-processed.png",
      "https://i.postimg.cc/FHpp0W0P/gung(12)-processed.png",
    ],
    description: [
      "단정한 검은 단발, 흑안. 이름 무명(無明)은 빛이 없다는 뜻.",
      "좋은 가문이나 천대받으며 자람.",
      "눈에 띄지 않으려 검은 옷을 주로 입음.",
      "꽃을 좋아하며 무예에 재능이 있음.",
      "우아한 태도는 가문의 강압적 교육의 흔적."
    ],
    roomName: "무영재 (無影齋)",
    roomDesc: "대나무 숲 근처. 장식 없는 공간."
  },
  {
    id: 'seo',
    name: '서백하',
    age: 20,
    height: '178cm',
    shortDesc: '네번째 후궁. 최연소. 애교 많고 활발함.',
    themeColor: 'bg-indigo-600',
    images: [
      "https://i.postimg.cc/cL0TgytH/gung(8)-processed.png",
      "https://i.postimg.cc/Vkm4rQ0C/gung(1)-processed.png",
      "https://i.postimg.cc/13sMnhVF/gung(2)-processed.png",
      "https://i.postimg.cc/mgjj7X7y/gung(7)-processed.png",
      "https://i.postimg.cc/0ynn7W7V/gung(17)-processed.png",
    ],
    description: [
      "복슬거리는 짧은 은발, 깊은 남색 눈.",
      "2년 전 황제가 거두어 성년이 된 후 후궁이 됨.",
      "애교가 많고 싹싹하며 행동이 빠름.",
      "귀여운 질투심 소유. 남자로 보이고 싶어 함."
    ],
    roomName: "희락원 (喜樂院)",
    roomDesc: "현대적 팬시와 게임기가 가득한 곳."
  },
];