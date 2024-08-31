import React, { useState, useEffect } from 'react'
import { Container, Typography, Pagination } from '@mui/material'
import { SITE_URL } from '../Constants';

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
            {posts.map(post => (
                <div key={post.ID}>
                    <Typography variant="h4">{post.post_title}</Typography>
                    {/* <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.post_content }}></Typography> */}
                    {/* Add more post details */}
                </div>

            ))}
            <Pagination
                count={Math.ceil(posts.length / postsPerPage)}
                page={currentPage}
                onChange={handleChangePage}
            />
        </Container>
    )
}
