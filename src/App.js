import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import LineChart from './Linechart';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}),
);
function App() {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'no. of Votes',
        data: [14, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const classes=useStyles()
  return (
    <div className={classes.root}>
      <AppBar>
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button variant='contained' color='primary'>Hello world</Button>
      <Button variant='contained' color='secondary'>Hello world</Button>
      <Button variant='outlined' color='primary'>Hello world</Button>
      <Button variant='text' color='primary'>Hello world</Button>
      <Button onClick={()=>{alert('clicked')}} variant='contained' disableElevation>Hello world</Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <br/>
      <IconButton aria-label='delete'>
        <DeleteIcon/>
      </IconButton>
      <LineChart data={data} options={options}></LineChart>
    </div>
 
  );
}

export default App;
