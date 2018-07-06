/// <reference path="singleton/demo.ts" />
/// <reference path="factory-method/demo.ts" />
/// <reference path="builder/demo.ts" />
/// <reference path="adapter/demo.ts" />
/// <reference path="flyweight/demo.ts" />
/// <reference path="iterator/demo.ts" />
/// <reference path="observer/demo.ts" />
/// <reference path="strategy/demo.ts" />
/// <reference path="template-method/demo.ts" />
/// <reference path="prototype/demo.ts" />
/// <reference path="proxy/demo.ts" />
/// <reference path="chain_of_responsibility/demo.ts" />
const readline = require("readline");

namespace Patterns {
  function printMenu(): void {
    const menu =
      "= Creational Patterns == \n" +
      "  1: Singleton \n" +
      "  2: Abstract factory \n" +
      "  3: Factory method \n" +
      "  4: Builder \n" +
      "  5: Prototype \n\n" +
      "= Structural Patterns == \n" +
      "  6: Adapter \n" +
      "  7: Bridge \n" +
      "  8: Composite \n" +
      "  9: Decorator \n" +
      " 10: Facade \n" +
      " 11: Flyweight \n" +
      " 12: Proxy \n\n" +
      "= Behavioral Patterns == \n" +
      " 13: Chain of responsibility \n" +
      " 14: Command \n" +
      " 15: Interpreter \n" +
      " 16: Iterator \n" +
      " 17: Mediator \n" +
      " 18: Memento \n" +
      " 19: Observer \n" +
      " 20: State \n" +
      " 21: Strategy \n" +
      " 22: Template method \n" +
      " 23: Visitor \n";

    console.log("\n\n");
    console.log("==== Choose one pattern to demonstrate ====");
    console.log("\n");
    console.log(menu);
  }

  export function menu(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    printMenu();
    rl.question("Which pattern would you like to check?   ", function(answer) {
      switch (+answer) {
        case 1:
          show(SingletonPattern);
          break;
        case 3:
          show(FactoryMethodPattern);
          break;
        case 4:
          show(BuilderPattern);
          break;
		case 5:
          show(PrototypePattern);
          break;
        case 6:
          show(AdapterPattern);
          break;
        case 11:
          show(FlyweightPattern);
          break;
		case 12:
          show(ProxyPattern);
        case 13:
          show(ChainOfResponsibilityPattern);
          break;
        case 16:
          show(IteratorPattern);
          break;
        case 19:
          show(ObserverPattern);
          break;
        case 21:
          show(StrategyPattern);
          break;
        case 22:
          show(TemplateMethodPattern);
          break;
        default:
          break;
      }
      rl.close();
    });
  }

  function show(Pattern: any): void {
    Pattern.Demo.show();
  }
}

Patterns.menu();
