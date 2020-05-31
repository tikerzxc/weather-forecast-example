
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  heading: {
    fontSize: 18
  },
  contentWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyItems: 'center'
  },
  dateHolder: {
    fontSize: 18,
    fontWeight: 900,
    marginRight: 25
  },
  summaryText: {
    fontSize: 14
  }
}));