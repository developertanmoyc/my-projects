// quiz-engine.js - Shared Quiz/Test execution engine for Quizlish

// Global quiz states
let currentCategory = '';
let currentQuizName = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let userAnswers = [];
let timeLeft = 0;
let timerInterval;

const categoryNames = {
    prepositions: "Prepositions", tenses: "Tenses", adjectives: "Adjectives", adverbs: "Adverbs", conjunctions: "Conjunctions",
    comprehension: "Comprehension", voice: "Voice Change", narration: "Narration Change", joining: "Joining", transformation: "Transformation", full_tests: "Full Length Tests"
};

const categoryRules = {
    prepositions: { title: "📌 Prepositions", rules: ["Apply 'in' for enclosed spaces/months, 'on' for surfaces/dates, and 'at' for precise points."] },
    tenses: { title: "📌 Tenses", rules: ["Simple Present for habits/facts. Present Perfect for past events connected to now."] },
    adjectives: { title: "📌 Adjectives", rules: ["Standard order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose."] },
    adverbs: { title: "📌 Adverbs", rules: ["Adverbs modify verbs, adjectives, or other adverbs. Frequency adverbs usually precede main verbs."] },
    conjunctions: { title: "📌 Conjunctions", rules: ["FANBOYS link independent clauses. Subordinating conjunctions link dependent to independent clauses."] },
    comprehension: { title: "📌 Comprehension", rules: ["Skim the text first for core themes. Use context clues to determine unknown word meanings."] },
    voice: { title: "📌 Voice Change", rules: ["Swap the Subject and Object. Use the appropriate 'be' verb + Past Participle (V3) form."] },
    narration: { title: "📌 Narration Change", rules: ["Change the reporting verb, remove quotes, adjust pronouns, and backshift tenses if required."] },
    joining: { title: "📌 Joining", rules: ["Combine clauses using conjunctions, participles, or relative pronouns without altering the core meaning."] },
    transformation: { title: "📌 Transformation", rules: ["Rewrite sentences (e.g., Simple to Complex, Affirmative to Negative) while keeping the original meaning exactly the same."] },
    full_tests: { title: "🏆 Full Length Tests", rules: ["50 Questions covering all 10 grammar & composition topics.", "Time limit: 35 Minutes.", "Manage your time wisely! You can use the navigator below to jump to any question."] }
};

let questionDatabase = {};

// Setup database when script runs
function setupEngineDatabase() {
    questionDatabase = {
        prepositions: (typeof prepositionsData !== 'undefined') ? prepositionsData : [],
        tenses: (typeof tensesData !== 'undefined') ? tensesData : [],
        adjectives: (typeof adjectivesData !== 'undefined') ? adjectivesData : [],
        adverbs: (typeof adverbsData !== 'undefined') ? adverbsData : [],
        conjunctions: (typeof conjunctionsData !== 'undefined') ? conjunctionsData : [],
        comprehension: (typeof comprehensionData !== 'undefined') ? comprehensionData : [],
        voice: (typeof voiceData !== 'undefined') ? voiceData : [],
        narration: (typeof narrationData !== 'undefined') ? narrationData : [],
        joining: (typeof joiningData !== 'undefined') ? joiningData : [],
        transformation: (typeof transformationData !== 'undefined') ? transformationData : [],
        full_tests: []
    };

    // Build 25 full tests
    const topicsForFull = ['prepositions', 'tenses', 'adjectives', 'adverbs', 'conjunctions', 'voice', 'narration', 'joining', 'transformation', 'comprehension'];
    for(let i = 0; i < 25; i++) {
        topicsForFull.forEach(topic => {
            if(questionDatabase[topic] && questionDatabase[topic].length >= (i+1)*5) {
                questionDatabase.full_tests.push(...questionDatabase[topic].slice(i*5, (i+1)*5));
            }
        });
    }
}

// Injects Quiz HTML markup into target page root container
function injectQuizMarkup(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;

    root.innerHTML = `
        <!-- Selection Screen -->
        <div id="quiz-selection-screen" class="w-full max-w-4xl bg-white/85 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-lg p-5 md:p-12 border border-white dark:border-slate-700 mx-auto my-8">
            <div class="text-center mb-10 relative">
                <a href="index.html" class="absolute left-0 top-0 hidden md:flex items-center gap-2 text-slate-500 hover:text-blue-600 font-black transition-colors bg-white dark:bg-slate-700 px-5 py-2.5 rounded-full shadow-sm">
                    &larr; Home
                </a>
                <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">Select a Test</h2>
                <p class="text-slate-500 dark:text-slate-400 font-bold text-lg">Topic: <span id="selection-category-name" class="text-blue-600 dark:text-blue-400 uppercase"></span></p>
            </div>
            
            <div id="category-rules-container" class="mb-10 p-8 bg-blue-50 dark:bg-slate-700/50 border border-blue-100 dark:border-slate-600 rounded-3xl text-left hidden shadow-sm">
                <h3 class="text-xl font-black text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2" id="rules-title"></h3>
                <div id="rules-content" class="text-blue-800 dark:text-blue-200 font-medium space-y-3"></div>
            </div>

            <div id="quiz-list" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"></div>

            <div id="category-explanation-container" class="mt-10 p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl text-left hidden shadow-sm">
                <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">📖 Study & Learning Guide</h3>
                <div id="explanation-content" class="text-slate-700 dark:text-slate-350 font-medium space-y-6 text-justify leading-relaxed max-w-none"></div>
            </div>
        </div>

        <!-- Quiz Panel -->
        <div id="quiz-container" class="hidden flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-3xl md:rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden max-w-5xl w-full mx-auto my-0 md:my-4 h-auto min-h-[70dvh] md:max-h-[90vh]">
            <div class="shrink-0 flex justify-between items-start md:items-center p-6 md:p-8 border-b border-slate-50 dark:border-slate-700 bg-white dark:bg-slate-800 z-10 flex-col md:flex-row gap-4">
                <div class="flex items-center gap-4">
                    <button onclick="exitQuiz()" class="p-3 bg-slate-50 dark:bg-slate-700 hover:bg-rose-50 dark:hover:bg-rose-900/50 text-slate-400 dark:text-slate-300 hover:text-rose-500 rounded-2xl transition-colors shadow-sm" title="Exit Quiz">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <div>
                        <span id="category-badge" class="inline-block bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-1">Category</span>
                        <h2 class="text-xl md:text-2xl font-black text-slate-800 dark:text-white" id="question-number">Question 1 of 10</h2>
                    </div>
                </div>
                
                <div class="text-base font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-5 py-2.5 rounded-full border border-blue-100 dark:border-blue-800 flex items-center gap-2 shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span id="timer-display">00:00</span>
                </div>
            </div>

            <div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
                <div id="question-nav-panel" class="hidden w-full md:w-72 lg:w-80 shrink-0 bg-slate-50/80 dark:bg-slate-800/50 border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-700 p-4 md:p-6 overflow-y-auto no-scrollbar flex-col order-first md:order-last max-h-40 md:max-h-full z-10">
                    <div class="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-2 md:gap-3 mb-4 md:mb-6">
                        <span class="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Question Navigator</span>
                        <div class="flex gap-3 md:gap-4 text-[10px] md:text-xs font-bold text-slate-400">
                            <span class="flex items-center gap-1.5"><div class="w-2.5 h-2.5 rounded-full bg-blue-600"></div> Current</span>
                            <span class="flex items-center gap-1.5"><div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div> Answered</span>
                        </div>
                    </div>
                    <div id="question-nav-grid" class="flex flex-wrap gap-1.5 md:gap-2 content-start pb-2"></div>
                </div>

                <div id="scrollable-content" class="flex-1 overflow-y-auto p-5 md:p-10 no-scrollbar bg-white dark:bg-slate-800">
                    <div id="reading-passage" class="hidden mb-6 md:mb-8 p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-sm md:text-base shadow-sm"></div>
                    <p id="question-text" class="text-lg md:text-2xl font-bold mb-6 md:mb-8 text-slate-900 dark:text-white leading-relaxed"></p>
                    <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pb-4"></div>
                </div>
            </div>

            <div class="shrink-0 p-6 border-t border-slate-50 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-center gap-4 z-10">
                <button id="prev-btn" class="hidden bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 font-bold py-3.5 px-8 rounded-full transition-colors duration-200 w-full sm:w-auto">
                    &larr; Previous
                </button>
                <button id="next-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-all duration-200 w-full sm:w-auto ml-auto">
                    Skip Question &rarr;
                </button>
            </div>
        </div>

        <!-- Results screen -->
        <div id="results-container" class="hidden w-full max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-xl p-5 md:p-16 text-center border-t-8 border-blue-500 my-8">
            <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Test Completed!</h2>
            <p class="text-xl font-bold mb-2 text-slate-500 dark:text-slate-400">Your Final Score for <span id="result-category" class="text-blue-600 dark:text-blue-400"></span></p>
            
            <div class="my-8">
                <span class="text-7xl md:text-8xl font-black text-blue-600 dark:text-blue-400 tracking-tighter" id="final-score">0</span> 
                <span class="text-3xl font-black text-slate-300 dark:text-slate-600" id="total-score-display">/ 10</span>
            </div>
            
            <p id="feedback-text" class="text-slate-600 dark:text-slate-300 mb-10 font-bold text-lg bg-blue-50/50 dark:bg-slate-700/50 p-6 rounded-3xl border border-blue-100 dark:border-slate-600 mx-auto max-w-2xl"></p>
            
            <div class="mb-10 flex flex-col items-center">
                <span class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Brag about your score:</span>
                <div class="flex flex-wrap justify-center gap-4">
                    <button onclick="shareScore('whatsapp')" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:-translate-y-1 flex items-center gap-2">
                        WhatsApp
                    </button>
                    <button onclick="shareScore('facebook')" class="bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:-translate-y-1 flex items-center gap-2">
                        Facebook
                    </button>
                </div>
            </div>

            <button onclick="exitQuiz()" class="bg-slate-900 dark:bg-black text-white font-bold py-4 px-12 rounded-full shadow-xl transition-transform transform hover:-translate-y-1 mb-16">
                Return to Directory
            </button>

            <div id="review-container" class="border-t border-slate-100 dark:border-slate-700 pt-16"></div>
        </div>
    `;

    // Hook listeners
    document.getElementById('prev-btn').onclick = () => { if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(); } };
    document.getElementById('next-btn').onclick = () => { currentQuestionIndex++; if (currentQuestionIndex < currentQuizData.length) loadQuestion(); else showResults(); };
}

// Initializer
function initQuizEngine(categoryId) {
    setupEngineDatabase();
    injectQuizMarkup('quiz-app-root');
    prepareCategory(categoryId);

    // Listen to authentication changes to update locks immediately
    window.addEventListener('auth-changed', () => {
        // Redraw lists
        prepareCategory(categoryId);
    });
}

function prepareCategory(categoryId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearInterval(timerInterval); 
    currentCategory = categoryId;
    
    document.getElementById('selection-category-name').innerText = categoryNames[categoryId];

    const rulesContainer = document.getElementById('category-rules-container');
    if (categoryRules[categoryId]) {
        document.getElementById('rules-title').innerHTML = categoryRules[categoryId].title;
        document.getElementById('rules-content').innerHTML = categoryRules[categoryId].rules.map(rule => `<p>• ${rule}</p>`).join('');
        rulesContainer.classList.remove('hidden');
    } else {
        rulesContainer.classList.add('hidden');
    }

    const chunkSize = categoryId === 'full_tests' ? 50 : 10;
    const totalQs = questionDatabase[categoryId] ? questionDatabase[categoryId].length : 0;
    const totalQuizzes = Math.ceil(totalQs / chunkSize); 
    const quizListEl = document.getElementById('quiz-list');
    quizListEl.innerHTML = '';

    if (totalQuizzes === 0) {
        quizListEl.innerHTML = `<p class="text-slate-400 font-bold col-span-full py-6">No content chunks found for this subcategory yet.</p>`;
    } else {
        const loggedIn = getLoggedInUser();
        for (let i = 0; i < totalQuizzes; i++) {
            const btn = document.createElement('button');
            const isLocked = !loggedIn && i >= 3;
            btn.className = "bg-white dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 font-black py-4 px-4 rounded-2xl shadow-sm transition-all text-lg flex items-center justify-between";
            
            const name = categoryId === 'full_tests' ? `Mock Test ${i + 1}` : `Quiz ${i + 1}`;
            if (isLocked) {
                btn.innerHTML = `<span>${name}</span> <span class="text-slate-400">🔒</span>`;
            } else {
                btn.innerHTML = `<span>${name}</span>`;
            }
            btn.onclick = () => startQuiz(categoryId, i);
            quizListEl.appendChild(btn);
        }
    }

    const expContainer = document.getElementById('category-explanation-container');
    const expContent = document.getElementById('explanation-content');
    if (typeof grammarExplanations !== 'undefined' && grammarExplanations[categoryId]) {
        expContent.innerHTML = grammarExplanations[categoryId];
        expContainer.classList.remove('hidden');
    } else {
        expContainer.classList.add('hidden');
    }

    document.getElementById('quiz-selection-screen').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.add('hidden');
}

function startQuiz(categoryId, quizIndex) {
    if (!questionDatabase[categoryId] || questionDatabase[categoryId].length === 0) return;

    if (!getLoggedInUser()) {
        if (quizIndex >= 3) {
            openAuthModal();
            return;
        }
    }

    document.getElementById('ai-chat-toggle-btn').classList.add('hidden');
    if(typeof chatOpen !== 'undefined' && chatOpen) toggleAIChat(); 

    window.scrollTo(0, 0);
    
    const chunkSize = categoryId === 'full_tests' ? 50 : 10;
    currentQuizName = categoryId === 'full_tests' ? `Test ${quizIndex + 1}` : `Quiz ${quizIndex + 1}`;
    
    let allQuestions = questionDatabase[categoryId]; 
    currentQuizData = allQuestions.slice(quizIndex * chunkSize, (quizIndex + 1) * chunkSize); 
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuizData.length).fill(null);
    
    const navPanel = document.getElementById('question-nav-panel');
    const navGrid = document.getElementById('question-nav-grid');
    const timerDisplay = document.getElementById('timer-display');

    if (categoryId === 'full_tests') {
        timeLeft = 2100; // 35 minutes
        navPanel.classList.remove('hidden');
        navPanel.classList.add('flex'); 
        buildQuestionNav(navGrid);
    } else {
        navPanel.classList.add('hidden');
        navPanel.classList.remove('flex'); 
        if (categoryId === 'comprehension') timeLeft = 600; // 10 minutes
        else timeLeft = 360; // 6 minutes
    }

    timerDisplay.parentElement.classList.remove('text-rose-600', 'bg-rose-50', 'border-rose-200', 'dark:text-rose-400', 'dark:bg-rose-900/30', 'dark:border-rose-800');
    timerDisplay.parentElement.classList.add('text-blue-600', 'bg-blue-50', 'border-blue-100', 'dark:text-blue-400', 'dark:bg-blue-900/30', 'dark:border-blue-800');

    document.getElementById('quiz-selection-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('results-container').classList.add('hidden');

    document.getElementById('category-badge').innerText = `${categoryNames[currentCategory]} • ${currentQuizName}`;
    
    loadQuestion();
    startTimer();
}

function buildQuestionNav(navGrid) {
    navGrid.innerHTML = '';
    for (let i = 0; i < currentQuizData.length; i++) {
        const btn = document.createElement('button');
        btn.id = `nav-btn-${i}`;
        btn.innerText = i + 1;
        btn.onclick = () => {
            currentQuestionIndex = i;
            loadQuestion();
        };
        navGrid.appendChild(btn);
    }
}

function updateQuestionNavUI() {
    if (currentCategory !== 'full_tests') return;
    for (let i = 0; i < currentQuizData.length; i++) {
        const btn = document.getElementById(`nav-btn-${i}`);
        if (!btn) continue;
        
        btn.className = `w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center transition-colors border-2 cursor-pointer shadow-sm`;
        
        if (i === currentQuestionIndex) {
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'ring-2', 'ring-blue-300', 'dark:ring-blue-800');
        } else if (userAnswers[i] !== null) {
            btn.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-400', 'dark:bg-emerald-900/50', 'dark:text-emerald-400', 'dark:border-emerald-600');
        } else {
            btn.classList.add('bg-white', 'text-slate-500', 'border-slate-200', 'dark:bg-slate-700', 'dark:text-slate-300', 'dark:border-slate-600', 'hover:border-blue-300');
        }
    }
}

function startTimer() {
    const timerDisplay = document.getElementById('timer-display');
    let initialM = Math.floor(timeLeft / 60);
    let initialS = timeLeft % 60;
    timerDisplay.innerText = `${initialM < 10 ? '0' + initialM : initialM}:${initialS < 10 ? '0' + initialS : initialS}`;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft < 60) {
            timerDisplay.parentElement.classList.replace('text-blue-600', 'text-rose-600');
            timerDisplay.parentElement.classList.replace('dark:text-blue-400', 'dark:text-rose-400');
            timerDisplay.parentElement.classList.replace('bg-blue-50', 'bg-rose-50');
            timerDisplay.parentElement.classList.replace('dark:bg-blue-900/30', 'dark:bg-rose-900/30');
            timerDisplay.parentElement.classList.replace('border-blue-100', 'border-rose-200');
            timerDisplay.parentElement.classList.replace('dark:border-blue-800', 'dark:border-rose-800');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time has expired. Processing your responses immediately.");
            showResults(); 
        }
    }, 1000);
}

function loadQuestion() {
    selectedOptionIndex = userAnswers[currentQuestionIndex];
    const currentQ = currentQuizData[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;
    
    const passage = document.getElementById('reading-passage');
    if (currentQ.passage) {
        passage.classList.remove('hidden');
        passage.innerText = currentQ.passage;
    } else passage.classList.add('hidden');

    document.getElementById('question-text').innerText = currentQ.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const prevBtn = document.getElementById('prev-btn');
    if (currentQuestionIndex === 0) prevBtn.classList.add('hidden');
    else prevBtn.classList.remove('hidden');

    updateNextButtonText();
    updateQuestionNavUI(); 
    
    if(currentCategory !== 'full_tests') document.getElementById('scrollable-content').scrollTop = 0;

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn w-full text-left p-4 border-2 border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 font-bold shadow-sm transition-all text-base md:text-lg';
        
        if (index === selectedOptionIndex) {
            btn.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-800', 'dark:bg-blue-900/40', 'dark:text-blue-200');
            btn.classList.remove('hover:bg-slate-50', 'hover:border-slate-300', 'border-slate-100', 'dark:border-slate-600', 'dark:bg-slate-700', 'dark:text-slate-200');
        }

        btn.innerText = option;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, btnElement) {
    selectedOptionIndex = selectedIndex;
    userAnswers[currentQuestionIndex] = selectedIndex; 
    
    const allBtns = document.getElementById('options-container').children;
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].className = 'option-btn w-full text-left p-4 border-2 border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 font-bold shadow-sm transition-all text-base md:text-lg';
    }
    btnElement.className = 'option-btn w-full text-left p-4 border-2 border-blue-500 rounded-2xl text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/40 font-bold shadow-sm transition-all text-base md:text-lg';
    
    updateNextButtonText();
    updateQuestionNavUI(); 
}

function updateNextButtonText() {
    let actionText = selectedOptionIndex === null ? 'Skip Question' : 'Next Question';
    if (currentQuestionIndex === currentQuizData.length - 1) {
        actionText = selectedOptionIndex === null ? 'Skip & Submit' : 'Submit Test';
    }
    document.getElementById('next-btn').innerHTML = `${actionText} &rarr;`;
}

function showResults() {
    window.scrollTo(0, 0); 
    clearInterval(timerInterval); 
    
    document.getElementById('quiz-selection-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    document.getElementById('ai-chat-toggle-btn').classList.remove('hidden');

    document.getElementById('result-category').innerText = `${categoryNames[currentCategory]} (${currentQuizName})`;
    
    let score = 0;
    userAnswers.forEach((ans, i) => { if (ans === currentQuizData[i].correct) score++; });
    document.getElementById('final-score').innerText = score;
    document.getElementById('total-score-display').innerText = `/ ${currentQuizData.length}`;

    const percent = (score / currentQuizData.length) * 100;
    const feedback = document.getElementById('feedback-text');
    if (percent >= 80) feedback.innerHTML = "🏆 <strong>Outstanding!</strong> You have a masterful grasp of this topic.";
    else if (percent >= 60) feedback.innerHTML = "👍 <strong>Good effort!</strong> Make sure to check the review below to see what you missed.";
    else feedback.innerHTML = "📚 <strong>Keep going!</strong> Review the explanations below carefully to improve your skills.";
    
    const user = getLoggedInUser();
    if (user) {
        saveScoreToDatabase(user.email, currentCategory, currentQuizName, score, currentQuizData.length);
    } else {
        let count = parseInt(localStorage.getItem('free_tests_count') || '0', 10);
        count++;
        localStorage.setItem('free_tests_count', count);
    }

    generateReviewSection();
}

async function saveScoreToDatabase(email, category, quizName, score, total) {
    // 1. Always save to LocalStorage fallback
    try {
        const localKey = `quizlish_scores_${email}`;
        const localScores = JSON.parse(localStorage.getItem(localKey) || '[]');
        localScores.push({
            email: email,
            category: category,
            quiz_name: quizName,
            score: score,
            total: total,
            created_at: new Date().toISOString()
        });
        localStorage.setItem(localKey, JSON.stringify(localScores));
    } catch (e) {
        console.warn("Failed to save to localStorage fallback:", e);
    }

    // 2. Insert into Supabase if client is active
    if (!supabaseClient) return;
    try {
        const { data, error } = await supabaseClient
            .from('quiz_scores')
            .insert([{ email: email, category: category, quiz_name: quizName, score: score, total: total }]);
        if (error) console.error("Supabase Insert Error:", error);
    } catch (err) {
        console.error("Failed to connect to Supabase DB:", err);
    }
}

function generateReviewSection() {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '<h3 class="text-3xl font-black text-slate-900 dark:text-white mb-8 text-left">Detailed Review</h3>';

    currentQuizData.forEach((q, index) => {
        const userAnswerIdx = userAnswers[index];
        const isCorrect = userAnswerIdx === q.correct;
        const isSkipped = userAnswerIdx === null || userAnswerIdx === undefined;

        const card = document.createElement('div');
        card.className = `p-6 md:p-8 rounded-3xl border-2 mb-6 text-left shadow-sm ${
            isCorrect ? 'border-emerald-100 bg-emerald-50/30 dark:border-emerald-900/30 dark:bg-emerald-950/10' :
            isSkipped ? 'border-amber-100 bg-amber-50/20 dark:border-amber-900/20 dark:bg-amber-950/5' :
            'border-rose-100 bg-rose-50/30 dark:border-rose-900/30 dark:bg-rose-950/10'
        }`;

        let statusText = isCorrect ? '✅ Correct' : isSkipped ? '⚠️ Skipped' : '❌ Incorrect';
        let explanationText = q.exp || 'No logic commentary provided for this item.';

        card.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span class="font-black text-lg text-slate-900 dark:text-white">Question ${index + 1}</span>
                <span class="font-extrabold text-sm uppercase tracking-wider px-3.5 py-1 rounded-full ${
                    isCorrect ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                    isSkipped ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
                    'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
                }">${statusText}</span>
            </div>
            
            ${q.passage ? `<p class="italic text-slate-500 dark:text-slate-400 mb-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-sm leading-relaxed">${q.passage}</p>` : ''}
            
            <p class="font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 mb-6 leading-relaxed">${q.q}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                ${q.options.map((opt, oIdx) => {
                    let optStyle = "border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-350 bg-white dark:bg-slate-850";
                    if (oIdx === q.correct) {
                        optStyle = "border-emerald-500 text-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 font-extrabold shadow-sm";
                    } else if (oIdx === userAnswerIdx && !isCorrect) {
                        optStyle = "border-rose-500 text-rose-900 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300 font-extrabold shadow-sm";
                    }
                    return `<div class="p-4 border-2 rounded-2xl text-base ${optStyle}">${opt}</div>`;
                }).join('')}
            </div>

            <div class="p-5 bg-blue-50/50 dark:bg-slate-700/50 rounded-2xl border border-blue-100/50 dark:border-slate-650 flex gap-3 items-start">
                <span class="text-xl">💡</span>
                <div>
                    <h4 class="font-bold text-sm text-blue-900 dark:text-blue-300 uppercase tracking-widest mb-1">Explanation</h4>
                    <p class="text-slate-600 dark:text-slate-300 text-sm font-semibold leading-relaxed">${explanationText}</p>
                </div>
            </div>
        `;
        reviewContainer.appendChild(card);
    });
}

function exitQuiz() {
    clearInterval(timerInterval);
    document.getElementById('ai-chat-toggle-btn').classList.remove('hidden');
    prepareCategory(currentCategory);
}

function shareScore(platform) {
    const url = encodeURIComponent(window.location.href);
    const score = document.getElementById('final-score').innerText;
    const total = currentQuizData.length;
    const text = encodeURIComponent(`I just scored ${score}/${total} in the "${currentQuizName}" test on Quizlish! Think you can beat my score? Challenge yourself here: `);
    
    if(platform === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank');
    } else if(platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
}
