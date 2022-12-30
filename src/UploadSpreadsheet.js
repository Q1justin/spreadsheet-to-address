
function App() {

    const readFile = (e) => {
        console.log(e.target.files[0])
    }

    return (
        <div className="UploadSpreadsheet">
            <input type="file" onChange={(e) => readFile(e)}></input>
        </div>
  );
}

export default App;
