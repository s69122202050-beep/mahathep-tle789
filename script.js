```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Tahoma", "Arial", sans-serif;
    background: #f6f8ef;
    color: #26351f;
    line-height: 1.7;
}


/* ================= HEADER ================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 12px 6%;

    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.08);
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 14px;
}

.logo {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.brand-text h1 {
    font-size: 22px;
    color: #31551c;
}

.brand-text p {
    font-size: 13px;
    color: #777;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: #304329;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #8b6508;
}


/* ================= HERO ================= */

.hero {
    min-height: 650px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 70px 8%;

    background:
        linear-gradient(
            135deg,
            #edf6d7,
            #fffde9
        );
}

.hero-content {
    width: 48%;
}

.badge {
    display: inline-block;

    padding: 8px 18px;

    background: #dbeebc;
    color: #3b641e;

    border-radius: 30px;

    font-weight: bold;
    margin-bottom: 20px;
}

.hero h2 {
    font-size: clamp(40px, 5vw, 70px);
    line-height: 1.15;
    color: #294516;
    margin-bottom: 20px;
}

.hero h2 span {
    color: #bd8b08;
}

.hero-content p {
    font-size: 18px;
    color: #58634f;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;

    padding: 13px 25px;

    background: #315b20;
    color: white;

    border-radius: 30px;

    text-decoration: none;
    font-weight: bold;

    box-shadow: 0 8px 20px rgba(49, 91, 32, 0.25);

    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
    background: #456f2d;
}


/* ================= HERO FRUIT ================= */

.hero-fruit {
    width: 48%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-fruit img {
    width: 100%;
    max-width: 560px;

    height: auto;

    object-fit: contain;

    filter:
        drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25));

    transition: transform 0.4s ease;
}

.hero-fruit img:hover {
    transform: scale(1.04) rotate(1deg);
}


/* ================= SECTION ================= */

.section,
.logic-section,
.cart-section {
    padding: 90px 7%;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title span {
    color: #a57c12;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 13px;
}

.section-title h2 {
    font-size: 36px;
    color: #304a22;
    margin: 8px 0;
}

.section-title p {
    color: #777;
}


/* ================= PRODUCTS ================= */

.product-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(230px, 1fr));

    gap: 25px;
}

.product-card {
    background: white;

    border-radius: 22px;

    padding: 20px;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.08);

    transition: 0.3s;

    position: relative;

    overflow: hidden;
}

.product-card:hover {
    transform: translateY(-8px);
}

.product-image {
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f3f7e7;

    border-radius: 18px;

    margin-bottom: 18px;

    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: contain;
}

.product-card h3 {
    color: #304a22;
    margin-bottom: 5px;
}

.product-card p {
    color: #777;
    font-size: 14px;
}

.price {
    color: #bd8b08;
    font-size: 22px;
    font-weight: bold;

    margin: 10px 0;
}

.discount-badge {
    position: absolute;

    top: 15px;
    right: 15px;

    padding: 5px 10px;

    background: #d94d35;
    color: white;

    border-radius: 20px;

    font-size: 12px;
    font-weight: bold;
}

.add-btn {
    width: 100%;

    padding: 11px;

    border: none;

    background: #315b20;
    color: white;

    border-radius: 12px;

    cursor: pointer;

    font-weight: bold;

    transition: 0.3s;
}

.add-btn:hover {
    background: #4c742f;
}


/* ================= LOGIC ================= */

.logic-section {
    background: #edf3df;
}

.logic-container {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 25px;

    margin-bottom: 30px;
}

.logic-card,
.operation-box,
.boolean-box,
.ifelse-box {
    background: white;

    padding: 30px;

    border-radius: 20px;

    box-shadow:
        0 7px 25px rgba(0, 0, 0, 0.07);

    margin-bottom: 25px;
}

.logic-card h3,
.operation-box h3,
.boolean-box h3,
.ifelse-box h3 {
    color: #315b20;
    margin-bottom: 8px;
}

.set-box {
    margin-top: 15px;

    min-height: 80px;

    padding: 15px;

    background: #f2f6e8;

    border-radius: 12px;

    color: #526442;
}


/* ================= OPERATION ================= */

.operation-buttons,
.boolean-buttons {
    display: flex;
    gap: 12px;

    margin: 20px 0;

    flex-wrap: wrap;
}

.operation-buttons button,
.boolean-buttons button {
    border: none;

    padding: 14px 20px;

    background: #315b20;
    color: white;

    border-radius: 12px;

    cursor: pointer;

    font-weight: bold;

    transition: 0.3s;
}

.operation-buttons button:hover,
.boolean-buttons button:hover {
    transform: translateY(-2px);
    background: #4d762e;
}

.operation-buttons small {
    display: block;
    font-size: 10px;
    opacity: 0.8;
}

.logic-result,
.boolean-result,
.ifelse-result {
    padding: 18px;

    background: #f3f6e9;

    border-radius: 12px;

    font-weight: bold;

    color: #39552c;
}


/* ================= BOOLEAN ================= */

.boolean-controls {
    display: flex;
    gap: 30px;

    margin: 20px 0;
}

.boolean-controls label {
    cursor: pointer;
}

.boolean-controls input {
    margin-right: 8px;
}


/* ================= IF ELSE ================= */

.ifelse-form {
    display: flex;
    gap: 12px;

    margin: 20px 0;
}

.ifelse-form input {
    width: 180px;

    padding: 12px;

    border: 1px solid #ccd5bd;

    border-radius: 10px;

    font-size: 16px;
}

.ifelse-form button {
    border: none;

    padding: 12px 20px;

    background: #bd8b08;
    color: white;

    border-radius: 10px;

    cursor: pointer;

    font-weight: bold;
}


/* ================= CART ================= */

.cart-section {
    background: #fffdf3;
}

.cart-container {
    display: grid;

    grid-template-columns: 1.5fr 1fr;

    gap: 30px;

    align-items: start;
}

.cart-items {
    min-height: 200px;
}

.empty-cart {
    padding: 50px;

    text-align: center;

    background: white;

    border-radius: 20px;

    color: #888;
}

.cart-item {
    display: flex;

    align-items: center;

    gap: 15px;

    background: white;

    padding: 18px;

    border-radius: 15px;

    margin-bottom: 12px;

    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.06);
}

.cart-item img {
    width: 80px;
    height: 80px;

    object-fit: contain;

    background: #f3f6e8;

    border-radius: 12px;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    color: #304a22;
}

.cart-price {
    color: #bd8b08;
    font-weight: bold;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 8px;
}

.quantity-control button {
    width: 30px;
    height: 30px;

    border: none;

    border-radius: 50%;

    background: #315b20;
    color: white;

    cursor: pointer;
}

.remove-btn {
    border: none;

    background: #d94d35;
    color: white;

    padding: 6px 10px;

    border-radius: 8px;

    cursor: pointer;
}


/* ================= SUMMARY ================= */

.cart-summary {
    background: white;

    padding: 30px;

    border-radius: 20px;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.08);

    position: sticky;
    top: 100px;
}

.cart-summary h3 {
    margin-bottom: 20px;
    color: #304a22;
}

.summary-row,
.summary-total {
    display: flex;

    justify-content: space-between;

    padding: 12px 0;

    border-bottom: 1px solid #eee;
}

.discount-row strong {
    color: #d94d35;
}

.summary-total {
    border: none;

    font-size: 22px;

    color: #315b20;

    margin-top: 10px;
}

.checkout-btn {
    width: 100%;

    padding: 14px;

    border: none;

    background: #315b20;
    color: white;

    border-radius: 12px;

    font-size: 17px;

    font-weight: bold;

    cursor: pointer;

    margin-top: 15px;
}

.checkout-btn:hover {
    background: #4b722d;
}


/* ================= FOOTER ================= */

footer {
    text-align: center;

    padding: 50px 20px;

    background: #24391c;

    color: white;
}

.footer-logo {
    width: 80px;
    height: 80px;

    object-fit: cover;

    border-radius: 50%;

    margin-bottom: 10px;
}

footer h3 {
    font-size: 23px;
}

footer p {
    color: #d7e0d0;
}

.footer-small {
    font-size: 12px;
    margin-top: 15px;
    opacity: 0.7;
}


/* ================= RESPONSIVE ================= */

@media (max-width: 900px) {

    .header {
        flex-direction: column;
        gap: 12px;
    }

    nav {
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        flex-direction: column;

        text-align: center;

        padding-top: 50px;
    }

    .hero-content,
    .hero-fruit {
        width: 100%;
    }

    .hero-fruit {
        margin-top: 30px;
    }

    .hero-fruit img {
        max-width: 400px;
    }

    .logic-container,
    .cart-container {
        grid-template-columns: 1fr;
    }

    .cart-summary {
        position: static;
    }
}


@media (max-width: 600px) {

    .brand-text h1 {
        font-size: 18px;
    }

    .brand-text p {
        font-size: 11px;
    }

    .logo {
        width: 55px;
        height: 55px;
    }

    nav a {
        font-size: 13px;
    }

    .section,
    .logic-section,
    .cart-section {
        padding: 60px 5%;
    }

    .section-title h2 {
        font-size: 28px;
    }

    .hero h2 {
        font-size: 42px;
    }

    .boolean-controls {
        flex-direction: column;
        gap: 10px;
    }

    .ifelse-form {
        flex-direction: column;
    }

    .ifelse-form input {
        width: 100%;
    }

    .cart-item {
        flex-wrap: wrap;
    }
}
```
