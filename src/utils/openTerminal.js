const { exec } = window.require("child_process");
export const openTerminal = (command, target) => {
  console.log("Opening terminal...", target);

  const terminal = exec(
    "start cmd /k " + command,
    {
      detached: true,
      cwd: target,
    },
    (err) => {
      console.log("Errrorrrr:", err);
    }
  );

  console.log("Terminal: ", terminal);

  terminal.stdout.on("data", (data) => {
    console.log("Stdout data:", data);
  });

  terminal.on("error", (err) => {
    console.error("Failed to start terminal:", err);
  });

  terminal.on("close", () => {
    console.log("Terminal closed.");
  });
};
