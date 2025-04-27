// var items = [
//   {
//       itemId: '01',
//       itemName: 'iPhone',
//       itemPrice: '150000',
//       itemImage: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/o/x/8/-original-imagwz6hgwg6safg.jpeg?q=90'
//   },
//   {
//       itemId: '02',
//       itemName: 'Motorola',
//       itemPrice: '55000',
//       itemImage: 'https://authentic.pchq.pk/cdn/shop/files/MotorolaMotoG85GBlack.jpg?v=1799195414'
//   },
//   {
//       itemId: '03',
//       itemName: 'Samsung',
//       itemPrice: '150000',
//       itemImage: 'https://www.idnet.co.za/img/2024/04/07/4d0-112c-4096-83a7-ce125517b916/galaxy-s24-ultra.jpg'
//   }
// ];

// var gotDiv = document.getElementById('main');
// for (var i = 0; i < items.length; i++) {
//   var data = items[i];

//   gotDiv.innerHTML += `
//       <div class="card" style="width: 18rem;">
//           <img src="${data.itemImage}" class="card-img-top" alt="${data.itemName}">
//           <div class="card-body">
//               <h5 class="card-title">Name: ${data.itemName}</h5>
//               <p class="card-text">Price: ${data.itemPrice}</p>
//           </div>
//       </div>
//   `;
// }

var items = [
  {
      itemId: '01',
      itemName: 'iPhone',
      itemPrice: '150000',
      itemImage: 'https://3dplanet.am/wp-content/uploads/2024/09/16pro-black-1.jpg'
  },
  {
      itemId: '02',
      itemName: 'Samsung',
      itemPrice: '55000',
      itemImage: 'https://www.mega.pk/items_images/Samsung+Galaxy+S25+Ultra+12GB+RAM+512GB+Storage+Non+PTA+Price+in+Pakistan%2C+Specifications%2C+Features_-_26591.webp'
  },
  {
      itemId: '03',
      itemName: 'Motorola',
      itemPrice: '15000',
      itemImage: 'https://d32n7g8aqsy2ib.cloudfront.net/images/inventoryImages/7qvrNpL5ddOUESEv1734940247046.webp'
  }
];

var gotDiv = document.getElementById('main');
for (var i = 0; i < items.length; i++) {
  var data = items[i];

  gotDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
          <img src="${data.itemImage}" class="card-img-top" alt="${data.itemName}">
          <div class="card-body">
              <h5 class="card-title">Name: ${data.itemName}</h5>
              <p class="card-text">Price: ${data.itemPrice}</p>
          </div>
      </div>
  `;
}