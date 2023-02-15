//startovací brána: startovací odpočet ( 3, 2, 1 + zvuk)
                  //zaznamenat po odpočtu Start
//  cílová brána : zaznamenat doběh do cíle + informace (čas)
//startovací + cílová :zobrazit výsledky na vyžádání

//startovací: možnost opětovaného spuštění + resert cílové brány

//radio.band každá dvojice jiný + group



/*jak to máme my
           p.m:počáteční microbit; c.m:cílový microbit
p.m: odpočet + proběhnutí určitého počátečního bodu (světelná konfigurace)
p.m: pošle signál cílovémeu microbitu, že proběhl start
c.m:zaznamená start u prvního microbitu a začne počítat čas v sekundách
c.m:až proběhne do cíle(jiná světelná konfigurace), pošle signál startovnímu microbitu
c.m:zaznamená cíl prvního microbitu a ukáže daný čas, za který jsme to uběhli
+ musí se to resetovat na nějaké tlačítko u obou microbitů
*/

radio.setGroup(3);
radio.setFrequencyBand(15);

let odpocetNum = 3;

input.onButtonPressed(Button.A, function () {
    while (odpocetNum > 0) {
        basic.showNumber(odpocetNum);
        music.playTone(500, 100)
        basic.clearScreen();
        odpocetNum--;
    }

    basic.pause(500);
    music.playTone(1000, 300);
    
   while (input.lightLevel() > 100) {}
    radio.sendValue("Zapnistopky", 1)

})

radio.onReceivedValue(function (name: string, value: number){
    whaleysans.showNumber(value);
})

input.onButtonPressed(Button.B, function () {
    control.reset()
})






 

  