
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ zIndex, palette }) => ({
  backdrop: {
    zIndex: zIndex.drawer + 1,
    color: palette.common.white
  },
}));