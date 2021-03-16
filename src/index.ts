import { FirstLaunchService } from "./first-launch-setup/first-launch-service";

const service = new FirstLaunchService();
console.log(`2+2=${service.add(2,2)}`);