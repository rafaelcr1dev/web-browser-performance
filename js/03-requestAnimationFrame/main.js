;(function() {
  const cart = document.querySelector('.cart');
  const items_cart = Array.prototype.slice.call(document.querySelectorAll('.cart__item'));

  items_cart.forEach(item => {
    item.querySelector('a.remove-item').addEventListener('click', handleClick.bind(item))
  })

  function handleClick(e) {
    e.preventDefault()
    const cart_to_remove = this;

    prepareAnimation(cart_to_remove)
    requestAnimationFrame(dispatchAnimation)
    cart_to_remove.addEventListener('transitionend', afterAnimation.bind(cart_to_remove))
  }

  function prepareAnimation(cart_to_remove) {
    const start_position = [...items_cart].map(item => item.getBoundingClientRect());
    cart_to_remove.classList.add("remove");

    items_cart.forEach((item, i) => {
      const end_position = item.getBoundingClientRect();
      const delta_x = start_position[i].left - end_position.left;
      const delta_y = start_position[i].top - end_position.top;
      item.style.transform = `translate(${delta_x}px, ${delta_y}px)`;
    })
  }

  function dispatchAnimation() {
    items_cart.forEach(item => item.style.transform = '')
    cart.classList.add('animate')
  }

  function afterAnimation() {
    cart.classList.remove('animate')
    this.remove()
  }
})();


