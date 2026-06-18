(function() {
    // ============ ДАННЫЕ ФИЛЬМОВ ============
    // НОВИНКИ КИНОПРОКАТА
    // ============ ДАННЫЕ ФИЛЬМОВ ============
// НОВИНКИ КИНОПРОКАТА
const newReleasesMovies = [
    { id: 201, title: "Майкл Джексон: Биопик", genre: "Драма", duration: "2ч 30мин", rating: 8.9, price: 480, image: "img/michael-jackson.jpg", isNew: true, description: "Биографический фильм о жизни и творчестве короля поп-музыки Майкла Джексона. История взлёта, падения и бессмертного наследия." },
    { id: 202, title: "Кунг-фу Панда 4", genre: "Мультфильм", duration: "1ч 34мин", rating: 8.7, price: 370, image: "img/kung-fu-panda-4.jpg", isNew: true, description: "По возвращении По предстоит взять на себя роль духовного лидера и обучить нового Воина Дракона." },
    { id: 203, title: "Годзилла и Конг 2", genre: "Фантастика", duration: "2ч 15мин", rating: 8.5, price: 510, image: "img/godzilla-kong-2.jpg", isNew: true, description: "Два титана объединяются против общей угрозы, способной уничтожить человечество." },
    { id: 204, title: "Соник 3", genre: "Комедия", duration: "1ч 50мин", rating: 8.3, price: 400, image: "img/sonic-3.jpg", isNew: true, description: "Соник и его друзья сталкиваются с новым врагом — Шэдоу, который угрожает всему миру." },
    { id: 205, title: "Миньоны 3", genre: "Мультфильм", duration: "1ч 27мин", rating: 8.1, price: 360, image: "img/minions-3.jpg", isNew: true, description: "Миньоны отправляются в новое приключение, чтобы найти самого злого злодея всех времён." },
    { id: 206, title: "Джокер: Безумие", genre: "Драма", duration: "2ч 18мин", rating: 9.0, price: 490, image: "img/joker-2.jpg", isNew: true, description: "Продолжение истории Артура Флека, который полностью погружается в безумие и становится Джокером." }
];

// СЕЙЧАС В ПРОКАТЕ
const nowShowingMovies = [
    { id: 1, title: "Дюна: Часть вторая", genre: "Фантастика", duration: "2ч 46мин", rating: 9.1, price: 450, image: "img/dune-2.jpg", description: "Продолжение эпической саги о приключениях Пола Атрейдеса на пустынной планете Арракис." },
    { id: 2, title: "Мастер и Маргарита", genre: "Драма", duration: "2ч 35мин", rating: 8.7, price: 390, image: "img/master-margarita.jpg", description: "Экранизация культового романа Михаила Булгакова о визите сатаны в Москву 1930-х годов." },
    { id: 3, title: "Гладиатор 2", genre: "Боевик", duration: "2ч 28мин", rating: 8.5, price: 500, image: "img/gladiator-2.jpg", description: "Продолжение легендарного фильма о борьбе за власть в Древнем Риме." },
    { id: 4, title: "Головоломка 2", genre: "Мультфильм", duration: "1ч 40мин", rating: 8.9, price: 350, image: "img/inside-out-2.jpg", description: "Новые приключения эмоций Райли, которые помогают ей справляться с переходным возрастом." },
    { id: 5, title: "Бэтмен", genre: "Боевик", duration: "2ч 56мин", rating: 8.4, price: 480, image: "img/batman.jpg", description: "Тёмный рыцарь сталкивается с новым злодеем, который держит Готэм в страхе." },
    { id: 6, title: "Аватар: Путь воды", genre: "Фантастика", duration: "3ч 12мин", rating: 8.8, price: 520, image: "img/avatar-2.jpg", description: "Продолжение истории о народе На'ви и их борьбе за выживание на Пандоре." },
    { id: 7, title: "Оппенгеймер", genre: "Драма", duration: "3ч 00мин", rating: 8.9, price: 460, image: "img/oppenheimer.jpg", description: "История создателя атомной бомбы, который должен был решить судьбу всего человечества." },
    { id: 8, title: "Барби", genre: "Комедия", duration: "1ч 54мин", rating: 7.8, price: 380, image: "img/barbie.jpg", description: "Живущая в идеальном мире кукла Барби отправляется в реальный мир." },
    { id: 9, title: "Форсаж 10", genre: "Боевик", duration: "2ч 21мин", rating: 7.5, price: 420, image: "img/fast-x.jpg", description: "Доминик Торетто и его команда сталкиваются с самым опасным противником в своей истории." },
    { id: 10, title: "Элементарно", genre: "Мультфильм", duration: "1ч 33мин", rating: 8.2, price: 340, image: "img/elemental.jpg", description: "История о встрече огня и воды в городе стихий." },
    { id: 11, title: "Джон Уик 4", genre: "Боевик", duration: "2ч 49мин", rating: 8.6, price: 490, image: "img/john-wick-4.jpg", description: "Легендарный киллер продолжает свою борьбу против Высокого стола." },
    { id: 12, title: "Трансформеры: Восхождение", genre: "Фантастика", duration: "2ч 07мин", rating: 7.2, price: 440, image: "img/transformers.jpg", description: "Новая глава в истории трансформеров, где автоботы и десептиконы ищут артефакты." }
];

// СКОРО В ПРОКАТЕ
const comingSoonMovies = [
    { id: 101, title: "Дэдпул 3", genre: "Боевик", duration: "2ч 10мин", rating: 0, price: 470, image: "img/deadpool-3.jpg", description: "Дэдпул возвращается с новыми приключениями и невероятными разрушениями." },
    { id: 102, title: "Веном 3", genre: "Фантастика", duration: "1ч 55мин", rating: 0, price: 450, image: "img/venom-3.jpg", description: "Эдди Брок и Веном сталкиваются с новой угрозой, которая сильнее их обоих." },
    { id: 103, title: "Фуриоса: Хроники", genre: "Боевик", duration: "2ч 28мин", rating: 0, price: 500, image: "img/furiosa.jpg", description: "Приквел к «Безумному Максу» о том, как юная Фуриоса стала легендой пустоши." },
    { id: 104, title: "Гарфилд в кино", genre: "Мультфильм", duration: "1ч 41мин", rating: 0, price: 350, image: "img/garfield.jpg", description: "Любимый ленивый кот отправляется в большое приключение." },
    { id: 105, title: "Майкл Джексон: Биопик", genre: "Драма", duration: "2ч 30мин", rating: 0, price: 480, image: "img/michael-jackson.jpg", description: "Биографический фильм о жизни и творчестве короля поп-музыки Майкла Джексона." },
    { id: 106, title: "Кунг-фу Панда 4", genre: "Мультфильм", duration: "1ч 34мин", rating: 0, price: 370, image: "img/kung-fu-panda-4.jpg", description: "По возвращении По предстоит взять на себя роль духовного лидера." },
    { id: 107, title: "Годзилла и Конг 2", genre: "Фантастика", duration: "2ч 15мин", rating: 0, price: 510, image: "img/godzilla-kong-2.jpg", description: "Два титана объединяются против общей угрозы." },
    { id: 108, title: "Соник 3", genre: "Комедия", duration: "1ч 50мин", rating: 0, price: 400, image: "img/sonic-3.jpg", description: "Соник и его друзья сталкиваются с новым врагом — Шэдоу." },
    { id: 109, title: "Миньоны 3", genre: "Мультфильм", duration: "1ч 27мин", rating: 0, price: 360, image: "img/minions-3.jpg", description: "Миньоны отправляются в новое приключение." },
    { id: 110, title: "Миссия невыполнима 8", genre: "Боевик", duration: "2ч 40мин", rating: 0, price: 520, image: "img/mission-impossible-8.png", description: "Итан Хант и его команда сталкиваются с самой опасной миссией." },
    { id: 111, title: "Джокер: Безумие", genre: "Драма", duration: "2ч 18мин", rating: 0, price: 490, image: "img/joker-2.jpg", description: "Продолжение истории Артура Флека." },
    { id: 112, title: "Ледяная принцесса", genre: "Мультфильм", duration: "1ч 38мин", rating: 0, price: 340, image: "img/frozen-princess.png", description: "Приключения юной принцессы в мире льда и волшебства." }
];

    // ВСЕ ФИЛЬМЫ (для страницы сеансов)
    const allMovies = [...newReleasesMovies, ...nowShowingMovies, ...comingSoonMovies];
    const AVAILABLE_TIMES = ['10:00', '13:00', '16:00', '19:00', '22:00'];

    // ============ СОСТОЯНИЕ ЗАЛА ============
    const occupiedSeats = [
        [false, false, true, false, false, true, false, false],
        [false, true, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false]
    ];

    // ============ СОСТОЯНИЕ ПОЛЬЗОВАТЕЛЯ ============
    let currentUser = null;
    let discountPercent = 0;

    // ============ КОРЗИНА ============
    let cart = [];

    // ============ ПЕРЕМЕННЫЕ ДЛЯ БРОНИРОВАНИЯ ============
    let selectedSeats = [];
    let currentMovie = null;
    let currentMoviePrice = 450;
    let currentSessionTime = '';
    let selectedTime = '';

    // ============ DOM-ЭЛЕМЕНТЫ ============
    const authModal = document.getElementById('authModal');
    const authModalClose = document.getElementById('authModalClose');
    const authForm = document.getElementById('authForm');
    const authBtn = document.getElementById('authBtn');
    const authContainer = document.getElementById('authContainer');
    const authModalTitle = document.getElementById('authModalTitle');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const authSwitchLink = document.getElementById('authSwitchLink');
    const authSwitchText = document.getElementById('authSwitchText');
    const authEmail = document.getElementById('authEmail');
    const authPassword = document.getElementById('authPassword');

    // Модальное окно просмотра фильма
    const movieDetailModal = document.getElementById('movieDetailModal');
    const closeMovieDetailBtn = document.getElementById('closeMovieDetailBtn');
    const detailPoster = document.getElementById('detailPoster');
    const detailTitle = document.getElementById('detailTitle');
    const detailMeta = document.getElementById('detailMeta');
    const detailDescription = document.getElementById('detailDescription');
    const detailPrice = document.getElementById('detailPrice');
    const detailRating = document.getElementById('detailRating');
    const detailTimeGrid = document.getElementById('detailTimeGrid');
    const detailBuyBtn = document.getElementById('detailBuyBtn');

    const modal = document.getElementById('seatModal');
    const seatsContainer = document.getElementById('seatsContainer');
    const selectedCountSpan = document.getElementById('selectedCount');
    const totalPriceSpan = document.getElementById('totalPrice');
    const modalMovieTitle = document.getElementById('modalMovieTitle');
    const modalSessionTime = document.getElementById('modalSessionTime');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const discountBadge = document.getElementById('discountBadge');

    const cartBtn = document.getElementById('cartBtn');
    const cartBadge = document.getElementById('cartBadge');
    const cartModal = document.getElementById('cartModal');
    const cartModalClose = document.getElementById('cartModalClose');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartSummary = document.getElementById('cartSummary');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartDiscountRow = document.getElementById('cartDiscountRow');
    const cartDiscountAmount = document.getElementById('cartDiscountAmount');
    const cartFinalPrice = document.getElementById('cartFinalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    const paymentModal = document.getElementById('paymentModal');
    const paymentModalClose = document.getElementById('paymentModalClose');
    const paymentForm = document.getElementById('paymentForm');
    const paymentTicketsCount = document.getElementById('paymentTicketsCount');
    const paymentTotalPrice = document.getElementById('paymentTotalPrice');
    const paymentDiscountRow = document.getElementById('paymentDiscountRow');
    const paymentDiscountAmount = document.getElementById('paymentDiscountAmount');
    const paymentFinalPrice = document.getElementById('paymentFinalPrice');

    const successModal = document.getElementById('successModal');
    const successCloseBtn = document.getElementById('successCloseBtn');
    const successDetails = document.getElementById('successDetails');

    const mainLogo = document.getElementById('mainLogo');
    const footerLogo = document.getElementById('footerLogo');

    const navSeansy = document.getElementById('navSeansy');
    const navContacts = document.getElementById('navContacts');

    let isLoginMode = true;
    let autoScrollIntervals = [];

    // ============ ФУНКЦИИ КОРЗИНЫ ============
    function addToCart() {
        if (selectedSeats.length === 0) {
            alert("Выберите хотя бы одно место!");
            return;
        }

        const seatLabels = selectedSeats.map(s => String.fromCharCode(65 + s.row) + (s.col + 1)).join(', ');

        const cartItem = {
            id: Date.now(),
            movieId: currentMovie.id,
            movieTitle: currentMovie.title,
            sessionTime: currentSessionTime,
            seats: [...selectedSeats],
            seatLabels: seatLabels,
            count: selectedSeats.length,
            price: currentMoviePrice,
            total: selectedSeats.length * currentMoviePrice
        };

        cart.push(cartItem);
        updateCartUI();

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        selectedSeats = [];

        alert(`✅ Билеты на "${currentMovie.title}" (${cartItem.count} шт.) на сеанс ${currentSessionTime} добавлены в корзину!`);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
        if (cartBadge) cartBadge.textContent = totalItems;

        if (cart.length === 0) {
            if (cartEmpty) cartEmpty.style.display = 'block';
            if (cartItems) cartItems.innerHTML = '';
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'block';

        let subtotal = 0;
        let html = '';

        cart.forEach((item, index) => {
            subtotal += item.total;
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.movieTitle}</div>
                        <div class="cart-item-details">
                            <span>${item.count} × ${item.price} ₽</span>
                            <span>${item.sessionTime}</span>
                            <span class="cart-item-seats">Место: ${item.seatLabels}</span>
                        </div>
                    </div>
                    <div class="cart-item-price">
                        ${item.total} ₽
                        <button class="cart-item-remove" data-index="${index}" aria-label="Удалить">✕</button>
                    </div>
                </div>
            `;
        });

        if (cartItems) cartItems.innerHTML = html;

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const item = cart[index];
                if (item) {
                    for (let seat of item.seats) {
                        occupiedSeats[seat.row][seat.col] = false;
                    }
                }
                cart.splice(index, 1);
                updateCartUI();
                renderMovies();
            });
        });

        let finalTotal = subtotal;
        let discount = 0;
        if (currentUser && subtotal > 0) {
            discount = subtotal * 0.05;
            finalTotal = subtotal - discount;
            if (cartDiscountRow) cartDiscountRow.style.display = 'flex';
            if (cartDiscountAmount) cartDiscountAmount.textContent = `-${Math.round(discount)} ₽`;
        } else {
            if (cartDiscountRow) cartDiscountRow.style.display = 'none';
        }

        if (cartTotalPrice) cartTotalPrice.textContent = `${Math.round(subtotal)} ₽`;
        if (cartFinalPrice) cartFinalPrice.textContent = `${Math.round(finalTotal)} ₽`;
    }

    function openCartModal() {
        if (cartModal) {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateCartUI();
        }
    }

    function closeCartModal() {
        if (cartModal) {
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // ============ ФУНКЦИИ ОПЛАТЫ ============
    function openPaymentModal() {
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }

        closeCartModal();

        let subtotal = 0;
        let totalTickets = 0;
        cart.forEach(item => {
            subtotal += item.total;
            totalTickets += item.count;
        });

        if (paymentTicketsCount) paymentTicketsCount.textContent = totalTickets;
        if (paymentTotalPrice) paymentTotalPrice.textContent = `${Math.round(subtotal)} ₽`;

        let finalTotal = subtotal;
        let discount = 0;
        if (currentUser && subtotal > 0) {
            discount = subtotal * 0.05;
            finalTotal = subtotal - discount;
            if (paymentDiscountRow) paymentDiscountRow.style.display = 'flex';
            if (paymentDiscountAmount) paymentDiscountAmount.textContent = `-${Math.round(discount)} ₽`;
        } else {
            if (paymentDiscountRow) paymentDiscountRow.style.display = 'none';
        }

        if (paymentFinalPrice) paymentFinalPrice.textContent = `${Math.round(finalTotal)} ₽`;

        if (paymentModal) {
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closePaymentModal() {
        if (paymentModal) {
            paymentModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    function handlePayment(e) {
        e.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCvc = document.getElementById('cardCvc').value;
        const cardHolder = document.getElementById('cardHolder').value;

        if (cardNumber.length < 16) {
            alert('Введите корректный номер карты (16 цифр)');
            return;
        }
        if (!cardExpiry.match(/^\d{2}\/\d{2}$/)) {
            alert('Введите срок действия в формате ММ/ГГ');
            return;
        }
        if (cardCvc.length < 3) {
            alert('Введите CVC код (3 цифры)');
            return;
        }
        if (!cardHolder.trim()) {
            alert('Введите имя владельца карты');
            return;
        }

        const submitBtn = paymentForm.querySelector('.btn-payment-submit');
        submitBtn.textContent = '⏳ Обработка...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Оплатить';
            submitBtn.disabled = false;

            for (let item of cart) {
                for (let seat of item.seats) {
                    occupiedSeats[seat.row][seat.col] = true;
                }
            }

            const userMessage = currentUser ? `, ${currentUser.name}` : '';
            const totalTickets = cart.reduce((sum, item) => sum + item.count, 0);
            const movies = cart.map(item => `${item.movieTitle} (${item.count} шт., ${item.sessionTime})`).join(', ');
            
            if (successDetails) {
                successDetails.textContent = `Билеты на ${totalTickets} мест${userMessage}. Фильмы: ${movies}. Билеты отправлены на вашу почту.`;
            }

            cart = [];
            updateCartUI();

            closePaymentModal();
            if (successModal) {
                successModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            renderMovies();
        }, 2000);
    }

    function closeSuccessModal() {
        if (successModal) {
            successModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // ============ ФУНКЦИИ ПРОКРУТКИ ============
    function scrollToHome() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function setActiveNav(activeId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // ============ ФУНКЦИИ ТАБОВ ============
    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                tabContents.forEach(content => content.classList.remove('active'));

                const tabId = this.getAttribute('data-tab');
                const targetContent = document.getElementById('tab-' + tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // ============ ФУНКЦИИ АВТОРИЗАЦИИ ============
    function updateAuthUI() {
        if (currentUser) {
            discountPercent = 5;
            if (authContainer) {
                authContainer.innerHTML = `
                    <div class="user-info">
                        <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                        <span class="user-name">${currentUser.name}</span>
                        <span class="discount-badge" style="background: #ffaa22; color: #0f0f14; padding: 2px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">-5%</span>
                        <button class="logout-btn" id="logoutBtn">Выйти</button>
                    </div>
                `;
                document.getElementById('logoutBtn').addEventListener('click', logout);
            }
        } else {
            discountPercent = 0;
            if (authContainer) {
                authContainer.innerHTML = `<button class="btn btn-outline" id="authBtn">Войти</button>`;
                document.getElementById('authBtn').addEventListener('click', openAuthModal);
            }
        }
        if (modal && modal.style.display === 'flex') {
            updateSelectedUI();
        }
        updateCartUI();
    }

    function openAuthModal() {
        isLoginMode = true;
        if (authModalTitle) authModalTitle.textContent = 'Вход';
        if (authSubmitBtn) authSubmitBtn.textContent = 'Войти';
        if (authSwitchText) authSwitchText.innerHTML = 'Нет аккаунта? <a id="authSwitchLink">Зарегистрироваться</a>';
        if (authEmail) authEmail.value = '';
        if (authPassword) authPassword.value = '';
        if (authModal) {
            authModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        const link = document.getElementById('authSwitchLink');
        if (link) link.addEventListener('click', switchAuthMode);
    }

    function closeAuthModal() {
        if (authModal) {
            authModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    function switchAuthMode() {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            if (authModalTitle) authModalTitle.textContent = 'Вход';
            if (authSubmitBtn) authSubmitBtn.textContent = 'Войти';
            if (authSwitchText) authSwitchText.innerHTML = 'Нет аккаунта? <a id="authSwitchLink">Зарегистрироваться</a>';
        } else {
            if (authModalTitle) authModalTitle.textContent = 'Регистрация';
            if (authSubmitBtn) authSubmitBtn.textContent = 'Зарегистрироваться';
            if (authSwitchText) authSwitchText.innerHTML = 'Уже есть аккаунт? <a id="authSwitchLink">Войти</a>';
        }
        const link = document.getElementById('authSwitchLink');
        if (link) link.addEventListener('click', switchAuthMode);
    }

    function handleAuth(e) {
        e.preventDefault();
        const email = authEmail ? authEmail.value.trim() : '';
        const password = authPassword ? authPassword.value.trim() : '';

        if (!email || !password) {
            alert('Заполните все поля!');
            return;
        }
        if (password.length < 6) {
            alert('Пароль должен содержать минимум 6 символов!');
            return;
        }

        if (isLoginMode) {
            const savedUser = localStorage.getItem('filmstar_user');
            if (savedUser) {
                const user = JSON.parse(savedUser);
                if (user.email === email && user.password === password) {
                    currentUser = { name: user.name, email: user.email };
                    localStorage.setItem('filmstar_current_user', JSON.stringify(currentUser));
                    updateAuthUI();
                    closeAuthModal();
                    alert(`Добро пожаловать, ${currentUser.name}! Вам доступна скидка 5% на все билеты!`);
                } else {
                    alert('Неверный email или пароль!');
                }
            } else {
                alert('Пользователь не найден. Зарегистрируйтесь!');
            }
        } else {
            const name = prompt('Введите ваше имя:');
            if (!name) return;
            const user = { name, email, password };
            localStorage.setItem('filmstar_user', JSON.stringify(user));
            currentUser = { name, email };
            localStorage.setItem('filmstar_current_user', JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            alert(`Регистрация прошла успешно! Добро пожаловать, ${name}! Вам доступна скидка 5% на все билеты!`);
        }
    }

    function logout() {
        currentUser = null;
        localStorage.removeItem('filmstar_current_user');
        updateAuthUI();
        alert('Вы вышли из аккаунта. Скидка 5% больше не активна.');
    }

    function checkSavedUser() {
        const saved = localStorage.getItem('filmstar_current_user');
        if (saved) {
            currentUser = JSON.parse(saved);
            updateAuthUI();
        }
    }

    // ============ МОДАЛЬНОЕ ОКНО ПРОСМОТРА ФИЛЬМА ============
    function openMovieDetail(movie) {
    if (!movieDetailModal) return;
    
    currentMovie = movie;
    currentMoviePrice = movie.price;
    selectedTime = '';

    // Формируем путь к картинке
    const imagePath = movie.image.startsWith('http') ? movie.image : movie.image;

    // Заполняем данные
    if (detailPoster) {
        detailPoster.src = imagePath;
        detailPoster.alt = movie.title;
    }
    if (detailTitle) detailTitle.textContent = movie.title;
    if (detailMeta) detailMeta.textContent = `${movie.genre} • ${movie.duration}`;
    if (detailDescription) detailDescription.textContent = movie.description || 'Описание фильма скоро появится.';
    if (detailPrice) detailPrice.textContent = `от ${movie.price} ₽`;
    if (detailRating) detailRating.textContent = movie.rating > 0 ? `⭐ ${movie.rating}` : '⭐ Скоро';

        // Генерируем кнопки времени
        if (detailTimeGrid) {
            detailTimeGrid.innerHTML = '';
            AVAILABLE_TIMES.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'time-btn-detail';
                btn.textContent = time;
                btn.dataset.time = time;
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.time-btn-detail').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    selectedTime = time;
                    if (detailBuyBtn) {
                        detailBuyBtn.style.opacity = '1';
                        detailBuyBtn.style.pointerEvents = 'auto';
                        detailBuyBtn.textContent = 'Выбрать места →';
                    }
                });
                detailTimeGrid.appendChild(btn);
            });
        }

        // Сбрасываем кнопку покупки
        if (detailBuyBtn) {
            detailBuyBtn.textContent = 'Выберите время';
            detailBuyBtn.style.opacity = '0.6';
            detailBuyBtn.style.pointerEvents = 'none';
            detailBuyBtn.onclick = function() {
                if (!selectedTime) {
                    alert('Пожалуйста, выберите время сеанса!');
                    return;
                }
                closeMovieDetailModal();
                openModalForMovie(movie, selectedTime);
            };
        }

        movieDetailModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeMovieDetailModal() {
        if (movieDetailModal) {
            movieDetailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            selectedTime = '';
        }
    }

    // ============ ФУНКЦИИ ОТОБРАЖЕНИЯ ФИЛЬМОВ ============
    function renderMovieCard(movie, showNewBadge = false) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    
    // Поддержка PNG, JPG, JPEG
    const imagePath = movie.image;
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${imagePath}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Постер'">
            ${showNewBadge ? `<div class="movie-badge-new">🔥 Новинка</div>` : ''}
            ${movie.rating > 0 ? `<div class="movie-rating">⭐ ${movie.rating}</div>` : `<div class="movie-rating" style="background: rgba(255,170,34,0.3);">Скоро</div>`}
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-details">${movie.genre} • ${movie.duration}</p>
            <div class="movie-price">${movie.rating > 0 ? `от ${movie.price} ₽` : 'Скоро'}</div>
            <button class="btn btn-secondary buy-ticket-btn" data-id="${movie.id}" data-type="${movie.rating > 0 ? 'now' : 'soon'}">
                ${movie.rating > 0 ? 'Купить билет' : 'Скоро в прокате'}
            </button>
        </div>
    `;
    return card;
}

    function renderMovies() {
        const newReleasesScroll = document.getElementById('newReleasesScroll');
        if (newReleasesScroll) {
            newReleasesScroll.innerHTML = '';
            newReleasesMovies.forEach(movie => {
                const card = renderMovieCard(movie, true);
                // Клик по карточке открывает детали (только если клик не по кнопке)
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.buy-ticket-btn')) return;
                    openMovieDetail(movie);
                });
                newReleasesScroll.appendChild(card);
            });
        }

        const nowScroll = document.getElementById('nowShowingScroll');
        if (nowScroll) {
            nowScroll.innerHTML = '';
            nowShowingMovies.forEach(movie => {
                const card = renderMovieCard(movie, false);
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.buy-ticket-btn')) return;
                    openMovieDetail(movie);
                });
                nowScroll.appendChild(card);
            });
        }

        const soonScroll = document.getElementById('comingSoonScroll');
        if (soonScroll) {
            soonScroll.innerHTML = '';
            comingSoonMovies.forEach(movie => {
                const card = renderMovieCard(movie, false);
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.buy-ticket-btn')) return;
                    openMovieDetail(movie);
                });
                soonScroll.appendChild(card);
            });
        }

        // Обработчики для кнопок "Купить билет"
        document.querySelectorAll('.buy-ticket-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const movieId = parseInt(this.getAttribute('data-id'));
                const movieType = this.getAttribute('data-type');
                
                if (movieType === 'soon') {
                    alert('Этот фильм скоро появится в прокате! Следите за обновлениями.');
                    return;
                }

                let movie = newReleasesMovies.find(m => m.id === movieId);
                if (!movie) {
                    movie = nowShowingMovies.find(m => m.id === movieId);
                }
                if (movie) {
                    openMovieDetail(movie);
                }
            });
        });

        renderSessionsGrid();
    }

    // ============ РЕНДЕР СЕАНСОВ ============
    function renderSessionsGrid() {
    const grid = document.getElementById('sessionsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const availableMovies = [...nowShowingMovies, ...newReleasesMovies];
    const times = ['10:00', '13:00', '16:00', '19:00', '22:00'];

    availableMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'session-card';
        
        // Формируем путь к картинке
        const imagePath = movie.image.startsWith('http') ? movie.image : movie.image;
        
        let timesHtml = times.map(t => 
            `<button class="session-time-btn" data-movie-id="${movie.id}" data-time="${t}">${t}</button>`
        ).join('');

        card.innerHTML = `
            <img src="${imagePath}" alt="${movie.title}" class="session-card-poster" onerror="this.src='https://via.placeholder.com/300x450?text=Постер'">
            <div class="session-card-info">
                <h3 class="session-card-title">${movie.title}</h3>
                <p class="session-card-meta">${movie.genre} • ${movie.duration} • от ${movie.price} ₽</p>
                <div class="session-times">${timesHtml}</div>
            </div>
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll('.session-time-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const movieId = parseInt(this.dataset.movieId);
            const time = this.dataset.time;
            const movie = allMovies.find(m => m.id === movieId);
            if (movie) {
                openModalForMovie(movie, time);
            }
        });
    });
}

    // ============ ФУНКЦИИ БРОНИРОВАНИЯ ============
    function openModalForMovie(movie, time) {
        currentMovie = movie;
        currentMoviePrice = movie.price;
        currentSessionTime = time || '10:00';
        if (modalMovieTitle) modalMovieTitle.textContent = movie.title;
        if (modalSessionTime) modalSessionTime.textContent = `Сеанс: ${currentSessionTime}`;
        selectedSeats = [];
        updateSelectedUI();
        renderSeatsGrid();
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function renderSeatsGrid() {
        if (!seatsContainer) return;
        seatsContainer.innerHTML = '';
        for (let row = 0; row < occupiedSeats.length; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'seat-row';
            
            const rowLabel = document.createElement('div');
            rowLabel.className = 'row-label';
            rowLabel.textContent = String.fromCharCode(65 + row);
            rowDiv.appendChild(rowLabel);

            for (let col = 0; col < occupiedSeats[row].length; col++) {
                const seat = document.createElement('div');
                seat.className = 'seat';
                const isOccupied = occupiedSeats[row][col];
                const isSelected = selectedSeats.some(s => s.row === row && s.col === col);
                
                if (isOccupied) seat.classList.add('occupied');
                else if (isSelected) seat.classList.add('selected');
                else seat.classList.add('free');
                
                seat.textContent = col + 1;
                seat.dataset.row = row;
                seat.dataset.col = col;
                
                if (!isOccupied) {
                    seat.addEventListener('click', (function(r,c) {
                        return function() { toggleSeat(r,c); };
                    })(row, col));
                }
                rowDiv.appendChild(seat);
            }
            seatsContainer.appendChild(rowDiv);
        }
    }

    function toggleSeat(row, col) {
        const index = selectedSeats.findIndex(s => s.row === row && s.col === col);
        if (index === -1) {
            selectedSeats.push({ row, col });
        } else {
            selectedSeats.splice(index, 1);
        }
        updateSelectedUI();
        renderSeatsGrid();
    }

    function updateSelectedUI() {
        if (selectedCountSpan) selectedCountSpan.textContent = selectedSeats.length;
        let total = selectedSeats.length * currentMoviePrice;
        
        if (currentUser && selectedSeats.length > 0) {
            const discountAmount = total * 0.05;
            total = total - discountAmount;
            if (discountBadge) {
                discountBadge.style.display = 'inline';
                discountBadge.textContent = `Скидка 5%: -${Math.round(discountAmount)} ₽`;
            }
        } else if (discountBadge) {
            discountBadge.style.display = 'none';
        }
        
        if (totalPriceSpan) totalPriceSpan.textContent = Math.round(total);
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            selectedSeats = [];
        }
    }

    // ============ АВТОМАТИЧЕСКАЯ ПРОКРУТКА ЛЕНТЫ ============
    function startAutoScroll() {
        autoScrollIntervals.forEach(interval => clearInterval(interval));
        autoScrollIntervals = [];

        const scrolls = document.querySelectorAll('.movies-scroll');
        scrolls.forEach(scroll => {
            let scrollAmount = 0;
            const maxScroll = scroll.scrollWidth - scroll.clientWidth;
            
            if (maxScroll <= 0) return;
            
            const interval = setInterval(() => {
                scrollAmount += 1.5;
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0;
                }
                scroll.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }, 40);
            autoScrollIntervals.push(interval);
        });
    }

    // ============ ФОРМАТИРОВАНИЕ НОМЕРА КАРТЫ ============
    function formatCardNumber(input) {
        let value = input.value.replace(/\D/g, '');
        value = value.substring(0, 16);
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        input.value = value;
    }

    function formatCardExpiry(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        input.value = value;
    }

    // ============ МОДАЛЬНОЕ ОКНО КОНТАКТОВ ============
    const contactsModal = document.getElementById('contactsModal');
    const contactsModalClose = document.getElementById('contactsModalClose');
    const navContactsLink = document.getElementById('navContacts');
    const footerContactsLink = document.getElementById('footerContactsLink');

    function openContactsModal() {
        if (contactsModal) {
            contactsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeContactsModal() {
        if (contactsModal) {
            contactsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // ============ НАВЕШИВАНИЕ СОБЫТИЙ ============
    // Логотип в шапке — переход на главную
    if (mainLogo) {
        mainLogo.addEventListener('click', function(e) {
            if (this.tagName === 'A') {
                return;
            }
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
    
    // Логотип в подвале — переход на главную
    if (footerLogo) {
        footerLogo.addEventListener('click', function(e) {
            if (this.tagName === 'A') {
                return;
            }
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Закрытие модального окна просмотра фильма
    if (closeMovieDetailBtn) {
        closeMovieDetailBtn.addEventListener('click', closeMovieDetailModal);
    }
    if (movieDetailModal) {
        movieDetailModal.addEventListener('click', function(e) {
            if (e.target === movieDetailModal) closeMovieDetailModal();
        });
    }

    const scrollToMoviesBtn = document.getElementById('scrollToMovies');
    if (scrollToMoviesBtn) {
        scrollToMoviesBtn.addEventListener('click', () => {
            const newReleasesSection = document.getElementById('newReleases');
            if (newReleasesSection) {
                newReleasesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setActiveNav('navSeansy');
        });
    }

    if (navSeansy) {
        navSeansy.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'sessions.html';
        });
    }

    if (navContacts) {
        navContacts.addEventListener('click', (e) => {
            e.preventDefault();
            openContactsModal();
            setActiveNav('navContacts');
        });
    }

    // Корзина
    if (cartBtn) cartBtn.addEventListener('click', openCartModal);
    if (cartModalClose) cartModalClose.addEventListener('click', closeCartModal);
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCartModal();
        });
    }

    // Добавление в корзину
    if (addToCartBtn) addToCartBtn.addEventListener('click', addToCart);

    // Оплата
    if (checkoutBtn) checkoutBtn.addEventListener('click', openPaymentModal);
    if (paymentModalClose) paymentModalClose.addEventListener('click', closePaymentModal);
    if (paymentModal) {
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) closePaymentModal();
        });
    }
    if (paymentForm) paymentForm.addEventListener('submit', handlePayment);

    // Успешная оплата
    if (successCloseBtn) successCloseBtn.addEventListener('click', closeSuccessModal);
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) closeSuccessModal();
        });
    }

    // Форматирование полей карты
    const cardNumberInput = document.getElementById('cardNumber');
    const cardExpiryInput = document.getElementById('cardExpiry');
    if (cardNumberInput) cardNumberInput.addEventListener('input', function() { formatCardNumber(this); });
    if (cardExpiryInput) cardExpiryInput.addEventListener('input', function() { formatCardExpiry(this); });

    // Авторизация
    const authBtnElem = document.getElementById('authBtn');
    if (authBtnElem) authBtnElem.addEventListener('click', openAuthModal);
    if (authModalClose) authModalClose.addEventListener('click', closeAuthModal);
    if (authForm) authForm.addEventListener('submit', handleAuth);
    
    window.addEventListener('click', (e) => {
        if (e.target === authModal) closeAuthModal();
        if (e.target === modal) closeModal();
        if (e.target === movieDetailModal) closeMovieDetailModal();
    });
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    if (navContactsLink) {
        navContactsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openContactsModal();
            setActiveNav('navContacts');
        });
    }

    if (footerContactsLink) {
        footerContactsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openContactsModal();
        });
    }

    if (contactsModalClose) contactsModalClose.addEventListener('click', closeContactsModal);
    if (contactsModal) {
        contactsModal.addEventListener('click', (e) => {
            if (e.target === contactsModal) closeContactsModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (contactsModal?.classList.contains('active')) closeContactsModal();
            if (cartModal?.classList.contains('active')) closeCartModal();
            if (paymentModal?.classList.contains('active')) closePaymentModal();
            if (successModal?.classList.contains('active')) closeSuccessModal();
            if (authModal?.classList.contains('active')) closeAuthModal();
            if (modal?.style.display === 'flex') closeModal();
            if (movieDetailModal?.style.display === 'flex') closeMovieDetailModal();
        }
    });

    // КНОПКА "НАВЕРХ"
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============ ИНИЦИАЛИЗАЦИЯ ============
    checkSavedUser();
    renderMovies();
    setupTabs();
    setTimeout(startAutoScroll, 1000);
    updateCartUI();
})();