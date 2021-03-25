getStore();

function getStore() {
  let url = "https://fakestoreapi.herokuapp.com/products";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    let result = JSON.parse(this.responseText);
    outputCatalog(result);
  };
  xhr.send();
}

function outputCatalog(cat) {
  //let output= "<ul>";
  let price = "";
  let image= "";
  //   let output = "";
  cat.forEach((item, i) => {
    //output+=`<img src="${item.image}">`;
  });
  //output+="</ul>";
  image = `<img src="${cat[0].image}">`;
  let theimg = document.querySelector(".hinh1");
  theimg.innerHTML = image;

  image = `<img src="${cat[1].image}">`;
   theimg = document.querySelector(".hinh2");
  theimg.innerHTML = image;

  image = `<img src="${cat[2].image}">`;
   theimg = document.querySelector(".hinh3");
  theimg.innerHTML = image;

  image = `<img src="${cat[3].image}">`;
   theimg = document.querySelector(".hinh4");
  theimg.innerHTML = image;

  price = `${cat[0].price}`;
  let theprc = document.querySelector(".mot");
  theprc.innerHTML = price;

  price = `${cat[1].price}`;
  theprc = document.querySelector(".hai");
  theprc.innerHTML = price;

  price = `${cat[2].price}`;
  theprc = document.querySelector(".ba");
  theprc.innerHTML = price;

  price = `${cat[3].price}`;
  theprc = document.querySelector(".bon");
  theprc.innerHTML = price;
}
