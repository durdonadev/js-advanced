const fs = require("fs");

// const content = fs.readFileSync("data.csv", "utf-8");
// console.log(content);

class Data {
    read(fileUrl) {
        return fs.readFileSync("data.csv", "utf-8");
    }

    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(fileUrl) {
        const content = this.read(fileUrl);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);
        console.log(rows);

        const formattedDate = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }

            return personObj;
        });

        return formattedDate;
    }
}

const data = new Data();
console.log(data.format("data.csv"));
