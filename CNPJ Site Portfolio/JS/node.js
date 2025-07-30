const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("./CNPJ Site Portfolio/tabelaprovisional/tabelaprovisional.csv")
    .pipe(parse({ delimiter: ",", from_line: 2}))
    .on("data", function (row) {
        console.log(row)
    })
    .on("end", function () {
    console.log("finished");
    })
    .on("error", function (error) {
        console.log(error.message);
    });

    https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv