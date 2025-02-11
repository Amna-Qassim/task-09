import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar  alt="Cindy Baker" src={require('../assets/images/1.jpg').default} />
    </Stack>
  );
}
