const data = [
  {
    id: 1,
    title: "Ropa Bebe (M)",
    price: 800,
    stock: 10,
    category: "clothes",
    detail: "Rellenar a futuro",
    imagen: "/img/ropa1.png"
  },
  {
    id: 2,
    title: "Ropa Bebe (F)",
    price: 800,
    stock: 7,
    category: "clothes",
    detail: "Rellenar a futuro",
    imagen: "/img/ropa2.png"
  },
  {
    id: 3,
    title: "Body p/ recien nacido (F)",
    price: 600,
    stock: 3,
    category: "clothes",
    detail: "Rellenar a futuro",
    imagen: "/img/ropa3.png"
  },
  {
    id: 4,
    title: "Kit Ropa Bebe (F-M)",
    price: 2700,
    stock: 2,
    category: "clothes",
    detail: "Rellenar a futuro",
    imagen: "/img/ropa4.jpg"
  },
  {
    id: 5,
    title: "Combo Mamadera y Chupete: Winnie-Poo",
    price: 1500,
    stock: 5,
    category: "accesories",
    detail: "Rellenar a futuro",
    imagen: "/img/acc1.png"
  },
  {
    id: 6,
    title: "Canasto para Bebes con Juguetes",
    price: 3200,
    stock: 5,
    category: "accesories",
    detail: "Rellenar a futuro",
    imagen: "/img/acc2.png"
  },
  {
    id: 7,
    title: "Babero para bebe",
    price: 500,
    stock: 5,
    category: "accesories",
    detail: "Rellenar a futuro",
    imagen: "/img/acc3.jpg"
  },
  {
    id: 8,
    title: "Nidito",
    price: 4000,
    stock: 5,
    category: "accesories",
    detail: "Rellenar a futuro",
    imagen: "/img/acc4.png"
  },
];

export default function getProducts() {
  return new Promise((resolve, reject) => {
    if(data){
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }else {
      reject(new Error("Error en Base de Datos!"));
    }
  });
}

