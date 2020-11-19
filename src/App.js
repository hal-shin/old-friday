import "./App.css";
import { Box, Button, Heading, Text } from "@chakra-ui/core";
const electron = window.require("electron");
const { exec } = window.require("child_process");

function App() {
  console.log("Electron:", electron);

  return (
    <div>
      <Box>
        <Heading>Friday</Heading>
        <Text>Welcome, Hal! How can I help?</Text>
        <Button
          variantColor="green"
          onClick={
            () =>
              exec("jupyter notebook", () => {
                console.log("Done");
              })
            // electron.shell.openPath(
            //   "C:\\Users\\haeum\\Desktop\\Work\\ERBP-Frontend"
            // )
          }
        >
          Click me
        </Button>
      </Box>
    </div>
  );
}

export default App;
