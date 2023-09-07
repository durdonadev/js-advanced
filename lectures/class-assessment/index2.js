const { readFile } = require("fs");

class Data {
    read(fileUrl, cb) {
        readFile(fileUrl, "utf8", (err, data) => {
            if (err) {
                throw Error("Some Error");
            }

            cb(data);
        });
    }

    static parse(content) {
        return content.split("\r\n");
    }

    static parseRow(row) {
        return row.split(",");
    }

    format(data) {
        const all = Data.parse(data);
        const header = Data.parseRow(all[0]);
        const rows = all.slice(1);

        const formattedData = rows.map((row) => {
            const personArr = Data.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }
            return personObj;
        });
        console.log(formattedData);
    }

    static countChars(data) {
        console.log(data.length);
    }

    formatData(fileUrl) {
        this.read(fileUrl, this.format);
    }

    countDataChars(fileUrl) {
        this.read(fileUrl, Data.countChars);
    }
}

const data = new Data();
console.log(data.countDataChars("data.csv"));
