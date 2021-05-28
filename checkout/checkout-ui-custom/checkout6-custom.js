$(document).ready(function(){
  $.ajaxSetup({
    complete: function() {
      $(".checkout-container .cart-template.active .cart-select-gift-placeholder").insertAfter($( ".table.table.cart-items" ));
    }
  });
  function quitarDecimales(precio) {
      return precio.split(",").shift();
  }
  if(window.location.href.includes('cart')) {
    if(document.querySelectorAll(".item-link-remove") != null){
      let remove = document.querySelectorAll(".item-link-remove");
      remove.forEach((itemremove) => {
          itemremove.children[0].className = "icon icon-trash item-remove-ico";
      });
    }
  }

  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '/arquivos/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);

  sinRegistroEstatal();

});

window.onhashchange = function () {
  sinRegistroEstatal();
};

function sinRegistroEstatal(){
  if (location.hash == '#/profile') {
    if($("fieldset.box-client-info-pj h5.corporate-title").css("display", "block")){
      if(document.querySelector("input#client-company-ie").getAttribute("data-bind") == "value: stateInscription, validate: 'numericPunctuation', valueUpdate:'afterkeydown', required: requirementStateInscription"){
        $("input#state-inscription").trigger("click");
      }
    }
  }
}


