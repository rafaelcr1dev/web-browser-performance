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

    /*
      -----------------------------------------------------------------------------------------------------------------
        Dispara a animação no proximo frame, ou seja entre um quadro e outro. 
      -----------------------------------------------------------------------------------------------------------------
        O método window.requestAnimationFrame() fala para o navegador que deseja-se realizar uma animação e pede que o 
        navegador chame uma função específica para atualizar um quadro de animação antes da próxima repaint (repintura). 
        O método tem como argumento uma callback que deve ser invocado antes da repaint.
    */
    requestAnimationFrame(dispatchAnimation)

    // Evento disparado no final da transição
    cart_to_remove.addEventListener('transitionend', afterAnimation.bind(cart_to_remove))
  }

  function prepareAnimation(cart_to_remove) {
    // Pega a posição inicial de todos os items
    const start_position = [...items_cart].map(item => item.getBoundingClientRect());
    cart_to_remove.classList.add("remove");

    // Items do carrinho atualizado sem o item que vai ser removido 
    // Então faremos o delta x e y do item removido com o item abaixo
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


