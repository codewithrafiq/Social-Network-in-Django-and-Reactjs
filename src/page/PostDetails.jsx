import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { domain, header } from '../env';
import SinglePost from '../components/common/SinglePost'

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const getpost = () => {
            Axios({
                url: `${domain}/api/posts/${id}/`,
                headers: header,
                method: 'GET',
            }).then(response => {
                setPost(response.data[0])
            }).catch(error => {
                console.log(error);
            })
        }
        getpost()
    }, [])
    return (
        <Container style={{ marginTop: "60px" }}>
            {
                post !== null && <SinglePost post={post} details={true} />
            }
        </Container>
    )
}

export default PostDetails
