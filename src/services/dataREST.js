const data = [
  {
    id: 1,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/ropa1.png"
  },
  {
    id: 2,
    title: "plato + vaso",
    price: 600,
    stock: 2,
    category: "accesories",
    imagen: "/img/ropa2.png"
  },
  {
    id: 3,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/ropa3.png"
  },
  {
    id: 4,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/ropa4.jpg"
  },
  {
    id: 5,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/acc1.png"
  },
  {
    id: 6,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/acc2.png"
  },
  {
    id: 7,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/acc3.jpg"
  },
  {
    id: 8,
    title: "Ropa bebe",
    price: 1200,
    stock: 5,
    category: "clothes",
    detail: "rellenar",
    imagen: "/img/acc4.png"
  },
];

export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

