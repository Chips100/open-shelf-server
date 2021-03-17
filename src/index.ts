import express = require('express');
import { Configuration } from './configuration';
import { FirstLaunchService } from "./first-launch-setup/first-launch-service";

setup().catch(err => console.error(err));


async function setup(): Promise<void> {
  // Server configuration.
  const configuration = await Configuration.read('./config.json');  
  const port = process.env.PORT || configuration.port || 61017;

  // Services.
  const firstLaunchService = new FirstLaunchService();

  // Configure Express server.
  const app = express();
  const router = express.Router();

  // Example route for now.
  router.get('/info', async (req, res) => {
    res.json({
      firstLaunchCompleted: firstLaunchService.firstLaunchCompleted()
    });
  });

  // Host routes under "open-shelf/api" prefix.
  app.use('/open-shelf/api', router).listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
}
