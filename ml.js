const output = document.getElementById("output");
const code = document.getElementById("code");

function addToOutput(s) {
  output.value += ">>>" + code.value + "\n" + s + "\n";
}

output.value = "Initializing...\n";
// init Pyodide
async function main() {
  let pyodide = await loadPyodide();
  output.value += "Ready!\n";
  return pyodide;
}
let pyodideReadyPromise = main();

async function evaluatePython() {
  let pyodide = await pyodideReadyPromise;
  try {
    let output = await pyodide.runPythonAsync(code.value); // Use runPythonAsync instead of runPython
    addToOutput(output);
  } catch (err) {
    addToOutput(err);
  }
}

document.getElementById("run-button").addEventListener("click",evaluatePython);






