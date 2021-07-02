$(document).ready(function(){
  $.ajaxSetup({
    complete: function() {
      $(".checkout-container .cart-template.active .cart-select-gift-placeholder").insertAfter($( ".table.table.cart-items" ));
    }
  });

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

  //Remover decimales en items cart
  setInterval(() => {
    if (location.hash == '#/cart') {
      let itemsCarrito = document.querySelectorAll("tr.product-item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[2].children[2].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[2].children[2]);
        }
        if (itemDecimal.children[5].children[1].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[5].children[1]);
        }
      });
      if ((document.querySelector("tbody.totalizers-list td.monetary") != null) && document.querySelector("tbody.totalizers-list td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("tbody.totalizers-list td.monetary"));
      }
      if ((document.querySelector("tr.srp-summary-result td.monetary") != null) && document.querySelector("tr.srp-summary-result td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("tr.srp-summary-result td.monetary"));
      }
      if ((document.querySelector("body > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary"));
      }
      if ((document.querySelector(".summary-template-holder tfoot tr td.monetary") != null) && document.querySelector(".summary-template-holder tfoot tr td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector(".summary-template-holder tfoot tr td.monetary"));
      }
    }

    if (location.hash == '#/email') {
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Descuentos col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total columna derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
    }

    if (location.hash == '#/profile') {

      sinRegistroEstatal();

      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Descuentos col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total columna derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
    }

    if (location.hash == '#/shipping') {
      //Precios items col derecha
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });document.querySelector("#CHEAPEST > div.shp-option-text-price.vtex-omnishipping-1-x-optionPrice")
      //Precio despacho
      if ((document.querySelector("#CHEAPEST > div.shp-option-text-price.vtex-omnishipping-1-x-optionPrice") != null) && document.querySelector("#CHEAPEST > div.shp-option-text-price.vtex-omnishipping-1-x-optionPrice").innerText.includes(",")) {
        quitarDecimales(document.querySelector("#CHEAPEST > div.shp-option-text-price.vtex-omnishipping-1-x-optionPrice"));
      }
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Descuentos col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total columna derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      //Precios costo envio opciones
      if (document.querySelector(".vtex-omnishipping-1-x-scheduledDeliveryList") != null) {
        let itemsEnvio = document.querySelectorAll(".vtex-omnishipping-1-x-leanShippingOption");
        itemsEnvio.forEach((itemEnvio) => {
          if (itemEnvio.children[3].innerText.includes(",")) {
            quitarDecimales(itemEnvio.children[3]);
          }
        });
      }
      //Precios selec tipo de envio
      if (document.querySelector(".vtex-omnishipping-1-x-scheduledDelivery .span12") != null) {
        let itemsOpcion = document.querySelectorAll(".vtex-omnishipping-1-x-scheduledDelivery .span12");
        itemsOpcion.forEach((itemOp) => {
          if (itemOp.children[0].innerText.includes(",")) {
            quitarDecimales(itemOp.children[0]);
          }
        });
      }
    }

    if (location.hash == '#/payment') {
      //Precios items col derecha
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Descuentos col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total columna derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      //Total que se muestra con los datos de envio
      if ((document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice") != null) && document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice").innerText.includes(",")) {
        quitarDecimales(document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice"));
      }
      //Precio Webpay
      if ((document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span") != null) && document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span").innerText.includes(",")) {
        quitarDecimales(document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span"));
      }
      //Precio Transferencia
      if ((document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span") != null) && document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span").innerText.includes(",")) {
        quitarDecimales(document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span"));
      }
    }
  }, 2000);

  let klaviyoNotified = false
  var e = document.createElement('script')
  ;(e.type = 'text/javascript'),
    (e.async = true),
    (e.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=ABCDEF')
  var t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(e, t)
  $(window).on('hashchange', function() {
    const { orderForm } = vtexjs.checkout
    if (orderForm.clientProfileData && !klaviyoNotified && _learnq) {
      _learnq.push([
        'identify',
        {
          $email: orderForm.clientProfileData.email,
          $first_name: orderForm.clientProfileData.firstName,
          $last_name: orderForm.clientProfileData.lastName,
        },
      ])
      let klaviyoItems = []
      let productNames = []
      let categories = []
      orderForm.items.forEach(item => {
        productNames.push(item.name)
        const key = Object.keys(item.productCategories)[0]
        categories.push(item.productCategories[key])
        klaviyoItems.push({
          ProductID: item.productRefId,
          SKU: item.id,
          ProductName: item.name,
          Quantity: item.quantity,
          ItemPrice: item.sellingPrice / 100,
          RowTotal: item.price / 100,
          ProductURL: window.location.hostname + item.detailUrl,
          ImageURL: item.imageUrl,
          ProductCategories: Object.values(item.productCategories),
        })
      })
      _learnq.push([
        'track',
        'Started Checkout',
        {
          $event_id: orderForm.orderFormId,
          $value: orderForm.value / 100,
          ItemNames: productNames,
          CheckoutURL: window.location.hostname + '/checkout#/cart',
          Categories: categories,
          Items: klaviyoItems,
        },
      ])
      klaviyoNotified = true
    }
  })


});

window.onhashchange = function () {
  sinRegistroEstatal();
};

function sinRegistroEstatal(){
    if($("fieldset.box-client-info-pj h5.corporate-title").css("display", "block")){
      if(document.querySelector("input#client-company-ie").getAttribute("data-bind") == "value: stateInscription, validate: 'numericPunctuation', valueUpdate:'afterkeydown', required: requirementStateInscription"){
        $("input#state-inscription").trigger("click");
      }
    }
}

function quitarDecimales(precio) {
  precio.innerText = precio.innerText.split(",").shift();
}
