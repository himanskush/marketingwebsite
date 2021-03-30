import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';  
import Chip from '@material-ui/core/Chip';

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';

const useStyles = makeStyles({
  root: {
    minWidth: '400px',
    padding:'10px',
    margin: '1rem',
    width: '33%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',    
    color: 'black',
    textAlign: 'center',
  },
  price:{
    color: '#2f1c6a',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
    fontSize: '0.85rem',
  },
});


export default function Product(props) {
  const { profile } = props;
  const classes = useStyles();
  function handleOnClickLogout(e) {
    setLogout(e);
  }

  return (    
    <Layout title="Product Page">
      {console.log(props.productData)}
      <div className="container">
        <main>
          <h1 className="title">Product Page</h1>
          {!profile ? (
            <a href="/">Login to continue</a>
          ) : (
            <div>
              <div style={{ margin: '.5rem 0rem' }}>
                <Link href={{ pathname: '/' }}>
                  <a style={{ marginRight: '.75rem' }}>&bull; Home Page</a>
                </Link>
                <a href="#" onClick={e => handleOnClickLogout(e)}>
                  &bull; Logout
                </a>
              </div>
              <div style={{ textAlign: 'left' }}>
                <fieldset>
                  <legend>
                    <h3>Your Profile</h3>
                  </legend>
                  <h4>ID: {profile.id}</h4>
                  <h4>Email: {profile.email}</h4>
                  <h4>Created: {profile.createdAt}</h4>
                </fieldset>
              </div>
              <div style={{display:"flex"}}>
                  {
                    props.productData.map((val) => {
                      return(
                        <Card className={classes.root} raised={true}>
                          <CardContent >
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                              {val.productName}
                            </Typography>
                            <Typography variant="h5" component="h5">
                              <strike style={{fontSize:"1.0rem",padding:"10px"}}>₹{val.price * 1.5}</strike> 
                              <Chip                               
                               label="Save 33%"                               
                               color="primary"
                             />
                            </Typography>
                            <Typography className={classes.price} color="textSecondary" gutterBottom>
                            ₹{val.price}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                              *Offer Valid till May 2021
                            </Typography>
                            <Typography variant="body2" component="p">
                            <img src={val.image} alt="Girl in a jacket" width="100%" height="500" />
                            </Typography>
                          </CardContent>
                          <CardActions style={{justifyContent:"center"}}>
                              <Link href={"./products/" + val.id}>
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
                          </CardActions>
                        </Card>
                      )
                    })
                  }
                  
              </div>

              
            </div>
          )}

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
