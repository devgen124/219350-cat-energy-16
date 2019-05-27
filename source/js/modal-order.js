var order = document.querySelector(".product__order, .product-add__button");
var modal = document.querySelector(".modal-order");

if (modal) {
  order.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-order--show")
  });
}
