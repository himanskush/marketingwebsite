/* Products collection sample */
const PRODUCTS = [
    {
        id:1,
        productName:"Monthly",
        price:"8000"
    },
    {
        id:2,
        productName:"Quarterly",
        price:"22000"
    },{
        id:3,
        productName:"Yearly",
        price:"80000"
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
          /* Any how email or password is blank */
          if (productId) {
            const product = PRODUCTS.filter(prod => prod.id == productId);
          }else{
            const product = PRODUCTS;
          }
          res.status(200).json({
            success: true,
            token: product,
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
