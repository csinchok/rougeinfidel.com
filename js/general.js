$(function() {
	// Select all links that contains lightbox in the attribute rel
	$('a[@rel*=lightbox]').lightBox();
});

// MATCH QUANTITIES ON CART PAGE
function matchQuan(id) {
document.getElementById('uquan'+id+'').value = document.getElementById('equan'+id+'').value;
document.getElementById('cquan'+id+'').value = document.getElementById('equan'+id+'').value;
}

// COPY BILLING INFO TO SHIPPING INFO ON CHECKOUT FORM
function grabShippingInfo() {
document.getElementById('shippingFirstName').value = document.getElementById('billingFirstName').value;
document.getElementById('shippingLastName').value = document.getElementById('billingLastName').value;
document.getElementById('shippingAddress1').value = document.getElementById('billingAddress1').value;
document.getElementById('shippingAddress2').value = document.getElementById('billingAddress2').value;
document.getElementById('shippingCity').value = document.getElementById('billingCity').value;
document.getElementById('shippingState').value = document.getElementById('billingState').value;
document.getElementById('shippingCountry').value = document.getElementById('billingCountry').value;
document.getElementById('shippingPostal').value = document.getElementById('billingPostal').value;
}