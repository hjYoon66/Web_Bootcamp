const cartItemUpdateFormElements = document.querySelector(
  ".cart-item-management"
);

async function updateCartItem(event) {
  event.preventDefault();

  const form = event.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrfToken;
  const quantity = form.firstElementChild.value;

  let response;
  try {
    response = await fetch("/cart/items", {
      method: "PATCH",
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
        _csrf: csrfToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("Something went wrong!");
    return;
  }

  if (!response.ok) {
    alert("Something went wrong!");
    return;
  }

  const responseData = await response.json();

  console.log(responseData);

  const cartItemTotalPriceElement =
    form.parentElement.querySelector(".cart-item-price");
  cartItemTotalPriceElement.textContent =
    responseData.updatedItemPrice.toFixed(2);

  const cartTotalPriceElement = document.getElementById("cart-total-price");
  cartTotalPriceElement.textContent = responseData.newTotalPrice.toFixed(2);

  const cartBadge = document.querySelector(".nav-items .badge");
  cartBadge.textContent = responseData.newTotalQuantity;
}

for (const formElement of cartItemUpdateFormElements) {
  formElement.addEventListener("submit", updateCartItem);
}