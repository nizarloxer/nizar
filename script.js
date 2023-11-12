const levels = [
    [
      { word: 'Hello', translation: 'مرحبا', options: ['مرحبا', 'صباح الخير', 'مساء الخير', 'وداعاً'] },
      { word: 'Goodbye', translation: 'وداعاً', options: ['مرحباً', 'صباح الخير', 'مساء الخير', 'وداعاً'] },
      { word: 'Thank you', translation: 'شكراً', options: ['شكراً', 'عذراً', 'من فضلك', 'أرجوك'] },
      { word: 'Please', translation: 'من فضلك', options: ['شكراً', 'عذراً', 'من فضلك', 'أرجوك'] },
      { word: 'Sorry', translation: 'آسف', options: ['آسف', 'عذراً', 'من فضلك', 'أرجوك'] },
      { word: 'Apple', translation: 'تفاحة', options: ['تفاحة', 'برتقالة', 'موزة', 'عنبة'] },
      { word: 'Car', translation: 'سيارة', options: ['سيارة', 'دراجة', 'حافلة', 'قطار'] },
      { word: 'Book', translation: 'كتاب', options: ['كتاب', 'مجلة', 'جريدة', 'مذكرة'] },
      { word: 'Computer', translation: 'حاسوب', options: ['حاسوب', 'تلفاز', 'هاتف', 'لابتوب'] },
      { word: 'Sun', translation: 'شمس', options: ['شمس', 'قمر', 'نجم', 'سحابة'] },
      { word: 'Love', translation: 'حب', options: ['حب', 'عشق', 'غرام', 'محبة'] },
      { word: 'Beautiful', translation: 'جميل', options: ['جميل', 'رائع', 'رائع', 'فاتن'] },
      { word: 'Peace', translation: 'سلام', options: ['سلام', 'هدوء', 'سكينة', 'تأمل'] },
      { word: 'Friendship', translation: 'صداقة', options: ['صداقة', 'وفاء', 'تآخي', 'إخاء'] },
      { word: 'Challenge', translation: 'تحدي', options: ['تحدي', 'اختبار', 'تجربة', 'مواجهة'] },
      { word: 'Success', translation: 'نجاح', options: ['نجاح', 'تفوق', 'تميز', 'تحقيق'] },
      { word: 'Knowledge', translation: 'معرفة', options: ['معرفة', 'علم', 'ثقافة', 'فهم'] },
      { word: 'Wisdom', translation: 'حكمة', options: ['حكمة', 'فطنة', 'ذكاء', 'تدبير'] },
      { word: 'Courage', translation: 'شجاعة', options: ['شجاعة', 'جرأة', 'إقدام', 'بسالة'] },
      { word: 'Dream', translation: 'حلم', options: ['حلم', 'طموح', 'تصوّر', 'تخيّل'] },
      { word: 'Adventure', translation: 'مغامرة', options: ['مغامرة', 'رحلة', 'استكشاف', 'رحب'] },
      { word: 'Hope', translation: 'أمل', options: ['أمل', 'تفاؤل', 'رجاء', 'تحسين'] },
      { word: 'Kindness', translation: 'لطف', options: ['لطف', 'عطف', 'إحسان', 'رقة'] },
      { word: 'Harmony', translation: 'تناغم', options: ['تناغم', 'انسجام', 'توافق', 'تناغم'] },
      { word: 'Innovation', translation: 'ابتكار', options: ['ابتكار', 'ابداع', 'تجديد', 'تطوير'] },
      { word: 'Inspiration', translation: 'إلهام', options: ['إلهام', 'تحفيز', 'تلهيم', 'تحريك'] },
      { word: 'Passion', translation: 'شغف', options: ['شغف', 'حماس', 'اشتياق', 'تفاني'] },
      { word: 'Resilience', translation: 'مرونة', options: ['مرونة', 'صمود', 'قوة', 'ثبات'] },
      { word: 'Gratitude', translation: 'امتنان', options: ['امتنان', 'شكر', 'ثناء', 'اعتراف'] },
      { word: 'Patience', translation: 'صبر', options: ['صبر', 'الانتظار', 'الهدوء', 'التحلي'] },
      { word: 'Optimism', translation: 'تفاؤل', options: ['تفاؤل', 'رغبة', 'أمل', 'إشراق'] },
      { word: 'Calm', translation: 'هدوء', options: ['هدوء', 'سكينة', 'سكون', 'راحة'] },
      { word: 'Balance', translation: 'توازن', options: ['توازن', 'تناغم', 'تحفيز', 'تسوية'] },
      { word: 'Imagination', translation: 'خيال', options: ['خيال', 'تخيل', 'افتراض', 'تصوّر'] },
      { word: 'Perseverance', translation: 'مثابرة', options: ['مثابرة', 'استمرارية', 'صمود', 'تحمّل'] },
      { word: 'Determination', translation: 'تصميم', options: ['تصميم', 'إصرار', 'ثبات', 'عزيمة'] },
      { word: 'Success', translation: 'نجاح', options: ['نجاح', 'تفوق', 'تميز', 'تحقيق'] },
      { word: 'Challenge', translation: 'تحدي', options: ['تحدي', 'اختبار', 'تجربة', 'مواجهة'] },
      { word: 'Strength', translation: 'قوة', options: ['قوة', 'صلابة', 'تحمّل', 'شدة'] },
      { word: 'Change', translation: 'تغيير', options: ['تغيير', 'تبديل', 'تحويل', 'تحول'] },
      { word: 'Purpose', translation: 'غرض', options: ['غرض', 'هدف', 'قصد', 'مقصد'] },
      { word: 'Ambition', translation: 'طموح', options: ['طموح', 'تطلع', 'رغبة', 'همة'] },
      { word: 'Integrity', translation: 'نزاهة', options: ['نزاهة', 'أمانة', 'صدق', 'جدية'] },
      { word: 'Empathy', translation: 'تعاطف', options: ['تعاطف', 'رؤية', 'فهم', 'تفهم'] },
      { word: 'Inclusivity', translation: 'شمولية', options: ['شمولية', 'تضمين', 'تكامل', 'انفتاح'] },
      { word: 'Excellence', translation: 'تفوق', options: ['تفوق', 'تميز', 'استثناء', 'رفاهية'] },
      { word: 'Collaboration', translation: 'تعاون', options: ['تعاون', 'تعاقب', 'تكامل', 'شراكة'] },
      { word: 'Adaptability', translation: 'قابلية التكيف', options: ['قابلية التكيف', 'مرونة', 'تكيف', 'انسجام'] },
      { word: 'Curiosity', translation: 'فضول', options: ['فضول', 'استكشاف', 'فحص', 'استفسار'] },
      { word: 'Education', translation: 'تعليم', options: ['تعليم', 'تثقيف', 'تربية', 'تدريب'] },
      { word: 'Gratitude', translation: 'امتنان', options: ['امتنان', 'شكر', 'ثناء', 'اعتراف'] },
      { word: 'Self-discipline', translation: 'تنظيم النفس', options: ['تنظيم النفس', 'الامتناع', 'ضبط النفس', 'احتراف'] },
      { word: 'Mindfulness', translation: 'الوعي الحاضر', options: ['الوعي الحاضر', 'تأمل', 'استيعاب', 'تركيز'] },
      { word: 'Respect', translation: 'احترام', options: ['احترام', 'احتفاء', 'تقدير', 'تكريم'] },
      { word: 'Communication', translation: 'تواصل', options: ['تواصل', 'اتصال', 'تحاور', 'تبادل'] },
      { word: 'Compassion', translation: 'رحمة', options: ['رحمة', 'شفقة', 'ألفة', 'تعاطف'] },
      { word: 'Purpose', translation: 'غرض', options: ['غرض', 'هدف', 'قصد', 'مقصد'] },
      { word: 'Vision', translation: 'رؤية', options: ['رؤية', 'رؤية بعيدة المدى', 'إبصار', 'الرؤية الفنية'] },
      { word: 'Focus', translation: 'تركيز', options: ['تركيز', 'تكامل', 'تحديد', 'ركز'] },
      { word: 'Empowerment', translation: 'تمكين', options: ['تمكين', 'تفويض', 'تقوية', 'إعطاء القوة'] },
      { word: 'Adventurous', translation: 'مغامر', options: ['مغامر', 'متهور', 'جريء', 'فضولي'] },
      { word: 'Knowledgeable', translation: 'متعلم', options: ['متعلم', 'عالم', 'ذو فهم', 'مثقف'] },
      { word: 'Resilient', translation: 'متماسك', options: ['متماسك', 'متين', 'مقاوم', 'صلب'] },
      { word: 'Innovative', translation: 'مبتكر', options: ['مبتكر', 'مبدع', 'مخترع', 'متطور'] },
      { word: 'Persistent', translation: 'مستمر', options: ['مستمر', 'متواصل', 'مصر', 'ثابت'] },
      { word: 'Grateful', translation: 'ممتن', options: ['ممتن', 'شاكر', 'مقدر', 'مقدس'] },
        ],
      ];
      
      
 
  let currentLevelIndex = 0;
  let currentWordIndex = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
    displayWord();
  });

  // ... (your existing code)

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
});

// Function to search for a word
function searchWord() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Loop through words to find a match
  for (let i = 0; i < levels[currentLevelIndex].length; i++) {
      const word = levels[currentLevelIndex][i].word.toLowerCase();
      if (word.includes(searchTerm)) {
          // Word found, navigate to it
          goToWord(i + 1);
          return;
      }
  }

  // If the word is not found, you can handle it (e.g., display a message)
  alert('Word not found');
}

// ... (your existing code)

  
  function displayWord() {
    const wordElement = document.getElementById('word');
    const optionsContainer = document.getElementById('options-container');
    const userInput = document.getElementById('userInput');
  
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    wordElement.textContent = currentWord.word;
  
    // تجهيز الأسئلة كخيارات
    optionsContainer.innerHTML = '';
    currentWord.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(button);
    });
  
    // إعادة تعيين حقل الإدخال
    userInput.value = '';
  }
  
  function checkAnswer(selectedIndex) {
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    if (selectedIndex === currentWord.options.indexOf(currentWord.translation)) {
      alert('إجابة صحيحة!');
      nextWord();
    } else {
      alert('إجابة خاطئة!');
    }
  }
  function goToWord(wordNumber) {
    // Ensure the wordNumber is within the valid range
    if (wordNumber >= 1 && wordNumber <= levels[currentLevelIndex].length) {
      currentWordIndex = wordNumber - 1;
      displayWord();
    } else {
      alert('Invalid word number');
    }
  }
  function checkUserAnswer() {
    const userInput = document.getElementById('userInput');
    const userAnswer = userInput.value.trim().toLowerCase();
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    if (userAnswer === currentWord.translation.toLowerCase()) {
      alert('إجابة صحيحة!');
      nextWord();
    } else {
      alert('إجابة خاطئة!');
    }
  }
  
  function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % levels[currentLevelIndex].length;
    displayWord();
  }
  
  function nextLevel() {
    currentLevelIndex = (currentLevelIndex + 1) % levels.length;
    currentWordIndex = 0;
    displayWord();
  }
  // Check the user's preference for dark mode and set the theme accordingly
document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDarkMode) {
      enableDarkMode();
  }
});

// Function to toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}

// Check the user's preference stored in localStorage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode === 'true') {
  enableDarkMode();
} else {
  disableDarkMode();
}
