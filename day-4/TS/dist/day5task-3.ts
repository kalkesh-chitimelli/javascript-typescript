class Workout{
    muscleName: string;
    constructor( muscleName:string){
        this.muscleName=muscleName;
    }
}
class Day extends Workout{
    numberOfExercise:number;
    constructor(muscleName:string,numberOfExercise:number){
        super(muscleName)
        this.numberOfExercise=numberOfExercise;
    }
    display=()=>{
       return `Today's Muscle is ${this.muscleName} and Number of Exercise ${this.numberOfExercise}`;
    }
}
const Workout1=new Day("Chest",8);
console.log(Workout1.display());