//startovací brána: startovací odpočet ( 3, 2, 1 + zvuk)
                  //zaznamenat po odpočtu Start
//  cílová brána : zaznamenat doběh do cíle + informace (čas)
//startovací + cílová :zobrazit výsledky na vyžádání

//startovací: možnost opětovaného spuštění + resert cílové brány

//radio.band každá dvojice jiný + group

RunComp.OnLightDrop(function() {
    
})

/*basic.forever(function() {
    console.logValue("light level" , input.lightLevel())
    console.log("\n\r")
    basic.pause(20)
})*/

//radio.setFrequencyBand(15)



radio.setGroup(3)
let odpocetNum = 3;

input.onButtonPressed(Button.A, function () {
    RunComp.SetLightLevel() 

        // while (odpocetNum > 0) {
        //     basic.showNumber(odpocetNum);
        //     music.playTone(500, 100)
        //     basic.clearScreen();
        //     odpocetNum--;
        // }

        //basic.pause(500);
        //music.playTone(1000, 300);


    RunComp.OnLightDrop(function () {
        
        console.log("Zapnistopky")
        radio.sendValue("Zpn", 1)
    })
    
})

radio.onReceivedValue(function (name: string, value: number) {
    whaleysans.showNumber(value);
})

input.onButtonPressed(Button.B, function () {
    control.reset()
})





