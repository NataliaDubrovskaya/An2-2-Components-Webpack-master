export class Task {
	constructor(
		public action: string,
		public priority: number,
		public estHours: number,
		public actHours?: number,
		public done?: boolean
	){
		this.actHours = 0;
		this.done = false;
	}
}
