getText("fetch_info.txt");
async function getText(file) {

    let x = await fetch(file)
    let y = await x.text()

    console.log(y)
};