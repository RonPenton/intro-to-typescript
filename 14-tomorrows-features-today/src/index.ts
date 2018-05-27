// Async/Await example

function wait(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
        if(ms > 5000) {
            reject("timeout too high!");
            return;     // REMEMBER THE RETURN AFTER A REJECT!
        }

        setTimeout(() => resolve(), ms);
    });
}



async function startWaiting() {
    console.log("Waiting 1s...");
    await wait(1000);

    console.log("Waiting 2s...");
    await wait(2000);

    console.log("Waiting 5s...");
    await wait(5000);

    try {
        console.log("Waiting 10s, not sure if this is allowed...");
        await wait(10000);
    }
    catch(e) {
        console.log(`Wait rejected: ${e}`);
    }

    console.log("Done!");
}

startWaiting();



