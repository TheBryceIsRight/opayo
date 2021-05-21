import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import {
  Button,
  MenuItem,
  LinearProgress
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Formik, Form} from 'formik';
import Box from '@material-ui/core/Box';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


//Random String Generator


interface Values {
    amount: string;
  }


  const ranges = [
    {
      value: 'Capture for Settlement',
      label: 'Capture for Settlement',
    },
    {
      value: 'Test Transaction',
      label: 'Test Transaction',
    },
  ];

  const ranges1 = [
    {
      value: 'Pay with Card',
      label: 'Pay with Card',
    },
    {
      value: 'Pay by Link',
      label: 'Pay by Link',
    },
  ];

  const ranges2 = [
    {
      value: '$',
      label: 'USD',
    },
    {
      value: '€',
      label: 'EUR',
    },
    {
      value: '£',
      label: 'GBP',
    },
    {
      value: '₩',
      label: 'KRW',
    },
    {
      value: '¥',
      label: 'JPY',
    },
  ];


  const ranges3 = [
    {
      value: 'Jane Coastan',
      label: 'Jane Coastan',
    },
    {
      value: 'Dara Lind',
      label: 'Dara Lind',
    },
    {
      value: 'Andie Labrador-Retriever',
      label: 'Andie Labrador-Retriever',
    },
  ];

  const ranges4 = [
    {
      value: '0000 0000 0000 1234',
      label: '0000 0000 0000 1234',
    },
    {
      value: '1111 1111 1111 5678',
      label: '1111 1111 1111 5678',
    },
    {
      value: '2222 2222 2222 9123',
      label: '2222 2222 2222 9123',
    },
  ];

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 100,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
    );

  interface State {
    currency: string;
    action: string;
    ref: string;
    method: string;
    customer: string;
    payment: string;
  }
  


function Take_a_payment() {
    
    const classes = useStyles();
    const [items, setItems] = React.useState<State>({
        currency: '$',
        action: "Capture for Settlement",
        ref: "K9386V",
        method: "Pay with Card",
        customer: "Andie Labrador-Retriever",
        payment: "0000 0000 0000 1234",

      });
    const [name, setName] = React.useState('0.00');
      
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setItems({ ...items, [prop]: event.target.value });
      };

      const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };
    

    const NewForm = () => (
        
        <Formik
            initialValues={{
            amount: name,
            select: items.action,
            payment: items.method,
            currency: items.currency,
            order_ref: items.ref,
            customer: items.customer,
            payment_method: items.payment,
        }}
        validate={values => {
            const errors: Partial<Values> = {};
            if (!values.amount ) {
            errors.amount = 'Required';
            } 
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
        render={({submitForm, isSubmitting}) => (
            <Form>
                    <MuiTextField
                        type='hidden'
                        name="amount"
                        onChange= {handleTextChange}
                        value= {name}

                    />
                    <MuiTextField
                        type="hidden"
                        name="currency"
                        value={items.currency}
                        margin="normal"
                        onChange= {handleChange('currency')}
                    />
                    <MuiTextField
                        type="hidden"
                        name="select"
                        margin="normal"
                        value= {items.action}
                        onChange= {handleChange('action')}
                    />
                      
                        <MuiTextField
                            type='hidden'
                            name="order_ref"
                            value= {items.ref}
                            onChange= {handleChange('ref')}
                        />
                    <MuiTextField
                        type="hidden"
                        name="payment"
                        margin="normal"
                        value= {items.method}
                        onChange= {handleChange('method')}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <MuiTextField
                        type="hidden"
                        name="customer"
                        margin="normal"
                        value= {items.customer}
                        onChange= {handleChange('customer')}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <MuiTextField
                        type="hidden"
                        name="payment_method"
                        margin="normal"
                        value= {items.payment}
                        onChange= {handleChange('payment')}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
            {isSubmitting && <LinearProgress />}
            <br/>
            <Box margin={1}>
            <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
            >
                Run Transaction
            </Button>

            </Box>
        </Form>
        )}
        >
        </Formik>

        
    );



    return <React.Fragment>
      <Head>
        <title>
        Take a Payment
        </title>

      </Head>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/search" passHref >
            <Button>Home</Button>
            </Link>
            <Typography color="textPrimary">
            Take a Payment
            </Typography>
          </Breadcrumbs>
        <br/>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>Take a Payment</Typography>
            </Grid>
            <Grid item>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                
                <Grid item>
                    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >

                        <Grid item>
                            <MuiTextField id="standard-name" name="amount" value={name} label='Amount' onChange={handleTextChange} variant='outlined' InputProps={{
                            startAdornment: <InputAdornment position="start">{items.currency} </InputAdornment>,
                        }} />
                        </Grid>
                        <Grid item>
                            <MuiTextField
                            type="text"
                            name="currency"
                            label='Currency'
                            value={items.currency}
                            select
                            variant="outlined"
                            margin="normal"
                            onChange= {handleChange('currency')}
                        >
                            {ranges2.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </MuiTextField>
                        </Grid>
                        <Grid item>
                        <MuiTextField
                            type="text"
                            name="select"
                            label= 'Action'
                            select
                            variant="outlined"
                            margin="normal"
                            value= {items.action}
                            onChange= {handleChange('action')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        >
                            {ranges.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                    </MuiTextField>
                        </Grid>
                        <Grid item>
                        <MuiTextField
                            name="order_ref"
                            label='Order Ref Number'
                            variant='outlined'
                            value= {items.ref}
                            onChange= {handleChange('ref')}
                        />
                        </Grid>
                        <Grid item>
                            <MuiTextField
                            type="text"
                            name="payment"
                            label='Payment Method'
                            select
                            variant="outlined"
                            margin="normal"
                            value= {items.method}
                            onChange= {handleChange('method')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        >
                            {ranges1.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </MuiTextField>
                        </Grid>
                        <Grid item>
                            <MuiTextField
                            type="text"
                            name="customer"
                            label= 'Customer'
                            select
                            variant="outlined"
                            margin="normal"
                            value= {items.customer}
                            onChange= {handleChange('customer')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        >
                            {ranges3.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </MuiTextField>
                        </Grid>
                        <Grid item>
                            <MuiTextField
                                type="text"
                                name="payment_method"
                                label='Payment Method'
                                select
                                variant="outlined"
                                margin="normal"
                                value= {items.payment}
                                onChange= {handleChange('payment')}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            >
                                {ranges4.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                        </MuiTextField>
                        </Grid>
                        <Grid item>
                            <NewForm/>
                        </Grid>
                        </Grid>
                    
                </Grid>
                <Grid item>
                <Card className={classes.root}>
                    <CardContent>
                    <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} >
                        <Grid item>
                            <Typography variant='h5'>
                                Amount
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h4'>
                               {items.currency} {name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemText primary='Order Ref Number' secondary= {items.ref} />
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary='Card Type' secondary="Credit Card" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='1234-4567-1568' secondary= {items.payment}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Expires' secondary='02/02/2022' />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Issuer Name' secondary='U.S. Bank' />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Issuer Country' secondary= 'United States' />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Card Billing Currency' secondary={items.currency} />
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary='Customer Name' secondary={items.customer} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Email' secondary="tossthefrisbee@yahoo.com" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Email receipt' secondary='Yes' />
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary='Billing Address' secondary="--" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Shipping Address' secondary="89 Navasota Street Austin, TX 78702" />
                        </ListItem>
                        </List>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >Print Receipt</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Grid>

        </Grid>
       
    </React.Fragment> 
}

{/*In case I want to turn on eCommerce in the future */}
{/*  
DIY.getInitialProps = async () => {

  return {
    products: [
      {id: "test_product", name: "Talech Starter", price: 25.00, description: "Great for a new business", settlement: "2 Days"} as IProduct,
      {id: "test_product2", name: "Talech Standard", price: 50.00, description: "Great for an existing business", settlement:'Next Day'} as IProduct,
      {id: "test_product3", name: "Talech Premium", price: 75.00, description: "Great for an growing business", settlement:'Same Day'} as IProduct,
    ]
  }
}

*/}
export default Take_a_payment