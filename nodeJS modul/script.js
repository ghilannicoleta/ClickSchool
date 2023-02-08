import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

// 2
console.log(
  dayjs("2023-08-16").hour(20).minute(2).format("MMMM D, YYYY h:mm A")
);

console.log(dayjs("2023-02-06").format("YYYY-MM-DD"));

console.log(dayjs("8-02").hour(20).minute(2).format("h:mm A"));

console.log(dayjs().subtract(3, "d").fromNow());

// 3. Adaugați o zi la data de 2023-02-06 si afisați data opținuta in formatul: August 16, 2023 8:02 PM
console.log(
  dayjs("2023-02-06")
    .add(1, "day")
    .hour(20)
    .minute(2)
    .format("MMMM D, YYYY h:mm A")
);

// 4. Scoateți 30 minute de la data curenta si afi ați timpul in format: 15:40
console.log(dayjs().subtract(30, "m").format("hh:mm"));
