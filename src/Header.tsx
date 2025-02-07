import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import {
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item lg={6} md={6} xs={6} sm={6} sx={{ marginLeft: 8 }}>
              <Link href="/" underline="none" color="inherit">
                <img
                  src="/logo.png"
                  alt="Career Campus Logo"
                  width={120}
                  height={60}
                />
              </Link>
            </Grid>
            <Grid item lg={6} md={6} xs={6} sm={6} sx={{ marginRight: 8 }}>
              <SignedIn>
                <Link href={"/dashboard"}>
                  <Button variant="contained">Industry Insights</Button>
                </Link>

              <FormControl sx={{ marginLeft: 2, width: 200 }} size="small">
                <InputLabel id="growth-tools-select-label">
                  Growth Tools
                </InputLabel>
                <Select
                  labelId="growth-tools-select-label"
                  id="growth-tools-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>
                    <Link href={"/resume"} underline="none" color="inherit">
                      Build Resume
                    </Link>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Link
                      href={"/ai-cover-letter"}
                      underline="none"
                      color="inherit"
                    >
                      Cover Letter
                    </Link>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Link href={"/interview"} underline="none" color="inherit">
                      Interview Prep
                    </Link>
                  </MenuItem>
                </Select>
              </FormControl>

              <UserButton appearance={{
                elements:  {
                    avatarBox: 'w-10 h-10',
                    userButtonPopoverCard: 'shadow-xl',
                    userPreviewMainIdentifier: 'font-semibold',
                }
              }} />
              </SignedIn>

              <SignedOut>
                <SignInButton>
                    <Button sx={{ margin: 2 }}>
                        Sign In
                    </Button>
                </SignInButton>
              </SignedOut>
            </Grid>
          </Grid>
        </nav>
      </header>
    </div>
  );
};

export default Header;
