export const getVercelLogsFormatted = (logs: string) => {
  const logsSplit: string[] = logs.split("\n");
  const listItems = logsSplit.map((log) => `<li style="color: red;">${log}</li>`).join("");
  return `<ul>${listItems}</ul>`;
};
