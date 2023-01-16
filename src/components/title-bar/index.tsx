import React, { useState } from 'react'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import AppBar from '@mui/material/AppBar'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CallMergeRoundedIcon from '@mui/icons-material/CallMergeRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { Link } from 'gatsby'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { gitHubUrl, linkedInUrl } from '@config/urls'

interface NavigationDetails {
  icon: JSX.Element
  url: string
}

const navigation: { [key: string]: NavigationDetails } = {
  GitHub: {
    icon: <CallMergeRoundedIcon />,
    url: gitHubUrl,
  },
  LinkedIn: {
    icon: <AccountBoxRoundedIcon />,
    url: linkedInUrl,
  },
  Projects: {
    icon: <ConstructionRoundedIcon />,
    url: '/projects/',
  },
  Resume: {
    icon: <ArticleRoundedIcon />,
    url: '/',
  },
}

const TitleBar = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCloseNavMenu = (): void => {
    setIsDrawerOpen(false)
  }

  const handleOpenNavMenu = (): void => {
    setIsDrawerOpen(true)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography component="div" noWrap sx={{ display: { sm: 'flex', xs: 'none' }, mr: 2 }} variant="h6">
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
              dbowland.com
            </Link>
          </Typography>

          <Box sx={{ display: { sm: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="amenu"
              color="inherit"
              onClick={handleOpenNavMenu}
              size="large"
            >
              <MenuRoundedIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              onClose={handleCloseNavMenu}
              onOpen={handleOpenNavMenu}
              open={isDrawerOpen}
              sx={{
                display: { sm: 'none', xs: 'block' },
              }}
            >
              <Box onClick={handleCloseNavMenu} role="presentation" sx={{ width: 250 }}>
                <List>
                  {Object.entries(navigation).map(([page, details]: [string, NavigationDetails]) => (
                    <ListItemButton component="a" href={details.url} key={page}>
                      <ListItemIcon>{details.icon}</ListItemIcon>
                      <ListItemText primary={page} />
                    </ListItemButton>
                  ))}
                </List>
                <Divider />
                <List>
                  <ListItemButton component="a" href="/privacy-policy">
                    <ListItemIcon>
                      <PrivacyTipIcon />
                    </ListItemIcon>
                    <ListItemText primary="Privacy policy" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CloseRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Close" />
                  </ListItemButton>
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>
          <Typography component="div" noWrap sx={{ display: { sm: 'none', xs: 'flex' }, flexGrow: 1 }} variant="h6">
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
              dbowland.com
            </Link>
          </Typography>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {Object.entries(navigation).map(([page, details]: [string, NavigationDetails]) => (
              <Button component="a" href={details.url} key={page} sx={{ color: 'white', my: 2 }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TitleBar
