// ========================================
// MOCK DATA & CONSTANTS
// ========================================

// Load categories mapping (in production, this would be fetched from server)
let categoriesMap = {
  categories: {},
  subcategories: {},
  status: {}
};

let USER_BASE_URL = ""

// Fallback function to initialize categories if fetch fails
function initializeCategoriesMapFallback() {
    categoriesMap = {
        categories: {
            1: { id: 1, name: "Account" },
            2: { id: 2, name: "Road" },
            3: { id: 3, name: "Water Supply" },
            4: { id: 4, name: "Waste" },
            5: { id: 5, name: "Electricity" },
            6: { id: 6, name: "Public" },
            7: { id: 7, name: "Sewage" },
            8: { id: 8, name: "Street Lighting" },
            9: { id: 9, name: "Drainage" },
            10: { id: 10, name: "Traffic" },
            11: { id: 11, name: "Public Safety" },
            12: { id: 12, name: "Parks" },
            13: { id: 13, name: "Encroachment" },
            14: { id: 14, name: "Pollution" },
            15: { id: 15, name: "Construction" },
            16: { id: 16, name: "Animals" },
            17: { id: 17, name: "Government Services" },
            18: { id: 18, name: "Toilets" },
            19: { id: 19, name: "Other" }
        },
        subcategories: {
            // 1. Account Management
            1: { id: 1, name: "Login Assistance", categoryId: 1 },
            2: { id: 2, name: "Signup Assistance", categoryId: 1 },
            3: { id: 3, name: "Password Reset", categoryId: 1 },
            4: { id: 4, name: "Account Verification", categoryId: 1 },
            5: { id: 5, name: "Other Accounts Assistance", categoryId: 1 },

            // 2. Road & Infrastructure
            6: { id: 6, name: "Pothole", categoryId: 2 },
            7: { id: 7, name: "Road Damage", categoryId: 2 },
            8: { id: 8, name: "Footpath Issue", categoryId: 2 },
            9: { id: 9, name: "Bridge Damage", categoryId: 2 },
            10: { id: 10, name: "Lane Marking Issue", categoryId: 2 },

            // 3. Water Supply
            11: { id: 11, name: "No Water Supply", categoryId: 3 },
            12: { id: 12, name: "Water Leakage", categoryId: 3 },
            13: { id: 13, name: "Low Water Pressure", categoryId: 3 },
            14: { id: 14, name: "Contaminated Water", categoryId: 3 },

            // 4. Waste Management
            15: { id: 15, name: "Garbage Not Collected", categoryId: 4 },
            16: { id: 16, name: "Garbage Dump", categoryId: 4 },
            17: { id: 17, name: "Overflowing Dustbin", categoryId: 4 },
            18: { id: 18, name: "Improper Waste Disposal", categoryId: 4 },
            19: { id: 19, name: "Recycling Issue", categoryId: 4 },

            // 5. Electricity
            20: { id: 20, name: "Power Outage", categoryId: 5 },
            21: { id: 21, name: "Frequent Power Cuts", categoryId: 5 },
            22: { id: 22, name: "Electric Pole Damage", categoryId: 5 },
            23: { id: 23, name: "Loose or Exposed Wiring", categoryId: 5 },

            // 6. Public Health
            24: { id: 24, name: "Disease Spread", categoryId: 6 },
            25: { id: 25, name: "Mosquito Breeding", categoryId: 6 },
            26: { id: 26, name: "Food Safety Issue", categoryId: 6 },
            27: { id: 27, name: "Dead Animal", categoryId: 6 },

            // 7. Sanitation & Sewage
            28: { id: 28, name: "Sewage Overflow", categoryId: 7 },
            29: { id: 29, name: "Blocked Sewer", categoryId: 7 },
            30: { id: 30, name: "Open Drain", categoryId: 7 },
            31: { id: 31, name: "Foul Smell", categoryId: 7 },

            // 8. Street Lighting
            32: { id: 32, name: "Street Light Not Working", categoryId: 8 },
            33: { id: 33, name: "Flickering Street Light", categoryId: 8 },
            34: { id: 34, name: "Damaged Light Pole", categoryId: 8 },

            // 9. Drainage & Flooding
            35: { id: 35, name: "Water Logging", categoryId: 9 },
            36: { id: 36, name: "Blocked Drain", categoryId: 9 },
            37: { id: 37, name: "Overflowing Drain", categoryId: 9 },
            38: { id: 38, name: "Flooded Road", categoryId: 9 },

            // 10. Traffic & Transportation
            39: { id: 39, name: "Traffic Jam", categoryId: 10 },
            40: { id: 40, name: "Traffic Signal Not Working", categoryId: 10 },
            41: { id: 41, name: "Illegal Parking", categoryId: 10 },
            42: { id: 42, name: "Road Obstruction", categoryId: 10 },

            // 11. Public Safety
            43: { id: 43, name: "Open Manhole", categoryId: 11 },
            44: { id: 44, name: "Unsafe Structure", categoryId: 11 },
            45: { id: 45, name: "Theft-Prone Area", categoryId: 11 },

            // 12. Parks & Recreation
            46: { id: 46, name: "Park Maintenance Issue", categoryId: 12 },
            47: { id: 47, name: "Broken Equipment", categoryId: 12 },
            48: { id: 48, name: "Park Cleanliness Issue", categoryId: 12 },

            // 13. Encroachment
            49: { id: 49, name: "Footpath Encroachment", categoryId: 13 },
            50: { id: 50, name: "Illegal Street Occupation", categoryId: 13 },

            // 14. Pollution
            51: { id: 51, name: "Air Pollution", categoryId: 14 },
            52: { id: 52, name: "Water Pollution", categoryId: 14 },
            53: { id: 53, name: "Noise Pollution", categoryId: 14 },
            54: { id: 54, name: "Dust Pollution", categoryId: 14 },

            // 15. Illegal Construction
            55: { id: 55, name: "Unauthorized Building", categoryId: 15 },
            56: { id: 56, name: "Construction Without Permit", categoryId: 15 },

            // 16. Stray Animals
            57: { id: 57, name: "Stray Dogs", categoryId: 16 },
            58: { id: 58, name: "Cattle on Road", categoryId: 16 },
            59: { id: 59, name: "Animal Attack", categoryId: 16 },

            // 17. Government Services
            60: { id: 60, name: "Service Delay", categoryId: 17 },
            61: { id: 61, name: "Staff Misconduct", categoryId: 17 },
            62: { id: 62, name: "Document Issue", categoryId: 17 },

            // 18. Public Toilets
            63: { id: 63, name: "Unclean Toilet", categoryId: 18 },
            64: { id: 64, name: "No Water in Toilet", categoryId: 18 },
            65: { id: 65, name: "Toilet Maintenance Issue", categoryId: 18 },

            // 19. Other
            66: { id: 66, name: "General Complaint", categoryId: 19 },
            67: { id: 67, name: "Uncategorized Issue", categoryId: 19 },
            68: { id: 68, name: "Unspecified Request", categoryId: 19 }
        },
        status: {
            1: { id: 1, name: "Open", color: "#ef4444" },
            2: { id: 2, name: "In Progress", color: "#f59e0b" },
            3: { id: 3, name: "Resolved", color: "#10b981" }
        }
    };
    console.log("Fallback categories initialized:", categoriesMap);
}


const categoryMap = {
    '': null,
    'account': 1,
    'road': 2,
    'water': 3,
    'waste': 4,
    'electricity': 5,
    'public': 6,
    'sewage': 7,
    'street-lighting': 8,
    'drainage': 9,
    'traffic': 10,
    'public-safety': 11,
    'parks': 12,
    'encroachment': 13,
    'pollution': 14,
    'construction': 15,
    'animals': 16,
    'government-services': 17,
    'toilets': 18,
    'other': 19
};

const statusMap = {
    '': null,
    'open': 1,
    'in-progress': 2,
    'resolved': 3
};

let complaintsData = complaint_list()

// Mapping functions to get category/subcategory/status names
function getCategoryName(categoryId) {
    const cat = categoriesMap.categories[categoryId];
    return cat?.name || 'Other';
}

function getSubcategoryName(subcategoryId) {
    const subcat = categoriesMap.subcategories[subcategoryId];
    return subcat?.name || 'Miscellaneous';
}

function getStatusName(statusId) {
    const status = categoriesMap.status[statusId];
    return status?.name || 'Open';
}

function getCategoryIdByName(name) {
    return Object.values(categoriesMap.categories).find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
    )?.id || 19;
}

function getSubcategoryByName(name) {
    return Object.values(categoriesMap.subcategories).find(
        sub => sub.name.toLowerCase() === name.toLowerCase()
    ) || 68;
}

// ========================================
// STATE MANAGEMENT
// ========================================

let appState = {
    isLoggedIn: false,
    currentUser: { id: 1, name: "John Doe" },
    selectedComplaintId: null,
    filteredComplaints: complaintsData,
    filterState: {
        categoryId: null,
        subcategoryId: null,
        location: "",
        maxDistance: 5, // in km
        statusId: null,
        myComplaints: false,
        showAll: false,
        timeRange: ""
    },
    userLocation: null,
    chart: null,
    markers: [],
    tourStepIndex: 0
};

const SESSION_LOCATION_KEY = 'civicUserLocation';
const SESSION_TOUR_KEY = 'civicUserTourSeen';
const tourSteps = [
    {
        text: 'To file a complaint login/register on the website from here.',
        getTarget: () => document.querySelectorAll('.navbar-right')[0]
    },
    {
        text: 'File complaint from right handside comment box. Just write down your complaint in comment box.',
        getTarget: () => window.innerWidth <= 1024
            ? document.querySelector('#mobileChatInput')
            : document.querySelector('#ChatInput')
    },
    {
        text: 'See all complaints in left box.',
        getTarget: () => document.querySelector('#complaintsList')
    },
    {
        text: 'Filter it using above filter options.',
        getTarget: () => window.innerWidth <= 1024
            ? document.querySelector('#mobileFilterDropdown .mobile-filter-dropdown-content') || document.querySelector('#mobileFilterBtn')
            : document.querySelector('#navbarCenter')
    },
    {
        text: 'See complaints near your area and complaints graph.',
        getTarget: () => document.querySelectorAll('.main-content')[0]
    }
];

// ========================================
// GEOLOCATION & DISTANCE CALCULATION
// ========================================

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function getStoredSessionLocation() {
    try {
        const storedLocation = sessionStorage.getItem(SESSION_LOCATION_KEY);
        if (!storedLocation) {
            return null;
        }

        const parsedLocation = JSON.parse(storedLocation);
        if (
            typeof parsedLocation?.latitude === 'number' &&
            typeof parsedLocation?.longitude === 'number'
        ) {
            return parsedLocation;
        }
    } catch (error) {
        console.warn('Unable to read stored session location:', error);
    }

    return null;
}

function storeSessionLocation(location) {
    try {
        sessionStorage.setItem(SESSION_LOCATION_KEY, JSON.stringify(location));
    } catch (error) {
        console.warn('Unable to store session location:', error);
    }
}

function getStatusColor(statusId) {
    return categoriesMap.status[statusId]?.color || '#2563eb';
}

function getUserLocation() {
    return new Promise((resolve, reject) => {
        const storedLocation = getStoredSessionLocation();
        if (storedLocation) {
            appState.userLocation = storedLocation;
            resolve(storedLocation);
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLoc = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    appState.userLocation = userLoc;
                    storeSessionLocation(userLoc);
                    resolve(userLoc);
                },
                error => {
                    console.warn('Geolocation error:', error);
                    appState.userLocation = { latitude: 21.1458, longitude: 79.0882 }; // Fallback to Nagpur
                    storeSessionLocation(appState.userLocation);
                    resolve(appState.userLocation);
                }
            );
        } else {
            console.warn('Geolocation not supported');
            appState.userLocation = { latitude: 21.1458, longitude: 79.0882 }; // Fallback to Nagpur
            storeSessionLocation(appState.userLocation);
            resolve(appState.userLocation);
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================

$(document).ready(function() {
    console.log("CitizenCare System Initialized");

    complaint_list().then(complaints => {
        complaintsData = complaints
        console.log("Complaints acquired:", complaints);
        // Initialize fallback categories immediately (will be overwritten if fetch succeeds)
        initializeCategoriesMapFallback();

        // If user already loggedin
        initializeUserSetup()
        renderPushMessages()
        
        
        // Get user location first
        getUserLocation().then(userLoc => {
            console.log("User location acquired:", userLoc);

            // Initialize Event Listeners
            initializeEventListeners();
            
            // Set up auth UI
            updateAuthUI();
            populateFilterDropdowns();
            applyFilters(); // Apply default filter based on user location
            initializeChart();
            initializeMap();
            setTimeout(startTourIfNeeded, 400);
        });

    });
    
});

// ========================================
// EVENT LISTENERS
// ========================================

async function initializeUserSetup(){
    await isUserLoggedIn()
    if (appState.isLoggedIn) {
        $(".user-dropdown").hide()
        user = JSON.parse(localStorage.getItem("user"))
        if (user.email_verified) {
            $(".verify-email").hide()
        }
        if (user.phone_verified) {
            $(".verify-phone").remove()
        }
    }else{
        $(".user-dropdown").show()
    }
}

function initializeEventListeners() {
    // Filter Events - using the navbar filters
    $('#categoryFilter').on('change', handleCategoryChange);
    $('#subcategoryFilter').on('change', handleManualFilterChange);
    $('#locationFilter').on('input', handleLocationInput);
    $('#locationFilter').on('focus', showLocationSuggestions);
    $(document).on('click', '#locationSuggestions .location-suggestion', handleLocationSelect);
    $('#statusFilter').on('change', handleManualFilterChange);
    $('#myComplaintsToggle').on('change', handleManualFilterChange);
    $('#showAllBtn').on('click', handleShowAll);
    $('body').on('click', '#complaintResolved', function(){
        isUserLoggedIn()
        if (!appState.isLoggedIn){
            addPushMessage("You must need to login first to file a complaint.", "ai-response")
            openAuthModal('login');
            return
        }
        user = JSON.parse(localStorage.getItem("user"))
        const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
        if (complaint.complainer == user.id){
            updateComplaintStatus(complaint.id, 3)
        }
    });
    
    
    // Mobile Filter Events
    $('#categoryFilterMobile').on('change', handleCategoryChangeMobile);
    $('#subcategoryFilterMobile').on('change', handleManualFilterChangeMobile);
    $('#locationFilterMobile').on('input', handleLocationInputMobile);
    $('#locationFilterMobile').on('focus', showLocationSuggestionsMobile);
    $(document).on('click', '#locationSuggestionsMobile .location-suggestion', handleLocationSelectMobile);
    $('#statusFilterMobile').on('change', handleManualFilterChangeMobile);
    $('#myComplaintsToggleMobile').on('change', handleManualFilterChangeMobile);
    $('#showAllBtnMobile').on('click', handleShowAllMobile);
    
    // Auth Events  
    $('#loginBtn').on('click', function() { openAuthModal('login'); });
    $('#registerBtn').on('click', function() { openAuthModal('register'); });
    $('#logoutBtn2').on('click', handleLogout);
    $('.verify-email').on('click', handleVerifyEmail);
    $('#profileBtn').on('click', toggleProfileDropdown);
    
    // Modal Events
    $('#authModalClose').on('click', closeAuthModal);
    $('#authModal').on('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
        }
    });
    
    // Auth Tab Events
    $('.auth-tab-btn').on('click', function() {
        const tab = $(this).data('tab');
        $('.auth-tab-btn').removeClass('active');
        $('.auth-tab-content').removeClass('active');
        $(this).addClass('active');
        $(`#${tab}Tab`).addClass('active');
    });

    // Auth Tab Events
    $('.reset-new-password-btn').on('click', function() {
        $btn = $(this)
        const password = $('input[type="password"]').val();
        const token = $('input[type="hidden"]').val();

        if (!password) {
            alert('Please enter the password');
            return;
        }

        handleResetPassword($btn, password, token);
        
    });
    
    // Auth Submit Buttons
    $('.auth-submit-btn').on('click', function() {
        const activeTab = $('.auth-tab-btn.active').data('tab');
        const $btn = $(this);
        
        if (activeTab === 'login') {
            const email = $btn.closest('.auth-tab-content').find('input[type="email"]').val();
            const password = $btn.closest('.auth-tab-content').find('input[type="password"]').val();
            
            if (!email || !password) {
                alert('Please enter email and password');
                return;
            }
            
            handleLogin($btn, email, password);
        } else if (activeTab === 'register') {
            const name = $btn.closest('.auth-tab-content').find('input[type="text"]').val();
            const email = $btn.closest('.auth-tab-content').find('input[type="email"]').val();
            const password = $btn.closest('.auth-tab-content').find('input[type="password"]').eq(0).val();
            const phone = $btn.closest('.auth-tab-content').find('.register-phone').val();

            if (!name || !email || !password || !phone) {
                alert('Please fill all fields');
                return;
            }
                        
            handleRegister($btn, name, email, password, phone);
        } else if (activeTab === 'forgot') {
            const email = $btn.closest('.auth-tab-content').find('input[type="email"]').val();
            
            if (!email) {
                alert('Please enter your email');
                return;
            }
            
            handleForgotPassword($btn, email);
        }
    });
    
    // Chat Events
    $('#chatSendBtn').on('click', sendMessage);
    $('#chatAttachBtn').on('click', function() {
        $('#fileInput').click();
    });
    $('#fileInput').on('change', handleFileUpload);
    $('#ChatInput').on('keypress', function(e) {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const value = $(this).val();

            $(this).val(
                value.substring(0, start) + "\n" + value.substring(end)
            );

            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
    
    // Mobile Chat Events
    $('#mobileChatSendBtn').on('click', sendMobileMessage);
    $('#mobileChatAttachBtn').on('click', function() {
        $('#mobileFileInput').click();
    });
    $('#mobileFileInput').on('change', handleMobileFileUpload);
    $('#mobileChatInput').on('keypress', function(e) {
        if (e.which === 13) {
            sendMobileMessage();
        }
    });
    
    // Chart Controls
    $('.chart-btn').on('click', function() {
        const chartType = $(this).data('chart');
        changeChartView(chartType);
        
        $('.chart-btn').removeClass('active');
        $(this).addClass('active');
    });
    
    // Close filter dropdown when clicking outside
    $(document).on('click', function(e) {
        const $dropdown = $('#mobileFilterDropdown');
        const $btn = $('#mobileFilterBtn');
        
        if ($dropdown.hasClass('active') && 
            !$dropdown.has(e.target).length && 
            !$btn.has(e.target).length) {
            // closeFilterMenu();
        }
    });

    // New Complaint Button (navbar)
    $('.btn-new-complaint-navbar').on('click', handleNewComplaint);
    
    // Mobile Menu & Filter Events
    $('#mobileFilterBtn').on('click', toggleFilterMenu);
    $('#mobileFilterCloseBtn').on('click', closeFilterMenu);
    $('#restartTourBtn').on('click', function() {
        openTourGuide(0);
    });
    $('#tourNextBtn').on('click', goToNextTourStep);
    $('#tourPrevBtn').on('click', goToPreviousTourStep);
    $('#tourSkipBtn').on('click', closeTourGuide);
    
    // Complaint list selection
    $(document).on('click', '.complaint-item', function(e) {
        const complaintId = $(this).data('id');
        selectComplaint(complaintId);
        
        // On mobile, show and scroll to comment section
        if ($(window).width() <= 1024) {
            $('#mobileCommentSection').show();
            setTimeout(() => {
                $('#mobileCommentSection').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });
    
    // Close menus when window resizes
    $(window).on('resize', handleWindowResize);
    $(window).on('resize scroll', positionTourStep);
    handleWindowResize();
}

// ========================================
// COMPLAINT LIST RENDERING
// ========================================

function renderComplaintsList() {
    const $list = $('#complaintsList');
    $list.empty();
    
    if (!appState.filteredComplaints || appState.filteredComplaints.length === 0) {
        $list.html('<li class="empty-state"><span class="empty-icon">ðŸ“­</span><p>No complaints found</p></li>');
        return;
    }
    
    // Sort complaints by creation date (newest first)
    const sortedComplaints = [...appState.filteredComplaints].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
    sortedComplaints.forEach(complaint => {
        const categoryName = getCategoryName(complaint.categoryId);
        const statusName = getStatusName(complaint.statusId);
        const $item = $(`
            <li class="complaint-item status-${complaint.statusId}" data-id="${complaint.id}">
                <div class="complaint-item-title">${complaint.title}</div>
                <div class="complaint-item-meta">
                    <span class="complaint-category">${categoryName.toUpperCase()}</span>
                    <span class="status-badge status-${complaint.statusId}">${statusName}</span>
                </div>
            </li>
        `);
        
        $item.on('click', function() {
            selectComplaint(complaint.id);
        });
        
        $list.append($item);
    });
    
    // Highlight selected complaint
    if (appState.selectedComplaintId) {
        $(`.complaint-item[data-id="${appState.selectedComplaintId}"]`).addClass('active');
    }
}

// ========================================
// COMPLAINT SELECTION & DETAILS
// ========================================

function selectComplaint(complaintId) {
    appState.selectedComplaintId = complaintId;
    const complaint = complaintsData.find(c => c.id === complaintId);
    
    if (!complaint) return;
    
    // Update UI
    setChatMode(true);
    renderComplaintsList();
    handleAjaxReq(
        USER_BASE_URL + "/get-comments/" + parseInt(complaint.id),
        "GET",
        "application/json",
        null,
        null,
        (response) => {
            if (response.json){
                user = JSON.parse(localStorage.getItem("user"))
                response.json.forEach(function(val, key){
                    response.json[key].text = val.comment
                    response.json[key].own = (response.json[key].userId == user.id) ? true : false
                })
                complaint.comments = response.json
            }
            renderComplaintDetails(complaint);
            renderCommentMessages(complaint);
            
            // Update mobile UI
            renderMobileComplaintDetails(complaint);
            renderMobileCommentMessages(complaint);
            
            updateMapMarker(complaint);
        }
    )
    
}

function clearComplaintSelectionUI() {
    setChatMode(false);
    $('#complaintTitle').text('Select a complaint to view details');
    $('#statusIndicator').removeClass('status-1 status-2 status-3');
    $('#detailsContent').html(`
        <div class="empty-state">
            <span class="empty-icon">👆</span>
            <p>Adjust the filters or pick a complaint from the list.</p>
        </div>
    `);
    $('#chatMessages').html(`
        <div class="empty-state">
            <span class="empty-icon">💭</span>
            <p>No comments yet</p>
        </div>
    `);
    $('#filedOnDate, #lastUpdateDate').text('');

    $('#mobileComplaintTitle').text('Select a complaint to view details');
    $('#mobileStatusIndicator').removeClass('status-1 status-2 status-3');
    $('#mobileDetailsContent').html(`
        <div class="empty-state">
            <span class="empty-icon">👆</span>
            <p>Adjust the filters or pick a complaint from the list.</p>
        </div>
    `);
    $('#mobileChatMessages').html(`
        <div class="empty-state">
            <span class="empty-icon">💭</span>
            <p>No comments yet</p>
        </div>
    `);
    $('#mobileFiledOnDate, #mobileLastUpdateDate').text('');
}

function setChatMode(isCommentMode) {
    if (isCommentMode) {
        $('#chatTitle').text('Comments');
        $('#mobileChatTitle').text('Comments');
        $('#ChatInput').attr("placeholder", 'Your Comments');
        $('#mobileChatInput').attr("placeholder", 'Your Comments');
        return;
    }

    $('#chatTitle').text('New Complaint');
    $('#mobileChatTitle').text('New Complaint');
    $('#ChatInput').attr("placeholder", 'Your Query');
    $('#mobileChatInput').attr("placeholder", 'Your Query');
}

function renderComplaintDetails(complaint) {
    const $content = $('#detailsContent');
    const $titleHeader = $('#complaintTitle');
    const $statusIndicator = $('#statusIndicator');
    
    // Update title and status indicator
    $titleHeader.text(complaint.title);
    $statusIndicator.removeClass('status-1 status-2 status-3').addClass(`status-${complaint.statusId}`);
    
    const categoryName = getCategoryName(complaint.categoryId);
    const subcategoryName = getSubcategoryName(complaint.subcategoryId);
    
    let html = `
        <div class="detail-item">
            <div class="detail-label">Category</div>
            <div class="detail-value">${categoryName} / ${subcategoryName}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Location</div>
            <div class="detail-value">${complaint.location}</div>
        </div>
        <div class="detail-item" style="width: 100%; margin-bottom: 8px;">
            <div class="detail-label">Description</div>
            <div class="detail-value">${complaint.description}</div>
        </div>
    `;

    if ([1,2].includes(complaint.statusId)){
        html += `
            <div class="detail-item" style="width: 100%; margin-bottom: 8px;">
                <div class="detail-value">Complaint Resolved? <a href="#" id="complaintResolved">Yes</a></div>
            </div>
        `
    }
    
    $content.html(html);
    
    // Update chat header dates
    const filedDate = new Date(complaint.createdAt).toLocaleDateString();
    $('#filedOnDate').text(filedDate);
    
    // Get last comment date or use filed date if no comments
    let lastUpdateDate = filedDate;
    if (complaint.comments && complaint.comments.length > 0) {
        const lastComment = complaint.comments[complaint.comments.length - 1];
        lastUpdateDate = lastComment.timestamp || filedDate;
    }
    $('#lastUpdateDate').text(lastUpdateDate);
}

// ========================================
// CHAT FUNCTIONALITY
// ========================================

function renderCommentMessages(complaint) {
    const $chatMessages = $('#chatMessages');
    $chatMessages.empty();
    
    if (!complaint.comments || complaint.comments.length === 0) {
        $chatMessages.html(`
            <div class="empty-state">
                <span class="empty-icon">💭</span>
                <p>No comments yet. Be the first to comment!</p>
            </div>
        `);
        return;
    }
    
    complaint.comments.forEach(comment => {
        
        let file = JSON.parse(comment.file);

        const fileInfo = file != "" ? `<div style="font-size: 11px; color: var(--color-primary); margin-top: 4px;"> ${file.name} (${(file.size / 1024).toFixed(1)}KB)</div>` : '';
        let file_render = "";
        if (["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(file.type)) {
            file_render = `<a target="_blank" href='${file.path}'><img src='${file.path}' width='60%' alt='${file.name}'/></a><br>`;
        }

        const $message = $(`
            <div class="chat-message ${comment.own ? 'own' : ''}">
                <div class="message-avatar">${comment.user.charAt(0)}</div>
                <div class="message-content">
                    <div class="message-author">${comment.user}</div>
                    <div class="message-text">${file_render}${comment.text}${fileInfo}</div>
                </div>
            </div>
        `);
        
        $chatMessages.append($message);
    });
    
    // Update last update date in header
    const lastComment = complaint.comments[complaint.comments.length - 1];
    if (lastComment) {
        $('#lastUpdateDate').text(lastComment.timestamp || new Date().toLocaleDateString());
    }
    
    // Auto scroll to bottom
    $chatMessages.scrollTop($chatMessages[0].scrollHeight);
}

function complaint_list(){
    return new Promise((resolve, reject) => {
        console.log("Fetching complaints from server...", Date.now());
        handleAjaxReq(
            USER_BASE_URL+'/all-complaints', "GET", 'application/json',
            null, // no payload
            null, // default timeout
            (response) => {
                complaintsData = response.json
                console.log("Complaints fetched:", Date.now());
                resolve(response.json);
                return
            }
        );
    });
}

async function sendMessage() {
    isUserLoggedIn()
    if (!appState.isLoggedIn) {
        addPushMessage("You must need to login first to file a complaint.", "ai-response")
        openAuthModal('login');
        return
    }
    const $input = $('#ChatInput')
    const message = $('#ChatInput').val();
    
    if (!message) return;

    const file_path = "file-path";
    const comments = [];
    let coords = JSON.parse(sessionStorage.getItem(SESSION_LOCATION_KEY))

    coords = coords ? [coords.latitude, coords.longitude] : null

    user = JSON.parse(localStorage.getItem("user"))

    $('#typingIndicator').show();
    setTimeout(function() {
        $('#typingIndicator').text('writing....');
    }, 2500);

    current_time = new Date().toISOString().split('T')[0]

    if (appState.selectedComplaintId) {
        let comment = { 
            user: user.name,
            userId: user.id,
            complaintId: appState.selectedComplaintId,
            comment: message,
            file: ""
        };
        await handleAjaxReq(
            USER_BASE_URL+'/add-comment', "POST", 'application/json',
            JSON.stringify(comment),
            null, // default timeout
            (response) => {
                const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
                if (!complaint) return;
                if (!complaint.comments) complaint.comments = []
                response.json.text = response.json.comment
                complaint.comments.push(response.json);
                $input.val('');
                renderCommentMessages(complaint);
                updateComplaintStatus(complaint.id, 2)
            }
        );
        return
    }

    addPushMessage("Wait for few seconds.\nI am trying to get some information to help you faster.", "ai-response");
    $input.val('');

    await handleAjaxReq(
        USER_BASE_URL+'/ai-query', "POST", 'application/json',
        JSON.stringify({
            query: message,
            messages: comments,
            file: file_path || null,
            coord: coords
        }),
        120000,
        (response) => {
            $('#typingIndicator').text('verifing.....');
            $('#typingIndicator').hide();
            try{
                json_response = JSON.parse(response.content);
                json_response = JSON.parse(json_response.response);
            }catch (error){
                addPushMessage("Try adding some mroe details to your query.\nThat might help officer to solve it sooner.", "ai-response");
                $input.val(message);
                console.error("AI Response Error:", error);
            }

            if (!json_response.resolution) {
                addPushMessage("Try adding some mroe details to your query.\nThat might help officer to solve it sooner.", "ai-response");
                $input.val(message);
                return
            }

            addPushMessage("Our nearby officer will responde you as soon as possible.\n"+json_response.resolution, "ai-response");
            json_response.precaution.forEach((precaution, index) => {
                setTimeout(function(){
                    addPushMessage("Precaution "+(index+1)+" : "+precaution, "ai-response");
                }, (index+1)*2000);
            });

            if (!appState.selectedComplaintId) {
                // Create new complaint
                subcat = getSubcategoryByName(json_response.subcategory);
                cat = subcat.categoryId;
                complaint_data = {
                    title: json_response.improved_query,
                    categoryId: cat,
                    subcategoryId: subcat.id,
                    city: json_response.location.location_address.city,
                    statusId: 1, // Open
                    description: json_response.query,
                    location: json_response.location.location_address.address,
                    latitude: coords[0],
                    longitude: coords[1],
                    createdAt: current_time,
                    userId: user ? user.id : null,
                    file_path: "",
                    comments: []
                }
                createBasicComplaint(complaint_data);
                return;
            }

            addPushMessage(json_response.resolution, "ai-response");
        }
    )

    const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
    if (!complaint) return;
    
    // Add comment to complaint
    complaint.comments.push({
        id: complaint.comments.length + 1,
        user: appState.currentUser.name,
        text: message,
        own: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        file: null
    });
    
    // Clear input and refresh comments
    $input.val('');
    renderCommentMessages(complaint);
}

function updateComplaintStatus(complaintId, statusId){
    isUserLoggedIn()
    if (!appState.isLoggedIn){
        addPushMessage("You must need to login first to file a complaint.", "ai-response")
        openAuthModal('login');
        return;
    }
    user = JSON.parse(localStorage.getItem("user"))
    handleAjaxReq(
        USER_BASE_URL+"/complaint-update",
        'POST',
        'application/json',
        JSON.stringify({
            "id": complaintId,
            "statusId": statusId,
            "complainer": user.id
        }),
        null,
        (response) => {
            console.log(response)
        }
    )
}

async function handleAjaxReq(endpoint, type, content_type, payload = null, timeout = null, callback, processData = null){
    let req = {};

    if (endpoint) req.url = endpoint;
    if (type) req.type = type;

    if (payload instanceof FormData) {
        req.processData = false;
        req.contentType = false;
    } else {
        if (content_type !== null) req.contentType = content_type;
        if (processData !== null) req.processData = processData;
    }

    if (payload) req.data = payload;
    if (timeout) req.timeout = timeout;

    req.success = function(response) {
        callback(response);
    };

    req.error = function(xhr, status, error) {
        console.error(xhr.responseText);
    };

    $.ajax(req);
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    isUserLoggedIn()
    if (!appState.isLoggedIn) {
        addPushMessage("You must need to login first to file a complaint.", "ai-response")
        openAuthModal('login');
        return;
    }

    user = localStorage.getItem("user")
    user = JSON.parse(user)
    
    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        alert('File size exceeds 5MB limit');
        return;
    }
    
    if (!appState.selectedComplaintId) {
        alert('Please select a complaint first');
        return;
    }
    
    const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
    if (!complaint) return;

    let formData = new FormData();
    formData.append("file", file);
    formData.append("complaintId", complaint.id);

    handleAjaxReq(
        USER_BASE_URL + '/upload-file',
        'POST',
        false,
        formData,
        null,
        (response) => {
            console.log(response)
            let comment = {
                user: user.name,
                userId: user.id,
                complaintId: appState.selectedComplaintId,
                comment: "<a target='_blank' href='" + response+"'>Attached File</a>",
                file: JSON.stringify({
                    'size': file.size,
                    'type': file.type,
                    'name': file.name,
                    'path': response
                })
            };
            console.log(file)
            handleAjaxReq(
                USER_BASE_URL + '/add-comment', "POST", 'application/json',
                JSON.stringify(comment),
                null, // default timeout
                (response) => {
                    const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
                    if (!complaint) return;
                    if (!complaint.comments) complaint.comments = []
                    response.json.text = response.json.comment
                    response.json.own = true
                    complaint.comments.push(response.json);
                    renderCommentMessages(complaint);
                    updateComplaintStatus(complaint.id, 2)
                }
            );
            addPushMessage("Wait for few seconds.\nI am trying to get some information to help you faster.", "ai-response");
            return;
        },
        false
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createBasicComplaint(newComplaint) {
    $('#typingIndicator').show();
    $('#typingIndicator').text('filing complaint....');

    newComplaint["complainer"] = newComplaint.userId
    newComplaint["officer"] = 0

    await sleep(5000)
    
    $.ajax({
        url: USER_BASE_URL+'/complaint-register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newComplaint),
        timeout: 120000,
        success: function(response) {
            $('#typingIndicator').text('verifing.....');
            $('#typingIndicator').hide();
            console.log(response.json)
            newComplaint = response.json

            complaintsData.unshift(newComplaint);
            appState.filteredComplaints.unshift(newComplaint);
            selectComplaint(newComplaint.id);
            renderComplaintsList();
            updateChart();
            renderMapMarkers();
            populateFilterDropdowns();
            updateMapMarker(newComplaint)
            
        },
        error: function(xhr, status, error) {
            if (status === 'timeout') {
                alert('Request timeout. Server may not be running.');
            } else {
                alert('Unable process: ' + (xhr.responseJSON?.message || error || 'Unknown error'));
            }
            $('#typingIndicator').text('verifing.....');
            $('#typingIndicator').hide();
        }
    });

    
    
}

// ========================================
// DYNAMIC FILTER POPULATION
// ========================================

function getAvailableCategories() {
    const categoryIds = new Set(complaintsData.map(c => c.categoryId));
    const categories = [];
    categoryIds.forEach(catId => {
        const cat = categoriesMap.categories[catId];
        if (cat) {
            categories.push({ id: catId, name: cat.name});
        }
    });
    return categories.sort((a, b) => a.id - b.id);
}

function getAvailableSubcategories(categoryId = null) {
    let subcategoryIds = new Set();
    
    if (categoryId) {
        // Get subcategories only for the selected category
        const filteredComplaints = complaintsData.filter(c => c.categoryId === parseInt(categoryId));
        subcategoryIds = new Set(filteredComplaints.map(c => c.subcategoryId));
    } else {
        // Get all subcategories
        subcategoryIds = new Set(complaintsData.map(c => c.subcategoryId));
    }
    
    const subcategories = [];
    subcategoryIds.forEach(subcatId => {
        const subcat = categoriesMap.subcategories[subcatId];
        if (subcat) {
            subcategories.push({ id: subcatId, name: subcat.name, categoryId: subcat.categoryId });
        }
    });
    return subcategories.sort((a, b) => a.id - b.id);
}

function getAvailableCities() {
    const cities = [...new Set(complaintsData.map(c => c.location))];
    return cities.filter(city => city && city.length > 0).sort();
}

function getLocationSuggestions(searchTerm) {
    if (!searchTerm || searchTerm.trim().length === 0) {
        return [];
    }
    
    const allLocations = [...new Set(complaintsData.map(c => c.location))];
    return allLocations.filter(loc => 
        loc && loc.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
}

function getAvailableStatuses() {
    const statusIds = new Set(complaintsData.map(c => c.statusId));
    const statuses = [];
    statusIds.forEach(statusId => {
        const status = categoriesMap.status[statusId];
        if (status) {
            statuses.push({ id: statusId, name: status.name, color: status.color });
        }
    });
    return statuses.sort((a, b) => a.id - b.id);
}

function populateFilterDropdowns() {
    const categories = getAvailableCategories();
    const $categoryFilter = $('#categoryFilter');
    const $categoryFilterMobile = $('#categoryFilterMobile');
    const selectedCategory = $categoryFilter.val();
    const selectedCategoryMobile = $categoryFilterMobile.val();

    $categoryFilter.empty().append('<option value="">Category</option>');
    $categoryFilterMobile.empty().append('<option value="">Category</option>');

    categories.forEach(cat => {
        const option = `<option value="${Object.keys(categoryMap).find(k => categoryMap[k] === cat.id)}">${cat.name}</option>`;
        $categoryFilter.append(option);
        $categoryFilterMobile.append(option);
    });

    $categoryFilter.val(selectedCategory);
    $categoryFilterMobile.val(selectedCategoryMobile);

    const statuses = getAvailableStatuses();
    const $statusFilter = $('#statusFilter');
    const $statusFilterMobile = $('#statusFilterMobile');
    const selectedStatus = $statusFilter.val();
    const selectedStatusMobile = $statusFilterMobile.val();
    const statusKeys = Object.keys(statusMap).filter(k => statusMap[k] !== null);

    $statusFilter.empty().append('<option value="">Status</option>');
    $statusFilterMobile.empty().append('<option value="">Status</option>');

    statuses.forEach(status => {
        const statusKey = statusKeys.find(k => statusMap[k] === status.id);
        if (statusKey) {
            const option = `<option value="${statusKey}">${status.name}</option>`;
            $statusFilter.append(option);
            $statusFilterMobile.append(option);
        }
    });

    $statusFilter.val(selectedStatus);
    $statusFilterMobile.val(selectedStatusMobile);

    updateSubcategoryFilter(categoryMap[$categoryFilter.val()]);
    updateSubcategoryFilterMobile(categoryMap[$categoryFilterMobile.val()]);
}

function updateSubcategoryFilter(categoryId = null) {
    const subcategories = getAvailableSubcategories(categoryId);
    const $subcategoryFilter = $('#subcategoryFilter');
    
    // Clear and keep only placeholder
    $subcategoryFilter.empty();
    $subcategoryFilter.append('<option value="">Subcategory</option>');
    
    // Add subcategories
    subcategories.forEach(subcat => {
        $subcategoryFilter.append(`<option value="${subcat.id}">${subcat.name}</option>`);
    });
}

function handleLocationInput() {
    clearShowAllState();
    showLocationSuggestions.call(this);
    applyFilters();
}

function showLocationSuggestions() {
    const searchTerm = $(this).val();
    const $suggestionsDiv = $(this).closest('.navbar-filter-group').find('.location-suggestions');
    
    if (!searchTerm || searchTerm.trim().length === 0) {
        $suggestionsDiv.hide();
        return;
    }
    
    const suggestions = getLocationSuggestions(searchTerm);
    $suggestionsDiv.empty();
    
    if (suggestions.length === 0) {
        $suggestionsDiv.html('<div class="location-suggestion">No suggestions found</div>');
    } else {
        suggestions.forEach(location => {
            $suggestionsDiv.append(`<div class="location-suggestion">${location}</div>`);
        });
    }
    
    $suggestionsDiv.show();
}

function handleLocationSelect(e) {
    const selectedLocation = $(this).text();
    $(this).closest('.navbar-filter-group').find('input').val(selectedLocation);
    $(this).closest('.location-suggestions').hide();
    clearShowAllState();
    applyFilters();
}

function handleLocationInputMobile() {
    clearShowAllState();
    showLocationSuggestionsMobile.call(this);
    applyFiltersMobile();
}

function showLocationSuggestionsMobile() {
    const searchTerm = $(this).val();
    const $suggestionsDiv = $(this).closest('.navbar-filter-group').find('.location-suggestions');
    
    if (!searchTerm || searchTerm.trim().length === 0) {
        $suggestionsDiv.hide();
        return;
    }
    
    const suggestions = getLocationSuggestions(searchTerm);
    $suggestionsDiv.empty();
    
    if (suggestions.length === 0) {
        $suggestionsDiv.html('<div class="location-suggestion">No suggestions found</div>');
    } else {
        suggestions.forEach(location => {
            $suggestionsDiv.append(`<div class="location-suggestion">${location}</div>`);
        });
    }
    
    $suggestionsDiv.show();
}

function handleLocationSelectMobile(e) {
    const selectedLocation = $(this).text();
    $(this).closest('.navbar-filter-group').find('input').val(selectedLocation);
    $(this).closest('.location-suggestions').hide();
    clearShowAllState();
    applyFiltersMobile();
}

function handleCategoryChange() {
    const categoryValue = $(this).val();
    const categoryId = categoryMap[categoryValue];
    
    // Update subcategory dropdown based on selected category
    updateSubcategoryFilter(categoryId);
    updateSubcategoryFilterMobile(categoryId);
    $('#subcategoryFilterMobile').val('');
    clearShowAllState();
    applyFilters();
}

function setShowAllState(isChecked) {
    $('#showAllBtn').toggleClass('active', isChecked).attr('aria-pressed', isChecked);
    $('#showAllBtnMobile').toggleClass('active', isChecked).attr('aria-pressed', isChecked);
}

function clearShowAllState() {
    setShowAllState(false);
}

function resetFiltersToDefault() {
    $('#categoryFilter').val('');
    $('#categoryFilterMobile').val('');
    $('#statusFilter').val('');
    $('#statusFilterMobile').val('');
    $('#locationFilter').val('');
    $('#locationFilterMobile').val('');
    $('#myComplaintsToggle').prop('checked', false);
    $('#myComplaintsToggleMobile').prop('checked', false);

    updateSubcategoryFilter();
    updateSubcategoryFilterMobile();
    $('#subcategoryFilter').val('');
    $('#subcategoryFilterMobile').val('');
    $('#timeFilter').val('');
}

function handleManualFilterChange() {
    clearShowAllState();
    applyFilters();
}

function handleManualFilterChangeMobile() {
    clearShowAllState();
    applyFiltersMobile();
}

function handleShowAll() {
    const isChecked = !$('#showAllBtn').hasClass('active');

    if (isChecked) {
        resetFiltersToDefault();
        setShowAllState(true);
    } else {
        setShowAllState(false);
    }

    applyFilters();
}

function handleTimeFilterChange() {
    clearShowAllState();
    applyFilters();
}

function syncDesktopFiltersToMobile() {
    $('#categoryFilterMobile').val($('#categoryFilter').val());
    $('#statusFilterMobile').val($('#statusFilter').val());
    $('#subcategoryFilterMobile').val($('#subcategoryFilter').val());
    $('#locationFilterMobile').val($('#locationFilter').val());
    $('#myComplaintsToggleMobile').prop('checked', $('#myComplaintsToggle').is(':checked'));
}

function syncMobileFiltersToDesktop() {
    $('#categoryFilter').val($('#categoryFilterMobile').val());
    $('#statusFilter').val($('#statusFilterMobile').val());
    $('#subcategoryFilter').val($('#subcategoryFilterMobile').val());
    $('#locationFilter').val($('#locationFilterMobile').val());
    $('#myComplaintsToggle').prop('checked', $('#myComplaintsToggleMobile').is(':checked'));
}

function buildFilterState(source = 'desktop') {
    const isMobile = source === 'mobile';
    const categoryValue = $(isMobile ? '#categoryFilterMobile' : '#categoryFilter').val();
    const statusValue = $(isMobile ? '#statusFilterMobile' : '#statusFilter').val();
    const subcategoryValue = $(isMobile ? '#subcategoryFilterMobile' : '#subcategoryFilter').val();
    const location = $(isMobile ? '#locationFilterMobile' : '#locationFilter').val().trim();
    const myComplaints = $(isMobile ? '#myComplaintsToggleMobile' : '#myComplaintsToggle').is(':checked');
    const showAll = $(isMobile ? '#showAllBtnMobile' : '#showAllBtn').hasClass('active');
    const timeRange = $('#timeFilter').val();

    return {
        categoryId: categoryMap[categoryValue],
        subcategoryId: subcategoryValue ? parseInt(subcategoryValue, 10) : null,
        location,
        maxDistance: 5,
        statusId: statusMap[statusValue],
        myComplaints,
        showAll,
        timeRange
    };
}

function getFilterReferenceDate() {
    return complaintsData.reduce((latestDate, complaint) => {
        const complaintDate = new Date(complaint.createdAt);
        return complaintDate > latestDate ? complaintDate : latestDate;
    }, new Date(complaintsData[0].createdAt));
}

function matchesTimeRange(createdAt, timeRange) {
    if (!timeRange) {
        return true;
    }

    const complaintDate = new Date(createdAt);
    const referenceDate = getFilterReferenceDate();
    const rangeStart = new Date(referenceDate);
    rangeStart.setHours(0, 0, 0, 0);

    if (timeRange === 'today') {
        return complaintDate >= rangeStart;
    }

    const dayRangeMap = {
        last3days: 2,
        lastWeek: 6,
        lastMonth: 29,
        lastYear: 364
    };

    const daysToSubtract = dayRangeMap[timeRange];
    if (daysToSubtract === undefined) {
        return true;
    }

    rangeStart.setDate(rangeStart.getDate() - daysToSubtract);
    return complaintDate >= rangeStart;
}

function matchesComplaintFilters(complaint, filterState) {
    if (filterState.categoryId && complaint.categoryId !== filterState.categoryId) {
        return false;
    }

    if (filterState.subcategoryId && complaint.subcategoryId !== filterState.subcategoryId) {
        return false;
    }

    if (filterState.location && complaint.location !== filterState.location) {
        return false;
    }

    if (filterState.statusId && complaint.statusId !== filterState.statusId) {
        return false;
    }

    if (filterState.myComplaints && complaint.userId !== appState.currentUser.id) {
        return false;
    }

    if (!matchesTimeRange(complaint.createdAt, filterState.timeRange)) {
        return false;
    }

    return true;
}

function getNearbyComplaints(complaints, filterState) {
    if (filterState.location || !appState.userLocation) {
        return complaints;
    }

    return complaints.filter(complaint => {
        const distance = calculateDistance(
            appState.userLocation.latitude,
            appState.userLocation.longitude,
            complaint.latitude,
            complaint.longitude
        );

        return distance <= filterState.maxDistance;
    });
}

function finalizeFilteredResults(filteredComplaints, filterState) {
    appState.filterState = { ...filterState };
    appState.filteredComplaints = filteredComplaints;
    let selectionCleared = false;
    const shouldPreserveSelection = Boolean(filterState.timeRange);

    if (
        !shouldPreserveSelection &&
        appState.selectedComplaintId &&
        !filteredComplaints.some(complaint => complaint.id === appState.selectedComplaintId)
    ) {
        appState.selectedComplaintId = null;
        selectionCleared = true;
    }

    renderComplaintsList();
    renderMapMarkers();
    updateChart();

    if (selectionCleared) {
        clearComplaintSelectionUI();
    }
}

function runFilters(source = 'desktop') {
    if (source === 'mobile') {
        syncMobileFiltersToDesktop();
    } else {
        syncDesktopFiltersToMobile();
    }

    const filterState = buildFilterState(source);
    const manuallyFilteredComplaints = complaintsData.filter(complaint => matchesComplaintFilters(complaint, filterState));
    const nearbyComplaints = getNearbyComplaints(manuallyFilteredComplaints, filterState);

    if (!filterState.showAll && !filterState.location && appState.userLocation) {
        if (nearbyComplaints.length > 0) {
            setShowAllState(false);
            finalizeFilteredResults(nearbyComplaints, { ...filterState, showAll: false });
            return;
        }

        setShowAllState(true);
        finalizeFilteredResults(manuallyFilteredComplaints, { ...filterState, showAll: true });
        return;
    }

    setShowAllState(filterState.showAll);
    finalizeFilteredResults(manuallyFilteredComplaints, filterState);
}

function applyFilters() {
    runFilters('desktop');
}

// Mobile Filter Functions - sync with desktop filters
function handleCategoryChangeMobile() {
    const categoryValue = $(this).val();
    const categoryId = categoryMap[categoryValue];
    
    // Update subcategory dropdown based on selected category
    updateSubcategoryFilterMobile(categoryId);
    updateSubcategoryFilter(categoryId);
    $('#subcategoryFilter').val('');
    
    // Sync with desktop filter
    $('#categoryFilter').val(categoryValue);
    clearShowAllState();
    
    applyFiltersMobile();
}

function updateSubcategoryFilterMobile(categoryId = null) {
    const subcategories = getAvailableSubcategories(categoryId);
    const $subcategoryFilter = $('#subcategoryFilterMobile');
    const selectedSubcategory = $subcategoryFilter.val();
    
    $subcategoryFilter.empty();
    $subcategoryFilter.append('<option value="">Subcategory</option>');

    subcategories.forEach(subcat => {
        $subcategoryFilter.append(`<option value="${subcat.id}">${subcat.name}</option>`);
    });

    $subcategoryFilter.val(selectedSubcategory);
}

function applyFiltersMobile() {
    runFilters('mobile');
}

function handleShowAllMobile() {
    const isChecked = !$('#showAllBtnMobile').hasClass('active');

    if (isChecked) {
        resetFiltersToDefault();
        setShowAllState(true);
    } else {
        setShowAllState(false);
    }

    applyFiltersMobile();
    closeFilterMenu();
}

// ========================================
// MAP FUNCTIONALITY
// ========================================

let leafletMap = null;

function getMarkerColor(statusId) {
    const statusColors = {
        1: '#ef4444',   // Red - Open
        2: '#f59e0b',   // Yellow - In Progress
        3: '#10b981'    // Green - Resolved
    };
    return statusColors[statusId] || '#6b7280';
}

function createMarkerIcon(color) {
    return L.divIcon({
        html: `<div style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">●</div>`,
        iconSize: [32, 32],
        className: 'custom-marker'
    });
}

function createSelectedMarkerIcon(color) {
    return L.divIcon({
        html: `<div style="background-color: ${color}; width: 48px; height: 48px; border-radius: 50%; border: 4px solid #fff; box-shadow: 0 0 0 3px ${color}, 0 4px 8px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px;">●</div>`,
        iconSize: [48, 48],
        className: 'custom-marker-selected'
    });
}

function initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map element not found');
        return;
    }

    try {
        const userLocation = appState.userLocation || { latitude: 21.1458, longitude: 79.0882 };
        const mapCenter = [userLocation.latitude, userLocation.longitude];
        
        leafletMap = L.map(mapElement).setView(mapCenter, 12);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(leafletMap);

        // Calculate bounds for 10 km radius around user location
        const latDelta = 1 / 111;
        const lngDelta = 1 / (111 * Math.cos(userLocation.latitude * Math.PI / 180));
        const bounds = [
            [userLocation.latitude - latDelta, userLocation.longitude - lngDelta],
            [userLocation.latitude + latDelta, userLocation.longitude + lngDelta]
        ];
        leafletMap.fitBounds(bounds, { padding: [50, 50] });

        // Initialize zoom controls
        const zoomInBtn = document.getElementById('zoomInBtn');
        const zoomOutBtn = document.getElementById('zoomOutBtn');
        
        if (zoomInBtn && zoomOutBtn) {
            zoomInBtn.addEventListener('click', () => {
                if (leafletMap) leafletMap.setZoom(leafletMap.getZoom() + 1);
            });

            zoomOutBtn.addEventListener('click', () => {
                if (leafletMap) leafletMap.setZoom(leafletMap.getZoom() - 1);
            });
        }

        // Render markers after short delay to ensure map is fully loaded
        setTimeout(() => renderMapMarkers(), 100);
    } catch (error) {
        console.error('Map initialization error:', error);
    }
}

function renderMapMarkers() {
    if (!leafletMap || typeof L === 'undefined') return;

    try {
        // Clear existing markers
        if (appState.markers) {
            appState.markers.forEach(marker => leafletMap.removeLayer(marker));
        }
        appState.markers = [];

        if (appState.filteredComplaints.length === 0) {
            return;
        }

        const bounds = L.latLngBounds();

        appState.filteredComplaints.forEach(complaint => {
            const markerLocation = [complaint.latitude, complaint.longitude];
            const markerColor = getMarkerColor(complaint.statusId);
            const statusName = getStatusName(complaint.statusId);
            
            // Create marker with custom color icon
            const marker = L.marker(markerLocation, {
                icon: createMarkerIcon(markerColor)
            }).addTo(leafletMap);

            marker.complaintId = complaint.id;

            // Create popup content
            const popupContent = `
                <div style="padding: 8px; max-width: 200px; font-size: 12px;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px;">${complaint.title}</h4>
                    <p style="margin: 4px 0; color: #666;">${complaint.location}</p>
                    <p style="margin: 4px 0; color: #666;"><a target="_blank" href="https://www.google.com/maps?q=${complaint.latitude},${complaint.longitude}">Nearby location</a></p>
                    <p style="margin: 4px 0;"><strong>Status:</strong> ${statusName}</p>
                    <p style="margin: 4px 0;"><strong>Category:</strong> ${getCategoryName(complaint.categoryId)}</p>
                </div>
            `;

            marker.bindPopup(popupContent);

            // Add click event to marker
            marker.on('click', () => {
                selectComplaint(complaint.id);
            });

            appState.markers.push(marker);
            bounds.extend(markerLocation);
        });

        // Auto-fit map to markers
        if (appState.filteredComplaints.length > 1) {
            leafletMap.fitBounds(bounds, { padding: [50, 50] });
        } else if (appState.filteredComplaints.length === 1) {
            leafletMap.setView(bounds.getCenter(), 15);
        }
    } catch (error) {
        console.error('Error rendering map markers:', error);
    }
}

function updateMapMarker(complaint) {
    if (!leafletMap || !complaint) {
        return;
    }

    try {
        const markerLocation = [complaint.latitude, complaint.longitude];
        leafletMap.setView(markerLocation, 16);

        // Close all popups
        leafletMap.closePopup();

        // Reset previous selected marker to normal state
        if (appState.previousSelectedMarker) {
            const prevComplaint = complaintsData.find(c => c.id === appState.previousSelectedMarker.complaintId);
            if (prevComplaint) {
                const prevColor = getMarkerColor(prevComplaint.statusId);
                appState.previousSelectedMarker.setIcon(createMarkerIcon(prevColor));
            }
        }

        // Find and highlight the selected complaint's marker
        const selectedMarker = appState.markers.find(m => m.complaintId === complaint.id);
        if (selectedMarker) {
            const color = getMarkerColor(complaint.statusId);
            selectedMarker.setIcon(createSelectedMarkerIcon(color));
            selectedMarker.openPopup();
            appState.previousSelectedMarker = selectedMarker;
        }
    } catch (error) {
        console.error('Error updating map marker:', error);
    }
}

// ========================================
// CHART FUNCTIONALITY
// ========================================

function initializeChart() {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    updateChart('category');
}

function updateChart(type = 'category') {
    if (appState.chart) {
        appState.chart.destroy();
    }
    
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    let chartData = getChartData(type);
    
    appState.chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

function getChartData(type) {
    let labels = [];
    let data = {};
    
    if (type === 'category') {
        // Data by category
        labels = ['Road', 'Water', 'Waste', 'Electricity', 'Health', 'Other'];
        const categoryIds = [1, 2, 3, 4, 5, 6];
        
        data = {
            labels: labels,
            datasets: [{
                label: 'Complaints by Category',
                data: categoryIds.map(catId => 
                    appState.filteredComplaints.filter(c => c.categoryId === catId).length
                ),
                backgroundColor: [
                    '#3b82f6',
                    '#06b6d4',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        };
    } else if (type === 'status') {
        // Data by status
        labels = ['Open', 'In Progress', 'Resolved'];
        const statusIds = [1, 2, 3];
        
        data = {
            labels: labels,
            datasets: [{
                label: 'Complaints by Status',
                data: statusIds.map(statusId => 
                    appState.filteredComplaints.filter(c => c.statusId === statusId).length
                ),
                backgroundColor: [
                    '#ef4444',
                    '#f59e0b',
                    '#10b981'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        };
    } else if (type === 'city') {
        // Data by city
        labels = ['Nagpur', 'Mumbai', 'Pune', 'Bangalore', 'Delhi'];
        const cities = ['Nagpur', 'Mumbai', 'Pune', 'Bangalore', 'Delhi'];
        
        data = {
            labels: labels,
            datasets: [{
                label: 'Complaints by City',
                data: cities.map(city => 
                    appState.filteredComplaints.filter(c => c.city.toLowerCase() === city.toLowerCase()).length
                ),
                backgroundColor: [
                    '#ff6b6b',
                    '#4ecdc4',
                    '#45b7d1',
                    '#96ceb4',
                    '#ffeaa7'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        };
    }
    
    return data;
}

function changeChartView(type) {
    updateChart(type);
}

// ========================================
// AUTHENTICATION
// ========================================


async function isUserLoggedIn() {
    try {
        console.log("Accessing /me endpoint at " + Date.now());
        const res = await fetch("/me", {
            method: "GET",
            credentials: "include"
        });

        if (!res.ok) {
            throw new Error("Not authenticated");
        }
        const data = await res.json();
        console.log("Received user data at " + Date.now());
        localStorage.setItem("user", JSON.stringify(data));

        appState.isLoggedIn = true;
        appState.currentUser = data;

        return true;
    } catch (err) {
        console.error(err);

        appState.isLoggedIn = false;
        appState.currentUser = null;

        return false;
    }
}

async function updateAuthUI() {
    appState.isLoggedIn = await isUserLoggedIn()
    if (appState.isLoggedIn) {
        $(".profile-name").text(appState.currentUser.name)
        $('.auth-section').hide();
        $('#profileSection').show();
        $(".user-dropdown")
    } else {
        $('.auth-section').show();
        $('#profileSection').hide();
    }
}

function openAuthModal(tab) {
    const $modal = $('#authModal');
    $modal.addClass('active');
    
    // Set active tab
    $('.auth-tab-btn').removeClass('active');
    $('.auth-tab-content').removeClass('active');
    $(`.auth-tab-btn[data-tab="${tab}"]`).addClass('active');
    $(`#${tab}Tab`).addClass('active');
}

function closeAuthModal() {
    $('#authModal').removeClass('active');
}

function handleLogin($btn, email, password) {
    const originalText = $btn.text();
    $btn.html('<span class="auth-loading">⏳</span> Wait...').prop('disabled', true);
    
    $.ajax({
        url: USER_BASE_URL+'/login',
        type: 'POST',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            email: email,
            password: password
        }),
        timeout: 5000,
        success: function(response) {
            appState.isLoggedIn = true;
            appState.currentUser = response.user;
            localStorage.setItem("user", JSON.stringify(response.user));
            closeAuthModal();
            initializeUserSetup()
            updateAuthUI();
            $btn.html(originalText).prop('disabled', false);
            alert('Logged in successfully');
        },
        error: function(xhr, status, error) {
            $btn.html(originalText).prop('disabled', false);
            if (status === 'timeout') {
                alert('Request timeout. Server may not be running.');
            } else {
                alert('Login failed: ' + (xhr.responseJSON?.message || error || 'Unknown error'));
            }
        }
    });
}

function handleRegister($btn, name, email, password, phone) {
    const originalText = $btn.text();

    $btn.html('<span class="auth-loading">⏳</span> Wait...')
        .prop('disabled', true);

    $.ajax({
        url: USER_BASE_URL + '/register',
        type: 'POST',
        contentType: 'application/json',

        xhrFields: {
            withCredentials: true
        },

        data: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone
        }),

        timeout: 5000,

        success: function(response) {

            closeAuthModal();

            $btn.html(originalText).prop('disabled', false);

            alert('Registration successful');
        },

        error: function(xhr, status, error) {

            $btn.html(originalText).prop('disabled', false);

            if (status === 'timeout') {
                alert('Request timeout. Server may not be running.');
            } else {
                alert(
                    'Registration failed: ' +
                    (xhr.responseJSON?.message || error || 'Unknown error')
                );
            }
        }
    });
}

async function handleVerifyEmail() {
    try {
        const user_id = JSON.parse(localStorage.getItem("user"))
        const res = await fetch("/send_verification_email/"+user_id.id, {
            method: "GET",
            credentials: "include"
        });

        if (!res.ok) {
            throw new Error("Not authenticated");
        }

        const data = await res.json();
        alert("A email for verification sent on your email address.")

    } catch (err) {
        console.error(err);
    }
}

function handleForgotPassword($btn, email) {
    const originalText = $btn.text();
    $btn.html('<span class="auth-loading">⏳</span> Wait...').prop('disabled', true);
    
    $.ajax({
        url: USER_BASE_URL+'/forget',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            action: 'forgot_password',
            email: email
        }),
        timeout: 5000,
        success: function(response) {
            closeAuthModal();
            $btn.html(originalText).prop('disabled', false);
            alert('Password reset link sent to your email');
        },
        error: function(xhr, status, error) {
            $btn.html(originalText).prop('disabled', false);
            if (status === 'timeout') {
                alert('Request timeout. Server may not be running.');
            } else {
                alert('Request failed: ' + (xhr.responseJSON?.message || error || 'Unknown error'));
            }
        }
    });
}


async function handleResetPassword($btn, password, token) {
    const originalText = $btn.text();
    $btn.html('<span class="auth-loading">⏳</span> Wait...').prop('disabled', true);
    
    $.ajax({
        url: USER_BASE_URL+'/reset',
        type: 'POST',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            new_password: password,
            reset_token: token
        }),
        timeout: 5000,
        success: function(response) {
            alert('Reset password successfully. You will be redirected automatically.');
            setTimeout(() => {
                window.location.href = "/"    
            }, 2000);
            
        },
        error: function(xhr, status, error) {
            $btn.html(originalText).prop('disabled', false);
            if (status === 'timeout') {
                alert('Request timeout. Server may not be running.');
            } else {
                alert('Reset failed: ' + (xhr.responseJSON?.message || error || 'Unknown error'));
            }
        }
    });
}

function handleLogout() {
    appState.isLoggedIn = false;
    appState.selectedComplaintId = null;
    fetch("/logout", {
        method: "POST",
        credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
        appState.isLoggedIn = false;
        appState.currentUser = null;

        localStorage.removeItem("user");
        initializeUserSetup()
        updateAuthUI();

        alert("Logged out successfully");
    })
    .catch(err => {
        console.error("Logout failed:", err);
    });
    renderComplaintDetails({ title: '', description: '', category: '', status: '', location: '', city: '', createdAt: '' });
    renderChatMessages({ messages: [] });
    alert('Logged out successfully');
}

function toggleProfileDropdown() {
    $('#dropdownMenu').toggleClass('active');
    $('#profileBtn').toggleClass('active');
}

function startTourIfNeeded() {
    if (localStorage.getItem(SESSION_TOUR_KEY)) {
        return;
    }

    openTourGuide(0);
}

function openTourGuide(stepIndex = 0) {
    localStorage.setItem(SESSION_TOUR_KEY, 'true');
    appState.tourStepIndex = stepIndex;
    $('#tourOverlay').removeClass('hidden');
    positionTourStep();
}

function closeTourGuide() {
    $('#tourOverlay').addClass('hidden');
    $('#tourHighlight').removeAttr('style');
    $('#tourCard').removeAttr('style');
    closeFilterMenu();
}

function goToNextTourStep() {
    if (appState.tourStepIndex >= tourSteps.length - 1) {
        closeTourGuide();
        return;
    }

    appState.tourStepIndex += 1;
    positionTourStep();
}

function goToPreviousTourStep() {
    if (appState.tourStepIndex === 0) {
        return;
    }

    appState.tourStepIndex -= 1;
    positionTourStep();
}

function positionTourStep() {
    if ($('#tourOverlay').hasClass('hidden')) {
        return;
    }

    if (appState.tourStepIndex === 3 && window.innerWidth <= 1024) {
        $('#mobileFilterDropdown').addClass('active');
    } else {
        closeFilterMenu();
    }

    const step = tourSteps[appState.tourStepIndex];
    const target = step?.getTarget?.();
    const $highlight = $('#tourHighlight');
    const $card = $('#tourCard');

    $('#tourStep').text(`Step ${appState.tourStepIndex + 1} of ${tourSteps.length}`);
    $('#tourText').text(step.text);
    $('#tourPrevBtn').prop('disabled', appState.tourStepIndex === 0);
    $('#tourNextBtn').text(appState.tourStepIndex === tourSteps.length - 1 ? 'Done' : 'Next');

    if (!target) {
        $highlight.css({ top: '-9999px', left: '-9999px', width: 0, height: 0 });
        $card.css({ left: '16px', right: '16px', bottom: '16px', top: 'auto', width: 'auto' });
        return;
    }

    const rect = target.getBoundingClientRect();
    const padding = 8;
    const cardWidth = Math.min(320, window.innerWidth - 32);
    const highlightTop = Math.max(rect.top - padding, 8);
    const highlightLeft = Math.max(rect.left - padding, 8);

    $highlight.css({
        top: `${highlightTop}px`,
        left: `${highlightLeft}px`,
        width: `${Math.min(rect.width + padding * 2, window.innerWidth - 16)}px`,
        height: `${Math.min(rect.height + padding * 2, window.innerHeight - 16)}px`
    });

    const spaceBelow = window.innerHeight - rect.bottom;
    const cardTop = spaceBelow > 220
        ? Math.min(rect.bottom + 16, window.innerHeight - 220)
        : Math.max(rect.top - 180, 16);
    const cardLeft = Math.min(
        Math.max(rect.left, 16),
        window.innerWidth - cardWidth - 16
    );

    $card.css({
        top: `${cardTop}px`,
        left: `${cardLeft}px`,
        width: `${cardWidth}px`,
        bottom: 'auto',
        right: 'auto'
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatStatus(status) {
    const map = {
        'open': 'Open',
        'in-progress': 'In Progress',
        'resolved': 'Resolved'
    };
    return map[status] || status;
}

function handleNewComplaint() {
    if (!appState.isLoggedIn) {
        openAuthModal('login');
        return;
    }
    // Clear selection to allow commenting on no complaint
    appState.selectedComplaintId = null;
    setChatMode(false);
    renderComplaintsList();
    $('#complaintTitle').text('New Complaint');
    $('#statusIndicator').removeClass('open in-progress resolved');
    $('#detailsContent').html(`
        <div class="empty-state">
            <span class="empty-icon">👆</span>
            <p>Start typing your complaint in the comments box below</p>
        </div>
    `);
    $('#chatMessages').html(`
        <div class="empty-state">
            <span class="empty-icon">💭­</span>
            <p>Your comment will create a new complaint</p>
        </div>
    `);
    $('#filedOnDate, #lastUpdateDate').text('');
    $('#chatInput').val('');

    $('#mobileComplaintTitle').text('New Complaint');
    $('#mobileStatusIndicator').removeClass('status-1 status-2 status-3');
    $('#mobileDetailsContent').html(`
        <div class="empty-state">
            <span class="empty-icon">ðŸ“</span>
            <p>Start typing your complaint in the comments box below</p>
        </div>
    `);
    $('#mobileChatMessages').html(`
        <div class="empty-state">
            <span class="empty-icon">💭­</span>
            <p>Your comment will create a new complaint</p>
        </div>
    `);
    $('#mobileFiledOnDate, #mobileLastUpdateDate').text('');
    $('#mobileChatInput').val('');
}

// ========================================
// UTILITY FUNCTIONS - END
// ========================================

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

$(document).on('keydown', function(e) {
    // Close dropdown on Escape
    if (e.key === 'Escape') {
        $('#dropdownMenu').removeClass('active');
        $('#profileBtn').removeClass('active');
        closeAuthModal();
    }
});

// Close dropdown when clicking outside
$(document).on('click', function(e) {
    if (!$(e.target).closest('.profile-dropdown').length) {
        $('#dropdownMenu').removeClass('active');
        $('#profileBtn').removeClass('active');
    }
});

// ========================================
// MOBILE RESPONSIVE RENDERING FUNCTIONS
// ========================================

function renderMobileComplaintDetails(complaint) {
    const $content = $('#mobileDetailsContent');
    const $titleHeader = $('#mobileComplaintTitle');
    const $statusIndicator = $('#mobileStatusIndicator');
    
    // Update title and status indicator
    $titleHeader.text(complaint.title);
    $statusIndicator.removeClass('status-1 status-2 status-3').addClass(`status-${complaint.statusId}`);
    
    const categoryName = getCategoryName(complaint.categoryId);
    const subcategoryName = getSubcategoryName(complaint.subcategoryId);
    
    const html = `
        <div class="detail-item">
            <div class="detail-label">Category</div>
            <div class="detail-value">${categoryName} / ${subcategoryName}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Location</div>
            <div class="detail-value">${complaint.location}</div>
        </div>
        <div class="detail-item" style="width: 100%; margin-bottom: 8px;">
            <div class="detail-label">Description</div>
            <div class="detail-value">${complaint.description}</div>
        </div>
    `;
    
    $content.html(html);
    
    // Update chat header dates for mobile
    const filedDate = new Date(complaint.createdAt).toLocaleDateString();
    $('#mobileFiledOnDate').text(filedDate);
    
    // Get last comment date or use filed date if no comments
    let lastUpdateDate = filedDate;
    if (complaint.comments && complaint.comments.length > 0) {
        const lastComment = complaint.comments[complaint.comments.length - 1];
        lastUpdateDate = lastComment.timestamp || filedDate;
    }
    $('#mobileLastUpdateDate').text(lastUpdateDate);
}

function renderMobileCommentMessages(complaint) {
    const $chatMessages = $('#mobileChatMessages');
    $chatMessages.empty();
    
    if (!complaint.comments || complaint.comments.length === 0) {
        $chatMessages.html(`
            <div class="empty-state">
                <span class="empty-icon">💭</span>
                <p>No comments yet. Be the first to comment!</p>
            </div>
        `);
        return;
    }
    
    complaint.comments.forEach(comment => {
        const fileInfo = comment.file ? `<div style="font-size: 11px; color: var(--color-primary); margin-top: 4px;">ðŸ“Ž ${comment.file.name} (${(comment.file.size / 1024).toFixed(1)}KB)</div>` : '';
        const $message = $(`
            <div class="chat-message ${comment.own ? 'own' : ''}">
                <div class="message-avatar">${comment.user.charAt(0)}</div>
                <div class="message-content">
                    <div class="message-author">${comment.user}</div>
                    <div class="message-text">${comment.text}${fileInfo}</div>
                </div>
            </div>
        `);
        
        $chatMessages.append($message);
    });
    
    // Update last update date in header
    const lastComment = complaint.comments[complaint.comments.length - 1];
    if (lastComment) {
        $('#mobileLastUpdateDate').text(lastComment.timestamp || new Date().toLocaleDateString());
    }
    
    // Auto scroll to bottom
    $chatMessages.scrollTop($chatMessages[0].scrollHeight);
}

function sendMobileMessage() {
    const $input = $('#mobileChatInput');
    const message = $input.val().trim();
    
    if (!message) return;
    
    const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
    if (!complaint) return;
    
    $('#mobileTypingIndicator').show();
    setTimeout(function() {
        $('#mobileTypingIndicator').text('writing....');
    }, 2500);
    
    // Add comment to complaint
    complaint.comments.push({
        id: complaint.comments.length + 1,
        user: appState.currentUser.name,
        text: message,
        own: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        file: null
    });
    
    // Clear input and refresh comments
    $input.val('');
    renderMobileCommentMessages(complaint);
    
    setTimeout(function() {
        $('#mobileTypingIndicator').text('verifing.....');
        $('#mobileTypingIndicator').hide();
    }, 3000);
}

function handleMobileFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        alert('File size exceeds 5MB limit');
        return;
    }
    
    if (!appState.selectedComplaintId) {
        alert('Please select a complaint first');
        return;
    }
    
    const complaint = complaintsData.find(c => c.id === appState.selectedComplaintId);
    if (!complaint) return;
    
    // Store file reference
    const fileReference = {
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Add a message with file attachment
    complaint.comments.push({
        id: complaint.comments.length + 1,
        user: appState.currentUser.name,
        text: `Attached file: ${file.name}`,
        own: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        file: fileReference
    });
    
    // Reset file input
    $('#mobileFileInput').val('');
    renderMobileCommentMessages(complaint);
    
    console.log('File uploaded:', fileReference);
}

// ========================================
// MOBILE RESPONSIVE FUNCTIONS
// ========================================

function toggleFilterMenu() {
    console.log("mobilefilterdropdown")
    const $dropdown = $('#mobileFilterDropdown');
    $dropdown.toggleClass('active');
}

function closeFilterMenu() {
    const $dropdown = $('#mobileFilterDropdown');
    $dropdown.removeClass('active');
}

function handleWindowResize() {
    const isMobile = $(window).width() <= 1024;
    
    if (isMobile) {
        $('#mobileFilterBtn').show();
        $('.navbar-center').hide();
        $('.btn-new-complaint-navbar').hide();
        $('.sidebar-filters-container').hide();
        closeFilterMenu();
    } else {
        $('#mobileFilterBtn').hide();
        $('.navbar-center').show();
        $('.btn-new-complaint-navbar').show();
        $('.sidebar-filters-container').show();
        $('#mobileCommentSection').hide();
        closeFilterMenu();
    }
}

// ========================================
// PUSH MESSAGES (AI INSIGHTS)
// ========================================

let pushMessageState = {
    messages: [],
    messageCount: 0,
    renderedCount: 0
};

function addPushMessage(message, type = 'user') {
    pushMessageState.messages.push({
        id: pushMessageState.messageCount++,
        content: message,
        type: type,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    if (pushMessageState.messageCount >= 100) {
        cleanPushMessages();
    }

    renderPushMessages();
}

function renderPushMessages() {
    const $container = $('#pushMessagesContainer');
    
    if (pushMessageState.messages.length === 0) {
        $container.empty();
        $container.html(`
            <div class="empty-state" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span class="empty-icon">🤖</span>
                <p>AI insights will appear here</p>
            </div>
        `);
        return;
    }

    // Only render new messages
    for (let i = pushMessageState.renderedCount; i < pushMessageState.messages.length; i++) {
        const msg = pushMessageState.messages[i];
        const $item = $(`
            <div class="push-message-item ${msg.type === 'ai-response' ? 'ai-response' : ''}">
                <div class="push-message-label">${msg.type === 'ai-response' ? '🤖 Your civic friend' : '👤 You'}</div>
                <div class="push-message-content">${msg.content}</div>
            </div>
        `);
        $container.append($item);
    }
    
    pushMessageState.renderedCount = pushMessageState.messages.length;
    $container.scrollTop($container[0].scrollHeight);
}

function cleanPushMessages() {
    pushMessageState.messages = [];
    pushMessageState.messageCount = 0;
    pushMessageState.renderedCount = 0;
    renderPushMessages();
}

$(document).ready(function() {
    $('#pushClearBtn').on('click', cleanPushMessages);
});

