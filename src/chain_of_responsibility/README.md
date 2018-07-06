## Typescript 设计模式之职责链模式

### 一、简介
顾名思义，责任链模式为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦,
使多个对象都有机会处理请求,将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理他为止。

原理图:

![原理图](./chain.jpg)

### 二、优缺点

#### 优点

- 降低耦合度。链中的对象不需知道链的结构;

- 增强了职责链组织的灵活性。可以在运行时动态改变职责链;

#### 缺点

- 不能保证请求一定被接收，请求可能得不到处理的情况;
- 如果建链不当，可能会造成循环调用，将导致系统陷入死循环;

### 三、应用场景

- 有多个对象可以处理一个请求，哪个对象处理该请求运行时自动确定，客户端只需要把请求提交到链上即可；
- 想在不明确指定接收者的情况下，向多个对象中的一个提交一个请求；
- 可处理一个请求的对象集合应被动态指定；

### 四、实战

#### 具体实现


```typescript
interface RequestData {
    name: string,
    leaveDay: number,
}
```

抽象处理者

```typescript
abstract class Handler {
    private next: Handler;
    setNext(next: Handler) {
      this.next = next;
    }
    abstract processRequest(request: RequestData): void;
  }
```

具体

```typescript
class IdValidator extends Handler {
    processRequest(request: RequestData) {
      if ("条件") {
        console.log('不是本公司员工');
      } else {
        this.next.processRequest(request);
      }
    }
  }
```

#### 使用示例

```typescript
  export function show() : void {
    const idValidator = new IdValidator();
    const chief = new Chief();
    const boss = new Boss();
    // 构建职责链
    idValidator.setNext(chief);
    chief.setNext(boss);

    const request: RequestData = {
      name: 'zmy',
      leaveDay: 5,
    };
    idValidator.processRequest(request);
  }
```

关键代码：Handler 里面聚合它自己，在 HanleRequest 里判断是否合适，如果没达到条件则向下传递，向谁传递之前 set 进去。

应用实例： JS 中的事件冒泡
