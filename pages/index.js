import Head from 'next/head'
import axios from 'axios';
import crypto from 'crypto';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Layout from '../components/layout';
import Grid from '@mui/material/Grid';

function transformCharacterData(characters) {
  const transformedCharacters = characters.map(character => ({
    id: character.id,
    name: character.name,
    description: character.description,
    profile: character.thumbnail
  }));

  return transformedCharacters
}

export default function HomePage(props) {
  const { characters } = props;
  return (
    <>
      <Head>
        <title>Marvel Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={4} style={{ padding: '2rem' }}>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Grid>
      </Layout>

    </>
  )
}

export async function getStaticProps(context) {
  const timespan = new Date().toString();

  const privateKey = process.env.marvelAPI.privateKey;
  const publicKey = process.env.marvelAPI.publicKey;
  const hash = crypto.createHash('md5').update(timespan + privateKey + publicKey).digest('hex');

  const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
    params: {
      hash,
      ts: timespan,
      apikey: publicKey,
    }
  });

  const charactersData = response.data.data.results;
  const convertedCharacters = transformCharacterData(charactersData);

  return {
    props: {
      characters: convertedCharacters
    }
  }
}
