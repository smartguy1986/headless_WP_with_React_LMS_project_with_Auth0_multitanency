import React, { useState, useEffect } from 'react'
import { Container, Pagination, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material'
import { SITE_URL } from '../Constants';
import moment from 'moment';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // Adjust as needed

    useEffect(() => {
        fetch(`${SITE_URL}/wp-json/an/posts/all/courses?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data.data);
                console.log(data)
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, [currentPage]);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        console.log(posts); // Log posts whenever it changes
    }, [posts]);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                All Posts
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {posts.map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.ID}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {course.post_title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    Published on: {moment(course.post_date).format('MMMM Do, YYYY')}
                                </Typography>
                                <Typography variant="body1" component="p" gutterBottom>
                                    {course.post_excerpt || 'No excerpt available.'}
                                </Typography>
                                <Box mt={2}>
                                    <Button variant="contained" color="primary" href={course.guid}>
                                        See More
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
