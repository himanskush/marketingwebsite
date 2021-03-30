import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../../middleware/utils';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return id;
}

/* components */
import Layout from '../../components/layout/Layout';

export default function Productpage(props) {
  const { profile } = props;
  const productIndex = Post();

  function handleOnClickLogout(e) {
    setLogout(e);
  }

  return (
    <Layout title="Product Page">
      <div className="container">
        {console.log(props.productData[productIndex])}
        <main>
          <div style={{padding:50,display:"flex"}}>
            <div> 
              <img src={props.productData[productIndex].image} height="400" width="600"></img>
            </div>
            <div style={{paddingLeft:30}}>
              <span style={{fontWeight:700,fontSize:24}}>{props.productData[productIndex].productName}</span>
              <div>
                {props.productData[productIndex].desciption}
              </div>
              <div><span style={{fontWeight:600,fontSize:18}}>Price : {props.productData[productIndex].price}</span></div>
              <Link href="/contact">
                <button>
                <a className="">Buy</a>
                  <style jsx>{`
                    button{
                      margin: 40px 0px 10px 0px;
                      color: white;
                      font-size: 17px;
                      border-radius: 15px;
                      padding: 10px 25px;
                      border: 1px #acacac solid;
                      cursor: pointer;
                      background: deeppink;
                      font-weight: bold;
                    }
                    `}
                  </style>
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/products`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  let data = {productId:1};
  let productData = "";
  
  await fetch(baseApiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(result => result.json())
  .then(result => {
    
      if (result['status'] && result['data']) {
        productData = result['data'];
      } else {
        console.log('Error:');
      }
  })
  .catch(error => {
    console.log('Error:', error);  
  });
  return {
    props: {
      baseApiUrl,
      profile,
      productData,
    },
  };
}
