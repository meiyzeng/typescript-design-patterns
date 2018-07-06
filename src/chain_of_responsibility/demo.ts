/// <reference path="chainOfResponsibility.ts" />
namespace ChainOfResponsibilityPattern {
	export namespace Demo {

		export function show() : void {
			const idValidator = new IdValidator();
    		const chief = new Chief();
    		const boss = new Boss();
			// 构建职责链
			idValidator.setNext(chief);
			chief.setNext(boss);

			const request: RequestData = {
			  name: 'my',
			  leaveDay: 5,
			};
			idValidator.processRequest(request);
		}
	}
}