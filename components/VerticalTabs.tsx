import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles } from '@material-ui/core/styles';
import BasicTable from '../components/BasicTable';
import Divider from '@material-ui/core/Divider';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Avatar from '@material-ui/core/Avatar';



interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(4),
    },
  }),
);


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const styles = {

  largeIcon: {
    width: 100,
    height: 100,
  },

  largeIconButton: {
    width: 130,
    height: 130,
  },

};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const text_width= "550px";

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    daily : false, 
    monthly : false, 
    updates : false, 
    programs : false, 
    new_to_elavon : false, 
    government : false, 
    inventory : false, 
    marketing : false, 
    per_payment : false, 
    per_refund : false, 
    per_transfer : false, 
    online : false,
  });

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { daily, monthly, updates, programs, new_to_elavon, government, inventory, marketing, per_payment, per_refund, per_transfer, online } = state;

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Personal" {...a11yProps(0)} />
        <Tab label="Bank Accounts" {...a11yProps(1)} />
        <Tab label="Emails" {...a11yProps(2)} />
        <Tab label="Authorized Users" {...a11yProps(3)} />
        <Tab label="Security" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid container spacing={6} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
        <Typography variant='h3'>Profile</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Typography variant='h4'>Basic Information</Typography>
              </Grid>
              <Grid item>
              <TextField variant='outlined' label='Business Name' placeholder='Elavon'></TextField>
              </Grid>
              <Grid item>
              <TextField variant='outlined' label='Email Address' placeholder='user@elavon.com'></TextField>
              </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Password</Typography>
            </Grid>
            <Grid item style={{maxWidth:text_width}}>
              <Typography variant='body1'>A strong password contains a mix of letters and numbers. It is hard to guess, does not resemble a real word, and should only be used for this account.</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Update Password</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Multi-Factor Authentication</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{maxWidth:text_width}}>Add an extra layer of security to your account. A confirmation code will be required every time someone logs onto the Elavon Dashboard.</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Enable Multi-factor Authentication</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Deactivate Account</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{maxWidth:text_width}}>Deactivating your Elavon accout means that you will be unable to receive or recover any of your payment or account information.</Typography>
            </Grid>
            <Grid item>
              <Button variant='outlined'>deactivate account</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
        <Grid item>
          <Typography variant="h4">Bank Accounts</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Your funds will only be transferred into a verfiied bank account. </Typography>
        </Grid>
        <Grid item style={{maxWidth:text_width}}>
          <Typography variant="body1">Verification usually takes a few minutes, but for some banks it can take up to 4 business days. If you change bank accounts, your money will continue to be transferred into your existing account until the new account is verfiied.  </Typography>
        </Grid>
        <Grid item style={{maxWidth:text_width}}>
        Once your bank account is verified, card payments are transferred into your account in 1-2 business days. Online sales are transferred the day after you complete the order.
        </Grid>
        <Grid item>
          <BasicTable/>
        </Grid>
        <Grid item>
          <Button variant='contained'>Add Bank Account</Button>
        </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
        <Grid item>
          <Typography variant='h4'>Manage your email notifications</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle1'>Learn about new products or features and receive updates on how your business is performing.</Typography>
        </Grid>

        <Grid item>
        <FormControl component="fieldset" className={classes1.formControl}>
        <FormLabel component="legend">Account Emails</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={daily} onChange={handleChangeCheckbox} name="daily" />}
            label="Daily Sales Summary "
          />
          <FormControlLabel
            control={<Checkbox checked={monthly} onChange={handleChangeCheckbox} name="monthly" />}
            label="Monthly and Annual Sales Summaries "
          />
          <FormControlLabel
            control={<Checkbox checked={updates} onChange={handleChangeCheckbox} name="updates" />}
            label="Product Updates"
          />
          <FormControlLabel
            control={<Checkbox checked={programs} onChange={handleChangeCheckbox} name="programs" />}
            label="Programs and Events"
          />
          <FormControlLabel
            control={<Checkbox checked={new_to_elavon} onChange={handleChangeCheckbox} name="new_to_elavon" />}
            label="New to Elavon"
          />
          <FormControlLabel
            control={<Checkbox checked={government} onChange={handleChangeCheckbox} name="government" />}
            label="Government Programs"
          />
        </FormGroup>
      </FormControl>
        </Grid>
        <Grid item>
        <FormControl component="fieldset" className={classes1.formControl}>
        <FormLabel component="legend">Product or Feature Emails</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={inventory} onChange={handleChangeCheckbox} name="inventory" />}
            label="Inventory Alerts"
          />
          <FormControlLabel
            control={<Checkbox checked={marketing} onChange={handleChangeCheckbox} name="marketing" />}
            label="Elavon Marketing"
          />
        </FormGroup>
      </FormControl>
        </Grid>
        <Grid item>
        <FormControl component="fieldset" className={classes1.formControl}>
        <FormLabel component="legend">Product or Feature Emails</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={per_payment} onChange={handleChangeCheckbox} name="per_payment" />}
            label="Per Payment"
          />
          <FormControlLabel
            control={<Checkbox checked={per_refund} onChange={handleChangeCheckbox} name="per_refund" />}
            label="Per Refund"
          />
          <FormControlLabel
            control={<Checkbox checked={per_transfer} onChange={handleChangeCheckbox} name="per_transfer" />}
            label="Per Transfer"
          />
          <FormControlLabel
            control={<Checkbox checked={online} onChange={handleChangeCheckbox} name="online" />}
            label="Elavon Online Order"
          />
        </FormGroup>
      </FormControl>
        </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
        <Grid item>
          <Typography variant='h4'>Authorized Representatives</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' style={{maxWidth:text_width}}>The following people are authorized to contact Customer Support on behalf of your business regarding sensitive account information and transaction details.</Typography>
        </Grid>
        <Grid item>
          <Divider orientation='horizontal'/>
        </Grid>
        <Grid item/>
          <Grid container spacing={2} direction='column' alignItems='center' justify='center' className={classes.root} > 
            <Grid item>
            <IconButton style={styles.largeIconButton}>
            <SupervisedUserCircleIcon style={styles.largeIcon} />
            </IconButton>
            </Grid>
            <Grid item>
              <Typography variant='h5'>Add an authorized representative</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>Allow team members or individuals to contact Customer Support</Typography>
            </Grid>
            <Grid item>
              <Button variant='outlined'>Create authorized representative</Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid container spacing={2} direction='column' alignItems='flex-start' justify='center' className={classes.root} >
        <Grid item>
          <Typography variant='h4'>Team Permissions</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' style={{maxWidth:text_width}}>Team permissions allow you to set up restrictions for team members using your account. These permissions apply to all access points. </Typography>
          <br/>
        </Grid>
        <Grid item>
        <Grid container spacing={4} direction='row' alignItems='center' justify='space-between' className={classes.root} > 
          <Grid item>
                <Avatar alt="Person Icon" className={classes2.large}>
                  <PeopleAltIcon/>
                </Avatar>
                </Grid>
                <Grid item>
              <Typography variant='h6'>Team Permissions</Typography>
            </Grid>
          <Grid item>
            <Button variant='contained'>Enable Team Permissions</Button>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      </TabPanel>

    </div>
  );
}