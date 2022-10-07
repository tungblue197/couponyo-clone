import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent,
  Button,
  Box,
  Pagination,
} from '@mui/material';
import { MuiTableBase } from '@base/table';
import { makeStyles } from '@mui/styles';
import { useStyle } from './style';
import { memberColums } from './constant';
import SearchBox from './SearchBox';
import { Member } from './model';

interface InsertSpecificMemberProps {
  open: boolean;
  onClose?: () => void;
  members?: Member[]
}

function InsertSpecificMember({ open,members, onClose }: InsertSpecificMemberProps) {
  const classes = useStyle();
  return (
    <Dialog open={open} classes={{ paper: classes.dialogPaper }} onClose={onClose}>
      <DialogTitle>회원 검색</DialogTitle>
      <DialogContent style={{ width: '100%' }}>
        <Box className={classes.dialogContent}>
          <SearchBox />
          <DialogContentText>검색 결과: 20명</DialogContentText>
          <MuiTableBase columns={memberColums} dataSource={members} selectable={true} />
          <Pagination count={3} variant="outlined" shape="rounded" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>고르다</Button>
        <Button onClick={onClose} color="error">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default InsertSpecificMember;
