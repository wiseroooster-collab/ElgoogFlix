// main.js - The Brain of LUXE
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaU9_HHzPg4jCl_yJogevUuZvOHbyeU3o",
  authDomain: "elgoogflix-a558a.firebaseapp.com",
  databaseURL: "https://elgoogflix-a558a-default-rtdb.firebaseio.com",
  projectId: "elgoogflix-a558a",
  storageBucket: "elgoogflix-a558a.firebasestorage.app",
  messagingSenderId: "1084840010379",
  appId: "1:1084840010379:web:1c179c91158be95f77ea8e",
  measurementId: "G-NQBCKG67R9"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let currentUser = null;
let activeProfile = "Admin"; // Default

// --- 1. AUTHENTICATION ---
window.handleAuthSubmit = () => {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPassword').value;
    const isLoginMode = document.getElementById('authTitle').innerText === 'Sign In';

    if (isLoginMode) {
        signInWithEmailAndPassword(auth, email, pass).catch(err => alert(err.message));
    } else {
        createUserWithEmailAndPassword(auth, email, pass).then(() => alert("Account Created!")).catch(err => alert(err.message));
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('profileOverlay').classList.remove('hidden');
    } else {
        document.getElementById('loginModal').classList.remove('hidden');
    }
});

// --- 2. FAVORITES (MY LIST) ---
window.toggleFavorite = (movieId) => {
    if (!currentUser) return;
    const favRef = ref(db, `users/${currentUser.uid}/profiles/${activeProfile}/favorites/${movieId}`);
    onValue(favRef, (snapshot) => {
        if (snapshot.exists()) { remove(favRef); } 
        else { set(favRef, true); }
    }, { onlyOnce: true });
};

const syncFavorites = () => {
    const favsRef = ref(db, `users/${currentUser.uid}/profiles/${activeProfile}/favorites`);
    onValue(favsRef, (snapshot) => {
        const favoriteIds = snapshot.val() ? Object.keys(snapshot.val()) : [];
        const section = document.getElementById('favoritesSection');
        const grid = document.getElementById('favoritesGrid');
        
        if (favoriteIds.length > 0) {
            section.classList.remove('hidden');
            const favMovies = Object.values(movieData).filter(m => favoriteIds.includes(m.id));
            grid.innerHTML = favMovies.map(m => renderMovieCard(m)).join('');
        } else {
            section.classList.add('hidden');
        }
    });
};

// --- 3. CORE UI LOGIC ---
window.selectProfile = (name) => {
    activeProfile = name;
    document.getElementById('profileOverlay').classList.add('hidden');
    syncFavorites(); // Load the cloud list for this profile
};

// Helper for rendering cards (used by main grid and favorites)
const renderMovieCard = (item) => `
    <div class="movie-card group relative cursor-pointer transition-all">
        <button onclick="event.stopPropagation(); toggleFavorite('${item.id}')" class="absolute top-2 right-2 z-20 p-2 bg-black/40 rounded-full">
            <svg class="w-4 h-4 text-white hover:text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
        </button>
        <div onclick="handlePlay('${item.id}')" class="aspect-[2/3] rounded-lg overflow-hidden border border-white/10">
            <img src="${item.imageUrl}" class="w-full h-full object-cover">
        </div>
    </div>
`;
