import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import DataTable from '../../components/DataTable';
import Bar from '../../components/Bar';

export default function Login() {

  return (
    <div>
      <Grid container spacing={2} direction='column' justify='center' alignItems='center'>
        <Grid item>
            <Bar/>
        </Grid>
      <Grid item>
        <DataTable />
      </Grid>
      </Grid>
    </div>
  );
}
