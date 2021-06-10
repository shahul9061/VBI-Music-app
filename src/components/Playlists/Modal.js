import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PLAYLISTS_MODAL_DESC , PLAYLISTS_MODAL_CANCEL , PLAYLISTS_MODAL_CREATE} from '../../constants'


function Modal({handleClose,open,value,onChange,onClick}) {

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Playlist</DialogTitle>
        <hr/>
        <DialogContent>
          <DialogContentText>
            {PLAYLISTS_MODAL_DESC}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={value}
            placeholder="Enter Playlist Name"
            type="text"
            onChange={onChange}
            InputLabelProps={{
              shrink: true,
          }}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {PLAYLISTS_MODAL_CANCEL}
          </Button>
          <Button onClick={onClick} color="primary">
            {PLAYLISTS_MODAL_CREATE}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  value: PropTypes.string
};

export default Modal;