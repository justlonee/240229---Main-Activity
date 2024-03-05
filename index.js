console.log("Hello World");

let trainer = {
    name: 'Fred',
    age: 19,
    region: 'Paldea',
    speak: function(target){
        console.log(`I'm ${this.name} and I challenge you ${target.name}`)
    },
    pick: function(){
        console.log(`${this.name}: I choose ${Wooper.name}`)
    }
}

let trainer2 = {
    name: 'Vayne',
    age: 32,
    region: 'Kanto',
    speak: function(target){
        console.log(`I accept your challenge ${target.name}`)
    },
    pick: function(){
        console.log(`${this.name}: I choose ${Mudkip.name}`)
    }
}

function myPokemon(name, health, attack, level, exp){
    this.name = name;
    this.health = 2 * health;
    this.attack = attack;
    this.level = level;
    this.exp = exp;
    this.isFaint = false;

    //attack
    this.tackle = function(target){
        if(!this.isFaint){
            console.log(`${this.name} used tackle`);
            target.health -= this.attack;
            if(target.health<=0){
                target.health = 0;
            }
            console.log(`${target.name}'s health is reduced to ${target.health}`);
            
            if(target.health<=0){
                console.log(`${target.name} had fainted`);
                target.isFaint = true;
                console.log(`${trainer.name} has defeated ${trainer2.name}`)
                this.level++;
                console.log(`${this.name} leveled up to ${this.level}!`);
            }
        }
        if(this.level==16){
            let initialName = this.name;
            this.name = 'Marshtomp';
            console.log(`${initialName} has evolved to ${this.name}`);
        }
    }
}

//Pokemon Informations
const Wooper = new myPokemon('Wooper', 60, 45, 10, 0);
const Mudkip = new myPokemon('Mudkip', 50, 55, 15, 0);

//dialogue
trainer.speak(trainer2);
trainer2.speak(trainer);
trainer.pick();
trainer2.pick();

//battle
while(!Wooper.isFaint && !Mudkip.isFaint){
    Mudkip.tackle(Wooper);
        if(!Wooper.isFaint){
            Wooper.tackle(Mudkip);
        }
}