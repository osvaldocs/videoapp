// Content data - exact same as React version
const contentData = [
    {
        title: "50 Best Places to Visit in Europe - Travel Guide",
        channel: "TourTopia",
        views: "1.5K",
        timeAgo: "1 year ago",
        duration: "56:33",
        thumbnail: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=225&fit=crop&crop=faces",
        category: "EUROPE PLACES"
    },
    {
        title: "Tyra - Water (Official Music Video)",
        channel: "Tyra",
        views: "20M",
        timeAgo: "3 weeks ago",
        duration: "3:40",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop&crop=faces"
    },
    {
        title: "RM - Wild Flower (with youjeen) Official Music Video",
        channel: "HYBE",
        views: "10M",
        timeAgo: "7 months ago",
        duration: "3:23",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop&crop=faces"
    }
];

// Initialize sidebar icons
function initSidebar() {
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    
    sidebarButtons.forEach((btn, index) => {
        const iconName = btn.dataset.icon;
        btn.innerHTML = `<i class="bi bi-${iconName}"></i>`;
        
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            sidebarButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
        });
    });
}

// Initialize category tabs
function initCategoryTabs() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
        });
    });
}

// Generate content cards
function generateContentCards() {
    const contentGrid = document.getElementById('content-grid');
    
    contentData.forEach((content, index) => {
        const cardHtml = `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="content-card">
                    <div class="card-container">
                        <div class="card-thumbnail">
                            <img src="${content.thumbnail}" alt="${content.title}" loading="lazy">
                            ${content.category ? `
                                <div class="card-category">${content.category}</div>
                            ` : ''}
                            <div class="card-duration">${content.duration}</div>
                            <div class="card-overlay">
                                <div class="play-button">
                                    <i class="bi bi-play-fill" style="margin-left: 2px;"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card-content">
                            <h3 class="card-title">${content.title}</h3>
                            
                            <div class="card-channel">
                                <div class="card-channel-icon">
                                    ${content.channel.charAt(0)}
                                </div>
                                <span class="card-channel-name">${content.channel}</span>
                            </div>
                            
                            <div class="card-meta">
                                <div class="card-views">
                                    <i class="bi bi-eye"></i>
                                    <span>${content.views} views</span>
                                </div>
                                <span>•</span>
                                <span>${content.timeAgo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentGrid.innerHTML += cardHtml;
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Here you would implement actual search functionality
            alert(`Searching for: "${query}"`);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Hero button functionality
function initHeroButton() {
    const heroBtn = document.querySelector('.hero-btn');
    
    heroBtn.addEventListener('click', () => {
        console.log('Start Watching clicked');
        alert('Starting video playback...');
    });
}

// Content card click handlers
function initContentCards() {
    document.addEventListener('click', (e) => {
        const contentCard = e.target.closest('.content-card');
        if (contentCard) {
            const title = contentCard.querySelector('.card-title').textContent;
            console.log('Content clicked:', title);
            alert(`Playing: "${title}"`);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initCategoryTabs();
    generateContentCards();
    initSearch();
    initHeroButton();
    initContentCards();
    
    console.log('Streaming platform initialized successfully!');
});

// Handle responsive behavior
function handleResize() {
    const sidebar = document.querySelector('.streaming-sidebar');
    const header = document.querySelector('.streaming-header');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
        // Mobile behavior
        sidebar.style.width = '0';
        header.style.left = '0';
        mainContent.style.marginLeft = '0';
    } else {
        // Desktop behavior
        sidebar.style.width = '64px';
        header.style.left = '64px';
        mainContent.style.marginLeft = '64px';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);