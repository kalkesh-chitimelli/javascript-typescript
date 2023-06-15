"use strict";
class Workout {
    constructor(muscleName) {
        this.muscleName = muscleName;
    }
}
class Day extends Workout {
    constructor(muscleName, numberOfExercise) {
        super(muscleName);
        this.display = () => {
            return `Today's Muscle is ${this.muscleName} and Number of Exercise ${this.numberOfExercise}`;
        };
        this.numberOfExercise = numberOfExercise;
    }
}
const Workout1 = new Day("Chest", 8);
console.log(Workout1.display());
//# sourceMappingURL=day5task-3.js.map