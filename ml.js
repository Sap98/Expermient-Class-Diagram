async function execute() {
  output.value="";
  const pythonCode = document.getElementById("input_code").value;
  var codeoutput = document.getElementById('output')
  let pyodide = await loadPyodide({stdout: (text) => {codeoutput.value += text;}});
  try {
    const output = await pyodide.runPythonAsync(pythonCode);
    const outputString = String(output);
    document.getElementById("output").textContent = outputString;
  } catch (error) {
    console.error('Error executing Python code:', error);
  }
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  
  await pyodide.loadPackage("pandas");
  
  console.log(pyodide.runPython(`
   
  import pandas  as pd
  `))
}

var divs=["Page_1.0","Page_1.1","Page_2.0_navbar","about","editor","run","output","Page_2.1"]
function open_getstarted()
{
  for(var i = 0; i < divs.length; i++)
  {
    if(divs[i] === "Page_2.0_navbar" || divs[i] === "Page_2.1")
    {
      document.getElementById(divs[i]).style.display = "block";
    }
    else{
      document.getElementById(divs[i]).style.display = "none";
    }
  }


}
function open_Page_1()
{
  for(var i = 0; i < divs.length; i++)
  {
    if(divs[i] === "Page_1.0" || divs[i] === "Page_1.1")
    {
      document.getElementById(divs[i]).style.display = "block";
    }
    else{
      document.getElementById(divs[i]).style.display = "none";
    }
  }


}
function open_about()
{
  for(var i = 0; i < divs.length; i++)
  {
    if(divs[i] === "about" || divs[i] === "Page_2.0_navbar")
    {
      document.getElementById(divs[i]).style.display = "block";
    }
    else{
      document.getElementById(divs[i]).style.display = "none";
    }
  }
  
}
function open_editor()
{
  for(var i = 0; i < divs.length; i++)
  {
    if(divs[i] === "editor" || divs[i] === "Page_2.0_navbar" || divs[i] === "run" || divs[i] === "output")
    {
      document.getElementById(divs[i]).style.display = "block";
    }
    else{
      document.getElementById(divs[i]).style.display = "none";
    }
  }
}