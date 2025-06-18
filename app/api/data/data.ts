
interface d {
  id: number;
  dishname: string;
  price: number;
  size: number
}



const dishes: d[] = [
  { "id": 1, "dishname": "Biryani", "price": 12.99, "size": 10 },
  { "id": 2, "dishname": "Roghni Naan", "price": 2.99, "size": 270 },
  { "id": 3, "dishname": "Chicken Karhai", "price": 19.99, "size": 10 },
  { "id": 4, "dishname": "Shahi Qeema", "price": 19.99, "size": 10 },
  { "id": 5, "dishname": "Lahorei Chanay", "price": 11.99, "size": 10 },
  { "id": 6, "dishname": "Lamb karhai", "price": 19.99, "size": 10 },

]

export default function data() {

  console.log("dishes  .... ");

  //   return NextResponse.json(dishes.toString) ;

  // let a = JSON.stringify(dishes)


  return JSON.parse(JSON.stringify(dishes))

  // return NextResponse.json([  { id: 1, name:"SA" }, { id: 2, name: "Daas" } ]);
}


