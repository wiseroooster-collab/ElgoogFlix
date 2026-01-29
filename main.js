// main.js - Local Storage Version (No Firebase Needed)

let currentUser = JSON.parse(localStorage.getItem('luxe_user')) || null;
let activeProfile = localStorage.getItem('luxe_active_profile') || "Admin";

// --- 1. SIMPLE ACCOUNT SYSTEM ---
window.handleAuthSubmit = () => {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPassword').value;
    
    if (email && pass) {
        const user = { email: email };
        localStorage.setItem('luxe_user', JSON.stringify(user));
        currentUser = user;
        location.reload(); // Refresh to show profile picker
    } else {
        alert("Please enter details");
    }
};

window.logout = () => {
    localStorage.removeItem('luxe_user');
    location.reload();
};

// --- 2. PROFILE & FAVORITES LOGIC ---
window.selectProfile = (name) => {
    activeProfile = name;
    localStorage.setItem('luxe_active_profile', name);
    document.getElementById('profileOverlay').classList.add('hidden');
    renderFavorites();
};

window.toggleFavorite = (movieId) => {
    const favKey = `luxe_favs_${activeProfile}`;
    let favorites = JSON.parse(localStorage.getItem(favKey)) || [];
    
    if (favorites.includes(movieId)) {
        favorites = favorites.filter(id => id !== movieId);
    } else {
        favorites.push(movieId);
    }
    
    localStorage.setItem(favKey, JSON.stringify(favorites));
    renderFavorites();
    renderGrid(movieData); // Refresh main grid to update heart icons
};

// --- 3. RENDERING ---
function renderFavorites() {
    const favKey = `luxe_favs_${activeProfile}`;
    const favoriteIds = JSON.parse(localStorage.getItem(favKey)) || [];
    const section = document.getElementById('favoritesSection');
    const grid = document.getElementById('favoritesGrid');

    if (favoriteIds.length > 0) {
        section.classList.remove('hidden');
        const favMovies = Object.values(movieData).filter(m => favoriteIds.includes(m.id));
        grid.innerHTML = favMovies.map(m => renderMovieCard(m)).join('');
    } else {
        section.classList.add('hidden');
    }
}

function renderMovieCard(item) {
    const favKey = `luxe_favs_${activeProfile}`;
    const favorites = JSON.parse(localStorage.getItem(favKey)) || [];
    const isFav = favorites.includes(item.id);

    return `
        <div class="movie-card group relative cursor-pointer transition-all duration-300">
            <button onclick="event.stopPropagation(); toggleFavorite('${item.id}')" 
                    class="absolute top-2 right-2 z-30 p-2 bg-black/60 rounded-full hover:scale-110 transition">
                <svg class="w-4 h-4 ${isFav ? 'text-red-600' : 'text-white'}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
                </svg>
            </button>
            <div onclick="handlePlay('${item.id}')" class="aspect-[2/3] rounded-lg overflow-hidden border border-white/10">
                <img src="${item.imageUrl}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            </div>
        </div>
    `;
}

// --- INITIALIZE ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    if (currentUser) {
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('profileOverlay').classList.remove('hidden');
    } else {
        document.getElementById('loginModal').classList.remove('hidden');
    }
    window.logout = () => {
    // Clear the current session
    localStorage.removeItem('luxe_user');
    localStorage.removeItem('luxe_active_profile');
    
    // Optional: Clear specific profile favorites if you want a total reset
    // Otherwise, leave them so they are there when the user logs back in
    
    location.reload(); // Returns user to the login screen
};

// Update the nav profile image based on active profile
function updateNavUI() {
    const navImg = document.getElementById('navProfileImg');
    if (activeProfile === "Admin") {
        navImg.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
    } else {
        navImg.src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png";
    }
}
});
