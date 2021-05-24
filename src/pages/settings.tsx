
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import {
  Button
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import VerticalTabs from '../../components/VerticalTabs';


function Settings() {


    return <React.Fragment>
      <Head>
        <title>
            Settings
        </title>

      </Head>      
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
    
        <Link href="/take_a_payment" passHref >
            <Button>Home</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>
    </React.Fragment> 
}


export default Settings