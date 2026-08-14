/* =========================================
   MAHATHEP TEAL789
   DURian Shop + Set Theory + Boolean Logic
========================================= */


/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,
        name: "หมอนทอง",
        type: "เกรดพรีเมียม",
        weight: "2-3 กก.",
        weightNumber: 3,
        price: 450,
        discount: 5,
        emoji: "🥭",
        recommended: true,
        inStock: true
    },

    {
        id: 2,
        name: "หมอนทอง",
        type: "ลูกใหญ่พิเศษ",
        weight: "4-5 กก.",
        weightNumber: 5,
        price: 750,
        discount: 10,
        emoji: "🥭",
        recommended: true,
        inStock: true
    },

    {
        id: 3,
        name: "ก้านยาว",
        type: "หอมหวาน",
        weight: "2-3 กก.",
        weightNumber: 3,
        price: 550,
        discount: 5,
        emoji: "🥭",
        recommended: true,
        inStock: true
    },

    {
        id: 4,
        name: "ชะนี",
        type: "เนื้อนุ่ม",
        weight: "3-4 กก.",
        weightNumber: 4,
        price: 480,
        discount: 8,
        emoji: "🥭",
        recommended: false,
        inStock: true
    },

    {
        id: 5,
        name: "พวงมณี",
        type: "หวานมัน",
        weight: "1-2 กก.",
        weightNumber: 2,
        price: 350,
        discount: 5,
        emoji: "🥭",
        recommended: true,
        inStock: true
    },

    {
        id: 6,
        name: "กระดุม",
        type: "ลูกเล็กหวานมัน",
        weight: "1-2 กก.",
        weightNumber: 2,
        price: 300,
        discount: 0,
        emoji: "🥭",
        recommended: false,
        inStock: true
    }

];


/* =========================================
   CART
========================================= */

let cart = [];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts() {

    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(product => {

        const discountText =
            product.discount > 0
                ? `<span class="discount">
                    ลด ${product.discount}%
                   </span>`
                : "";

        const recommendText =
            product.recommended
                ? " ⭐ แนะนำ"
                : "";

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.emoji}
            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                    ${recommendText}
                </h3>

                <p class="product-type">
                    ${product.type}
                </p>

                <div class="product-meta">

                    <span>
                        ⚖️ ${product.weight}
                    </span>

                    <span>
                        ${product.inStock
                            ? "🟢 มีสินค้า"
                            : "🔴 หมด"}
                    </span>

                </div>

                <div class="product-price">

                    <span class="price">
                        ${formatMoney(product.price)} บาท
                    </span>

                    ${discountText}

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                    ${!product.inStock ? "disabled" : ""}
                >
                    🛒 เพิ่มลงตะกร้า
                </button>

            </div>

        `;

        productList.appendChild(card);

    });

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) {
        return;
    }

    const existing =
        cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

    alert(
        `เพิ่ม ${product.name} ${product.weight} ลงตะกร้าแล้ว 🥭`
    );
}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    updateCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, amount) {

    const item =
        cart.find(item => item.id === productId);

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    updateCart();
}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                🛒 ยังไม่มีสินค้าในตะกร้า
            </p>
        `;

        updateSummary();

        return;
    }


    cartItems.innerHTML = "";

    cart.forEach(item => {

        const itemElement =
            document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `

            <div>

                <h4>
                    ${item.emoji}
                    ${item.name}
                </h4>

                <small>
                    ${item.weight}
                    × ${item.quantity}
                </small>

            </div>


            <div class="cart-actions">

                <button
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    ×
                </button>

            </div>

        `;

        cartItems.appendChild(itemElement);

    });


    updateSummary();
}


/* =========================================
   SUMMARY
========================================= */

function updateSummary() {

    let subtotal = 0;

    let discount = 0;


    cart.forEach(item => {

        const itemSubtotal =
            item.price * item.quantity;

        subtotal += itemSubtotal;


        /*
            IF / ELSE
            ถ้าซื้อ 2 ชิ้นขึ้นไป
            เพิ่มส่วนลดอีก 5%
        */

        let discountRate =
            item.discount;

        if (item.quantity >= 2) {

            discountRate += 5;

        } else {

            discountRate =
                item.discount;

        }


        discount +=
            itemSubtotal * discountRate / 100;

    });


    const total =
        subtotal - discount;


    document.getElementById("subtotal")
        .textContent =
        `${formatMoney(subtotal)} บาท`;


    document.getElementById("discount")
        .textContent =
        `-${formatMoney(discount)} บาท`;


    document.getElementById("total")
        .textContent =
        `${formatMoney(total)} บาท`;

}


/* =========================================
   FORMAT MONEY
========================================= */

function formatMoney(number) {

    return Number(number).toLocaleString("th-TH", {
        maximumFractionDigits: 2
    });

}


/* =========================================
   SET THEORY
========================================= */


/*
    SET A
    = สินค้าทั้งหมด

    SET B
    = สินค้าที่มีส่วนลด
*/

function createSets() {

    const setA =
        products.map(product => product.name);

    const setB =
        products
            .filter(product => product.discount > 0)
            .map(product => product.name);


    document.getElementById("setA")
        .textContent =
        `{ ${[...new Set(setA)].join(", ")} }`;


    document.getElementById("setB")
        .textContent =
        `{ ${[...new Set(setB)].join(", ")} }`;

}


/* =========================================
   SET OPERATION
========================================= */

function setOperation(operation) {

    const A =
        products.map(product => product.name);

    const B =
        products
            .filter(product => product.discount > 0)
            .map(product => product.name);


    const uniqueA =
        [...new Set(A)];

    const uniqueB =
        [...new Set(B)];


    let result = [];


    /*
        A ∩ B
        Intersection
        สมาชิกที่อยู่ใน A และ B
    */

    if (operation === "AND") {

        result =
            uniqueA.filter(
                item => uniqueB.includes(item)
            );

    }


    /*
        A ∪ B
        Union
        รวมสมาชิกของ A และ B
    */

    else if (operation === "OR") {

        result =
            [...new Set([
                ...uniqueA,
                ...uniqueB
            ])];

    }


    /*
        NOT A
        ในตัวอย่างนี้ใช้
        A - B

        คือสมาชิกที่อยู่ใน A
        แต่ไม่อยู่ใน B
    */

    else if (operation === "NOT") {

        result =
            uniqueA.filter(
                item => !uniqueB.includes(item)
            );

    }


    const symbol =
        operation === "AND"
            ? "A ∩ B"
            : operation === "OR"
                ? "A ∪ B"
                : "A - B";


    document.getElementById("logicResult")
        .innerHTML = `

            <strong>${symbol}</strong>

            <br><br>

            { ${result.join(", ")} }

            <br><br>

            จำนวนสมาชิก =
            ${result.length}

        `;

}


/* =========================================
   BOOLEAN LOGIC
========================================= */

function booleanOperation(operation) {

    const A =
        document.getElementById("booleanA").checked;

    const B =
        document.getElementById("booleanB").checked;


    let result;


    /*
        AND
        จริงเมื่อ A และ B เป็นจริงทั้งคู่
    */

    if (operation === "AND") {

        result = A && B;

    }


    /*
        OR
        จริงเมื่อ A หรือ B อย่างน้อยหนึ่งตัวเป็นจริง
    */

    else if (operation === "OR") {

        result = A || B;

    }


    /*
        NOT
        กลับค่าของ A
    */

    else if (operation === "NOT") {

        result = !A;

    }


    const text =
        result ? "TRUE ✅" : "FALSE ❌";


    document.getElementById("booleanResult")
        .innerHTML = `

            Operation:
            <strong>${operation}</strong>

            <br><br>

            A = ${A}

            <br>

            B = ${B}

            <br><br>

            ผลลัพธ์ =
            <strong>${text}</strong>

        `;

}


/* =========================================
   IF / ELSE
========================================= */

function checkDiscount() {

    const quantity =
        Number(
            document.getElementById(
                "quantityInput"
            ).value
        );


    let message;


    /*
        IF / ELSE

        ถ้าซื้อ >= 5
        ลด 15%

        ถ้าซื้อ >= 2
        ลด 10%

        ถ้าน้อยกว่า 2
        ลด 0%
    */

    if (quantity >= 5) {

        message = `
            🎉 ซื้อ ${quantity} ลูก

            <br><br>

            <strong>
                ได้ส่วนลด 15%
            </strong>

            <br>

            โปรโมชั่นลูกค้าซื้อจำนวนมาก
        `;

    }

    else if (quantity >= 2) {

        message = `
            🥭 ซื้อ ${quantity} ลูก

            <br><br>

            <strong>
                ได้ส่วนลด 10%
            </strong>
        `;

    }

    else if (quantity === 1) {

        message = `
            🥭 ซื้อ 1 ลูก

            <br><br>

            ยังไม่ได้รับส่วนลดพิเศษ

            <br>

            💡 ซื้อเพิ่มเป็น 2 ลูก
            เพื่อรับส่วนลด
        `;

    }

    else {

        message = `
            ⚠️ กรุณาระบุจำนวนสินค้า
        `;

    }


    document.getElementById("ifElseResult")
        .innerHTML = message;

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "กรุณาเลือกสินค้าก่อนสั่งซื้อ 🛒"
        );

        return;
    }


    let total = 0;

    cart.forEach(item => {

        total +=
            item.price * item.quantity;

    });


    alert(
        `ขอบคุณที่สั่งซื้อจาก มหาเทพเติ้ล789 🌳\n\n` +
        `ยอดสินค้าเบื้องต้น ${formatMoney(total)} บาท\n\n` +
        `นี่เป็นระบบตัวอย่างสำหรับโปรเจกต์เว็บไซต์`
    );

}


/* =========================================
   START WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts();

        createSets();

        updateCart();

    }
);
