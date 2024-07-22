const wrapper = document.querySelector(".sliderWrapper");
const menuItems =document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force 1",
      price: 95,
      description: "Comfortable, durable and timeless—it's number 1 for a reason. This AF-1's classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go.",
      colors: [
        {
          code: "white",
          img: "./img/air-12.png",
        },
        {
          code: "black",
          img: "./img/air-121.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 130,
      description: "Step into a classic. This AJ4 throws it back with full-grain leather and premium textiles. Iconic design elements from the original, like floating eyestays and mesh-inspired accents, feel just as fresh as they did in '89.",
      colors: [
        {
          code: "black",
          img: "./img/jordan-4.png",
        },
        {
          code: "white",
          img: "./img/jordan-41.png",
        },
      ],
    },
    {
      id: 3,
      title: "HIGH BY YOU",
      price: 150,
      description: "Let your design shine in satin, keep it classic in canvas and get luxe with leather. No matter what you choose, these AF-1s are all about you. 12 classic colour choices and an additional Gum option for the sole mean your shoe is destined to be one of a kind, just like you.",
      colors: [
        {
          code: "red",
          img: "./img/highbyyou.png",
        },
        {
          code: "blue",
          img: "./img/highbyyou-1.png",
        },
      ],
    },
    {
      id: 4,
      title: "BLAZERS",
      price: 90,
      description: "In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.",
      colors: [
        {
          code: "red",
          img: "./img/blazer-mid-77.png",
        },
        {
          code: "black",
          img: "./img/blazer-mid-771.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const currentProductDesc =document.querySelector(".productDesc");

menuItems.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        // changing the prod dynamically
        choosenProduct = products[index]

        // changing title
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
        currentProductDesc.textContent = choosenProduct.description

        // giving color options

        currentProductColors.forEach((color , index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

        // currentProductColors.forEach((color, index) =>{
        //     color.addEventListener("click"), () =>{
        //         currentProductImg.src = choosenProduct.colors[index].img

        //     }
        // })
        currentProductColors.forEach((color, index) => {
            color.addEventListener("click", () => {
              currentProductImg.src = choosenProduct.colors[index].img;
            });
          });

          currentProductSizes.forEach((size, index) => {
            size.addEventListener("click", () => {
              currentProductSizes.forEach((size) => {
                size.style.backgroundColor = "white";
                size.style.color = "black";
              });
              size.style.backgroundColor = "black";
              size.style.color = "white";
            });
          });
          