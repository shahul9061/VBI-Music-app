import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {SONGS_MODAL_TITLE,SONGS_MODAL_DESC1,SONGS_MODAL_DESC2,SONGS_MODAL_CANCEL,SONGS_MODAL_SUBMIT} from '../../constants';

function Modal({ open, handleSubmit, handleModalClose, handlePlaylistChange, playlists, value }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleModalClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{SONGS_MODAL_TITLE}</DialogTitle>
        {playlists.length > 0 ? <DialogContent>
          <DialogContentText>
            {SONGS_MODAL_DESC1}
          </DialogContentText>
          <FormControl component="fieldset">
              <RadioGroup
                aria-label="playlist"
                name="playlist1"
                value={value}
                onChange={(e) => handlePlaylistChange(e)}
              >
                {playlists.map((val, i) => (
                  <FormControlLabel value={val?.name} key={i} control={<Radio />} label={val?.name} />
                ))}
              </RadioGroup>
        </FormControl>

        </DialogContent> : 
        <DialogContent>
            <DialogContentText>
              {SONGS_MODAL_DESC2}
          </DialogContentText>
          </DialogContent>}
        <DialogActions>
        <Button onClick={handleModalClose} color="primary">
            {SONGS_MODAL_CANCEL}
          </Button>
          {playlists?.length > 0 && <Button onClick={handleSubmit} color="primary">
            {SONGS_MODAL_SUBMIT}
          </Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Modal.propTypes = {
  value: PropTypes.string,
  open: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleModalClose: PropTypes.func,
  handlePlaylistChange: PropTypes.func,
  playlists: PropTypes.instanceOf(Array),
};

export default Modal;