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
      { text: '各司其職，各��責自己的部分', value: 'division' },
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

// ========== State Management ==========
let currentQuestion = 0;
let answers = {};
let selectedAnswerValue = null;

// ========== DOM Elements ==========
const startPage = document.getElementById('startPage');
const quizPage = document.getElementById('quizPage');
const completePage = document.getElementById('completePage');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const copyBtn = document.getElementById('copyBtn');
const restartBtn = document.getElementById('restartBtn');

const questionNumber = document.getElementById('questionNumber');
const progressBar = document.getElementById('progressBar');
const category = document.getElementById('category');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const resultBox = document.getElementById('resultBox');

// ========== Event Listeners ==========
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', previousQuestion);
copyBtn.addEventListener('click', copyResult);
restartBtn.addEventListener('click', restartQuiz);

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
  startPage.classList.add('hidden');
  quizPage.classList.remove('hidden');
  loadLocalProgress();
  renderQuestion();
}

function renderQuestion() {
  const question = quizData[currentQuestion];

  // Update header
  questionNumber.textContent = `問題 ${currentQuestion + 1}/${quizData.length}`;
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = progress + '%';

  // Update content
  category.textContent = question.category;
  questionText.textContent = question.question;

  // Render options
  optionsContainer.innerHTML = '';
  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.setAttribute('data-value', option.value);

    // Restore previous selection
    if (answers[currentQuestion] === option.value) {
      button.classList.add('selected');
      selectedAnswerValue = option.value;
    }

    button.addEventListener('click', () => selectOption(button, option.value));
    optionsContainer.appendChild(button);
  });

  // Update back button visibility
  backBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
}

function selectOption(button, value) {
  // Remove previous selection
  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.classList.remove('selected');
  });

  // Add selection to clicked button
  button.classList.add('selected');
  selectedAnswerValue = value;
  answers[currentQuestion] = value;

  // Save to localStorage
  saveProgress();

  // Auto-advance to next question after 300ms
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

  // Group answers by category
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
    });
  });

  // Format result text
  Object.entries(grouped).forEach(([cat, items]) => {
    result += `[${cat}]\n`;
    items.forEach((item) => {
      result += `Q: ${item.question}\nA: ${item.answer}\n\n`;
    });
    result += '\n';
  });

  result += `═══ 完成時間 ═══\n${new Date().toLocaleString('zh-Hant-TW')}\n`;

  resultBox.value = result;
}

function copyResult() {
  resultBox.select();
  document.execCommand('copy');

  // Visual feedback
  copyBtn.textContent = '✓ 已複製！';
  copyBtn.classList.add('pulse');

  setTimeout(() => {
    copyBtn.textContent = '複製結果傳給他';
    copyBtn.classList.remove('pulse');
  }, 2000);
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
    const { currentQuestion: saved_q, answers: saved_a } = JSON.parse(saved);
    // Only restore if quiz was recently started
    const progress = JSON.parse(saved);
    const lastSaved = new Date(progress.timestamp);
    const now = new Date();
    const minutesAgo = (now - lastSaved) / (1000 * 60);

    if (minutesAgo < 1440) {
      // 24 hours
      currentQuestion = saved_q;
      answers = saved_a;
    } else {
      clearProgress();
    }
  }
}

function clearProgress() {
  localStorage.removeItem('quizProgress');
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
  // Check if there's saved progress on page load
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    const lastSaved = new Date(progress.timestamp);
    const now = new Date();
    const minutesAgo = (now - lastSaved) / (1000 * 60);

    if (minutesAgo < 1440) {
      // Show option to continue
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
