/**
 * Messager demo class
 */
 export class Messager {}

/**
 * Demo class
 */
export class Greeter extends Messager {
    /**
     * demo member
     */
    greeting: string;
   
    /**
     * This is the demo constructor
     * @param message a greeting message
     */
    constructor(message: string) {
      super();
      this.greeting = message;
    }
   
    /**
     * Function to greet someone
     * @param additionnalInfo an info to add to the greeting message
     * @returns the greeting message
     */
    greet(additionnalInfo: string) {
      return "Hello, " + this.greeting + " " + additionnalInfo;
    }
}

/**
 * Demo interface
 */
 export interface ExampleInterface {
    stringParam: string;
    numberParam: number;
}

/**
 * Demo enum
 */
export enum ExampleEnum {
    propA= 'valueA',
    propB = 'valueB'
}

/**
 * Demo type
 */
export type Person = {
    name: string;
    age: number;
}