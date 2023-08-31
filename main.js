//alert('Ohayo Sekai, good morning world!');


formattingID = 0;
let formattingAbbretiations = ["", "K", "M", "B", "T", "Qd", "Qt", "Sx"];
increasingChance = 0.75;


powerLevel = Math.round(Math.random() * 10000);
increasedNumbers = 0;
increasePowerLevel();

function increasePowerLevel(){
    increasedNumbers +=1;
    if (Math.random() < increasingChance){
        powerLevel *= 1000;
        increasePowerLevel();
    }
}

formatNumber(powerLevel)
alert('Seu nível de poder é de ' + powerLevel + "!");

function formatNumber(){
    calculatingPowerLevel = powerLevel;
    while (calculatingPowerLevel >= 1000){
        calculatingPowerLevel /= 1000;
        formattingID += 1;
        if (formattingID > formattingAbbretiations - 1){
            formattingID = formattingAbbreviations - 1;
        }
    }
    powerLevel = Math.round(calculatingPowerLevel * 10) / 10;
    powerLevel += formattingAbbretiations[formattingID];
}