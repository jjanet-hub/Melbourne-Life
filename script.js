// ========== Quiz Data Structure ==========
const quizData = [
  {
    category: '日常作息',
    question: '你認為理想的起床時間是？',
    options: [
      { text: '早上 5-6 點，早起早睡', value: 'early' },
      { text: '早上 7-8 點，規律作息', value: 'regular' },
      { text: '早上 9-10 點，偏晚起', value: 'late' },
      { text: '順其自然，沒有固定時間', value: 'flexible' },
    ],
  },
  {
    category: '日常作息',
    question: '下班/下課後，你最想做什麼？',
    options: [
      { text: '運動健身，保持活力', value: 'exercise' },
      { text: '和朋友聚會，享受社交', value: 'social' },
      { text: '在家放鬆，看劇或玩遊戲', value: 'relax' },
      { text: '安靜獨處，思考和充電', value: 'alone' },
    ],
  },
  {
    category: '家務分工',
    question: '你對家務分工的想法是？',
    options: [
      { text: '各司其職，各自責任', value: 'division' },
      { text: '輪流負責，公平分配', value: 'rotation' },
      { text: '誰有空誰做，靈活安排', value: 'flexible' },
      { text: '應該有一個人主要負責', value: 'primary' },
    ],
  },
  {
    category: '家務分工',
    question: '你能接受的家裡整潔程度是？',
    options: [
      { text: '非常整潔，每天都要打掃', value: 'very_tidy' },
      { text: '保持乾淨，定期打掃', value: 'tidy' },
      { text: '基本衛生，可以接受有點凌亂', value: 'casual' },
      { text: '很隨意，只要不太髒就行', value: 'very_casual' },
    ],
  },
  {
    category: '溝通風格',
    question: '當有意見不合時，你傾向如何溝通？',
    options: [
      { text: '立即討論，馬上解決', value: 'immediate' },
      { text: '冷靜後再談，給彼此空間', value: 'cool_down' },
      { text: '直接說出想法，坦誠相見', value: 'direct' },
      { text: '溫和表達，避免衝突', value: 'gentle' },
    ],
  },
  {
    category: '溝通風格',
    question: '你更傾向用什麼方式表達感情？',
    options: [
      { text: '言語表達，經常說出愛與感謝', value: 'words' },
      { text: '行動表現，用做家務、做飯表達', value: 'actions' },
      { text: '陪伴在側，一起度過高質量時間', value: 'quality_time' },
      { text: '禮物驚喜，用特別的方式示愛', value: 'gifts' },
    ],
  },
  {
    category: '財務管理',
    question: '你傾向的財務管理方式是？',
    options: [
      { text: '各管各的，保持獨立', value: 'separate' },
      { text: '共同管理，完全透明', value: 'joint' },
      { text: '各自存錢，共同支出AA', value: 'aa' },
      { text: '一個人管理，另一方配合', value: 'one_manages' },
    ],
  },
  {
    category: '財務管理',
    question: '關於大筆消費，你的態度是？',
    options: [
      { text: '提前討論，必須兩人同意', value: 'discuss' },
      { text: '自己決定，只需告知', value: 'independent' },
      { text: '無所謂，對方喜歡就好', value: 'flexible' },
      { text: '越便宜越好，能省則省', value: 'frugal' },
    ],
  },
  {
    category: '社交活動',
    question: '你多久會和朋友聚一次？',
    options: [
      { text: '經常，每週多次', value: 'frequent' },
      { text: '定期，每月幾次', value: 'regular' },
      { text: '偶爾，一個月一次', value: 'occasional' },
      { text: '很少，幾個月見一次', value: 'rarely' },
    ],
  },
  {
    category: '社交活動',
    question: '你希望伴侶如何看待你與朋友的互動？',
    options: [
      { text: '支持並經常一起參加', value: 'join' },
      { text: '支持，但更喜歡兩人時光', value: 'support' },
      { text: '完全尊重，各自獨立', value: 'independent' },
      { text: '希望我們多在一起', value: 'prioritize' },
    ],
  },
  {
    category: '生活習慣',
    question: '你在家裡通常什麼時間入睡？',
    options: [
      { text: '晚上 9-10 點', value: 'early_sleep' },
      { text: '晚上 10-11 點', value: 'regular_sleep' },
      { text: '晚上 11 點-12 點', value: 'late_sleep' },
      { text: '午夜之後', value: 'very_late_sleep' },
    ],
  },
  {
    category: '生活習慣',
    question: '你對居家環境的溫度偏好是？',
    options: [
      { text: '偏冷，喜歡開冷氣', value: 'cold' },
      { text: '溫和舒適，中等溫度', value: 'moderate' },
      { text: '偏暖，盡量少開冷氣', value: 'warm' },
      { text: '無所謂，聽對方的', value: 'flexible' },
    ],
  },
];

// ========== Discussion Topics Database ==========
const discussionTopicsDb = {
  '日常作息': [
    '我們可以一起制定一個互相配合的作息時間表',
    '討論早起與晚睡的人如何協調生活節奏',
    '規劃一起運動或放鬆的時間',
  ],
  '家務分工': [
    '列出所有家務，看看各自的擅長和偏好',
    '建立一個公平的家務輪轉表',
    '討論對整潔程度的期望和容忍度',
  ],
  '溝通風格': [
    '建立溝通的「暫停」機制，讓彼此都有思考時間',
    '練習用「我」開頭表達感受而非指責',
    '定期舉辦「親密時光」來表達對彼此的感謝',
  ],
  '財務管理': [
    '一起制定家庭預算和儲蓄目標',
    '定義什麼是「大筆消費」需要溝通',
    '討論各自對金錢的價值觀和習慣',
  ],
  '社交活動': [
    '定期安排和朋友見面的時間',
    '建立「兩人時光」和「個人時間」的平衡',
    '邀請彼此的朋友一起參加活動',
  ],
  '生活習慣': [
    '找到舒適的溫度範圍（可能需要分區控制）',
    '尊重彼此不同的作息習慣',
    '建立睡前的放鬆儀式',
  ],
};

// ========== State Management ==========
let currentQuestion = 0;
let answers = {};
let selectedAnswerValue = null;
let partnerAnswers = {};
let isCompareMode = false;

// ========== DOM Elements ==========
const startPage = document.getElementById('startPage');
const quizPage = document.getElementById('quizPage');
const completePage = document.getElementById('completePage');
const comparePage = document.getElementById('comparePage');

const startBtn = document.getElementById('startBtn');
const compareModeBtn = document.getElementById('compareModeBtn');
const backBtn = document.getElementById('backBtn');
const copyBtn = document.getElementById('copyBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const generateQrBtn = document.getElementById('generateQrBtn');
const restartBtn = document.getElementById('restartBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const exportComparisonBtn = document.getElementById('exportComparisonBtn');

const questionNumber = document.getElementById('questionNumber');
const progressBar = document.getElementById('progressBar');
const category = document.getElementById('category');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const resultBox = document.getElementById('resultBox');
const partnerResultBox = document.getElementById('partnerResultBox');
const qrModal = document.getElementById('qrModal');
const closeBtn = document.querySelector('.close-btn');

// ========== Event Listeners ==========
startBtn.addEventListener('click', startQuiz);
compareModeBtn.addEventListener('click', startCompareMode);
backBtn.addEventListener('click', previousQuestion);
copyBtn.addEventListener('click', copyResult);
exportPdfBtn.addEventListener('click', exportPDF);
generateQrBtn.addEventListener('click', generateQR);
restartBtn.addEventListener('click', restartQuiz);
analyzeBtn.addEventListener('click', analyzeComparison);
exportComparisonBtn?.addEventListener('click', exportComparison);

const backToStartBtn = document.getElementById('backToStartBtn');
const backToStartBtn2 = document.getElementById('backToStartBtn2');
if (backToStartBtn) backToStartBtn.addEventListener('click', goToStart);
if (backToStartBtn2) backToStartBtn2.addEventListener('click', goToStart);

closeBtn?.addEventListener('click', () => qrModal.classList.add('hidden'));
qrModal?.addEventListener('click', (e) => {
  if (e.target === qrModal) qrModal.classList.add('hidden');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (quizPage.classList.contains('hidden')) return;

  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    const buttons = Array.from(optionsContainer.querySelectorAll('.option-btn'));
    const currentIndex = buttons.findIndex((btn) =>
      btn.classList.contains('selected')
    );

    if (e.key === 'ArrowUp' && currentIndex > 0) {
      buttons[currentIndex - 1].click();
    } else if (e.key === 'ArrowDown' && currentIndex < buttons.length - 1) {
      buttons[currentIndex + 1].click();
    }
  }

  if (e.key === 'Enter') {
    e.preventDefault();
    nextQuestion();
  }
});

// ========== Quiz Functions ==========
function startQuiz() {
  isCompareMode = false;
  startPage.classList.add('hidden');
  quizPage.classList.remove('hidden');
  loadLocalProgress();
  renderQuestion();
}

function startCompareMode() {
  isCompareMode = true;
  startPage.classList.add('hidden');
  comparePage.classList.remove('hidden');
}

function renderQuestion() {
  const question = quizData[currentQuestion];

  questionNumber.textContent = `問題 ${currentQuestion + 1}/${quizData.length}`;
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = progress + '%';

  category.textContent = question.category;
  questionText.textContent = question.question;

  optionsContainer.innerHTML = '';
  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.setAttribute('data-value', option.value);

    if (answers[currentQuestion] === option.value) {
      button.classList.add('selected');
      selectedAnswerValue = option.value;
    }

    button.addEventListener('click', () => selectOption(button, option.value));
    optionsContainer.appendChild(button);
  });

  backBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
}

function selectOption(button, value) {
  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.classList.remove('selected');
  });

  button.classList.add('selected');
  selectedAnswerValue = value;
  answers[currentQuestion] = value;

  saveProgress();

  setTimeout(() => {
    nextQuestion();
  }, 300);
}

function nextQuestion() {
  if (!answers[currentQuestion]) {
    alert('請先選擇一個答案');
    return;
  }

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    completeQuiz();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function completeQuiz() {
  quizPage.classList.add('hidden');
  completePage.classList.remove('hidden');
  generateResult();
  clearProgress();
}

function generateResult() {
  let result = '═══ 我的生活期許 ═══\n\n';

  const grouped = {};
  quizData.forEach((q, index) => {
    if (!grouped[q.category]) {
      grouped[q.category] = [];
    }

    const answerValue = answers[index];
    const selectedOption = q.options.find((opt) => opt.value === answerValue);
    grouped[q.category].push({
      question: q.question,
      answer: selectedOption ? selectedOption.text : '未回答',
      value: answerValue,
    });
  });

  Object.entries(grouped).forEach(([cat, items]) => {
    result += `[${cat}]\n`;
    items.forEach((item) => {
      result += `Q: ${item.question}\nA: ${item.answer}\n\n`;
    });
    result += '\n';
  });

  result += `═══ 完成時間 ═══\n${new Date().toLocaleString('zh-Hant-TW')}\n`;
  result += `\n[分享代碼]\n${encodeResultToCode(answers)}\n`;

  resultBox.value = result;
}

// ========== PDF Export ==========
function exportPDF() {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1>我的生活期許</h1>
    <p>生成時間：${new Date().toLocaleString('zh-Hant-TW')}</p>
    <hr>
    ${resultBox.value.replace(/\n/g, '<br>')}
  `;

  const opt = {
    margin: 10,
    filename: `Melbourne-Life-${new Date().getTime()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  };

  html2pdf().set(opt).from(element).save();

  exportPdfBtn.textContent = '✓ PDF 已匯出！';
  setTimeout(() => {
    exportPdfBtn.textContent = '📄 匯出 PDF';
  }, 2000);
}

// ========== Result Encoding ==========
function encodeResultToCode(answersObj) {
  // Convert answers to a compact string representation
  const values = Object.values(answersObj).map(v => v.charAt(0)).join('');
  return btoa(values).substring(0, 12);
}

function decodeResultFromCode(code) {
  try {
    const decoded = atob(code + '==');
    return decoded.split('').map((char, i) => {
      const option = quizData[i]?.options.find(o => o.value.charAt(0) === char);
      return option?.value || null;
    });
  } catch {
    return null;
  }
}

// ========== QR Code Generation ==========
function generateQR() {
  const shareLink = `${window.location.origin}${window.location.pathname}?result=${encodeURIComponent(resultBox.value)}`;

  qrModal.classList.remove('hidden');

  // Clear previous QR code
  document.getElementById('qrCode').innerHTML = '';

  // Generate new QR code
  new QRCode(document.getElementById('qrCode'), {
    text: shareLink,
    width: 200,
    height: 200,
    colorDark: '#2c3e50',
    colorLight: '#ffffff',
  });

  document.getElementById('shareLink').value = shareLink;

  generateQrBtn.textContent = '✓ 分享碼已生成！';
  setTimeout(() => {
    generateQrBtn.textContent = '📱 生成分享碼';
  }, 2000);
}

// ========== Copy Functions ==========
function copyResult() {
  resultBox.select();
  document.execCommand('copy');

  copyBtn.textContent = '✓ 已複製！';
  copyBtn.classList.add('pulse');

  setTimeout(() => {
    copyBtn.textContent = '複製結果傳給他';
    copyBtn.classList.remove('pulse');
  }, 2000);
}

document.getElementById('copyLinkBtn')?.addEventListener('click', () => {
  const link = document.getElementById('shareLink');
  link.select();
  document.execCommand('copy');

  const btn = document.getElementById('copyLinkBtn');
  btn.textContent = '✓ 已複製！';
  setTimeout(() => {
    btn.textContent = '複製鏈接';
  }, 2000);
});

// ========== Compare Mode ==========
function analyzeComparison() {
  const partnerText = partnerResultBox.value.trim();

  if (!partnerText) {
    alert('請貼上伴侶的結果');
    return;
  }

  // Parse partner results
  try {
    partnerAnswers = parseResultText(partnerText);
  } catch (error) {
    alert('無法解析結果，請確保格式正確');
    return;
  }

  // Show results
  const resultsDiv = document.getElementById('comparisonResults');
  resultsDiv.classList.remove('hidden');

  calculateCompatibility();
  displayCategoryComparison();
  displayDiscussionTopics();
}

function parseResultText(text) {
  const answers = {};
  let questionIndex = 0;

  quizData.forEach((q, i) => {
    // Look for the question in the text
    const questionMatch = text.match(new RegExp(`Q: ${q.question}.*?A: (.+?)(?=Q:|\\[|$)`, 's'));
    if (questionMatch) {
      const answer = questionMatch[1].trim();
      const matchingOption = q.options.find(opt => opt.text === answer);
      if (matchingOption) {
        answers[i] = matchingOption.value;
      }
    }
  });

  return answers;
}

function calculateCompatibility() {
  let matches = 0;
  let total = quizData.length;

  Object.keys(answers).forEach(index => {
    if (partnerAnswers[index] === answers[index]) {
      matches++;
    }
  });

  const percentage = Math.round((matches / total) * 100);
  const scoreBar = document.getElementById('scoreBar');
  const scoreText = document.getElementById('scoreText');

  scoreBar.style.width = percentage + '%';
  scoreText.textContent = `${percentage}% 相容度`;
}

function displayCategoryComparison() {
  const categories = {};

  quizData.forEach((q, i) => {
    if (!categories[q.category]) {
      categories[q.category] = { matches: 0, total: 0 };
    }

    categories[q.category].total++;

    if (answers[i] === partnerAnswers[i]) {
      categories[q.category].matches++;
    }
  });

  const container = document.getElementById('categoryComparison');
  container.innerHTML = '';

  Object.entries(categories).forEach(([cat, data]) => {
    const percentage = Math.round((data.matches / data.total) * 100);
    let matchClass = 'match-high';

    if (percentage < 50) {
      matchClass = 'match-low';
    } else if (percentage < 75) {
      matchClass = 'match-medium';
    }

    const item = document.createElement('div');
    item.className = 'category-item';
    item.innerHTML = `
      <div class="category-item-name">${cat}</div>
      <div class="category-item-match">
        相容度：<span class="${matchClass}">${percentage}%</span> (${data.matches}/${data.total} 題)
      </div>
    `;

    container.appendChild(item);
  });
}

function displayDiscussionTopics() {
  const topicsSet = new Set();

  Object.entries(answers).forEach(([index, myAnswer]) => {
    const partnerAnswer = partnerAnswers[index];

    if (myAnswer !== partnerAnswer) {
      const category = quizData[index].category;
      const topics = discussionTopicsDb[category] || [];
      topics.forEach(t => topicsSet.add(t));
    }
  });

  const topicsList = document.getElementById('discussionTopics');
  topicsList.innerHTML = '';

  if (topicsSet.size === 0) {
    const li = document.createElement('li');
    li.textContent = '太棒了！你們在大多數事情上想法一致，繼續保持溝通！';
    topicsList.appendChild(li);
  } else {
    topicsSet.forEach(topic => {
      const li = document.createElement('li');
      li.textContent = topic;
      topicsList.appendChild(li);
    });
  }
}

function exportComparison() {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1>生活對比分析報告</h1>
    <p>生成時間：${new Date().toLocaleString('zh-Hant-TW')}</p>
    <hr>
    ${document.getElementById('comparisonResults').innerHTML}
  `;

  const opt = {
    margin: 10,
    filename: `Melbourne-Life-Comparison-${new Date().getTime()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  };

  html2pdf().set(opt).from(element).save();

  exportComparisonBtn.textContent = '✓ 報告已匯出！';
  setTimeout(() => {
    exportComparisonBtn.textContent = '📄 匯出對比報告';
  }, 2000);
}

function goToStart() {
  currentQuestion = 0;
  answers = {};
  partnerAnswers = {};
  selectedAnswerValue = null;

  quizPage.classList.add('hidden');
  comparePage.classList.add('hidden');
  completePage.classList.add('hidden');
  startPage.classList.remove('hidden');

  clearProgress();
}

function restartQuiz() {
  currentQuestion = 0;
  answers = {};
  selectedAnswerValue = null;
  clearProgress();

  completePage.classList.add('hidden');
  startPage.classList.remove('hidden');
}

// ========== LocalStorage Functions ==========
function saveProgress() {
  const progress = {
    currentQuestion,
    answers,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem('quizProgress', JSON.stringify(progress));
}

function loadLocalProgress() {
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    const lastSaved = new Date(progress.timestamp);
    const now = new Date();
    const minutesAgo = (now - lastSaved) / (1000 * 60);

    if (minutesAgo < 1440) {
      if (
        confirm(
          `偵測到上次的進度在第 ${progress.currentQuestion + 1} 題。\n是否要繼續？`
        )
      ) {
        currentQuestion = progress.currentQuestion;
        answers = progress.answers;
      } else {
        clearProgress();
      }
    } else {
      clearProgress();
    }
  }
}

function clearProgress() {
  localStorage.removeItem('quizProgress');
}

// ========== URL Parameter Handling ==========
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const resultParam = params.get('result');

  if (resultParam) {
    partnerResultBox.value = decodeURIComponent(resultParam);
  }

  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    const lastSaved = new Date(progress.timestamp);
    const now = new Date();
    const minutesAgo = (now - lastSaved) / (1000 * 60);

    if (minutesAgo < 1440) {
      if (
        confirm(
          `偵測到上次的進度在第 ${progress.currentQuestion + 1} 題。\n是否要繼續？`
        )
      ) {
        startQuiz();
      } else {
        clearProgress();
      }
    }
  }
});
