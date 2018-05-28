interface MyRecord {
    property1: string;
    property2: boolean;
    property3: Date;
}

const r1: MyRecord = {
    property1: "Hello",
    property2: true,
    property3: new Date()
};

const r2: MyRecord = {
    property1: "This one's missing the date",
    property2: true,
};

const r3: MyRecord = {
    property1: "This one has an extra property.",
    property2: true,
    property3: new Date(),
    property4: 42
};

// Define a function that works on a record.
function processRecord(record: MyRecord) {
    record.property2 = false;
}

// process it
processRecord(r1);


// define a record that doesn't match the right "shape"
const r4 = {
    property1: "This one's missing the date",
    property2: true,
};

// cannot process, TypeScript protects us. 
processRecord(r4);


// You may also pass records that match the correct shape, but don't explicitly say so.
processRecord({
    property1: "Hello",
    property2: true,
    property3: new Date()
});

// However, passing in malformed records will be flagged as errors:
processRecord({
    property1: "Missing Date",
    property2: true
});
processRecord({
    property1: "Extra Property",
    property2: true,
    property3: new Date(),
    property4: 42
});


// You may extend interfaces to add new properties
interface ExtendedRecord extends MyRecord {
    property4: number;
}


// Let's define an extended record
const r5: ExtendedRecord = {
    property1: "Extended Record",
    property2: true,
    property3: new Date(),
    property4: 42
}

// This works because we've declared that ExtendedRecord extends Record
processRecord(r5);

// But wait! This doesn't work! With TypeScript, you need to be explicit about intention. 
// Adding an extra property here means nothing to TypeScript because we haven't declared
processRecord({
    property1: "Extended Record",
    property2: true,
    property3: new Date(),
    property4: 42
});






