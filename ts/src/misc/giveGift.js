// function giveGift(players) {
//     const giftList = [];
//     const validReceivers = [...players];
//     players.forEach((player) => {
//         playerIdx = validReceivers.findIndex(player);
//         validReceivers.splice(playerIdx, 1);
//         const receiverIdx = Math.random() * (validReceivers.length - 1);
//         const receiver = validReceivers.splice(receiverIdx, 1);
//         giftList.push([player, receiver]);
//     })
//     return giftList;
// }

function giveGift(players) {
    const giftList = []
    const validReceivers = [...players];
    for (let giver of players) {
        let noMatch = true;
        while (noMatch) {
            const selectedIdx = Math.floor(Math.random() * validReceivers.length);
            if (validReceivers[selectedIdx] !== giver) {
                const receiver = validReceivers.splice(selectedIdx, 1);
                giftList.push({[giver]: receiver});
                noMatch = false;
            }
        }
    }
    return giftList;
}

const testData = ["Velma", "Daphne", "Fred", "Scooby", "Shaggy"];
const testResult = giveGift(testData);

console.log(testResult);