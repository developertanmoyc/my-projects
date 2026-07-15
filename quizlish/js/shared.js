// shared.js - Shared layout, theme, and authentication logic for Quizlish

// Initialize Supabase Client
const supabaseUrl = 'https://hbylodrkprppisskqaup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhieWxvZHJrcHJwcGlzc2txYXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MjkyMzMsImV4cCI6MjA5NzAwNTIzM30.XLW3N0asYYlr2SSsntr7Z37jOp-MpNeNkseXqZ-Bxqw';
const supabaseClient = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

let isSignUpMode = false;
let currentUser = null;
let chatOpen = false;

// Helpers to get page location
function getPagePath(pageName) {
    // If we're inside a folder or root, resolve paths cleanly
    return pageName;
}

// Function to inject shared headers, footers, mobile menus, and modals
function injectSharedLayout() {
    // 1. Inject Header
    const headerHTML = `
        <div class="max-w-6xl mx-auto p-4 md:px-6 flex justify-between items-center w-full">
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight cursor-pointer" onclick="window.location.href='index.html'">Quiz<span class="text-rose-500">lish</span></h1>
            
            <nav class="hidden lg:flex flex-wrap gap-2 justify-center items-center" id="desktop-nav">
                <a href="index.html" id="nav-home" class="nav-btn px-5 py-2 rounded-full font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Home</a>
                <a href="full-tests.html" id="nav-full_tests" class="nav-btn px-5 py-2 rounded-full font-black text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
                    🏆 Full Tests
                </a>

                <div class="relative group">
                    <button class="nav-btn px-5 py-2 rounded-full font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
                        Grammar Tests
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 flex flex-col p-2">
                        <a href="prepositions.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Prepositions</a>
                        <a href="tenses.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Tenses</a>
                        <a href="adjectives.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Adjectives</a>
                        <a href="adverbs.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Adverbs</a>
                        <a href="conjunctions.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Conjunctions</a>
                        <hr class="my-1 border-slate-100 dark:border-slate-700">
                        <a href="voice.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Voice Change</a>
                        <a href="narration.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Narration Change</a>
                        <a href="joining.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Joining</a>
                        <a href="transformation.html" class="text-left px-4 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors">Transformation</a>
                    </div>
                </div>

                <a href="comprehension.html" id="nav-comprehension" class="nav-btn px-5 py-2 rounded-full font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Comprehension</a>
                <a href="writings.html" id="nav-writings" class="nav-btn px-5 py-2 rounded-full font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Writings</a>
                <a href="feedback.html" id="nav-feedback" class="nav-btn px-5 py-2 rounded-full font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Feedback</a>
            </nav>

            <div class="flex items-center gap-3">
                <div id="auth-header-container" class="relative">
                    <button id="auth-nav-btn" onclick="handleAuthClick()" class="hidden sm:inline-flex px-5 py-2.5 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all items-center gap-1.5 focus:outline-none">
                        Sign In
                    </button>
                    <!-- User Profile Dropdown (Initially Hidden) -->
                    <div id="user-profile-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-2 z-50 flex-col">
                        <div class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700 mb-1">
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider">Signed In As</p>
                            <p id="user-display-name" class="font-bold text-sm text-slate-700 dark:text-slate-200 truncate mt-0.5"></p>
                        </div>
                        <button onclick="window.location.href='profile.html'" class="w-full text-left px-4 py-2.5 font-bold text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors mb-1">My Progress</button>
                        <button onclick="handleSignOut()" class="w-full text-left px-4 py-2.5 font-bold text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors">Sign Out</button>
                    </div>
                </div>

                <button onclick="toggleTheme()" class="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none" title="Toggle Theme">
                    <svg id="theme-icon-moon" class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <svg id="theme-icon-sun" class="w-5 h-5 block dark:hidden text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                </button>

                <button onclick="toggleMobileMenu()" class="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
    `;

    // 2. Inject Mobile Menu Sidebar
    const mobileMenuHTML = `
        <div id="mobile-menu-overlay" onclick="toggleMobileMenu()" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300"></div>
        <div id="mobile-menu-sidebar" class="fixed inset-y-0 right-0 w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col p-6 overflow-y-auto no-scrollbar border-l border-slate-100 dark:border-slate-800">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-black text-slate-900 dark:text-white">Menu</h2>
                <button onclick="toggleMobileMenu()" class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <div class="flex flex-col gap-2">
                <a href="index.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Home</a>
                <a href="full-tests.html" class="text-left px-4 py-3 rounded-xl font-black text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800">🏆 Full Length Tests</a>
                <a href="prepositions.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Prepositions</a>
                <a href="tenses.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Tenses</a>
                <a href="adjectives.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Adjectives</a>
                <a href="adverbs.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Adverbs</a>
                <a href="conjunctions.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Conjunctions</a>
                <a href="voice.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Voice Change</a>
                <a href="narration.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Narration Change</a>
                <a href="joining.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Joining</a>
                <a href="transformation.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Transformation</a>
                <a href="comprehension.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Comprehension</a>
                <a href="writings.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Writings</a>
                <a href="feedback.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Feedback</a>
                <a href="terms.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Terms & Conditions</a>
                <a href="privacy.html" class="text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Privacy Policy</a>
                <hr class="my-2 border-slate-100 dark:border-slate-800">
                <a id="profile-mobile-btn" href="profile.html" class="hidden text-left px-4 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">My Progress</a>
                <button id="auth-mobile-btn" onclick="toggleMobileMenu(); openAuthModal();" class="text-left px-4 py-3 rounded-xl font-black text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800">Sign In</button>
            </div>
        </div>
    `;

    // 3. Inject Footer
    const footerHTML = `
        <div class="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
            <div class="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500 dark:text-slate-400">
                <a href="privacy.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="terms.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms & Conditions</a>
                <a href="feedback.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
            
            <div class="flex flex-col items-center gap-2">
                <span class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Share Quizlish:</span>
                <div class="flex gap-4">
                    <button onclick="shareApp('whatsapp')" class="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-md transition-transform transform hover:-translate-y-1" title="Share on WhatsApp">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </button>
                    <button onclick="shareApp('facebook')" class="bg-[#1877F2] hover:bg-[#166fe5] text-white p-3 rounded-full shadow-md transition-transform transform hover:-translate-y-1" title="Share on Facebook">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // 4. Inject Auth Modal
    const authModalHTML = `
        <div id="auth-modal" class="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 opacity-0 pointer-events-none transition-all duration-300 hidden">
            <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-4xl h-auto max-h-[90vh] flex flex-col md:flex-row overflow-hidden transition-transform transform scale-95 duration-300 relative">
                
                <button onclick="closeAuthModal()" class="absolute top-6 right-6 p-2 rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-850 dark:hover:bg-rose-950/30 text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors z-50">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <!-- Left Pane: Form Container (58% width) -->
                <div class="w-full md:w-[58%] p-8 md:p-10 flex flex-col justify-center min-h-0 overflow-y-auto no-scrollbar text-left">
                    <div class="mb-8">
                        <h3 id="auth-modal-title" class="text-3xl font-black text-slate-900 dark:text-white">Welcome Back</h3>
                        <p id="auth-modal-subtitle" class="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">Enter your Quizlish account details.</p>
                    </div>

                    <form id="auth-form" onsubmit="handleAuthSubmit(event)" class="space-y-5">
                        <div id="auth-name-container" class="flex flex-col hidden">
                            <label class="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-1.5">Full Name</label>
                            <input type="text" id="auth-name-input" placeholder="John Doe" class="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl px-5 py-3.5 text-base focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/40 transition-all font-semibold placeholder-slate-400 dark:placeholder-slate-600">
                        </div>
                        
                        <div class="flex flex-col">
                            <label class="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-1.5">Email or Mobile Number</label>
                            <div class="flex gap-2">
                                <select id="auth-country-select" class="hidden bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl px-3 py-3.5 text-sm focus:outline-none focus:border-blue-600 transition-all font-bold w-44 text-left cursor-pointer no-scrollbar">
                                    <option value="+91" selected>🇮🇳 India (+91)</option>
                                    <option value="+880">🇧🇩 Bangladesh (+880)</option>
                                    <option value="+1">🇺🇸 United States (+1)</option>
                                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                                    <option value="+971">🇦🇪 UAE (+971)</option>
                                    <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                                    <option value="+60">🇲🇾 Malaysia (+60)</option>
                                    <option value="+65">🇸🇬 Singapore (+65)</option>
                                    <option value="+61">🇦🇺 Australia (+61)</option>
                                    <option value="+1">🇨🇦 Canada (+1)</option>
                                    <option value="+49">🇩🇪 Germany (+49)</option>
                                    <option value="+33">🇫🇷 France (+33)</option>
                                    <option value="+81">🇯🇵 Japan (+81)</option>
                                    <option value="+92">🇵🇰 Pakistan (+92)</option>
                                    <option value="+977">🇳🇵 Nepal (+977)</option>
                                    <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                                    <option value="+974">🇶🇦 Qatar (+974)</option>
                                    <option value="+968">🇴🇲 Oman (+968)</option>
                                    <option value="+965">🇰🇼 Kuwait (+965)</option>
                                    <option value="+973">🇧🇭 Bahrain (+973)</option>
                                    <option value="+90">🇹🇷 Turkey (+90)</option>
                                    <option value="+62">🇮🇩 Indonesia (+62)</option>
                                    <option value="+27">🇿🇦 South Africa (+27)</option>
                                    <option value="+55">🇧🇷 Brazil (+55)</option>
                                    <option value="+86">🇨🇳 China (+86)</option>
                                    <option value="+82">🇰🇷 South Korea (+82)</option>
                                </select>
                                <input type="text" id="auth-identifier-input" required placeholder="Enter email ID or mobile number" class="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl px-5 py-3.5 text-base focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/40 transition-all font-semibold placeholder-slate-400 dark:placeholder-slate-600">
                            </div>
                        </div>
                        
                        <div class="flex flex-col">
                            <label class="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-1.5">Password</label>
                            <input type="password" id="auth-password-input" required placeholder="••••••••" class="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl px-5 py-3.5 text-base focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/40 transition-all font-semibold placeholder-slate-400 dark:placeholder-slate-600">
                        </div>
                        
                        <button type="submit" id="auth-submit-btn" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-4 rounded-2xl shadow-lg transition-all transform active:scale-[0.99] mt-3">Sign In</button>
                    </form>

                    <div class="mt-8 text-center">
                        <button id="auth-switch-link" onclick="toggleAuthMode()" class="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Create an account</button>
                    </div>
                </div>

                <!-- Right Pane: Premium Value Proposition Panel -->
                <div class="hidden md:flex md:w-[42%] h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 flex-col justify-between text-left relative shrink-0 overflow-hidden border-l border-slate-100 dark:border-slate-850">
                    <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-[80px]"></div>
                    <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px]"></div>

                    <div class="space-y-2 z-10">
                        <span class="text-xs font-black uppercase tracking-widest text-blue-400">Quizlish Premium</span>
                        <h4 class="text-2xl font-extrabold text-white leading-tight">Elevate Your Language Skills</h4>
                    </div>

                    <div class="space-y-6 z-10">
                        <div class="flex gap-4 items-start">
                            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 text-lg">💡</div>
                            <div>
                                <h5 class="text-sm font-bold text-white">Instant Explanations</h5>
                                <p class="text-xs text-slate-400 leading-relaxed mt-1">Get precise guidance on incorrect answers instantly.</p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start">
                            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 text-lg">📈</div>
                            <div>
                                <h5 class="text-sm font-bold text-white">Track Scores & Progress</h5>
                                <p class="text-xs text-slate-400 leading-relaxed mt-1">Review performance, take history logs, and view averages.</p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start">
                            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-400 text-lg">🏆</div>
                            <div>
                                <h5 class="text-sm font-bold text-white">Full-Length Grammar Tests</h5>
                                <p class="text-xs text-slate-400 leading-relaxed mt-1">Standardized assessments covering over 10 grammatical fields.</p>
                            </div>
                        </div>
                    </div>

                    <div class="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-black z-10">
                        Join thousands of language learners worldwide.
                    </div>
                </div>

            </div>
        </div>
    `;

    // 5. Inject Floating Buttons
    const floatingButtonsHTML = `
        <!-- Floating Sign In / Profile Button -->
        <button id="floating-auth-btn" onclick="handleAuthClick()" class="fixed bottom-6 right-24 md:bottom-8 md:right-28 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-[0_10px_25px_rgba(16,185,129,0.5)] transition-transform transform hover:-translate-y-1 z-[100] flex items-center gap-2 group focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
            <span id="floating-auth-text" class="font-bold hidden group-hover:block whitespace-nowrap overflow-hidden transition-all duration-300">Sign In</span>
        </button>

        <button id="ai-chat-toggle-btn" onclick="toggleAIChat()" class="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-[0_10px_25px_rgba(79,70,229,0.5)] transition-transform transform hover:-translate-y-1 z-[100] flex items-center gap-2 group">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span class="font-bold hidden group-hover:block whitespace-nowrap overflow-hidden transition-all duration-300">Ask your tutor</span>
        </button>
    `;

    // 6. Inject AI Chat Window
    const chatWindowHTML = `
        <div id="ai-chat-window" class="fixed bottom-24 right-4 sm:right-6 md:bottom-28 md:right-8 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[75vh] bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 z-[100] flex-col overflow-hidden hidden transform transition-all duration-300 translate-y-4 opacity-0 scale-95">
            <div class="bg-indigo-600 p-4 text-white flex justify-between items-center shadow-md shrink-0">
                <div class="flex items-center gap-3">
                    <div class="bg-white/20 p-2 rounded-xl backdrop-blur-sm text-lg">✨</div>
                    <div>
                        <h3 class="font-black text-lg">Your AI Tutor</h3>
                        <p class="text-indigo-200 text-xs font-bold uppercase tracking-widest">Grammar Assistant</p>
                    </div>
                </div>
                <button onclick="toggleAIChat()" class="p-2 hover:bg-white/10 rounded-xl transition-colors text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div id="ai-chat-messages" class="flex-1 p-5 overflow-y-auto no-scrollbar flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/50 min-h-0">
                <div class="flex gap-3 max-w-[85%]">
                    <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-bold text-sm">AI</div>
                    <div class="bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-slate-700 dark:text-slate-200 text-sm font-medium leading-relaxed">
                        Hi there! 👋 I am your Quizlish AI Tutor. You can ask me to explain grammar rules, help you with writing, or clarify any test answers!
                    </div>
                </div>
            </div>

            <div id="ai-typing-indicator" class="px-5 pb-3 hidden shrink-0">
                <div class="flex gap-3 max-w-[85%]">
                    <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-bold text-sm">AI</div>
                    <div class="bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 p-3.5 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                        <div class="w-2 h-2 bg-indigo-400 rounded-full typing-dot"></div>
                        <div class="w-2 h-2 bg-indigo-400 rounded-full typing-dot"></div>
                        <div class="w-2 h-2 bg-indigo-400 rounded-full typing-dot"></div>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex gap-2 shrink-0">
                <input type="text" id="ai-chat-input" placeholder="Ask a grammar question..." class="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all" onkeypress="handleEnter(event)">
                <button onclick="handleSendButtonClick()" class="bg-indigo-600 hover:bg-indigo-700 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-colors shrink-0">
                    <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                </button>
            </div>
        </div>
    `;

    // Inject into body
    const headerContainer = document.querySelector('header');
    if (headerContainer) headerContainer.innerHTML = headerHTML;

    const footerContainer = document.querySelector('footer');
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // Body appends
    const div = document.createElement('div');
    div.innerHTML = mobileMenuHTML + authModalHTML + floatingButtonsHTML + chatWindowHTML;
    document.body.appendChild(div);
}

// Mobile sidebar controls
let menuOpen = false;
function toggleMobileMenu() {
    menuOpen = !menuOpen;
    const sidebar = document.getElementById('mobile-menu-sidebar');
    const overlay = document.getElementById('mobile-menu-overlay');
    if (!sidebar || !overlay) return;

    if (menuOpen) {
        overlay.classList.remove('hidden');
        setTimeout(() => { overlay.classList.remove('opacity-0'); sidebar.classList.remove('translate-x-full'); }, 10);
    } else {
        overlay.classList.add('opacity-0'); sidebar.classList.add('translate-x-full');
        setTimeout(() => { overlay.classList.add('hidden'); }, 300);
    }
}

// Theme manager
function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Initial theme apply
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Auth modal helper actions
function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.remove('pointer-events-none');
    detectCountryCode();
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
    }, 10);
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.classList.add('pointer-events-none');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('auth-form').reset();
        const selector = document.getElementById('auth-country-select');
        if (selector) selector.classList.add('hidden');
    }, 300);
}

function setAuthTab(tab) {
    const switchLink = document.getElementById('auth-switch-link');
    const title = document.getElementById('auth-modal-title');
    const subtitle = document.getElementById('auth-modal-subtitle');
    const nameContainer = document.getElementById('auth-name-container');
    const nameInput = document.getElementById('auth-name-input');
    const submitBtn = document.getElementById('auth-submit-btn');

    if (tab === 'signup') {
        isSignUpMode = true;
        if (switchLink) switchLink.innerText = 'Log in instead';
        title.innerText = 'Create Account';
        subtitle.innerText = 'Sign up to save progress and track scores.';
        nameContainer.classList.remove('hidden');
        nameInput.required = true;
        submitBtn.innerText = 'Sign Up';
    } else {
        isSignUpMode = false;
        if (switchLink) switchLink.innerText = 'Create an account';
        title.innerText = 'Welcome Back';
        subtitle.innerText = 'Enter your Quizlish account details.';
        nameContainer.classList.add('hidden');
        nameInput.required = false;
        submitBtn.innerText = 'Sign In';
    }
}

function toggleAuthMode() {
    setAuthTab(isSignUpMode ? 'signin' : 'signup');
}

function handleAuthClick() {
    const user = getLoggedInUser();
    if (user) {
        const dropdown = document.getElementById('user-profile-dropdown');
        dropdown.classList.toggle('hidden');
        dropdown.classList.toggle('flex');
    } else {
        openAuthModal();
    }
}

// Dynamic Country Code box trigger
function setupAuthListeners() {
    const idInput = document.getElementById('auth-identifier-input');
    const countrySelect = document.getElementById('auth-country-select');
    if (idInput && countrySelect) {
        idInput.addEventListener('input', function() {
            const val = this.value.trim();
            if (/^\d/.test(val)) {
                countrySelect.classList.remove('hidden');
            } else {
                countrySelect.classList.add('hidden');
            }
        });
    }
}

// Detect client geolocation
async function detectCountryCode() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data && data.country_calling_code) {
            const selector = document.getElementById('auth-country-select');
            if (selector) {
                selector.value = data.country_calling_code;
            }
        }
    } catch (e) {
        console.warn("Country code geolocation failed:", e);
    }
}

// Login/Registration submit handler
async function handleAuthSubmit(event) {
    event.preventDefault();
    if (!supabaseClient) {
        alert("Database is currently initializing or unavailable. Please try again later.");
        return;
    }

    const identifier = document.getElementById('auth-identifier-input').value.trim();
    const password = document.getElementById('auth-password-input').value;
    const submitBtn = document.getElementById('auth-submit-btn');
    
    submitBtn.disabled = true;
    submitBtn.innerText = isSignUpMode ? 'Signing Up...' : 'Signing In...';

    const isEmail = identifier.includes('@') || /^[a-zA-Z]/.test(identifier);
    const authPayload = {};
    if (isEmail) {
        authPayload.email = identifier;
    } else {
        const countryCode = document.getElementById('auth-country-select').value;
        const cleanNumber = identifier.replace(/^0+/, '');
        authPayload.phone = countryCode + cleanNumber;
    }
    authPayload.password = password;

    try {
        if (isSignUpMode) {
            const name = document.getElementById('auth-name-input').value;
            const signUpPayload = { ...authPayload };
            if (!isEmail) {
                // Supabase needs email parameter or fake email fallback for phone auth compatibility
                signUpPayload.email = `${authPayload.phone}@quizlish.in`;
            }
            signUpPayload.options = { data: { full_name: name } };

            const { data, error } = await supabaseClient.auth.signUp(signUpPayload);
            if (error) throw error;
            alert("Signup successful! You are now logged in.");
        } else {
            const signInPayload = { ...authPayload };
            if (!isEmail) {
                signInPayload.email = `${authPayload.phone}@quizlish.in`;
            }
            const { data, error } = await supabaseClient.auth.signInWithPassword(signInPayload);
            if (error) throw error;
        }
        closeAuthModal();
    } catch (err) {
        alert("Authentication Failed: " + err.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = isSignUpMode ? 'Sign Up' : 'Sign In';
    }
}

// Sign out trigger
async function handleSignOut() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
        window.location.href = 'index.html';
    }
}

// Fetch user status
function getLoggedInUser() {
    return currentUser;
}

// Sync DOM controls to current user Auth status
function syncAuthState() {
    const user = getLoggedInUser();
    const navBtn = document.getElementById('auth-nav-btn');
    const mobileBtn = document.getElementById('auth-mobile-btn');
    const profileMobileBtn = document.getElementById('profile-mobile-btn');
    const displayName = document.getElementById('user-display-name');
    const frontBtn = document.getElementById('auth-front-btn');
    const floatingAuthText = document.getElementById('floating-auth-text');

    if (user) {
        if (navBtn) {
            navBtn.innerHTML = `
                <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-black text-xs shrink-0">${user.name.charAt(0).toUpperCase()}</span>
                <span class="truncate max-w-[100px]">${user.name}</span>
            `;
            navBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'text-white');
            navBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-slate-700');
        }
        
        if (mobileBtn) {
            mobileBtn.innerHTML = `Sign Out (${user.name})`;
            mobileBtn.classList.remove('text-blue-600', 'dark:text-blue-400');
            mobileBtn.classList.add('text-rose-600', 'dark:text-rose-400');
            mobileBtn.setAttribute('onclick', 'handleSignOut()');
        }

        if (profileMobileBtn) profileMobileBtn.classList.remove('hidden');

        if (frontBtn) {
            frontBtn.innerText = 'My Dashboard';
            frontBtn.setAttribute('onclick', "window.location.href='profile.html'");
        }

        if (floatingAuthText) {
            floatingAuthText.innerText = 'My Progress';
        }

        if (displayName) displayName.innerText = user.name;
    } else {
        if (navBtn) {
            navBtn.innerHTML = 'Sign In';
            navBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
            navBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-slate-700');
        }
        
        if (mobileBtn) {
            mobileBtn.innerHTML = 'Sign In';
            mobileBtn.classList.add('text-blue-600', 'dark:text-blue-400');
            mobileBtn.classList.remove('text-rose-600', 'dark:text-rose-400');
            mobileBtn.setAttribute('onclick', 'toggleMobileMenu(); openAuthModal();');
        }

        if (profileMobileBtn) profileMobileBtn.classList.add('hidden');

        if (frontBtn) {
            frontBtn.innerText = 'Sign In';
            frontBtn.setAttribute('onclick', 'openAuthModal()');
        }

        if (floatingAuthText) {
            floatingAuthText.innerText = 'Sign In';
        }
    }
}

// Initialize Supabase State listeners
if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (session && session.user) {
            const identifier = session.user.email || session.user.phone || '';
            currentUser = {
                name: (session.user.user_metadata && session.user.user_metadata.full_name) || identifier.split('@')[0],
                email: identifier
            };
        } else {
            currentUser = null;
        }
        syncAuthState();
        
        // Dispatch global custom event for local page state reactions
        window.dispatchEvent(new CustomEvent('auth-changed', { detail: currentUser }));
    });
}

// Click outside profile dropdown handler
window.addEventListener('click', function(e) {
    const container = document.getElementById('auth-header-container');
    const dropdown = document.getElementById('user-profile-dropdown');
    if (container && !container.contains(e.target) && dropdown) {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
    }
});

// Run injections on load safely
function runSharedInit() {
    injectSharedLayout();
    setupAuthListeners();
    syncAuthState();
}
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(runSharedInit, 1);
} else {
    document.addEventListener('DOMContentLoaded', runSharedInit);
}

// --- AI TUTOR CHAT ENGINE (SHARED ACCROSS ALL PAGES) ---
function toggleAIChat() {
    chatOpen = !chatOpen;
    const windowEl = document.getElementById('ai-chat-window');
    if(!windowEl) return;
    
    if(chatOpen) {
        windowEl.classList.remove('hidden');
        windowEl.classList.add('flex');
        setTimeout(() => {
            windowEl.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
        }, 10);
    } else {
        windowEl.classList.add('opacity-0', 'scale-95', 'translate-y-4');
        setTimeout(() => {
            windowEl.classList.add('hidden');
            windowEl.classList.remove('flex');
        }, 300);
    }
}

function handleEnter(event) {
    if(event.key === 'Enter') handleSendButtonClick();
}

function handleSendButtonClick() {
    const input = document.getElementById('ai-chat-input');
    const text = input.value.trim();
    if(!text) return;
    
    appendMessage(text, 'user');
    input.value = '';
    
    const indicator = document.getElementById('ai-typing-indicator');
    indicator.classList.remove('hidden');
    
    // Simulate smart grammar reply
    setTimeout(() => {
        indicator.classList.add('hidden');
        let reply = "I'm analyzing that grammatical question. Could you clarify which quiz number or rule you are referencing? I'm here to explain prepositions, voice change, narrations, or composition drafts!";
        if(/preposition/i.test(text)) {
            reply = "Prepositions show directions, locations, or time. For example: 'in' is for months/years, 'on' is for days/dates, and 'at' is for specific hours. Remember: she is good AT math!";
        } else if(/voice/i.test(text)) {
            reply = "To change active voice to passive voice: Swap the subject and object, insert the appropriate 'be' verb (is, was, been), and convert the main verb to the past participle (V3) form.";
        } else if(/site name/i.test(text) || /quizlish\.in/i.test(text) || /correct/i.test(text)) {
            reply = "Yes, I understand! The website domain name has been successfully corrected. The sitemap and all link structures are fully updated to quizlish.in (instead of .com).";
        }
        appendMessage(reply, 'ai');
    }, 1500);
}

function appendMessage(text, sender) {
    const container = document.getElementById('ai-chat-messages');
    if(!container) return;
    
    const msg = document.createElement('div');
    msg.className = sender === 'user' ? "flex gap-3 max-w-[85%] ml-auto justify-end" : "flex gap-3 max-w-[85%]";
    
    if(sender === 'user') {
        msg.innerHTML = `
            <div class="bg-indigo-600 text-white p-3.5 rounded-2xl rounded-tr-none shadow-md text-sm font-medium leading-relaxed text-left">
                ${text}
            </div>
            <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">Me</div>
        `;
    } else {
        msg.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-bold text-sm">AI</div>
            <div class="bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-slate-700 dark:text-slate-200 text-sm font-medium leading-relaxed text-left">
                ${text}
            </div>
        `;
    }
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

// Sharing functions
function shareApp(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Master English Grammar with Quizlish! Try out the 50-question full-length mock tests now. ");
    
    if(platform === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank');
    } else if(platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
}
