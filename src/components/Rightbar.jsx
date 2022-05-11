import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  ImageListItem,
  ImageList,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1898555/pexels-photo-189555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Box>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src={`https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
