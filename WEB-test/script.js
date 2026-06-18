(function() {
    // ============ ДАННЫЕ ФИЛЬМОВ ============
    // НОВИНКИ КИНОПРОКАТА
    const newReleasesMovies = [
        { id: 201, title: "Майкл Джексон: Биопик", genre: "Драма", duration: "2ч 30мин", rating: 8.9, price: 480, image: "https://image.tmdb.org/t/p/w500/8X8X8X8X8X8X8X8X8X8X8X8X8X8X8.jpg", isNew: true },
        { id: 202, title: "Кунг-фу Панда 4", genre: "Мультфильм", duration: "1ч 34мин", rating: 8.7, price: 370, image: "https://image.tmdb.org/t/p/w500/9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9.jpg", isNew: true },
        { id: 203, title: "Годзилла и Конг 2", genre: "Фантастика", duration: "2ч 15мин", rating: 8.5, price: 510, image: "https://image.tmdb.org/t/p/w500/1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1.jpg", isNew: true },
        { id: 204, title: "Соник 3", genre: "Комедия", duration: "1ч 50мин", rating: 8.3, price: 400, image: "https://image.tmdb.org/t/p/w500/2X2X2X2X2X2X2X2X2X2X2X2X2X2X2.jpg", isNew: true },
        { id: 205, title: "Миньоны 3", genre: "Мультфильм", duration: "1ч 27мин", rating: 8.1, price: 360, image: "https://image.tmdb.org/t/p/w500/3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3.jpg", isNew: true },
        { id: 206, title: "Джокер: Безумие", genre: "Драма", duration: "2ч 18мин", rating: 9.0, price: 490, image: "https://image.tmdb.org/t/p/w500/5X5X5X5X5X5X5X5X5X5X5X5X5X5X5.jpg", isNew: true }
    ];

    // СЕЙЧАС В ПРОКАТЕ
    const nowShowingMovies = [
        { id: 1, title: "Дюна: Часть вторая", genre: "Фантастика", duration: "2ч 46мин", rating: 9.1, price: 450, image: "https://image.tmdb.org/t/p/w500/8uUU2FmJa6GQEH0AIhhqbNf2Jf2.jpg" },
        { id: 2, title: "Мастер и Маргарита", genre: "Драма", duration: "2ч 35мин", rating: 8.7, price: 390, image: "https://image.tmdb.org/t/p/w500/6kfZbsr6KZ4f2LwRWJqFv8c4C8Z.jpg" },
        { id: 3, title: "Гладиатор 2", genre: "Боевик", duration: "2ч 28мин", rating: 8.5, price: 500, image: "https://image.tmdb.org/t/p/w500/2FHVW9GcK9gkqoFvR6VtV9I4X9m.jpg" },
        { id: 4, title: "Головоломка 2", genre: "Мультфильм", duration: "1ч 40мин", rating: 8.9, price: 350, image: "https://image.tmdb.org/t/p/w500/oxxQpGKIe1cR3UZ6S0bL2fZ8nXb.jpg" },
        { id: 5, title: "Бэтмен", genre: "Боевик", duration: "2ч 56мин", rating: 8.4, price: 480, image: "https://image.tmdb.org/t/p/w500/b8Pl7Y6r4RgCp2jW6mUoG2Tt8x9.jpg" },
        { id: 6, title: "Аватар: Путь воды", genre: "Фантастика", duration: "3ч 12мин", rating: 8.8, price: 520, image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
        { id: 7, title: "Оппенгеймер", genre: "Драма", duration: "3ч 00мин", rating: 8.9, price: 460, image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
        { id: 8, title: "Барби", genre: "Комедия", duration: "1ч 54мин", rating: 7.8, price: 380, image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
        { id: 9, title: "Форсаж 10", genre: "Боевик", duration: "2ч 21мин", rating: 7.5, price: 420, image: "https://image.tmdb.org/t/p/w500/1E5jNnKj5Z3W5M5n5N5n5N5n5N5.jpg" },
        { id: 10, title: "Элементарно", genre: "Мультфильм", duration: "1ч 33мин", rating: 8.2, price: 340, image: "https://image.tmdb.org/t/p/w500/4Y1WNQ3J5fJ5X5X5X5X5X5X5X5.jpg" },
        { id: 11, title: "Джон Уик 4", genre: "Боевик", duration: "2ч 49мин", rating: 8.6, price: 490, image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5R6jWl.jpg" },
        { id: 12, title: "Трансформеры: Восхождение", genre: "Фантастика", duration: "2ч 07мин", rating: 7.2, price: 440, image: "https://image.tmdb.org/t/p/w500/gPbM0MK8MP8P8P8P8P8P8P8P8P8.jpg" }
    ];

    // СКОРО В ПРОКАТЕ
    const comingSoonMovies = [
        { id: 101, title: "Дэдпул 3", genre: "Боевик", duration: "2ч 10мин", rating: 0, price: 470, image: "https://image.tmdb.org/t/p/w500/4Z7lK5F5l5l5l5l5l5l5l5l5l5l5.jpg" },
        { id: 102, title: "Веном 3", genre: "Фантастика", duration: "1ч 55мин", rating: 0, price: 450, image: "https://image.tmdb.org/t/p/w500/5X5X5X5X5X5X5X5X5X5X5X5X5X5X5.jpg" },
        { id: 103, title: "Фуриоса: Хроники", genre: "Боевик", duration: "2ч 28мин", rating: 0, price: 500, image: "https://image.tmdb.org/t/p/w500/6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6.jpg" },
        { id: 104, title: "Гарфилд в кино", genre: "Мультфильм", duration: "1ч 41мин", rating: 0, price: 350, image: "https://image.tmdb.org/t/p/w500/7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7.jpg" },
        { id: 105, title: "Майкл Джексон: Биопик", genre: "Драма", duration: "2ч 30мин", rating: 0, price: 480, image: "https://image.tmdb.org/t/p/w500/8X8X8X8X8X8X8X8X8X8X8X8X8X8X8.jpg" },
        { id: 106, title: "Кунг-фу Панда 4", genre: "Мультфильм", duration: "1ч 34мин", rating: 0, price: 370, image: "https://image.tmdb.org/t/p/w500/9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9.jpg" },
        { id: 107, title: "Годзилла и Конг 2", genre: "Фантастика", duration: "2ч 15мин", rating: 0, price: 510, image: "https://image.tmdb.org/t/p/w500/1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1.jpg" },
        { id: 108, title: "Соник 3", genre: "Комедия", duration: "1ч 50мин", rating: 0, price: 400, image: "https://image.tmdb.org/t/p/w500/2X2X2X2X2X2X2X2X2X2X2X2X2X2X2.jpg" },
        { id: 109, title: "Миньоны 3", genre: "Мультфильм", duration: "1ч 27мин", rating: 0, price: 360, image: "https://image.tmdb.org/t/p/w500/3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3Y3.jpg" },
        { id: 110, title: "Миссия невыполнима 8", genre: "Боевик", duration: "2ч 40мин", rating: 0, price: 520, image: "https://image.tmdb.org/t/p/w500/4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4.jpg" },
        { id: 111, title: "Джокер: Безумие", genre: "Драма", duration: "2ч 18мин", rating: 0, price: 490, image: "https://image.tmdb.org/t/p/w500/5X5X5X5X5X5X5X5X5X5X5X5X5X5X5.jpg" },
        { id: 112, title: "Ледяная принцесса", genre: "Мультфильм", duration: "1ч 38мин", rating: 0, price: 340, image: "https://image.tmdb.org/t/p/w500/6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6.jpg" }
    ];

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

    const modal = document.getElementById('seatModal');
    const seatsContainer = document.getElementById('seatsContainer');
    const selectedCountSpan = document.getElementById('selectedCount');
    const totalPriceSpan = document.getElementById('totalPrice');
    const modalMovieTitle = document.getElementById('modalMovieTitle');
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

    const navAfisha = document.getElementById('navAfisha');
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

        // Формируем строку с местами
        const seatLabels = selectedSeats.map(s => String.fromCharCode(65 + s.row) + (s.col + 1)).join(', ');

        const cartItem = {
            id: Date.now(),
            movieId: currentMovie.id,
            movieTitle: currentMovie.title,
            seats: [...selectedSeats],
            seatLabels: seatLabels,
            count: selectedSeats.length,
            price: currentMoviePrice,
            total: selectedSeats.length * currentMoviePrice
        };

        cart.push(cartItem);
        updateCartUI();

        // Закрываем модалку выбора мест
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        selectedSeats = [];

        alert(`✅ Билеты на "${currentMovie.title}" (${cartItem.count} шт.) добавлены в корзину!`);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
        cartBadge.textContent = totalItems;

        if (cart.length === 0) {
            cartEmpty.style.display = 'block';
            cartItems.innerHTML = '';
            cartSummary.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';

        let subtotal = 0;
        let totalTickets = 0;
        let html = '';

        cart.forEach((item, index) => {
            subtotal += item.total;
            totalTickets += item.count;
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.movieTitle}</div>
                        <div class="cart-item-details">
                            <span>${item.count} × ${item.price} ₽</span>
                            <span class="cart-item-seats">Места: ${item.seatLabels}</span>
                        </div>
                    </div>
                    <div class="cart-item-price">
                        ${item.total} ₽
                        <button class="cart-item-remove" data-index="${index}" aria-label="Удалить">✕</button>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = html;

        // Обработчики удаления
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                // Возвращаем места обратно в зал
                const item = cart[index];
                if (item) {
                    for (let seat of item.seats) {
                        occupiedSeats[seat.row][seat.col] = false;
                    }
                }
                cart.splice(index, 1);
                updateCartUI();
                renderMovies(); // Обновляем отображение мест
            });
        });

        // Итоговая сумма со скидкой
        let finalTotal = subtotal;
        let discount = 0;
        if (currentUser && subtotal > 0) {
            discount = subtotal * 0.05;
            finalTotal = subtotal - discount;
            cartDiscountRow.style.display = 'flex';
            cartDiscountAmount.textContent = `-${Math.round(discount)} ₽`;
        } else {
            cartDiscountRow.style.display = 'none';
        }

        cartTotalPrice.textContent = `${Math.round(subtotal)} ₽`;
        cartFinalPrice.textContent = `${Math.round(finalTotal)} ₽`;
    }

    function openCartModal() {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartUI();
    }

    function closeCartModal() {
        cartModal.classList.remove('active');
        document.body.style.overflow = 'auto';
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

        paymentTicketsCount.textContent = totalTickets;
        paymentTotalPrice.textContent = `${Math.round(subtotal)} ₽`;

        let finalTotal = subtotal;
        let discount = 0;
        if (currentUser && subtotal > 0) {
            discount = subtotal * 0.05;
            finalTotal = subtotal - discount;
            paymentDiscountRow.style.display = 'flex';
            paymentDiscountAmount.textContent = `-${Math.round(discount)} ₽`;
        } else {
            paymentDiscountRow.style.display = 'none';
        }

        paymentFinalPrice.textContent = `${Math.round(finalTotal)} ₽`;

        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePaymentModal() {
        paymentModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function handlePayment(e) {
        e.preventDefault();

        // Валидация полей
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

        // Имитация оплаты
        const submitBtn = paymentForm.querySelector('.btn-payment-submit');
        submitBtn.textContent = '⏳ Обработка...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Оплатить';
            submitBtn.disabled = false;

            // Помечаем все места как занятые
            for (let item of cart) {
                for (let seat of item.seats) {
                    occupiedSeats[seat.row][seat.col] = true;
                }
            }

            // Формируем детали успешной оплаты
            const userMessage = currentUser ? `, ${currentUser.name}` : '';
            const totalTickets = cart.reduce((sum, item) => sum + item.count, 0);
            const movies = cart.map(item => `${item.movieTitle} (${item.count} шт.)`).join(', ');
            
            successDetails.textContent = `Билеты на ${totalTickets} мест${userMessage}. Фильмы: ${movies}. Билеты отправлены на вашу почту.`;

            // Очищаем корзину
            cart = [];
            updateCartUI();

            closePaymentModal();
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Обновляем отображение фильмов
            renderMovies();

        }, 2000);
    }

    function closeSuccessModal() {
        successModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // ============ ФУНКЦИИ ПРОКРУТКИ ============
    function scrollToHome() {
        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function scrollToNewReleases() {
        const newReleasesSection = document.getElementById('newReleases');
        if (newReleasesSection) {
            newReleasesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            const titles = document.querySelectorAll('.section-title');
            for (let title of titles) {
                if (title.textContent.includes('Новинки кинопроката')) {
                    title.closest('.movies-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }
        }
    }

    function scrollToNowShowing() {
        const nowShowingSection = document.getElementById('nowShowing');
        if (nowShowingSection) {
            nowShowingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            const titles = document.querySelectorAll('.section-title');
            for (let title of titles) {
                if (title.textContent.includes('В прокате')) {
                    title.closest('.movies-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }
        }
    }

    function scrollToFooter() {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
            authContainer.innerHTML = `
                <div class="user-info">
                    <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                    <span class="user-name">${currentUser.name}</span>
                    <span class="discount-badge" style="background: #ffaa22; color: #0f0f14; padding: 2px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">-5%</span>
                    <button class="logout-btn" id="logoutBtn">Выйти</button>
                </div>
            `;
            document.getElementById('logoutBtn').addEventListener('click', logout);
        } else {
            discountPercent = 0;
            authContainer.innerHTML = `<button class="btn btn-outline" id="authBtn">Войти</button>`;
            document.getElementById('authBtn').addEventListener('click', openAuthModal);
        }
        if (modal.style.display === 'flex') {
            updateSelectedUI();
        }
        updateCartUI();
    }

    function openAuthModal() {
        isLoginMode = true;
        authModalTitle.textContent = 'Вход';
        authSubmitBtn.textContent = 'Войти';
        authSwitchText.innerHTML = 'Нет аккаунта? <a id="authSwitchLink">Зарегистрироваться</a>';
        authEmail.value = '';
        authPassword.value = '';
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('authSwitchLink').addEventListener('click', switchAuthMode);
    }

    function closeAuthModal() {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function switchAuthMode() {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            authModalTitle.textContent = 'Вход';
            authSubmitBtn.textContent = 'Войти';
            authSwitchText.innerHTML = 'Нет аккаунта? <a id="authSwitchLink">Зарегистрироваться</a>';
        } else {
            authModalTitle.textContent = 'Регистрация';
            authSubmitBtn.textContent = 'Зарегистрироваться';
            authSwitchText.innerHTML = 'Уже есть аккаунт? <a id="authSwitchLink">Войти</a>';
        }
        document.getElementById('authSwitchLink').addEventListener('click', switchAuthMode);
    }

    function handleAuth(e) {
        e.preventDefault();
        const email = authEmail.value.trim();
        const password = authPassword.value.trim();

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

    // ============ ФУНКЦИИ ОТОБРАЖЕНИЯ ФИЛЬМОВ ============
    function renderMovieCard(movie, showNewBadge = false) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Постер'">
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
                newReleasesScroll.appendChild(renderMovieCard(movie, true));
            });
        }

        const nowScroll = document.getElementById('nowShowingScroll');
        if (nowScroll) {
            nowScroll.innerHTML = '';
            nowShowingMovies.forEach(movie => {
                nowScroll.appendChild(renderMovieCard(movie, false));
            });
        }

        const soonScroll = document.getElementById('comingSoonScroll');
        if (soonScroll) {
            soonScroll.innerHTML = '';
            comingSoonMovies.forEach(movie => {
                soonScroll.appendChild(renderMovieCard(movie, false));
            });
        }

        document.querySelectorAll('.buy-ticket-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
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
                    openModalForMovie(movie);
                }
            });
        });
    }

    // ============ ФУНКЦИИ БРОНИРОВАНИЯ ============
    function openModalForMovie(movie) {
        currentMovie = movie;
        currentMoviePrice = movie.price;
        modalMovieTitle.textContent = movie.title;
        selectedSeats = [];
        updateSelectedUI();
        renderSeatsGrid();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function renderSeatsGrid() {
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
        selectedCountSpan.textContent = selectedSeats.length;
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
        
        totalPriceSpan.textContent = Math.round(total);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        selectedSeats = [];
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
    const footerContactsLink = document.querySelector('.footer-nav-link[href*="footer"]');

    function openContactsModal() {
        contactsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeContactsModal() {
        contactsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // ============ НАВЕШИВАНИЕ СОБЫТИЙ ============
    mainLogo?.addEventListener('click', () => {
        scrollToHome();
        setActiveNav('navSeansy');
    });
    
    footerLogo?.addEventListener('click', () => {
        scrollToHome();
        setActiveNav('navSeansy');
    });

    document.getElementById('scrollToMovies')?.addEventListener('click', () => {
        scrollToNewReleases();
        setActiveNav('navSeansy');
    });

    navSeansy?.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToNowShowing();
        setActiveNav('navSeansy');
    });

    navContacts?.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToFooter();
        setActiveNav('navContacts');
    });

    // Корзина
    cartBtn?.addEventListener('click', openCartModal);
    cartModalClose?.addEventListener('click', closeCartModal);
    cartModal?.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
    });

    // Добавление в корзину
    addToCartBtn?.addEventListener('click', addToCart);

    // Оплата
    checkoutBtn?.addEventListener('click', openPaymentModal);
    paymentModalClose?.addEventListener('click', closePaymentModal);
    paymentModal?.addEventListener('click', (e) => {
        if (e.target === paymentModal) closePaymentModal();
    });
    paymentForm?.addEventListener('submit', handlePayment);

    // Успешная оплата
    successCloseBtn?.addEventListener('click', closeSuccessModal);
    successModal?.addEventListener('click', (e) => {
        if (e.target === successModal) closeSuccessModal();
    });

    // Форматирование полей карты
    const cardNumberInput = document.getElementById('cardNumber');
    const cardExpiryInput = document.getElementById('cardExpiry');
    cardNumberInput?.addEventListener('input', function() { formatCardNumber(this); });
    cardExpiryInput?.addEventListener('input', function() { formatCardExpiry(this); });

    // Авторизация
    authBtn?.addEventListener('click', openAuthModal);
    authModalClose?.addEventListener('click', closeAuthModal);
    authForm?.addEventListener('submit', handleAuth);
    
    window.addEventListener('click', (e) => {
        if (e.target === authModal) closeAuthModal();
        if (e.target === modal) closeModal();
    });
    
    closeModalBtn?.addEventListener('click', closeModal);

    navContactsLink?.addEventListener('click', (e) => {
        e.preventDefault();
        openContactsModal();
        setActiveNav('navContacts');
    });

    if (footerContactsLink) {
        footerContactsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openContactsModal();
        });
    }

    contactsModalClose?.addEventListener('click', closeContactsModal);
    contactsModal?.addEventListener('click', (e) => {
        if (e.target === contactsModal) closeContactsModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (contactsModal?.classList.contains('active')) closeContactsModal();
            if (cartModal?.classList.contains('active')) closeCartModal();
            if (paymentModal?.classList.contains('active')) closePaymentModal();
            if (successModal?.classList.contains('active')) closeSuccessModal();
        }
    });

    // КНОПКА "НАВЕРХ"
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn?.classList.add('visible');
        } else {
            scrollTopBtn?.classList.remove('visible');
        }
    });
    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============ ИНИЦИАЛИЗАЦИЯ ============
    checkSavedUser();
    renderMovies();
    setupTabs();
    setTimeout(startAutoScroll, 1000);
    updateCartUI();
})();