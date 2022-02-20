import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const CharacterDetails = (props) => {
  const { character } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        objectFit: "contain",
        maxWidth: 1000,
        margin: "auto",
        backgroundImage: `url(${character.image?.path}.${character.image?.extension})`,
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Box
            styles={{ padding: "0 2rem" }}
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              style={{ color: "black" }}
              gutterBottom
            >
              {character.name}
            </Typography>
            <Typography variant="h5" style={{ color: "black" }} paragraph>
              {character.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharacterDetails;
