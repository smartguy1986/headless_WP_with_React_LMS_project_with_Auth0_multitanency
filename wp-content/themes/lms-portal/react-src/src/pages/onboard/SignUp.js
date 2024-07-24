import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated for react-router-dom v6
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { SITE_URL } from '../../Constants';
import createUser from '../../commonfunctions/CreateUser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Define the Copyright component
const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://yourwebsite.com/">
                Moucasa LMS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const SignUp = () => {
    const defaultTheme = createTheme();
    const [logoURL, setLogoURL] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        fetchSiteLogo();
    }, []);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin'); // Updated to use navigate
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);
        // const formDataObject = Object.fromEntries(formData.entries());
        const formData = {
            firstName: event.currentTarget.firstName.value,
            lastName: event.currentTarget.lastName.value,
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        };

        try {
            const response = await createUser(formData);
            console.log('User creation response:', response);
            if (response.message) {
                setSnackbarMessage('You have registered successfully! Please sign in.');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setTimeout(() => navigate('/signin'), 3000); // Redirect after 3 seconds
            }
        } catch (error) {
            setSnackbarMessage('Error creating user.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            console.error('Error creating user:', error);
        }
    };

    const fetchSiteLogo = () => {
        fetch(`${SITE_URL}/wp-json/an/images/sitelogo`)
            .then(response => response.json())
            .then(resdata => {
                setLogoURL(resdata.data);
            })
            .catch(error => {
                console.error('Error fetching sitelogo:', error);
            });
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'rgba(0, 0, 0, 0)' }}>
                        <img
                            src={logoURL}
                            alt="Logo"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Register your Company
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={handleSignInClick}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;