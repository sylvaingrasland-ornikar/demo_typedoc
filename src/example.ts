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

    /**
     * Test protected
     * @param info info
     * @returns the info
     */
    protected testProtected(info: string) {
      return info;
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

/**
 * Compute the sum of 2 args
 * ```ts
 * // Example of use
 * const a = 3;
 * const b = 4;
 * const c = demoSumWithMarkdown(a, b); 
 * ```
 * | Column1 | Column2 |
 * | ------- | ------- |
 * | Value1.2 | Value1.2 |
 * | Value 2.1 | Value2.2 |
 * [link to NestJS documentation](https://docs.nestjs.com/)
 * @param a First arg
 * @param b Second arg
 * @returns Sum of 2 args
 */
export function demoSumWithMarkdown(a: number, b: number) {
  return a+b
}

/**
 * @deprecated
 * @param input input string
 * @returns concatenation of input string and NOPE
 */
export function demoDeprecated(input: string) {
  return input + ' NOPE';
}