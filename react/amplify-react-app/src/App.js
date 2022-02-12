// works for ui-react 2.0.0
// check https://ui.docs.amplify.aws/


import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React, { useState, useEffect } from 'react';
import { listSongs } from './graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
Amplify.configure(awsExports);

export default function App() {
	const [songs, setSongs] = useState([]);

const fetchSongs = async () => {
    try {
        const songData = await API.graphql(graphqlOperation(listSongs));
				console.log('song Data', songData);
        // const songList = songData.data.listSongs.items;
        // console.log('song list', songList);
        // setSongs(songList);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
};

useEffect(() => {
	fetchSongs();
}, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}