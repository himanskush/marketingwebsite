/* Products collection sample */
const PRODUCTS = [
    {
        id:1,
        productName:"Monthly",
        price:"8000",
        desciption:"A",
        image:"https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
        id:2,
        productName:"Quarterly",
        price:"22000",
        desciption:"B",
        image:"https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
    },{
        id:3,
        productName:"Yearly",
        price:"80000",
        desciption:"C",
        image:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg",
    }
];

export default (req, res) => {
  return new Promise(resolve => {
    const { method } = req;
    try {
      switch (method) {
        case 'POST':
          /* Get Post Data */
          const { productId } = req.body;
          let product;
          /* Any how email or password is blank */
          // if (productId) {
          //   product = PRODUCTS.filter(prod => prod.id == productId);
          // }else{
          //   product = PRODUCTS;
          // }
          // res.status(200).json({
          //   success: true,
          //   data: PRODUCTS,
          // });
          return res.status(200).json({
            data: PRODUCTS,
            success: 'success',
            status:200,
          });
          break;
        case 'GET':
          break;
        case 'PUT':
            break;  
        case 'PATCH':
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};
