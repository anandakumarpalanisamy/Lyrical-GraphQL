import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_SONGS = gql`
    query {
        songs {
            title
        }
    }
`;

const SongList = () => {
    const { loading, error, data } = useQuery(GET_ALL_SONGS);
    console.log(data);

    return (
        <div>
            SongList
        </div>
    );
}

export default SongList;
