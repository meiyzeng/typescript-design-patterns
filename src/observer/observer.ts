namespace ObserverPattern {
  export class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer): void {
      console.log(observer, "is pushed!");
      this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
      var n: number = this.observers.indexOf(observer);
      console.log(observer, "is removed");
      this.observers.splice(n, 1);
    }

    public notify(): void {
      console.log("notify all the observers", this.observers);
      this.observers.forEach(observer => observer.notify());
    }
  }

  export class Observer {
    constructor(private name: string) {}

    notify() {
      console.log(`${this.name} has been notified.`);
    }
  }
}
