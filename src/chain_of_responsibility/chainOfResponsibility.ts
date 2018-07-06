namespace ChainOfResponsibilityPattern {
    
    export interface RequestData {
        name: string,
        leaveDay: number,
      }
    
    /**
     * 抽象处理者
     */
    export abstract class Handler {
        protected next: Handler;
        setNext(next: Handler) {
          this.next = next;
        }
        abstract processRequest(request: RequestData): void;
      }
    
    export class IdValidator extends Handler {
        processRequest(request: RequestData) {
          if (request.name === 'my') {
            console.log(`${request.name} 是在职员工`);
            this.next.processRequest(request);
          } else {
            console.log('非在职员工');
          }
        }
      }
    
    export class Chief extends Handler {
        processRequest(request: RequestData) {
          if (request.leaveDay < 3) {
            console.log('小于3天，主管直接批准');
          } else {
            this.next.processRequest(request);
            console.log(`${request.name}的请假天数大于3天，需要老板审批`);
          }
        }
      }
    
    export class Boss extends Handler {
        processRequest(request: RequestData) {
          console.log('这是不想干了吗？');
        }
      }
    
    
    
}