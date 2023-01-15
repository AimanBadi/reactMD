import { Box } from "@mui/system";
import NotesFeed from "./components/NotesFeed";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        paddingTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "980px",
        }}
      >
        <NotesFeed />
      </Box>
    </Box>
  );
}

export default App;
