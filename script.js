const data = document.getElementById('fileInput')

data.addEventListener('change', (event) =>{
    console.log("File selected: ", event.target.files[0])
    const file = event.target.files[0];
    readXlsxFile(file).then((row)=>{
        console.log("rows: ", row)
    })
})
