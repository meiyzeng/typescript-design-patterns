/// <reference path="observer.ts" />
namespace ObserverPattern {
  export namespace Demo {
    export function show(): void {
      const subject: ObserverPattern.Subject = new ObserverPattern.Subject();

      subject.register(new ObserverPattern.Observer("semlinker"));
      subject.register(new ObserverPattern.Observer("lolo"));
      subject.notify();
    }
  }
}
