const   {  findBySerialNumber  } = require('usb')  

(async () => {
    // Uses a blocking call, so is async
    const device = await findBySerialNumber('TEST_DEVICE');

    if (device) {
        console.log(device); // Legacy device
    }
})();